import React from 'react';
import styled from 'styled-components';
import {Switch, NavLink, Route} from 'react-router-dom';
import Productos from './Productos';
import Categorias from './Categorias';
const Almacen = () => {
    return ( 
        <div>
            <Contenedorapp>
			<Menu>
				<NavLink to="/productos">Productos</NavLink>
				<NavLink to="/categorias">Categorías</NavLink>
                <NavLink to="/empleados">Devoluciones</NavLink>
			</Menu>
			<main>
				<Switch>
					<Route path="/productos"  component={Productos}/>
					<Route path="/categorias" component={Categorias}/>
				</Switch>
			</main>
		</Contenedorapp>

        </div>
     );
}


const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #147551;
    grid-column: span 2;
    border-radius: 10px;
 
    a {
        color: #fff;
        display: inline-block;
        padding: 15px 20px;
    }
 
    a:hover {
        background: #147571;
        text-decoration: none;
    }
`;
 


const Contenedorapp = styled.div`
    max-width: 1400px;
    padding: 5px;
    width: 100%;
    display: grid;
    gap: 20px;
    //grid-template-columns: 2fr 1fr;
    background: #fff;
    margin: 5px 0;
    border-radius: 20px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 

export default Almacen;