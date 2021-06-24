import { useState } from "react";
import Axios from "axios";

export const CategoriasHook = () => {
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(true);
  const [unidades, setUnidades] = useState([]);
  const [unidad, setUnidad] = useState(true);

  const obtenerCategorias = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/categorias/obtener/" + id, {
      headers: { autorizacion: token },
    });
    setCategorias(respuesta.data);
  };

  const obtenerUnidades = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/unidades/obtener/" + id, {
      headers: { autorizacion: token },
    });
    setUnidades(respuesta.data);
  };

  const buscar = async (e) => {
    if (e.target.value === "") {
      return obtenerCategorias();
    }
    const categoria = e.target.value;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      `/categorias/buscar/${categoria}/${sessionStorage.getItem("idusuario")}`,
      {
        headers: { autorizacion: token },
      }
    );
    setCategorias(respuesta.data);
  };
  return {
    categorias,
    categoria,
    unidades,
    unidad,
    setUnidad,
    obtenerCategorias,
    obtenerUnidades,
    setCategoria,
    buscar,
  };
};
