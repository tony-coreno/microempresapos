import React from "react";
import {
  Contenedor,
  ContenedorAyuda,
  Menu,
} from "../components/style/AyudaStyle";
import { NavLink } from "react-router-dom";

const AcercaDe = () => {
  return (
    <>
      <ContenedorAyuda>
        <Contenedor>
          <Menu>
            <NavLink to="/manuales">Manuales de usuario</NavLink>
            <NavLink to="/acerca-de">Acerca De</NavLink>
            <NavLink to="/reportar">Reportar un problema</NavLink>
          </Menu>
          <main></main>
          <div>
            <h2>Acerca de</h2>
            <p>&#169; Destinado para microempresas de la CDMX.</p>
            <p>v2.0</p>
            <p>
              <a href="https://icons8.com/icon/3vf8VrOhkfVi/supplier">
                Iconos utilizados
              </a>
            </p>
            <a href="https://icons8.com/icon/12599/github">Iconos 8</a>
            <p>
              <a href="https://icons8.com/icon/3vf8VrOhkfVi/supplier">
                Dependecias
              </a>
            </p>
          </div>
        </Contenedor>
        <aside>
          <Contenedor>
            <h3 className="text-center">Contacto</h3>
            <span className="badge badge-info">Antonio</span>
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
            GitHub<span className="badge badge-info"> Alexis</span>
          </Contenedor>
        </aside>
      </ContenedorAyuda>
    </>
  );
};

export default AcercaDe;
