import React from "react";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import Productos from "../components/Productos";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
  faFileExcel,
  faFilePdf,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const VentasDia = () => {
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
          <NavLink to="/reportes">
            <Boton
              className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Reportes"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
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
        ) : (
          <div></div>
        )}
      </Navbar>
      <Contenedorapp>
        <Contenedor>
          <h4>Ventas</h4>
        </Contenedor>
        <aside>
          <Contenedor2>
            <h3>Productos</h3>
            {/* {proveedores.map((provider) => {
              return (
                <div
                  className="card ms-1 animate__animated animate__fadeIn"
                  style={{ maxWidth: 240 }}
                  key={provider._id}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src="https://img.icons8.com/color/96/000000/salesman.png"
                        className="card-img"
                        alt="POS"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{provider.nombre}</h5>
                        <h6 className="card-text">
                          Marca: {provider.marcaproveedor}
                        </h6>

                        <p className="card-text">
                          <small className="text-muted">
                            Tel: {provider.telefono}
                            <button className="btn btn-outline-info">
                              <FontAwesomeIcon icon={faQuestion} />
                            </button>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })} */}
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

// const Titulo = styled.h6`
//   color: #fff;
//   text-align: center;
// `;
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

const Titulo = styled.h4`
  color: #000;
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
export default VentasDia;
