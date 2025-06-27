import React, { useEffect, useState } from 'react'
import './movimentacao.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Movimentacao() {
    const navigate = useNavigate()
    const [movimentacao, setMovimentacao] = useState([])

    const fetchMovimento = async () => {
        try {
            const response = await axios.get('http://localhost:3000/movimentacao');
            setMovimentacao(response.data);
        } catch (error) {
            console.error('Erro ao buscar registro:', error);
        }
      };
    
    useEffect(() => {
        fetchMovimento();
    }, []);
    
    function naviInv(){
        navigate('/inventario')
    }
    
    function naviReg(){
        navigate('/registrar')
    }
    
    function logoff(){
        navigate('/')
    }
    
    function naviMov(){
        navigate('/movimento')
    }

  return (
    <div className='container-mov'>
        <div className='container-menu'>
            <div className='logo'>
                LOGO
            </div>
            <div className='container-btn'>
                <button onClick={naviInv}>Inventario</button>
                <button onClick={naviMov}>Movimentação</button>
                <button onClick={naviReg}>Registrar</button>
                <button>Meus Dados</button>
                <button onClick={logoff}>Sair</button>
            </div>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data</th>
                        <th>Tipo</th>
                        <th>Cliente</th>
                        <th>Item</th>
                        <th>Quantidade</th>
                        <th>Custo Total</th>
                    </tr>
                </thead>
                <tbody>
                    {movimentacao.map((item) => (
                        <tr>
                        <td>{item.id_movimentacao}</td>
                        <td>{item.data_movimento}</td>
                        <td>{item.tipo_movimento}</td>
                        <td>{item.nome_cliente}</td>
                        <td>{item.nome_item}</td>
                        <td>{item.quantidade}</td>
                        <td>{item.custo_total}</td>
                    </tr> 
                ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Movimentacao