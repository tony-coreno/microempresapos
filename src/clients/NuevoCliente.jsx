import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import { faArrowLeft, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const NuevoCliente = () => {
  // const boton = document.getElementById("boton");
  // const pass = document.getElementById("pass");
  // const mostrarContraseña = (e) => {
  //   e.preventDefault();
  //   if (pass.type == "password") {
  //     pass.type = "text";
  //   }
  // };
  return (
    <>
      <main className="caja-contenido col-12">
        <div>
          <NavLink to="/clientes">
            <Button className="btn btn-info">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </NavLink>
          <Titulo>Agregar Cliente</Titulo>
        </div>
        <form>
          <hr />
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                autoFocus
              />
            </div>
            <div class="col">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
              />
            </div>
            <div class="col">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Telefono"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Código promocional"
              />
            </div>
            <div className="col">
              <select className="form-control">
                <option>Tipo de cliente</option>
                <option>Mayoreo</option>
                <option>Menúdeo</option>
              </select>
            </div>
          </div>

          <hr />

          <button className="btn btn-outline-info">
            <FontAwesomeIcon icon={faUserTag} /> Agregar
          </button>
        </form>
      </main>
    </>
  );
};

const Titulo = styled.h5`
  text-align: center;
`;

export default NuevoCliente;
