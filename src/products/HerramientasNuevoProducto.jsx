import React from "react";
import { NavLink } from "react-router-dom";
import { faArchive, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const HerramientasNuevoProducto = () => {
  return (
    <>
      <div>
        <NavLink to="/productos">
          <button
            className="btn btn-light mr-5"
            data-toggle="tooltip"
            data-placement="right"
            title="Regresar"
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Regresar
          </button>
        </NavLink>
        <NavLink to="/categorias">
          <button className="btn btn-light mr-3">
            <FontAwesomeIcon icon={faArchive} /> Ir a Categorias & Unidades
          </button>
        </NavLink>
        <Titulo>Agregar Producto</Titulo>
      </div>
    </>
  );
};

const Titulo = styled.h5`
  text-align: center;
`;
export default HerramientasNuevoProducto;
