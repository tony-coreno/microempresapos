import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Navbar } from "reactstrap";
import { Tabla } from "../users/style/EmpleadoStyle";
import EmpleadosMap from "../users/EmpleadosMap";
import HerramientasEmpleados from "../users/HerramientasEmpleados";
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
        <HerramientasEmpleados buscar={buscar} />
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
