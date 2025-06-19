import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import Inventario from "../pages/Inventario";
// import Contato from "../pages/Contato";
// import Generica from "../pages/Generica";
// import Final from "../pages/Final";

const router = createBrowserRouter([
    {path: "/", element: <Login />},
    {path: "/cadastro", element: <Cadastro />},
    {path: "/inventario", element: <Inventario />},
    // {path: "/contato", element: <Contato />},
    // {path: "/generica", element: <Generica />},
    // {path: "/final", element: <Final />},
])

export default router;
