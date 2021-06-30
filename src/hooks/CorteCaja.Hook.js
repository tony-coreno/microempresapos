import { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

export const CorteCajaHook = () => {
    const [cantidad, setCantidad] = useState(0);

  const guardar = async (e) => {
    e.preventDefault();
    const corte = {
      usuario: sessionStorage.getItem("idusuario"),
      jefe: sessionStorage.getItem("idusuario"),
      cantidad,
    };
    const respuesta = await Axios.post("/corte/guardar", corte);
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1200
    });
  };
  return{
      guardar,
      setCantidad

  }

}
