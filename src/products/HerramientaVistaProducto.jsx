import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Buscar } from "./styled/HerramientasProductoStyle";
const HerramientaVistaProducto = ({buscar}) => {
  return (
    <>
      <Navbar>
        <NavLink to="/productos">
          <Button
            className="btn btn-success d-flex d-flex justify-content-between align-items-center"
            data-toggle="tooltip"
            data-placement="right"
            title="Regresar"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </NavLink>
        <div className="col-md-4 ml-auto">
          <div className="input-group fa-2x">
            <Buscar
              className="form-control mr-sm-4"
              type="search"
              placeholder="Buscar por producto..."
              aria-label="Search"
              onChange={buscar}
              autoFocus
            ></Buscar>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default HerramientaVistaProducto;
