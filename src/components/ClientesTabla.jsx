import React, { useEffect, useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFileExcel,
  faFilePdf,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.css";
// import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const ClientesTabla = () => {
  const [clientes, setClientes] = useState([]);
  useEffect(() => {
    obtenerClientes();
  }, []);
  //obtener empleados del admin
  const obtenerClientes = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/clientes/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setClientes(respuesta.data);
  };
  const buscar = async (e) => {
    if (e.target.value === "") {
      return obtenerClientes();
    }
    const buscar = e.target.value;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      `/clientes/buscar/${buscar}/${sessionStorage.getItem("idusuario")}`,
      {
        headers: { autorizacion: token },
      }
    );
    setClientes(respuesta.data);
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
          <NavLink to="/cliente">
            <Boton
              className="btn btn-info d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Regresar"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </Boton>
          </NavLink>
          <NavLink to="/agregar-cliente">
            <Boton
              className="btn btn-danger d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Imprimir Clientes"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </Boton>
          </NavLink>
          <NavLink to="/agregar-empleado">
            <Button
              className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Exportar clientes"
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
        ) : null}
      </Navbar>
      <div className="table-responsive table-borderless table-hover">
        <Tabla>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="bg-light card-header py-2">
                    <Titulo>
                      Clientes de{" "}
                      {sessionStorage.getItem("nombre") || "Invitado"}
                    </Titulo>
                  </div>
                  <table
                    className="table table-responsive-lg "
                    id="tablaEmpleados"
                  >
                    <thead className="light">
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Teléfono</th>
                        <th>Código Prom.</th>
                        <th>Cliente</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clientes.map((cliente, i) => {
                        let clase = "alert alert-success";

                        if(cliente.tipocliente === "Minorista"){
                          clase = "alert alert-warning"
                        }
                        return (
                          <tr key={cliente._id}>
                            <td>{i + 1}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellido}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.codigopromocional}</td>
                            <td className={clase}>{cliente.tipocliente}</td>
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
export default ClientesTabla;
