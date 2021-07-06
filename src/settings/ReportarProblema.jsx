import React from "react";
import {
  Contenedor,
  ContenedorAyuda,
  Menu,
} from "../components/style/AyudaStyle";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const ReportarProblema = () => {
  let f = new Date();
  return (
    <>
      <ContenedorAyuda>
        <Contenedor>
          <Menu>
            <NavLink to="/crear-venta">Manuales de usuario</NavLink>
            <NavLink to="/acerca-de">Acerca De</NavLink>
            <NavLink to="/reportar">Reportar un problema</NavLink>
          </Menu>
          <div className="container">
            <hr />
            <h2>Reportar Problema</h2>
            <hr />
            <form>
              <textarea
                className="form-control"
                autoFocus
                placeholder="Describe el problema ..."
                required
                style={{ height: "195px" }}
              />
              <buton className="btn btn-info mt-3">
                <FontAwesomeIcon icon={faCloud} /> Enviar{" "}
              </buton>
            </form>
          </div>
          <main>
            <hr />
            Usuario:{" "}
            <span className="badge badge-info">
              {" "}
              {sessionStorage.getItem("perfil")}
            </span>
            <hr />
            Fecha:{" "}
            {f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}
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
          </Contenedor>
        </aside>
      </ContenedorAyuda>
    </>
  );
};

export default ReportarProblema;
