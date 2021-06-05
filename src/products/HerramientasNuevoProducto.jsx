import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { faArchive, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const HerramientasNuevoProducto = () => {
  return (
    <>
      <div>
        <NavLink to="/producto">
          <Button
            className="btn btn-success mr-3"
            data-toggle="tooltip"
            data-placement="right"
            title="Regresar"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </NavLink>
        <NavLink to="/categorias">
          <Button className="btn btn-info mr-3">
            <FontAwesomeIcon icon={faArchive} /> Categorias & Unidades
          </Button>
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
