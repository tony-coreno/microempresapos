import { useState, useContext } from "react";
import { ContextEstado } from "../context/ContextEstado";
import Axios from "axios";
import Swal from "sweetalert2";


export const PagarHook = () => {
    const [cambio, setCambio] = useState(0);
    let restante = 0;
    const { total, metodopago, ventaProducto } = useContext(ContextEstado);
    let f = Date();
  const guardar = async (e) => {
    e.preventDefault();
    const venta = {
      idusuario: sessionStorage.getItem("idusuario"),
      jefe: sessionStorage.getItem("idusuario"),
      total: total,
      metodopago: metodopago,
      fechaventa: f,
      fecha: Date.now(),
      articulos: ventaProducto,
    };
    const token = sessionStorage.getItem("token");
    darCambio();

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
  const darCambio = () => {
    restante = cambio - total;
  };
  return{
      guardar,
      setCambio,
      cambio,
      restante,
      darCambio
  }
};
