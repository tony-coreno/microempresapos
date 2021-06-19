import React from "react";
import styled from "styled-components";
import { Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BarraProductos from "./BarraProductos";

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

const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
const Contenedor = styled.div`
  padding: 25px;
  width: 100%;
  display: grid;
  gap: 20px;
  //background: #eef3f5;
  background: #fff;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;
const Contenedor2 = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 2fr;
  //background: #eef3f5;
  background: #fff;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;
const Buscar = styled.input`
  border-radius: 10px;
`;
export default Devoluciones;
