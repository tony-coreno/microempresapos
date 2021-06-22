import React from "react";
import { Contenedor, Contenedorapp, Menu } from "./style/AyudaStyle";
import { NavLink } from "react-router-dom";

const Ayuda = () => {
  return (
    <>
      <Contenedorapp>
        <Contenedor>
          <Menu>
            <NavLink to="/crear-venta">Manuales de usuario</NavLink>
            <NavLink to="/administrar-venta">Acerca De</NavLink>
          </Menu>
          <main>
          </main>
        </Contenedor>
        <aside>
          <Contenedor>
            <h3>Contacto</h3>
            <p>
              <a href="https://icons8.com/icon/3vf8VrOhkfVi/supplier">
                Iconos utilizados
              </a>
            </p>
          </Contenedor>
        </aside>
      </Contenedorapp>
    </>
  );
};


export default Ayuda;
