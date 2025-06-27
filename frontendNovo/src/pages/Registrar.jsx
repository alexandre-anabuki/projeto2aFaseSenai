import React, { useState } from 'react'
import './Registrar.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Registrar() {
  // const [tipoSelecionado, setTipoSelecinado] = useState('')

  const [inputItem, setInputItem] = useState('')
  const [inputEstoque, setInputEstoque] = useState('')
  const [inputPatri, setInputPatri] = useState('')
  const [inputPrecoU, setInputPrecoU] = useState('')
  const [inputPrecoT, setInputPrecoT] = useState('')

  const [inputData, setInputData] = useState('')
  const [inputTipo, setInputTipo] = useState('')
  const [inputCliente, setInputCliente] = useState('')
  const [inputProduto, setInputProduto] = useState('')
  const [inputQuantidade, setInputQuantidade] = useState('')
  const [inputCusto, setInputCusto] = useState('')


  // function selecionarTipo(event){
  //   setInputTipo(event.target.value)
  // }

  const regInv = async () => {
    try {
        const item = {
            nome: inputItem,
            estoque: inputEstoque,
            patrimonio: inputPatri,
            preco_unitario: inputPrecoU,
            preco_total: inputPrecoT
        };
        const response = await axios.post('http://localhost:3000/inventario', item);
        if (response.status === 201) {
            // fetchClientes();
            // limparForm();
        }
    } catch (error) {
        console.error('Erro ao adicionar item:', error);
    }
  };

  const regMov = async () => {
    try {
        const item = {
            data_movimento: inputData,
            tipo_movimento: inputTipo,
            nome_cliente: inputCliente,
            nome_item: inputProduto,
            quantidade: inputQuantidade,
            custo_total: inputCusto
        };
        const response = await axios.post('http://localhost:3000/movimentacao', item);
        if (response.status === 201) {
            // fetchClientes();
            // limparForm();
        }
    } catch (error) {
        console.error('Erro ao adicionar registro:', error);
    }
};

  const navigate = useNavigate()

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
    <div className='container-reg'>
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

      <div className='container-geral'>

        <div className='container-reg-inv'>

          <div className='coluna-inv1'>
            <label htmlFor="">Nome do Item</label>
            <input className='input-reg-inv' type="text" value={inputItem} onChange={(event) => setInputItem(event.target.value)}/>

            <label htmlFor="">Quantidade</label>
            <input className='input-reg-inv' type="text" value={inputEstoque} onChange={(event) => setInputEstoque(event.target.value)}/>

            <label htmlFor="">Patrimônio</label>
            <input className='input-reg-inv' type="text" value={inputPatri} onChange={(event) => setInputPatri(event.target.value)}/>
          </div>

          <div className='coluna-inv2'>
            <label htmlFor="">Preço Unitário</label>
            <input className='input-reg-inv' type="text" value={inputPrecoU} onChange={(event) => setInputPrecoU(event.target.value)}/>

            <label htmlFor="">Preço Total</label>
            <input className='input-reg-inv' type="text" value={inputPrecoT} onChange={(event) => setInputPrecoT(event.target.value)}/>
          </div>


          <button className='btn-confirma-inv' onClick={regInv}>Registrar Inventário</button>
        </div>

        <div>Barra divisória</div>

        <div className='container-reg-mov'>

          <div className='coluna-mov1'>
            <label htmlFor="">Data</label>
            <input className='input-reg-mov' type="date" value={inputData} onChange={(event) => setInputData(event.target.value)}/>

            <label htmlFor="">Tipo da movimentção</label>
            {/* <select value={tipoSelecionado} onChange={selecionarTipo}> */}
            <select value={inputTipo} onChange={(event) => setInputTipo(event.target.value)}>
              <option value="">Selecione</option>
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>

            <label htmlFor="">Nome do cliente</label>
            <input className='input-reg-mov' type="text" value={inputCliente} onChange={(event) => setInputCliente(event.target.value)}/>
          </div>
          
          <div className='coluna-mov2'>
            <label htmlFor="">Nome do item</label>
            <input className='input-reg-mov' type="text" value={inputProduto} onChange={(event) => setInputProduto(event.target.value)}/>

            <label htmlFor="">Quantidade</label>
            <input className='input-reg-mov' type="text" value={inputQuantidade} onChange={(event) => setInputQuantidade(event.target.value)}/>

            <label htmlFor="">Custo Total</label>
            <input className='input-reg-mov' type="text" value={inputCusto} onChange={(event) => setInputCusto(event.target.value)}/>

          </div>


          <button className='btn-confirma-mov' onClick={regMov}>Registrar Movimentação</button>
        </div>
      </div>


    </div>
  )
}

export default Registrar