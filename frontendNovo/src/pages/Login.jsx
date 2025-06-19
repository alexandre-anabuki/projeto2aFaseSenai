import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [clienteUsuario, setUsuarioSelecionado] = useState(null);
    const navigate = useNavigate()

    function fazerLogin(){
        const buscarUsuarioPorId = async (nome) => {
            try {
                const response = await axios.get(`http://localhost:3000/usuario/${nome}`);
                setUsuarioSelecionado(response.data);
                exibirUsuario(response.data);
            } catch (error) {
                console.error('Erro ao buscar cliente por ID:', error);
            }
        };
    }

    function fazerCadastro(){
        navigate('/cadastro')
    }

  return (
    <div className='container-login'>
        <div className='form-login'>
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
                <button onClick={fazerCadastro} className='btn-cadastro-pg'>Cadastre-se</button>
            </div>

        </div>

    </div>
  )
}

export default Login