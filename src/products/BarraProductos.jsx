import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "reactstrap";
import { Menu } from "./styled/VistaProductoStyled";

const BarraProductos = () => {
  const validacion = sessionStorage.getItem("perfil");
  return (
    <>
      <Menu>
        <NavLink to="/productos">Productos</NavLink>
        {validacion === "Administrador" ? (
          <>
            <NavLink to="/categorias">Categorías</NavLink>
            <NavLink to="/devoluciones">Devoluciones</NavLink>
          </>
        ) : null}
      </Menu>
      <Navbar></Navbar>
    </>
  );
};

export default BarraProductos;
