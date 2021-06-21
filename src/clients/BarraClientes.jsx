import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Navbar } from "reactstrap";
import { Contenedor3 } from "./style/ClienteStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faUserFriends } from "@fortawesome/free-solid-svg-icons";

const BarraClientes = () => {
  return (
    <>
      <Contenedor3>
        <Navbar>
          <NavLink to="/nuevo-cliente">
            <Button
              className="btn btn-info d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar cliente"
            >
              <FontAwesomeIcon icon={faUserFriends} />
            </Button>
          </NavLink>
          <NavLink to="/clientes-tabla">
            <Button
              className="btn btn-info d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Clientes tabla"
            >
              <FontAwesomeIcon icon={faTools} />
            </Button>
          </NavLink>
          <h5>Clientes General</h5>
        </Navbar>
      </Contenedor3>
    </>
  );
};

export default BarraClientes;
