import React, { useState } from 'react'
import './Inventario.css'
import { useNavigate } from 'react-router-dom'
function Inventario() {
  const navigate = useNavigate()
  const [inventario, setInventario] = useState([])


  function naviInv(){
    navigate('/inventario')
  }

  function naviReg(){
    navigate('/registrar')
  }

  function logoff(){
    navigate('/')
  }

  return (
    <div className='container-inv'>
      <div className='container-menu'>
        <div className='logo'>
          LOGO
        </div>
        <div className='container-btn'>
          <button onClick={naviInv}>Inventario</button>
          <button>Movimentação</button>
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
                  <td>{item.id}</td>
                  <td>{item.nome}</td>
                  <td>{item.estoque}</td>
                  
                 </tr> 
              ))}
            </tbody>
        </table>
    </div>
  )
}

export default Inventario