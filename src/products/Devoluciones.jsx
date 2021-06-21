import React from "react";
import { Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BarraProductos from "./BarraProductos";
import {
  Contenedorapp,
  Contenedor,
  Contenedor2,
  Buscar,
} from "./styled/DevolucionStyle";

const Devoluciones = () => {
  return (
    <div>
      <BarraProductos />
      <Navbar>
        <div className="col-md-4 ml-auto">
          <div className="input-group fa-2x">
            <Buscar
              className="form-control mr-sm-4"
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
              autoFocus
            ></Buscar>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </Navbar>
      <Contenedorapp>
        <Contenedor>
          <h4>Devoluciones</h4>
        </Contenedor>
        <aside>
          <Contenedor2>
            <h3>Productos</h3>
          </Contenedor2>
        </aside>
      </Contenedorapp>
    </div>
  );
};

export default Devoluciones;
