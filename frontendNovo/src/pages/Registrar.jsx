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
            limparRegInv();
            alert("Item Cadastrado")
        }
    } catch (error) {
        console.error('Erro ao adicionar item:', error);
      }
    };

  function limparRegInv(){
    setInputItem('')
    setInputEstoque('')
    setInputPatri('')
    setInputPrecoU('')
    setInputPrecoT('')
  }
    
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
            limparRegMov();
            alert("Movimento Cadastrado")
        }
    } catch (error) {
        console.error('Erro ao adicionar registro:', error);
    }
};

  function limparRegMov(){
    setInputData('')
    setInputTipo('')
    setInputCliente('')
    setInputProduto('')
    setInputQuantidade('')
    setInputCusto('')
  }


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

  function naviDado(){
    navigate('/dado')
  }

  return (
    <div className='container-reg'>
      <div className='container-menu'>
        <div className='logo'>
          <img src="toolbox-svgrepo-com.svg" alt="" />
        </div>
        <div className='container-btn'>
          <div className='btn-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.056 2h-14a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3m-14 2h14a1 1 0 0 1 1 1v8H17.59a2 2 0 0 0-1.664.89L14.52 16H9.59l-1.406-2.11A2 2 0 0 0 6.52 13H4.056V5a1 1 0 0 1 1-1m14 16h-14a1 1 0 0 1-1-1v-4H6.52l1.406 2.11A2 2 0 0 0 9.59 18h4.93a2 2 0 0 0 1.664-.89L17.59 15h2.465v4a1 1 0 0 1-1 1"/></svg>
            <button onClick={naviInv}>Inventario</button>
          </div>

          <div className='btn-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M18 10a1 1 0 0 0-1-1H5.41l2.3-2.29a1 1 0 0 0-1.42-1.42l-4 4a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 11h14a1 1 0 0 0 1-1m3.92 3.62A1 1 0 0 0 21 13H7a1 1 0 0 0 0 2h11.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-1.09"/></svg>
            <button onClick={naviMov}>Movimentação</button>
          </div>

          <div className='btn-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M8.71 7.71L11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6a1 1 0 0 0-2 0v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1"/></svg>
            <button onClick={naviReg}> Registrar</button>
          </div>

          <div className='btn-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19M12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4"/></svg>
            <button onClick={naviDado}> Meus Dados</button>
          </div>

          <div className='btn-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1M17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3"/></svg>
            <button onClick={logoff}> Sair</button>
          </div>
        </div>
      </div>

      <div className='container-geral'>

        <div className='container-reg-inv'>


          <div className='coluna-inv1'>
            <div className='separador'>
              <label htmlFor="">Nome do Item</label>
              <input className='input-reg-inv' type="text" value={inputItem} onChange={(event) => setInputItem(event.target.value)}/>
            </div>

            <div className='separador'>
              <label htmlFor="">Quantidade</label>
              <input className='input-reg-inv' type="number" value={inputEstoque} onChange={(event) => setInputEstoque(event.target.value)}/>
            </div>

            <div className='separador'>
              <label htmlFor="">Patrimônio</label>
              <input className='input-reg-inv' type="number" value={inputPatri} onChange={(event) => setInputPatri(event.target.value)}/>
            </div>

          </div>

          <div className='coluna-inv2'>

            <div className='separador'>
              <label htmlFor="">Preço Unitário</label>
              <input className='input-reg-inv' type="text" value={inputPrecoU} onChange={(event) => setInputPrecoU(event.target.value)}/>
            </div>

            <div className='separador'>
              <label htmlFor="">Preço Total</label>
              <input className='input-reg-inv' type="text" value={inputPrecoT} onChange={(event) => setInputPrecoT(event.target.value)}/>
            </div>
          </div>


          <button className='btn-confirma-inv' onClick={regInv}>Registrar Inventário</button>
        </div>

        <div className='divisoria'></div>

        <div className='container-reg-mov'>

          <div className='coluna-mov1'>

            <div className='separador'>
              <label htmlFor="">Data</label>
              <input className='input-reg-mov' type="date" value={inputData} onChange={(event) => setInputData(event.target.value)}/>
            </div>

            <div className='separador'>
              <label htmlFor="">Tipo da movimentção</label>
              {/* <select value={tipoSelecionado} onChange={selecionarTipo}> */}
              <select className='input-reg-sec' value={inputTipo} onChange={(event) => setInputTipo(event.target.value)}>
                <option value="">Selecione</option>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saída</option>
              </select>
            </div>

            <div className='separador'>
              <label htmlFor="">Nome do cliente</label>
              <input className='input-reg-mov' type="text" value={inputCliente} onChange={(event) => setInputCliente(event.target.value)}/>
            </div>

          </div>
          
          <div className='coluna-mov2'>

            <div className='separador'>
              <label htmlFor="">Nome do item</label>
              <input className='input-reg-mov' type="text" value={inputProduto} onChange={(event) => setInputProduto(event.target.value)}/>
            </div>

            <div className='separador'>
              <label htmlFor="">Quantidade</label>
              <input className='input-reg-mov' type="number" value={inputQuantidade} onChange={(event) => setInputQuantidade(event.target.value)}/>
            </div>

            <div className='separador'>
              <label htmlFor="">Custo Total</label>
              <input className='input-reg-mov' type="text" value={inputCusto} onChange={(event) => setInputCusto(event.target.value)}/>
            </div>
          </div>


          <button className='btn-confirma-mov' onClick={regMov}>Registrar Movimentação</button>
        </div>
      </div>


    </div>
  )
}

export default Registrar