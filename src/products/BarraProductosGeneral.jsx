import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faSearch,
  faFileExcel,
  faShoppingBag,
  faFilePdf,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const BarraProductosGeneral = ({ buscar }) => {
  return (
    <>
      <NavLink to="/agregar-producto">
        <Button
          className="btn btn-success d-flex d-flex justify-content-between align-items-center"
          data-toggle="tooltip"
          data-placement="right"
          title="Agregar producto"
        >
          <FontAwesomeIcon icon={faShoppingBag} />
        </Button>
      </NavLink>
      <NavLink to="/productos">
        <Button
          className="btn btn-info d-flex d-flex justify-content-between align-items-center"
          data-toggle="tooltip"
          data-placement="right"
          title="Productos tabla"
        >
          <FontAwesomeIcon icon={faTools} />
        </Button>
      </NavLink>
      <NavLink to="/agregar-producto">
        <Boton
          className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
          data-toggle="tooltip"
          data-placement="right"
          title="Agregar Producto"
        >
          <FontAwesomeIcon icon={faShoppingBag} />
        </Boton>
      </NavLink>

      <NavLink to="/agregar-empleado">
        <Boton
          className="btn btn-danger d-flex d-flex justify-content-between align-items-center pr-2"
          data-toggle="tooltip"
          data-placement="right"
          title="Imprimir productos"
        >
          <FontAwesomeIcon icon={faFilePdf} />
        </Boton>
      </NavLink>
      <NavLink to="/agregar-empleado">
        <Button
          className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
          data-toggle="tooltip"
          data-placement="right"
          title="Exportar productos"
        >
          <FontAwesomeIcon icon={faFileExcel} />
        </Button>
      </NavLink>

      <NavLink to="/productos-cards">
        <Button
          className="btn btn-warning d-flex d-flex justify-content-between align-items-center pr-2"
          data-toggle="tooltip"
          data-placement="right"
          title="Filtrar stock"
        >
          <FontAwesomeIcon icon={faFilter} />
        </Button>
      </NavLink>
      <div className="">
        <div className="input-group">
          <Buscar
            className="form-control mr-sm-4"
            type="search"
            placeholder="Buscar por nombre..."
            aria-label="Search"
            autoFocus
            onChange={buscar}
          ></Buscar>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </>
  );
};

const Buscar = styled.input`
  border-radius: 10px;
`;
const Boton = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
`;

export default BarraProductosGeneral;
