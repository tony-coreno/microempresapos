import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

const Settings = () => {
  // const boton = document.getElementById("boton");
  // const pass = document.getElementById("pass");
  // // const mostrarContraseña = (e) => {
  // //   e.preventDefault();
  // //   if (pass.type == "password") {
  // //     pass.type = "text";
  // //   }
  // // };
  return (
    <>
      <main className="caja-contenido col-12">
        <div>
          <NavLink to="/">
            <button className="btn btn-warning">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </NavLink>
          <Titulo>Ajustes</Titulo>
        </div>
        <form>
          <hr />


          <div className="row">
            <div className="col">
       
            <h7>Nombre</h7>
              <input type="text" className="form-control mt-2" placeholder="Nombre del Negocio" />
            </div>
            <div class="col">
            <h7>Tema</h7>
            <select id="inputState" className="form-control mt-2">
              <option>Claro</option>
              <option>Dark</option>
            </select>
            </div>
          </div>

          <hr />
          <div className="form-group col-mt-4">
            <h5>Fuente</h5>
            <button className="btn btn-outline-primary mt-2">Aumentar</button>
            <hr />
            <button className="btn btn-outline-dark mt-2">Disminuir</button>
          </div>

          <hr />

          <SeccionBoton>
            <button className="btn btn-outline-success">Guardar</button>
          </SeccionBoton>
        </form>
      </main>
    </>
  );
};

export default Settings;


const SeccionBoton = styled.div`

    width: 50%;
`;

const Titulo = styled.h5`

    text-align: center;
`;