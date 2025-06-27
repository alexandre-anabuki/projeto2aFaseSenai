import React, { useState, useEffect } from 'react'
import './Inventario.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Inventario() {
  const navigate = useNavigate()
  const [inventario, setInventario] = useState([])

  const fetchInventario = async () => {
    try {
        const response = await axios.get('http://localhost:3000/inventario');
        setInventario(response.data);
    } catch (error) {
        console.error('Erro ao buscar item:', error);
    }
  };

  useEffect(() => {
    fetchInventario();
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
    <div className='container-inv'>
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
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Estoque</th>
                    <th>N° Patrimônio</th>
                    <th>Custo Unitário</th>
                    <th>Custo Total</th>
                </tr>
            </thead>
            <tbody>
              {inventario.map((item) => (
                 <tr>
                  <td>{item.id_inventario}</td>
                  <td>{item.nome}</td>
                  <td>{item.estoque}</td>
                  <td>{item.patrimonio}</td>
                  <td>{item.preco_unitario}</td>
                  <td>{item.preco_total}</td>
                 </tr> 
              ))}
            </tbody>
        </table>
    </div>
  )
}

export default Inventario