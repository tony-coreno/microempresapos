import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const BarraProductosGeneral = ({ buscar }) => {
  return (
    <>
      <NavLink to="/productos">
        <Button
          className="btn btn-dark d-flex d-flex justify-content-between align-items-center"
          data-toggle="tooltip"
          data-placement="right"
          title="Agregar producto"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
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

export default BarraProductosGeneral;
