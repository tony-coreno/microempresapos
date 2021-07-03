import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCog,
  faFileExcel,
  faFilePdf,
  faFilter,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const HerramientasProductos = () => {
  return (
    <Herramientas className="">
      <NavLink to="/agregar-producto">
        <Boton
          className="btn btn-light d-flex d-flex justify-content-between align-items-center"
          data-toggle="tooltip"
          data-placement="right"
          title="Agregar Producto"
        >
          <FontAwesomeIcon icon={faShoppingBag} /> Agregar Producto
        </Boton>
      </NavLink>
      <NavLink to="/producto">
        <Boton
          className="btn btn-light d-flex d-flex justify-content-between align-items-center"
          data-toggle="tooltip"
          data-placement="right"
          title="Administrar"
        >
          <FontAwesomeIcon icon={faCog} /> Admón. Prod
        </Boton>
      </NavLink>

      <NavLink to="/agregar-empleado">
        <button
          className="btn btn-light d-flex d-flex justify-content-between align-items-center pr-2"
          data-toggle="tooltip"
          data-placement="right"
          title="Imprimir productos"
        >
          <FontAwesomeIcon icon={faFilePdf} /> Exportar PDF
        </button>
      </NavLink>
      <NavLink to="/agregar-empleado">
        <button
          className="btn btn-light d-flex d-flex justify-content-between align-items-center pr-2"
          data-toggle="tooltip"
          data-placement="right"
          title="Exportar productos"
        >
          <FontAwesomeIcon icon={faFileExcel} /> Exportar Excel
        </button>
      </NavLink>

      <NavLink to="/productos-cards">
        <button
          className="btn btn-light d-flex d-flex justify-content-between align-items-center pr-2"
          data-toggle="tooltip"
          data-placement="right"
          title="Filtrar stock"
        >
          <FontAwesomeIcon icon={faFilter} /> Vista
        </button>
      </NavLink>
    </Herramientas>
  );
};

const Herramientas = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px;
  padding: 10px;
  gap: 5px;
`;
const Boton = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
`;
export default HerramientasProductos;
