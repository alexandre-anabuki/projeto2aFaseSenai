import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Inventario from "../pages/Inventario";
import Registrar from "../pages/Registrar";
import Movimentacao from "../pages/Movimentacao";
import Dado from "../pages/Dado";


const router = createBrowserRouter([
    {path: "/", element: <Login />},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/inventario", element: <Inventario />},
    {path: "/registrar", element: <Registrar />},
    {path: "/movimento", element: <Movimentacao />},
    {path: "/dado", element: <Dado />}

])

export default router;
