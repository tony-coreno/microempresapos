import React, { useContext, useEffect, useState } from "react";
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
import ActualizarEmpleados from "../modals/ActualizarEmpleados";
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Empleados = () => {
  const [modal, setModal] = useState(false);
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
    {/* <Barra /> */}
    {/* <div>
      <ReactHTMLTableToExcel
        id="botonExportarExcel"
        className="btn btn-outline-success"
        table="tablaEmpleados"
        filename={`Empleados-${f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}}`}
        sheet="13-04"
        buttonText={<FontAwesomeIcon icon={faFileExcel} />}
      />
    </div> */}
      <Navbar>
        <Herramientas className="">
          <NavLink to="/agregar-empleado">
            <Boton
              className="btn btn-info d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar Empleado"
            >
              <FontAwesomeIcon icon={faUserPlus} />
            </Boton>
          </NavLink>

          <NavLink to="/agregar-empleado">
            <Boton
              className="btn btn-danger d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Imprimir empleados"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </Boton>
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
              <Buscar
                className="form-control mr-sm-4"
                type="search"
                placeholder="Buscar por nombre..."
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
        <Tabla>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="bg-light card-header py-2">
                    <Titulo>
                      Empleados de{" "}
                      {sessionStorage.getItem("nombre") || "Invitado"}
                    </Titulo>
                  </div>
                  <table className="table table-responsive-lg " id="tablaEmpleados">
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
                              <button className="bn btn-outline-info mr-2" onClick={() => setModal(true)}>
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
        <ActualizarEmpleados setModal={setModal} modal={modal} />
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
  color: #000;
`;

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

const Buscar = styled.input`

  border-radius: 10px;

`;
export default Empleados;
