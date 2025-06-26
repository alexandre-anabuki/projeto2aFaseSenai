const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();
// objeto para conectar e conversar com o banco
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',      // Altere para o nome do seu user no MySQL
    password: 'senai',    // Altere para a senha correta
    database: 'projeto',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


app.use(cors());
app.use(express.json());

app.get('/usuario', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM usuario');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
});

// localhost:3000/clientes/1
//TESTE THUNDER CLIENT OK
app.get('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM usuario WHERE id_usuario = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
});

//ROTA DE LOGIN
app.get('/usuario/login/:nome', async (req, res) => {
    const { nome } = req.params;
    // const nome  = req.query.nome;
    try {
        console.log(nome)
        const [rows] = await pool.query('SELECT * FROM usuario WHERE nome = ?', [nome]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
});


app.post('/usuario', async (req, res) => {
    const { nome, senha, cnpj } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO usuario (nome, senha, cnpj) VALUES (?, ?, ?)',
            [nome, senha, cnpj]
        );
        const [novoCliente] = await pool.query('SELECT * FROM usuario WHERE id_usuario = ?', [result.insertId]);
        res.status(201).json(novoCliente[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar usuário' });
    }
});


app.delete('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM usuario WHERE id_usuario = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});


app.put('/usuario/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, senha, cnpj } = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE usuario SET nome = ?, senha = ?, cnpj = ? WHERE id_usuario = ?',
            [nome, senha, cnpj, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        const [clienteAtualizado] = await pool.query('SELECT * FROM usuario WHERE id_usuario = ?', [id]);
        res.json(clienteAtualizado[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});





/*------------------------------------------------------------------------------------*/

app.get('/inventario', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM inventario');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar Item' });
    }
});

// localhost:3000/clientes/1
app.get('/inventario/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM inventario WHERE id_inventario = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Item não encontrado' });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar item' });
    }
});


app.post('/inventario', async (req, res) => {
    const { nome, estoque, patrimonio, preco_unitario, preco_total } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO inventario (nome, estoque, patrimonio, preco_unitario, preco_total) VALUES (?, ?, ?, ?, ?)',
            [nome, estoque, patrimonio, preco_unitario, preco_total]
        );
        const [novoItem] = await pool.query('SELECT * FROM inventario WHERE id_inventario = ?', [result.insertId]);
        res.status(201).json(novoItem[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar item' });
    }
});


app.delete('/inventario/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM inventario WHERE id_inventario = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Item não encontrado' });
        }
        res.json({ message: 'Item deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar item' });
    }
});


app.put('/inventario/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, estoque, patrimonio, preco_unitario, preco_total} = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE usuario SET nome = ?, estoque = ?, patrimonio = ?, preco_unitario = ?, preco_total = ? WHERE id_inventario = ?',
            [nome, estoque, patrimonio, preco_unitario, preco_total, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Item não encontrado' });
        }
        const [itemAtualizado] = await pool.query('SELECT * FROM inventario WHERE id_inventario = ?', [id]);
        res.json(itemAtualizado[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar item' });
    }
});





/*-----------------------------------------------------------------------------------------------------------------*/

app.get('/movimentacao', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM movimentacao');
        res.json(rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar registro' });
    }
});

// localhost:3000/clientes/1
app.get('/movimentacao/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await pool.query('SELECT * FROM movimentacao WHERE id_movimentacao = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Registro não encontrado' });
        }
        res.json(rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao buscar registro' });
    }
});


app.post('/movimentacao', async (req, res) => {
    const { data_movimento, tipo_movimento, nome_cliente, nome_item, quantidade, custo_total, usuario_id, inventario_id } = req.body;
    try {
        const [result] = await pool.query(
            'INSERT INTO movimentacao (data_movimento, tipo_movimento, nome_cliente, nome_item, quantidade, custo_total, usuario_id, inventario_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [nome, data_movimento, tipo_movimento, nome_cliente, nome_item, quantidade, custo_total, usuario_id, inventario_id]
        );
        const [novoRegistro] = await pool.query('SELECT * FROM movimentacao WHERE id_movimentacao = ?', [result.insertId]);
        res.status(201).json(novoRegistro[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao adicionar registro' });
    }
});


app.delete('/movimentacao/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await pool.query('DELETE FROM movimentacao WHERE id_movimentacao = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao deletar usuário' });
    }
});


app.put('/movimentacao/:id', async (req, res) => {
    const { id } = req.params;
    const { nome, data_movimento, tipo_movimento, nome_cliente, nome_item, quantidade, custo_total, usuario_id, inventario_id } = req.body;

    try {
        const [result] = await pool.query(
            'UPDATE movimentacao SET nome = ?, data_movimento = ?, tipo_movimento = ?, nome_cliente = ?, nome_item = ?, quantidade = ?, custo_total = ?, usuario_id = ?, inventario_id = ? WHERE id = ?',
            [nome, data_movimento, tipo_movimento, nome_cliente, nome_item, quantidade, custo_total, usuario_id, inventario_id, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }
        const [registroAtualizado] = await pool.query('SELECT * FROM movimentacao WHERE id_movimentacao = ?', [id]);
        res.json(registroAtualizado[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Erro ao atualizar usuário' });
    }
});


app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});