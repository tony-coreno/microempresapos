import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Inicio from './Inicio';
import Productos from './Productos';
import Ventas from './Ventas';
// import Categorias from './Categorias';
import Empleados from './Empleados';
import Clientes from './Clientes';
import Ayuda from './Ayuda';
import styled from 'styled-components';

import Sidebar from './Sidebar';


const App = () => {
    return ( 
    <>
        {/* <BarraSuperior /> */}
        <Sidebar />
        
        <BrowserRouter>
        <ContenedorPrincipal>
                <Header />
            <Main>
                <Route path="/" exact={true} component={Inicio} />
                <Route path="/empleados" component={Empleados} />
                <Route path="/productos" component={Productos} />
                <Route path="/ventas" component={Ventas} />
                {/* <Route path="/categorias" component={Categorias} /> */}
                <Route path="/clientes" component={Clientes} />
                <Route path="/ayuda" component={Ayuda} />
            </Main>
        </ContenedorPrincipal>
        </BrowserRouter>
     </>   
     );
}

const ContenedorPrincipal = styled.div`
    padding: 10px;
    width: 90%;
    max-width: 1200px;

`;
 
const Main = styled.main`
	background: #fff;
	padding: 40px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;