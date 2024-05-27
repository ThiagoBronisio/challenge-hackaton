import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/index"
import Analises from "../../pages/analises";
import Tabela from "../../pages/home/Tabela";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "analises",
                element: <Analises />,
            },
            {
                path: "table",
                element: <Tabela />,
            },
        ],
    }
])

export default router;