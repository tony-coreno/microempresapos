import React from "react";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import Productos from "./Productos";
import CategoriasProductos from "../products/CategoriasProductos";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePdf,
  faFilter,
  faSearch,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const Categorias = () => {
  return (
    <div>
      <Menu>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/categorias">Categorías</NavLink>
        <NavLink to="/devoluciones">Devoluciones</NavLink>
      </Menu>
      <main>
        <Switch>
          <Route path="/productos" component={Productos} />
        </Switch>
      </main>
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
                placeholder="Buscar por producto..."
                aria-label="Search"
                autoFocus
              ></Buscar>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        ) : null}
      </Navbar>
      <Contenedorapp>
        <Contenedor2>
          <h4>Categorias de admin</h4>
          <CategoriasProductos />
        </Contenedor2>
        <aside>
          <Contenedor2>
            <h3>Productos</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Categoría</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Opción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
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
  //grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

// const Titulo = styled.h6`
//   color: #fff;
//   text-align: center;
// `;
// const Contenedor = styled.div`
//   padding: 25px;
//   width: 100%;
//   display: grid;
//   gap: 20px;
//   //background: #eef3f5;
//   background: #fff;
//   margin: 10px 0;
//   border-radius: 10px;
//   box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
// `;
const Contenedor2 = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 4fr;
  //background: #eef3f5;
  background: #fff;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #147551;
  grid-column: span 2;
  border-radius: 10px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #147571;
    text-decoration: none;
  }
  a.active {
    border-bottom: 2px solid #f2f2f2;
    padding-bottom: 3px;
  }
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
export default Categorias;
