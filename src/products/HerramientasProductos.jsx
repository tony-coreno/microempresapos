import React from 'react'
import {  NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFileExcel,
  faFilePdf,
  faFilter,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Button, Navbar } from "reactstrap";
const HerramientasProductos = () => {
    return ( 
        <Herramientas className="">
            <NavLink to="/producto">
              <Boton
                className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
                data-toggle="tooltip"
                data-placement="right"
                title="Regresar"
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </Boton>
            </NavLink>
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
     );
}
 
const Herramientas = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px;
  padding: 10px;
  gap: 20px;
`;
const Boton = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
`;
export default HerramientasProductos;