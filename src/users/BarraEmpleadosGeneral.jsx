import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { Contenedor3 } from "./style/EmpleadoStyle";
const BarraEmpleadosGeneral = () => {
  return (
    <>
      <Contenedor3>
        <Navbar>
          <NavLink to="/agregar-empleado">
            <Button
              className="btn btn-info d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar empleado"
            >
              <FontAwesomeIcon icon={faUserFriends} />
            </Button>
          </NavLink>
          <NavLink to="/empleados">
            <Button
              className="btn btn-info d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Tabla empleados"
            >
              <FontAwesomeIcon icon={faTools} />
            </Button>
          </NavLink>
          <h5>Empleados General</h5>
        </Navbar>
      </Contenedor3>
    </>
  );
};

export default BarraEmpleadosGeneral;
