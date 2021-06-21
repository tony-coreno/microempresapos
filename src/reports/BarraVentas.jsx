import React from "react";
import {  NavLink } from "react-router-dom";
import { Menu } from "./Style/ReporteStyle";

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


export default BarraVentas;
