import React, { useEffect, useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import { Button, Navbar } from "reactstrap";
//import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch,
  faTrashAlt,
  faUserEdit,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

// const tablaEmpleados =[
//     {id:1, nombre:"Antonio", apellido: "Coreño", perfil: "Administrador", estatus: "Activo"},
//     {id:2, nombre:"Jose", apellido: "Torres", perfil: "Administrador", estatus: "Activo"},
//     {id:3, nombre:"Edgar", apellido: "Perez", perfil: "Vendedor", estatus: "Activo"},
//     {id:4, nombre:"Juan", apellido: "Sanchez", perfil: "Vendedor", estatus: "Activo"},
//     {id:5, nombre:"Pedro", apellido: "Torres", perfil: "Vendedor", estatus: "Activo"},
// ];

const Empleados = () => {
  const [empleados, setEmpleados] = useState([]);
  useEffect(() => {
    obtenerEmpleados();
  }, []);
  //obtener empleados del admin
  const obtenerEmpleados = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      "http://localhost:4000/empleados/listarporadmin/" + id,
      {
        headers: { autorizacion: token },
      }
    );
    setEmpleados(respuesta.data);
    console.log(respuesta.data.nombre);
  };
  //   const {numeroempleado,nombre,apellidopaterno,usuario,perfil,estado} = empleados
  //   const columnas = [
  //     {
  //         name: "#Empleado",
  //         selector: 'a',
  //         sortable: true,
  //         grow: 1
  //     },
  //     {
  //         name: "Nombre",
  //         selector: nombre,
  //         sortable: true
  //     },
  //     {
  //         name: "Apellido Paterno",
  //         selector: apellidopaterno,
  //         sortable: true
  //     },
  //     {
  //         name: "Usuario",
  //         selector: usuario,
  //         sortable: true
  //     },
  //     {
  //         name: "Perfil",
  //         selector: perfil,
  //         sortable: true
  //     },
  //     {
  //         name: "Estado",
  //         selector: estado,
  //         sortable: true
  //     }
  //     ];

  //     const paginacionOpcion = {
  //         rowsPerPageText: 'Filas por página',
  //         rangeSeparatorText: 'de',
  //         selectAllRowsItem: true,
  //         selectAllRowsItemText: 'Todos'
  //     }

  return (
    <>
      <Navbar>
        <NavLink to="/agregar-empleado">
          <Button className="btn btn-info d-flex d-flex justify-content-between align-items-center pr-2"
          data-toggle="tooltip"
          data-placement="right"
          title="Agregar Empleado"
          >
            <FontAwesomeIcon icon={faUserPlus} />
          </Button>
        </NavLink>
        <div className="col-md-4 ml-auto">
            <div className="input-group fa-2x">
              <input
                className="form-control mr-sm-4"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
              /><FontAwesomeIcon icon={faSearch}/>
            </div>
          </div>
      </Navbar>
      <div className="table-responsive table-borderless table-hover">
        <Tabla>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="bg-info card-header">
                    <Titulo>
                      Empleados de { sessionStorage.getItem("nombre") || 'Invitado' }
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
                              <button
                                className="bn btn-outline-info mr-2"
                                //   onClick={() => eliminar(empleado._id)}
                              >
                                <FontAwesomeIcon icon={faUserEdit} />
                              </button>
                              <button className="bn btn-outline-dark">
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
export default Empleados;
