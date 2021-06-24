import { useState } from "react";
import Axios from "axios";

export const EmpleadosHook = () => {
  const [empleados, setEmpleados] = useState([]);

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
  return{
      empleados,
      buscar,
      obtenerEmpleados
  }
};
