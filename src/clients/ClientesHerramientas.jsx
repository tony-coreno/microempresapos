import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFileExcel,
  faFilePdf,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  Herramientas,
  Boton,
  Buscar,
} from "../clients/style/ClienteStyle";
const ClientesHerramientas = ({buscar}) => {
  return (
    <>
      <Herramientas className="">
        <NavLink to="/cliente">
          <Boton
            className="btn btn-info d-flex d-flex justify-content-between align-items-center pr-2"
            data-toggle="tooltip"
            data-placement="right"
            title="Regresar"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Boton>
        </NavLink>
        <NavLink to="/agregar-cliente">
          <Boton
            className="btn btn-danger d-flex d-flex justify-content-between align-items-center pr-2"
            data-toggle="tooltip"
            data-placement="right"
            title="Imprimir Clientes"
          >
            <FontAwesomeIcon icon={faFilePdf} />
          </Boton>
        </NavLink>
        <NavLink to="/agregar-empleado">
          <Button
            className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
            data-toggle="tooltip"
            data-placement="right"
            title="Exportar clientes"
          >
            <FontAwesomeIcon icon={faFileExcel} />
          </Button>
        </NavLink>
      </Herramientas>
      {sessionStorage.getItem("token") ? (
        <div className="col-md-4 ml-auto">
          <div className="input-group fa-2x">
            <Buscar
              className="form-control mr-sm-4"
              type="search"
              placeholder="Buscar por nombre..."
              aria-label="Search"
              onChange={buscar}
              autoFocus
            ></Buscar>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ClientesHerramientas;
