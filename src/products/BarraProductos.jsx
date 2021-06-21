import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";
import { Menu } from "./styled/VistaProductoStyled";

const BarraProductos = () => {
  return (
    <>
      <Menu>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/categorias">Categorías</NavLink>
        <NavLink to="/devoluciones">Devoluciones</NavLink>
      </Menu>
      <Navbar></Navbar>
    </>
  );
};

export default BarraProductos;
