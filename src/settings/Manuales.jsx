import React from "react";
import {
  Contenedor,
  ContenedorAyuda,
  Menu,
} from "../components/style/AyudaStyle";
import { NavLink } from "react-router-dom";

const Manuales = () => {
  return (
    <>
      <ContenedorAyuda>
        <Contenedor>
          <Menu>
            <NavLink to="/manuales">Manuales de usuario</NavLink>
            <NavLink to="/acerca-de">Acerca De</NavLink>
            <NavLink to="/reportar">Reportar un problema</NavLink>
          </Menu>
          <div className="container">
            <hr />
            <h2>Manuales de usuario</h2>
            <hr />
          </div>
          <main>
            <hr />
            <input type="hidden" className="form-control " />
          </main>
        </Contenedor>
        <aside>
          <Contenedor>
            <h3>Contacto</h3>
            <a href="https://www.github.com/tony-coreno" target="_parent">
              <img
                className="card ms-1 animate__animated animate__fadeIn"
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="Github"
              />
            </a>
            GitHub
            <a href="https://github.com/ALEXISS12" target="_parent">
              <img
                className="card ms-1 animate__animated animate__fadeIn"
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="Github"
              />
            </a>
            GitHub
          </Contenedor>
        </aside>
      </ContenedorAyuda>
    </>
  );
};

export default Manuales;
