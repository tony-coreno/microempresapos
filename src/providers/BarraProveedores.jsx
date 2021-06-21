import React from "react";
import { Button, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { Contenedor3 } from "./style/ProveedorStyle";

const BarraProveedores = () => {
  return (
    <>
      <Contenedor3>
        <Navbar>
          <NavLink to="/nuevo-proveedor">
            <Button
              className="btn btn-info d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar proveedor"
            >
              <FontAwesomeIcon icon={faUserFriends} />
            </Button>
          </NavLink>
          <h5>Proveedores</h5>
        </Navbar>
      </Contenedor3>
    </>
  );
};


export default BarraProveedores;
