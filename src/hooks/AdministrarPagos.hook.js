import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
export const AdministrarPagosHook = () => {
  const [pagos, setPagos] = useState([""]);
  const [nombre, setNombre] = useState("");
  const [iva, setIva] = useState([""]);

  const obtenerPagos = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/pagos/pagoadmin/" + id, {
      headers: { autorizacion: token },
    });
    setPagos(respuesta.data);
  };

  const obtenerPagosEmpleados = async () => {
    const jefe = sessionStorage.getItem("jefe");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/pagos/pagoadmin/" + jefe, {
      headers: { autorizacion: token },
    });
    setPagos(respuesta.data);
  };

  const guardar = async (e) => {
    e.preventDefault();
    if (nombre === "") {
      Swal.fire({
        icon: "error",
        title: "Agrega pago válido",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    const pago = {
      jefe: sessionStorage.getItem("idusuario"),
      nombre: nombre,
    };
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.post("/pagos/crear", pago, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "warning",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    setNombre("");
    obtenerPagos();
  };

  const eliminar = async (e, id) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/pagos/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "warning",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerPagos();
  };
  const actualizar = async (e, medio) => {
    e.preventDefault();
    const id = medio._id;
    const token = sessionStorage.getItem("token");
    const pago = {
      estado: `${!medio.estado}`,
    };
    const respuesta = await Axios.put("/pagos/actualizar/" + id, pago, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1000,
    });
    obtenerPagos();
  };
  const actualizarIva = async (e, impuesto) => {
    e.preventDefault();
    const id = impuesto._id;
    const ivanegocio = {
      estado: `${!impuesto.estado}`,
    };
    const respuesta = await Axios.put("/iva/actualizar/" + id, ivanegocio);
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1000,
    });
    obtenerIva();
  };

  const obtenerIva = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/iva/encontrar/" + id, {
      headers: { autorizacion: token },
    });
    setIva(respuesta.data);
  };

  return {
    pagos,
    setPagos,
    nombre,
    setNombre,
    iva,
    setIva,
    obtenerPagos,
    obtenerPagosEmpleados,
    guardar,
    eliminar,
    actualizar,
    actualizarIva,
    obtenerIva,

  };
};
