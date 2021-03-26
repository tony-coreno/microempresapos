import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {Button} from 'reactstrap';
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

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
              <input type="number" className="form-control" placeholder="SKU" />
            </div>
            <div class="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre Cliente"
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
              <input readOnly
                className="form-control"
                placeholder="Compras"
              />
            </div>
          </div>

          <hr />
      
            <button className="btn btn-info">Agregar</button>
        </form>
      </main>
    </>
  );
};



const Titulo = styled.h5`

    text-align: center;
`;



export default NuevoCliente;
