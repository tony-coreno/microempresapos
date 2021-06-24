import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
export const ProveedoresHook = () => {
  const [proveedores, setProveedores] = useState([""]);
  const [info, setInfo] = useState([]);

  const obtenerProveedores = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/proveedores/proveedorporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setProveedores(respuesta.data);
  };

  const buscarProveedor = async (e, prov) => {
    e.preventDefault();
    const id = prov;
    const respuesta = await Axios.get("/proveedores/buscar/" + id);
    setInfo(respuesta.data);
  };
  const eliminar = async (id) => {
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/proveedores/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerProveedores();
  };
  const buscar = async (e) => {
    if (e.target.value === "") {
      return obtenerProveedores();
    }
    const buscar = e.target.value;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      `/proveedores/buscar/${buscar}/${sessionStorage.getItem("idusuario")}`,
      {
        headers: { autorizacion: token },
      }
    );
    setProveedores(respuesta.data);
  };

  return {
    proveedores,
    info,
    obtenerProveedores,
    buscarProveedor,
    eliminar,
    buscar,
    setInfo,
  };
};
