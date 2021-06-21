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
import { Herramientas, Boton, Buscar, Tabla } from "../users/style/EmpleadoStyle";
import EmpleadosMap from "../users/EmpleadosMap";
const Empleados = () => {
  const [empleados, setEmpleados] = useState([]);
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
  return (
    <>
      <Navbar>
        <Herramientas className="">
          <NavLink to="/empleado">
            <Boton
              className="btn btn-primary d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Regresar"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
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
        ) : null}
      </Navbar>
      <div className="table-responsive table-borderless table-hover">
        <Tabla>
         <EmpleadosMap empleados={empleados} />
        </Tabla>
      </div>
    </>
  );
};

export default Empleados;
