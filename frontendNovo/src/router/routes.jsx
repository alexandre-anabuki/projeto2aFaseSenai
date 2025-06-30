import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Inventario from "../pages/Inventario";
import Registrar from "../pages/Registrar";
import Movimentacao from "../pages/Movimentacao";
import Dado from "../pages/Dado";
// import Contato from "../pages/Contato";
// import Generica from "../pages/Generica";
// import Final from "../pages/Final";

const router = createBrowserRouter([
    {path: "/", element: <Login />},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/inventario", element: <Inventario />},
    {path: "/registrar", element: <Registrar />},
    {path: "/movimento", element: <Movimentacao />},
    {path: "/dado", element: <Dado />}
    // {path: "/contato", element: <Contato />},
    // {path: "/generica", element: <Generica />},
    // {path: "/final", element: <Final />},
])

export default router;
