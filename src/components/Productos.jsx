import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import Axios from "axios";
import Categorias from "./Categorias";
import Swal from "sweetalert2";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePdf,
  faFilter,
  faSearch,
  faShoppingBag,
  faTrashAlt,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
const Productos = () => {
  const [productos, setProductos] = useState([""]);
  useEffect(() => {
    obtenerProductos();
    //obtenerProductosEmpleados();
  }, []);

  const obtenerProductos = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/productos/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setProductos(respuesta.data);
  };
  const obtenerProductosEmpleados = async () => {
    const token = sessionStorage.getItem("token");
    const jefe = sessionStorage.getItem("jefe")
    const respuesta = await Axios.get("/productos/listarporadmin/" + jefe, {
      headers: { autorizacion: token },
    });
    setProductos(respuesta.data);
  };
  const buscar = async (e) => {
    if (e.target.value === "") {
      return obtenerProductos();
    }
    const buscar = e.target.value;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      `/productos/buscar/${buscar}/${sessionStorage.getItem("idusuario")}`,
      {
        headers: { autorizacion: token },
      }
    );
    setProductos(respuesta.data);
  };
  const eliminar = async (id) => {
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/productos/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerProductos();
  };
  return (
    <div>
      <Contenedorapp>
        <Menu>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/categorias">Categorías</NavLink>
          <NavLink to="/devoluciones">Devoluciones</NavLink>
        </Menu>
        <main>
          <Switch>
            <Route path="/categorias" component={Categorias} />
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
                  onChange={buscar}
                  autoFocus
                ></Buscar>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </Navbar>
        <div className="table-responsive table-borderless table-hover">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="bg-light card-header">
                      <Titulo>
                        Productos de{" "}
                        {sessionStorage.getItem("nombre") || "Invitado"}
                      </Titulo>
                    </div>
                    <table className="table table-responsive-lg ">
                      <thead className="light">
                        <tr>
                          <th>#</th>
                          <th>SKU</th>
                          <th>Marca</th>
                          <th>Producto</th>
                          <th>Existencia</th>
                          <th>Precio de venta</th>
                          <th>Categoría</th>
                          <th>Unidad</th>
                          <th>Estado</th>
                          <th>Opciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productos.map((producto, i) => {
                          return (
                            <tr key={producto._id}>
                              <td>{i + 1}</td>
                              <td>{producto.sku}</td>
                              <td>{producto.marca}</td>
                              <td>{producto.producto}</td>
                              <td>{producto.existencia}</td>
                              <td>{producto.precioventa}</td>
                              <td>{producto.categoria}</td>
                              <td>{producto.unidad}</td>
                              <td>{producto.estado}</td>
                              <td>
                                <button
                                  className="bn btn-outline-dark mr-2"
                                  //   onClick={() => eliminar(empleado._id)}
                                >
                                  <FontAwesomeIcon icon={faUserEdit} />
                                </button>
                                <button
                                  className="bn btn-outline-dark"
                                  onClick={() => eliminar(producto._id)}
                                >
                                  <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Contenedorapp>
    </div>
  );
};

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

const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;

  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
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

export default Productos;
