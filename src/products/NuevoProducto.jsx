import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import {Button} from 'reactstrap';
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';

const NuevoProducto = () => {
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
          <NavLink to="/productos">
            <Button className="btn btn-success">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </NavLink>
          <Titulo>Agregar Producto</Titulo>
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
                placeholder="Nombre producto"
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Existencia"
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Precio de venta"
              />
            </div>
          </div>

          <hr />
          <div className="form-group col-mt-4">
            <Titulo>Categoría</Titulo>
            <select id="inputState" className="form-control mt-2">
              <option>...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-mt-4">
            <Titulo>Unidad</Titulo>
            <select id="inputState" className="form-control mt-2">
              <option>Kg</option>
              <option>Lts</option>
              <option>Grs</option>
            </select>
            <div className="form-group col-mt-4">
              <br />
            <Titulo>Estado</Titulo>
            <select id="inputState" className="form-control mt-">
              <option>Activo</option>
              <option>Retirar del almacén</option>
              <option>Agotado</option>
            </select>
          </div>
          </div>

          <hr />
      
            <button className="btn btn-success">Registrar</button>
        </form>
      </main>
    </>
  );
};



const Titulo = styled.h5`

    text-align: center;
`;



export default NuevoProducto;
