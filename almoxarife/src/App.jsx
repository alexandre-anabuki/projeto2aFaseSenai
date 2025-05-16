import { useState } from 'react'
import './App.css'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'

function App() {
  // const [pagina, setPagina] = useState(<Login />)

  return (
    <div className='container-app'>
      <Login />
      {/* <Cadastro /> */}
      {/* {pagina} */}
    </div>
  )
}

export default App
