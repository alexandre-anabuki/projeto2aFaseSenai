import React from 'react'
import './Inventario.css'
function Inventario() {
  return (
    <div className='container-inv'>
      <div className='container-menu'>
        <div className='logo'>
          LOGO
        </div>
        <button>Inventario</button>
        <button>Movimentação</button>
        <button>Cadastro</button>
        <button>Meus Dados</button>
        <button>Sair</button>
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

            </tbody>
        </table>
    </div>
  )
}

export default Inventario