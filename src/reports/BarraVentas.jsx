import React from "react";
import {  NavLink } from "react-router-dom";
import styled from "styled-components";

const BarraVentas = () => {
  return (
    <>
      <Menu>
        <NavLink to="/crear-venta">Crear Venta</NavLink>
        <NavLink to="/administrar-venta">Administrar</NavLink>
        <NavLink to="/reportes">Reportes</NavLink>
      </Menu>
    </>
  );
};

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #147551;
  //grid-column: span 2;
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
  a.active {
    border-bottom: 2px solid #f2f2f2;
    padding-bottom: 3px;
  }
`;

export default BarraVentas;
