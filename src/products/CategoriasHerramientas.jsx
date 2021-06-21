import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePdf,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import {
  Boton,
  Herramientas,
  Buscar,
} from "./styled/HerramientasProductoStyle";

const CategoriasHerramientas = ({ buscar }) => {
  return (
    <>
      <Navbar>
        <Herramientas className="">
          <NavLink to="/agregar-producto">
            <Boton
              className="btn btn-light d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar Producto"
            >
              <FontAwesomeIcon icon={faShoppingBag} /> Agregar Producto
            </Boton>
          </NavLink>

          <NavLink to="/agregar-empleado">
            <Boton
              className="btn btn-light d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Imprimir productos"
            >
              <FontAwesomeIcon icon={faFilePdf} /> Exportar PDF
            </Boton>
          </NavLink>
          <NavLink to="/agregar-empleado">
            <Button
              className="btn btn-light d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Exportar productos"
            >
              <FontAwesomeIcon icon={faFileExcel} /> Exportar Excel
            </Button>
          </NavLink>
        </Herramientas>
        {sessionStorage.getItem("token") ? (
          <div className="col-md-4 ml-auto">
            <div className="input-group fa-2x">
              <Buscar
                className="form-control mr-sm-4"
                type="search"
                placeholder="Buscar categoría..."
                aria-label="Search"
                autoFocus
                onChange={buscar}
              ></Buscar>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        ) : null}
      </Navbar>
    </>
  );
};

export default CategoriasHerramientas;
