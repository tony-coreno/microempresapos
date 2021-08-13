import React from "react";
import {
  Contenedor,
  ContenedorAyuda,
  Menu,
} from "../components/style/AyudaStyle";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";

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
            <p>Enlace con manual</p>
            <hr />
            <FontAwesomeIcon icon={faCloudDownloadAlt} />
            <a
              href="https://drive.google.com/file/d/1dhO9EmmjCZn1vqmjMWbmM-BdQBg-pJF5/view?usp=sharing"
              target="_parent"
            >
              Aquí 
            </a>

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
