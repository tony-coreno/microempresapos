import React from "react";
import styled from "styled-components";
import {  NavLink } from "react-router-dom";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePdf,
  faFilter,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import ConsultaKardex from "../kardex/ConsultaKardex";
import TablaKardex from "../kardex/TablaKardex";

const Kardex = () => {
  return (
    <div>
      <Navbar>
        <Herramientas className="">
          <NavLink to="/agregar-producto">
            <Boton
              className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar Producto"
            >
              <FontAwesomeIcon icon={faShoppingBag} />
            </Boton>
          </NavLink>

          <NavLink to="/agregar-empleado">
            <Boton
              className="btn btn-danger d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Imprimir productos"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </Boton>
          </NavLink>
          <NavLink to="/agregar-empleado">
            <Button
              className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Exportar productos"
            >
              <FontAwesomeIcon icon={faFileExcel} />
            </Button>
          </NavLink>

          <NavLink to="/productos-cards">
            <Button
              className="btn btn-warning d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Filtrar stock"
            >
              <FontAwesomeIcon icon={faFilter} />
            </Button>
          </NavLink>
        </Herramientas>
        {sessionStorage.getItem("token") ? (
          <div className="col-md-4 ml-auto">
            <div className="input-group fa-2x">
              <Buscar
                className="form-control mr-sm-4"
                type="search"
                placeholder="Buscar por SKU..."
                aria-label="Search"
                autoFocus
              ></Buscar>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        ) : (
          null
        )}
      </Navbar>
      <Contenedorapp>
        <Contenedor>
          <ConsultaKardex />
        </Contenedor>
        <aside>
          <Contenedor2>
            <h3>Productos</h3>
            <TablaKardex />
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
  grid-template-columns: 2fr 4fr;
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
  //grid-template-columns: 2fr 2fr;
  //background: #eef3f5;
  background: #fff;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

const Boton = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
`;


const Herramientas = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px;
  padding: 10px;
  gap: 20px;
`;

const Buscar = styled.input`
  border-radius: 10px;
`;
export default Kardex;
