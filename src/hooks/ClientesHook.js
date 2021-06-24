import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export const ClientesHook = () => {
  const [clientes, setclientes] = useState([""]);
  const [info, setInfo] = useState([]);

  const obtenerClientes = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/clientes/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setclientes(respuesta.data);
  };
  const buscarCliente = async (e, prov) => {
    e.preventDefault();
    const id = prov;
    const respuesta = await Axios.get("/clientes/buscar/" + id);
    setInfo(respuesta.data);
  };
  const eliminar = async (id) => {
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/clientes/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerClientes();
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
    setclientes(respuesta.data);
  };

  return {
    clientes,
    info,
    setInfo,
    obtenerClientes,
    buscarCliente,
    eliminar,
    buscar,
  };
};

export const ClientesTablaHook = () => {
  const [clientes, setClientes] = useState([]);

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
  return{
    clientes,
    buscar,
    obtenerClientes,
    
  }
};
