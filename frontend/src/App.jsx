import Header from './components/header';
import './App.css';
import {Outlet, useNavigate} from "react-router-dom"
import { useEffect } from 'react';

function App() {
   const nav = useNavigate();
    useEffect(()=>{
        nav('/home');
   },[]) 

    return (
        <div id="App">
            <div className='header'>
                <Header />
            </div>
            <div className='content'>
                <Outlet />
            </div>
       </div>
    )
}

export default App
