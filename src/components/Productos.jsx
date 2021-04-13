import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import Axios from "axios";
import Categorias from "./Categorias";
import Swal from 'sweetalert2';
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faTrashAlt,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
const Productos = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      "/productos/listarporadmin/" + id,
      {
        headers: { autorizacion: token },
      }
    );
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
          <NavLink to="/categorias">Categorias</NavLink>
        </Menu>
        <main>
          <Switch>
            <Route path="/categorias" component={Categorias} />
          </Switch>
        </main>
        <Navbar>
          <NavLink to="/agregar-producto">
            <Button
              className="btn btn-success d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar producto"
            >
              <FontAwesomeIcon icon={faShoppingBag} />
            </Button>
          </NavLink>
          {sessionStorage.getItem("token") ? (
            <div className="col-md-4 ml-auto mt-4">
              <div className="input-group fa-2x">
                <input
                  className="form-control mr-sm-4"
                  type="search"
                  placeholder="Buscar por producto..."
                  aria-label="Search"
                  onChange={buscar}
                  autoFocus
                  // onChange={buscar}
                />
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
                            <tr key={producto.id}>
                              <td>{i + 1}</td>
                              <td>{producto.sku}</td>
                              <td>{producto.producto}</td>
                              <td>{producto.existencia}</td>
                              <td>{producto.precioventa}</td>
                              <td>{producto.categoria}</td>
                              <td>{producto.unidad}</td>
                              <td>
                                {producto.estado}
                              </td>
                              <td>
                                <button
                                  className="bn btn-outline-dark mr-2"
                                  //   onClick={() => eliminar(empleado._id)}
                                >
                                  <FontAwesomeIcon icon={faUserEdit} />
                                </button>
                                <button className="bn btn-outline-dark" onClick={() => eliminar(producto._id)}>
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
  border-radius: 3px;

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

const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;

  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
const Tabla = styled.section`
  background: #fff;
  text-align: center;
  font-family: "Open Sans", sans-serif;
`;

const Titulo = styled.h4`
  color: #000;
`;

export default Productos;
