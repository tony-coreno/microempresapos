import React from "react";
import { Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import {
  Contenedorapp,
  Contenedor2,
  Boton,
  Herramientas,
} from "../components/style/Kardex.Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faOutdent,
} from "@fortawesome/free-solid-svg-icons";
// import HerramientasKardex from "../kardex/HerramientasKardex";

const AgregarMercancia = () => {
  return (
    <div>
      <Navbar>
        {/* <HerramientasKardex /> */}
        <Herramientas>
          <NavLink to="/kardex">
            <Boton
              className="btn btn-light d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar mercancía"
            >
              <FontAwesomeIcon icon={faArrowCircleLeft} /> Regresar
            </Boton>
          </NavLink>
          <NavLink to="/agregar-producto">
            <Boton
              className="btn btn-light d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Quitar inventario"
            >
              <FontAwesomeIcon icon={faOutdent} />
              <p> </p> Salida mercancía
            </Boton>
          </NavLink>
        </Herramientas>
      </Navbar>
      <Contenedorapp>
        <aside>
          <Contenedor2>
            <h3>Producto</h3>
          </Contenedor2>
        </aside>
      </Contenedorapp>
    </div>
  );
};

export default AgregarMercancia;
