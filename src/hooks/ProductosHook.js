import { useState } from "react";
import Axios from "axios";

export const ProductosHook = () => {
    const [productos, setProductos] = useState([]);

    const obtenerProductos = async () => {
        const id = sessionStorage.getItem("idusuario");
        const token = sessionStorage.getItem("token");
        const respuesta = await Axios.get("/productos/listarporadmin/" + id, {
          headers: { autorizacion: token },
        });
        setProductos(respuesta.data);
      };

      const obtenerProductosEmpleados = async () => {
        const token = sessionStorage.getItem("token");
        const jefe = sessionStorage.getItem("jefe");
        const respuesta = await Axios.get("/productos/listarporadmin/" + jefe, {
          headers: { autorizacion: token },
        });
        setProductos(respuesta.data);
      };
      const buscar = async (e) => {
        if (e.target.value === "") {
          return obtenerProductos();
        }
        const buscar = e.target.value.toLowerCase();
        const token = sessionStorage.getItem("token");
        const respuesta = await Axios.get(
          `/productos/buscar/${buscar}/${sessionStorage.getItem("idusuario")}`,
          {
            headers: { autorizacion: token },
          }
        );
        setProductos(respuesta.data);
      };
    return{
        productos,
        obtenerProductos,
        obtenerProductosEmpleados,
        buscar
    }

}