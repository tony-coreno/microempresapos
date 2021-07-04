import React from "react";
import { NavLink } from "react-router-dom";
import { Contenedor, Menu } from "../components/style/AyudaStyle";
const BarraAyuda = () => {
  return (
    <>
      <Contenedor>
        <Menu>
          <NavLink to="/crear-venta">Manuales de usuario</NavLink>
          <NavLink to="/acerca-de">Acerca De</NavLink>
          <NavLink to="/error">Reportar un problema</NavLink>
        </Menu>
        <main>
        </main>
      </Contenedor>
    </>
  );
};

export default BarraAyuda;