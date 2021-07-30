import { useState, useContext } from "react";
import { ContextEstado } from "../context/ContextEstado";
import Axios from "axios";
import Swal from "sweetalert2";

export const PagarHook = () => {
  const [cambio, setCambio] = useState(0);
  let restante = 0;
  const { total, metodopago, ventaProducto } = useContext(ContextEstado);
  let f = Date();
  let autoriza;
  let change = 0;
  const final = async () => {
    const venta = {
      idusuario: sessionStorage.getItem("idusuario"),
      jefe: autoriza,
      total: total,
      metodopago: metodopago,
      fechaventa: f,
      fecha: Date.now(),
      articulos: ventaProducto,
    };
    const token = sessionStorage.getItem("token");
    if (cambio >= 0) {
      const respuesta = await Axios.post("/ventas/crearventa", venta, {
        headers: { autorizacion: token },
      });
      const mensaje = respuesta.data.mensaje;
      Swal.fire({
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
      });
      setTimeout(() => {
        window.location.href = "/crear-venta";
      }, 1500);
      return cambio;
    } else {
      alert("Mayor");
    }
  };
  if (!sessionStorage.getItem("jefe")) {
    autoriza = sessionStorage.getItem("idusuario");
  } else {
    autoriza = sessionStorage.getItem("jefe");
  }
  const guardar = async (e) => {
    e.preventDefault();
    change = (await total) - cambio;
    if (change > 0) {
      Swal.fire({
        icon: "error",
        title: "Cantidad insuficiente",
        showConfirmButton: false,
        timer: 1000,
      });
      return null;
    }
    await Swal.fire({
      title: "Cambio",
      text: `${Math.abs(change)}`,
      icon: "success",
      confirmButtonText: "De acuerdo",
      cancelButtonText: "Cancel",
    });
    await final();
  };

  return {
    guardar,
    setCambio,
    cambio,
    restante,
  };
};
