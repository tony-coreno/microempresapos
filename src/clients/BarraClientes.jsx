import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Navbar } from "reactstrap";
import styled from "styled-components";
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

const Contenedor3 = styled.div`
  display: flex;
  padding: 0px;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  //background: #eef3f5;
  background: #f9f9f9;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;
export default BarraClientes;
