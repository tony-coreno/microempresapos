import React from 'react';
import styled from 'styled-components';
import {Switch, NavLink, Route} from 'react-router-dom';
import AdministrarVentas from './AdministrarVentas';
import Reportes from './Reportes';
const CrearVenta = () => {
    return ( 
        <div>
            <Contenedorapp>
			<Menu>
            <NavLink to="/crear-venta">Crear Venta</NavLink>
				<NavLink to="/administrar-venta">Administrar</NavLink>
                <NavLink to="/reportes">Reportes</NavLink>
			</Menu>
			<main>
				<Switch>
					<Route path="/reportes" component={Reportes}/>
                    <Route path="/administrar-venta" component={AdministrarVentas}/>
				</Switch>
			</main>
            <p>
                <h3>
                    Te encuentras en crear venta
                </h3>
            </p>
		</Contenedorapp>

        </div>
     );
}


const Menu = styled.nav`
    width: 100%;
    text-align: center;
    background: #147551;
    grid-column: span 2;
    border-radius: 3px;
 
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
 

export default CrearVenta;