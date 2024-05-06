import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Wball from "../pages/wball";
const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "home",
                element: <Home />,
                children:[
                    {
                        path: "all",
                        element: <Wball /> ,
                    }
                ]
            }
        ]
    }
])
export default routes;