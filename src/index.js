import React from 'react';
import ReactDOM from 'react-dom';
import {ProveedorState} from './context/ContextEstado';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
//  import Carrito from './components/Carrito';
// import App from './Carrito/App';
import './index.css';



ReactDOM.render(
    <ProveedorState>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProveedorState>, 
        document.getElementById('root'));


