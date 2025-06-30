import React, { useEffect, useState } from 'react'
import './movimentacao.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Movimentacao() {
    const navigate = useNavigate()
    const [movimentacao, setMovimentacao] = useState([])

    const fetchMovimento = async () => {
        try {
            const response = await axios.get('http://localhost:3000/movimentacao');
            setMovimentacao(response.data);
        } catch (error) {
            console.error('Erro ao buscar registro:', error);
        }
      };
    
    useEffect(() => {
        fetchMovimento();
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
    <div className='container-mov'>
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
            <button> Meus Dados</button>
          </div>

          <div className='btn-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1M17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3"/></svg>
            <button onClick={logoff}> Sair</button>
          </div>
            </div>
        </div>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data</th>
                        <th>Tipo</th>
                        <th>Cliente</th>
                        <th>Item</th>
                        <th>Quantidade</th>
                        <th>Custo Total</th>
                    </tr>
                </thead>
                <tbody>
                    {movimentacao.map((item) => (
                        <tr>
                        <td>{item.id_movimentacao}</td>
                        <td>{item.data_movimento}</td>
                        <td>{item.tipo_movimento}</td>
                        <td>{item.nome_cliente}</td>
                        <td>{item.nome_item}</td>
                        <td>{item.quantidade}</td>
                        <td>{item.custo_total}</td>
                    </tr> 
                ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Movimentacao