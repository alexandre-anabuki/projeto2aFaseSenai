import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Cadastro.css'
import { useNavigate } from 'react-router-dom'
function Cadastro() {
    const [usuario, setUsuario] = useState([])
    const [inputNome, setInputNome] = useState('')
    const [inputSenha, setInputSenha] = useState('')
    const [inputCnpj, setInputCnpj] = useState('')
    const navigate = useNavigate()

    const fetchClientes = async () => {
        try {
            const response = await axios.get('http://localhost:3000/usuario');
            setUsuario(response.data);
        } catch (error) {
            console.error('Erro ao buscar usuário:', error);
        }
    };

    useEffect(() => {
        fetchClientes();
    }, []);

    useEffect(() => {
        console.log(usuario);
    }, [usuario]);

    function cancelaCadastro(){
        navigate('/')
    }

    const cadastrarUsuario = async () => {
        try {
            const funcionario = {
                nome: inputNome,
                senha: inputSenha,
                cnpj: inputCnpj
            };
            const response = await axios.post('http://localhost:3000/usuario', funcionario);
            if (response.status === 201) {
                fetchClientes();
                limparForm();
                navigate('/')
            }
        } catch (error) {
            console.error('Erro ao adicionar usuário:', error);
        }
    };


    function limparForm() {
        setInputNome('')
        setInputSenha('')
        setInputCnpj('')
    }



  return (
    <div className='container-cadastro'>
        <div className='form-cadastro'>
            <h2 className='titulo-cadastro'>Cadastro</h2>

            <div className='container-inputs'>
                <div className='input-nome'>
                    <label htmlFor="">Nome</label>
                    <input type="text" value={inputNome} onChange={(event) => setInputNome(event.target.value)} required/>
                </div>
                <div className='input-senha'>
                    <label htmlFor="" >Senha</label>
                    <input type="text" value={inputSenha} onChange={(event) => setInputSenha(event.target.value)} required/>
                </div>
                <div className='input-cnpj'>
                    <label htmlFor="">CNPJ</label>
                    <input type="number" value={inputCnpj} onChange={(event) => setInputCnpj(event.target.value)} required/>
                </div>
            </div>

            

            <div className='container-botoes'>
                <button onClick={cadastrarUsuario} className='btn-cadastra'>Cadastrar</button>
                <button onClick={cancelaCadastro} className='btn-cancela'>Cancelar</button>
            </div>

        </div>

    </div>
  )
}

export default Cadastro