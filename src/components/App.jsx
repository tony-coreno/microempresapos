import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Header';
import Inicio from './Inicio';
import Almacen from './Almacen';
import Ventas from './Ventas';
import Empleados from './Empleados';
import Clientes from './Clientes';
import Ayuda from './Ayuda';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Post from './Post';
import Error from './Error';
// import Carrito from './../Carrito/Carrito';

import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
    return ( 
    <>
        <Sidebar />
        <BrowserRouter>
        <ContenedorPrincipal>
                <Header />
            <Main>
                <Switch>
                <Route path="/" exact={true} component={Inicio} />
                <Route path="/empleados" component={Empleados} />
                <Route path="/almacen" component={Almacen} />
                <Route path="/ventas" component={Ventas} />
                <Route path="/post/:id" component={Post} />
                <Route path="/clientes" component={Clientes} />
                <Route path="/ayuda" component={Ayuda} />
                {/* <Route path="/carrito" component={Carrito} /> */}
                <Route component={Error} />
                </Switch>
            </Main>
        </ContenedorPrincipal>
        </BrowserRouter>
     </>   
     );
}

const ContenedorPrincipal = styled.div`
    padding: 10px;
    width: 90%;
    max-width: 1400px;
`;
 
const Main = styled.main`
	background: #fff;
	padding: 20px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.7);
`;

export default App;