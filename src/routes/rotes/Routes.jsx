import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/index"
import Analises from "../../pages/analises";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "analises",
                element: <Analises />,
            },
        ],
    }
])

export default router;