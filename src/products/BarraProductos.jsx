import React from "react";
import {  NavLink } from "react-router-dom";
import {  Navbar } from "reactstrap";
import styled from 'styled-components';

const BarraProductos = () => {
  return (
    <>
      <Menu>
        <NavLink to="/producto">Productos</NavLink>
        <NavLink to="/categorias">Categorías</NavLink>
        <NavLink to="/devoluciones">Devoluciones</NavLink>
      </Menu>
      <Navbar>

      </Navbar>
    </>
  );
};
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
  a.active {
    border-bottom: 2px solid #f2f2f2;
    padding-bottom: 3px;
  }
`;
export default BarraProductos;
