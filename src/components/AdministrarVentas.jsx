import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import Swal from "sweetalert2";
import Reportes from "./Reportes";
import CrearVenta from "./CrearVenta";
const Almacen = () => {
  const [pagos, setPagos] = useState([]);
  const [nombre, setNombre] = useState("");
  // const [nuevoEstado, setNuevoEstado] = useState("");

  useEffect(() => {
    obtenerPagos();
  }, []);

  const obtenerPagos = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/pagos/pagoadmin/" + id, {
      headers: { autorizacion: token },
    });
    setPagos(respuesta.data);
  };

  const guardar = async (e) => {
    e.preventDefault();
    if (nombre === "") {
      Swal.fire({
        icon: "error",
        title: "Agrega pago válido",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    const pago = {
      jefe: sessionStorage.getItem("idusuario"),
      nombre: nombre,
    };
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.post("/pagos/crear", pago, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "warning",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    setNombre("");
    obtenerPagos();
  };

  const eliminar = async (e, id) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/pagos/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "warning",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerPagos();
  };
  const actualizar = async (e, medio) => {
    e.preventDefault();
    const id = medio._id;
    const token = sessionStorage.getItem("token");
    const pago = {
      estado: `${!medio.estado}`,
    };
    const respuesta = await Axios.put("/pagos/actualizar/" + id, pago, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1000,
    });
    obtenerPagos();
  };
  return (
    <div>
      <Contenedorapp>
        <Menu>
          <NavLink to="/crear-venta">Crear Venta</NavLink>
          <NavLink to="/administrar-venta">Administrar</NavLink>
          <NavLink to="/reportes">Reportes</NavLink>
        </Menu>
        <main>
          <Switch>
            <Route path="/crear-venta" component={CrearVenta} />
            <Route path="/reportes" component={Reportes} />
          </Switch>
        </main>
        <h3>Administrar</h3>
        <form onSubmit={guardar}>
          <hr />
          <p></p>
          <div className="row">
            <div className="col">
              <h6>Agregar medio de pago</h6>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Inserte medio"
                onChange={(e) => setNombre(e.target.value)}
                autoFocus
              />
            </div>
            <div className="col">
              <h6>IVA (16%)</h6>
              <select id="inputState" className="form-control mt-2">
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>
          </div>
        </form>
        <hr />
        <form>
          <div className="table-responsive table-borderless table-hover">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="bg-light card-header py-1">
                      <Titulo>Detalle de venta</Titulo>
                    </div>
                    <table className="table table-responsive-sm ">
                      <thead className="light">
                        <tr>
                          <th>Medio de pago</th>
                          <th>Estado</th>
                          <th>Eliminar</th>
                        </tr>
                      </thead>
                      <tbody>
                        {pagos.map((medio, i) => {
                          if (medio.nombre === "") {
                            return;
                          }
                          let valor = "";
                          let clase = "";
                          if (medio.estado) {
                            valor = "Activo";
                            clase = "btn btn-outline-success";
                          } else {
                            valor = "Inactivo";
                            clase = "btn btn-outline-info";
                          }
                          return (
                            <tr key={medio._id}>
                              <td>{medio.nombre}</td>
                              <td>
                                <button
                                  className={clase}
                                  onClick={(e) => actualizar(e, medio)}
                                >
                                  {valor}
                                </button>
                              </td>
                              <td>
                                <button
                                  className="btn btn-outline-danger"
                                  onClick={(e) => eliminar(e, medio._id)}
                                >
                                  Eliminar
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
          <hr />
          <SeccionBoton>
            <button className="btn btn-outline-success">Guardar</button>
          </SeccionBoton>
        </form>
      </Contenedorapp>
    </div>
  );
};

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #147551;
  //grid-column: span 2;
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
const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 20px;
  //grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
const SeccionBoton = styled.div`
  width: 50%;
`;
const Titulo = styled.h6`
  color: #fff;
  text-align: center;
`;

export default Almacen;
