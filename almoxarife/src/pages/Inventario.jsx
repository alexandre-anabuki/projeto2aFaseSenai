import React from 'react'
import './Inventario.css'
function Inventario() {
  return (
    <div className='container-inv'>
      <div className='container-menu'>
        <button>Inventario</button>
        <button>Aquisição</button>
        <button>Emprétismo</button>
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
        </table>
    </div>
  )
}

export default Inventario