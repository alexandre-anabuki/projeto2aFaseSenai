import { createBrowserRouter } from "react-router-dom"; 
import Login from "../pages/Login";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";

const router = createBrowserRouter([
    {path: "/", element: <Login />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
])

export default router;
