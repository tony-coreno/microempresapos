import React, { useContext, useEffect } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import { Button, Navbar } from "reactstrap";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePdf,
  faSearch,
  faTrashAlt,
  faUserEdit,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { ContextEstado } from "../context/ContextEstado";

const Empleados = () => {
  const { empleados, setEmpleados } = useContext(ContextEstado);
  useEffect(() => {
    obtenerEmpleados();
  }, []);
  //obtener empleados del admin
  const obtenerEmpleados = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/empleados/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setEmpleados(respuesta.data);
    console.log(respuesta.data.nombre);
  };
  const buscar = async (e) => {
    if (e.target.value === "") {
      return obtenerEmpleados();
    }
    const buscar = e.target.value;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      `/empleados/buscar/${buscar}/${sessionStorage.getItem("idusuario")}`,
      {
        headers: { autorizacion: token },
      }
    );
    setEmpleados(respuesta.data);
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
    <>
      <Navbar>
        <Herramientas className="">
          <NavLink to="/agregar-empleado">
            <Button
              className="btn btn-info d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar Empleado"
            >
              <FontAwesomeIcon icon={faUserPlus} />
            </Button>
          </NavLink>

          <NavLink to="/agregar-empleado">
            <Button
              className="btn btn-danger d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Imprimir empleados"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </Button>
          </NavLink>
          <NavLink to="/agregar-empleado">
            <Button
              className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Exportar empleados"
            >
              <FontAwesomeIcon icon={faFileExcel} />
            </Button>
          </NavLink>
        </Herramientas>
        {sessionStorage.getItem("token") ? (
          <div className="col-md-4 ml-auto">
            <div className="input-group fa-2x">
              <input
                className="form-control mr-sm-4"
                type="search"
                placeholder="Buscar por nombre..."
                aria-label="Search"
                onChange={buscar}
                autoFocus
              />
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </Navbar>
      <div className="table-responsive table-borderless table-hover">
        <Tabla>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="bg-info card-header py-2">
                    <Titulo>
                      Empleados de{" "}
                      {sessionStorage.getItem("nombre") || "Invitado"}
                    </Titulo>
                  </div>
                  <table className="table table-responsive-lg ">
                    <thead className="light">
                      <tr>
                        <th>#</th>
                        <th># Empleado</th>
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Usuario</th>
                        <th>Perfil</th>
                        <th>Estado</th>
                        <th>Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {empleados.map((empleado, i) => {
                        return (
                          <tr key={empleado.id}>
                            <td>{i + 1}</td>
                            <td>{empleado.numeroempleado}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellidopaterno}</td>
                            <td>{empleado.usuario}</td>
                            <td>{empleado.perfil}</td>
                            <td>{empleado.estado}</td>
                            <td>
                              <button className="bn btn-outline-info mr-2">
                                <FontAwesomeIcon icon={faUserEdit} />
                              </button>
                              <button
                                className="bn btn-outline-dark"
                                onClick={() => eliminar(empleado._id)}
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
        </Tabla>
      </div>
    </>
  );
};

const Tabla = styled.section`
  background: #fff;
  text-align: center;
  font-family: "Open Sans", sans-serif;
`;

const Titulo = styled.h4`
  color: #fff;
`;

const Herramientas = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px;
  padding: 10px;
`;
export default Empleados;
