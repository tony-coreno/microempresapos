import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Navbar } from "reactstrap";
import ClientesMap from "../clients/ClientesMap";
import { Tabla } from "../clients/style/ClienteStyle";
import ClientesHerramientas from "../clients/ClientesHerramientas";

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
      <Navbar>
        <ClientesHerramientas buscar={buscar} />
      </Navbar>
      <div className="table-responsive table-borderless table-hover">
        <Tabla>
          <ClientesMap clientes={clientes} />
        </Tabla>
      </div>
    </>
  );
};

export default ClientesTabla;
