import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import "@arco-design/web-react/dist/css/arco.css";
import {RouterProvider} from "react-router-dom";
import routes from './routes/routes';

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
    <RouterProvider router={routes}/>
)
