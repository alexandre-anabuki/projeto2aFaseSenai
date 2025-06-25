import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Login() {
    const [usuarioSelecionado, setUsuarioSelecionado] = useState(null);
    const [usuarioLogado, setUsuarioLogado] = useState('')
    const [inputNome, setInputNome] = useState('')
    const [inputSenha, setInputSenha] = useState('')
    const navigate = useNavigate()

 
        const fazerLogin = async () => {
            try {
                // const u = {nome: inputNome}
                // const response = await axios.get(`http://localhost:3000/usuario/login?nome=${inputNome}`);
                console.log(inputNome)
                const response = await axios.get(`http://localhost:3000/usuario/login/${encodeURIComponent(inputNome)}`);
                console.log(response.data)
                console.log(response.data.senha)
                if(response.data.senha == inputSenha){
                // setUsuarioSelecionado(response.data);
                navigate('/inventario')
                }
                else{
                    alert('errado')
                }
            } catch (error) {
                console.error('Erro ao buscar login:', error);
            }
        };
    
    // function fazerLogin(){
    //     const buscarUsuarioPorId = async (nome) => {
    //         try {
    //             const response = await axios.get(`http://localhost:3000/usuario/login/${nome}`);
    //             setUsuarioSelecionado(response.data);
    //             exibirUsuario(response.data);
    //             navigate('/inventario')
    //         } catch (error) {
    //             console.error('Erro ao buscar cliente por ID:', error);
    //         }
    //     };
    // }

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
                    <input type="text" value={inputNome} onChange={(event) => setInputNome(event.target.value)}/>
                </div>
                <div className='inputlogin-senha'>
                    <label htmlFor="">Senha</label>
                    <input type="text" value={inputSenha} onChange={(event) => setInputSenha(event.target.value)}/>
                </div>
            </div>

            <div className='container-botoeslogin'>
                <button onClick={fazerLogin} className='btn-login'>Login</button>
                <button onClick={fazerCadastro} className='btn-cadastro-pg'>Cadastre-se</button>
            </div>

        </div>

    </div>
  )
}

export default Login