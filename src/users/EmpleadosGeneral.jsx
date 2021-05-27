import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { Button, Navbar } from "reactstrap";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
    faTools,
  faTrash,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import EditarEmpleado from "./EditarEmpleado";

const EmpleadosGeneral = () => {
  const [empleados, setEmpleados] = useState([""]);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const obtenerEmpleados = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/empleados/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setEmpleados(respuesta.data);
  };

  const buscarEmpleadoID = async (e, emp) => {
    e.preventDefault();
    const id = emp;
    const respuesta = await Axios.get("/empleados/buscar/" + id);
    setInfo(respuesta.data);
  };

  const eliminar = async (id) => {
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/empleados/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerEmpleados();
  };

  return (
    <div>
      {sessionStorage.getItem("token") &&
      sessionStorage.getItem("perfil") === "Administrador" ? (
        <Contenedor3>
          <Navbar>
            <NavLink to="/agregar-empleado">
              <Button
                className="btn btn-info d-flex d-flex justify-content-between align-items-center"
                data-toggle="tooltip"
                data-placement="right"
                title="Agregar empleado"
              >
                <FontAwesomeIcon icon={faUserFriends} />
              </Button>
            </NavLink>
            <NavLink to="/empleados">
              <Button
                className="btn btn-info d-flex d-flex justify-content-between align-items-center"
                data-toggle="tooltip"
                data-placement="right"
                title="Tabla empleados"
              >
                <FontAwesomeIcon icon={faTools} />
              </Button>
            </NavLink>
            <h5>Empleados General</h5>
          </Navbar>
          {/* <Buscar
            className="form-control sm-col-1"
            type="search"
            placeholder="Buscar proveedor..."
            aria-label="Search"
            autoFocus
          ></Buscar> */}
        </Contenedor3>
      ) : (
        null
      )}
      <Contenedorapp>
        <Contenedor>
          {info.length === 0 ? (
            <img
              className="img-thumbnail"
              src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
              alt="POS"
            />
          ) : (
            <EditarEmpleado
              setInfo={setInfo}
              info={info}
              key={empleados._id}
            />
          )}
        </Contenedor>
        <aside>
          <Contenedor2>
            {empleados.map((empleado) => {
              return (
                <Fragment key={empleado._id}>
                  <div
                    className="card ms-1 animate__animated animate__fadeIn"
                    style={{ maxWidth: 240 }}
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
                          <h5 className="card-title">{empleado.nombre}</h5>
                          <h6 className="card-text">
                            Puesto: {empleado.perfil}
                          </h6>

                          <p className="card-text">
                            <small className="text-muted">
                              Estado: {empleado.estado}
                              <button
                                className="btn btn-outline-info mr-1"
                                onClick={(e) =>
                                  buscarEmpleadoID(e, empleado._id)
                                }
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                              <button
                                className="btn btn-outline-danger"
                                onClick={() => eliminar(empleado._id)}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
              );
            })}
          </Contenedor2>
        </aside>
      </Contenedorapp>
    </div>
  );
};

// const Titulo = styled.h4`
//   color: #000;
//   text-align: center;
// `;

const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 4fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
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
// const Buscar = styled.input`
//   border-radius: 10px;
// `;
export default EmpleadosGeneral;
