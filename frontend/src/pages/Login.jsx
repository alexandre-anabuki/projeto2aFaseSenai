import React, { useState } from 'react'
import './Login.css'
function Login() {
  return (
    <div className='container-login'>
        <h2 className='titulo-login'>Bem-vindo(a)</h2>

        <div className='container-inputslogin'>
            <div className='inputlogin-nome'>
                <label htmlFor="">Nome</label>
                <input type="text" />
            </div>
            <div className='inputlogin-senha'>
                <label htmlFor="">Senha</label>
                <input type="text" />
            </div>
        </div>

        <div className='container-botoeslogin'>
            <button className='btn-login'>Login</button>
            <button className='btn-cadastro-pg'>Cadastre-se</button>
        </div>

    </div>
  )
}

export default Login