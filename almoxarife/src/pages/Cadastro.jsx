import React from 'react'
import './Cadastro.css'
function Cadastro() {
  return (
    <div className='container-cadastro'>
        <h2 className='titulo-cadastro'>Cadastro</h2>

        <div className='container-inputs'>
            <div className='input-nome'>
                <label htmlFor="">Nome</label>
                <input type="text" />
            </div>
            <div className='input-senha'>
                <label htmlFor="">Senha</label>
                <input type="text" />
            </div>
            <div className='input-tel'>
                <label htmlFor="">Telefone</label>
                <input type="text" />
            </div>
        </div>

        <div className='container-botoes'>
            <button className='btn-cadastra'>Cadastrar</button>
            <button className='btn-cancela'>Cancelar</button>
        </div>

    </div>
  )
}

export default Cadastro