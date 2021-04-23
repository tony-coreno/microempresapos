import React, { useState } from "react";
import Axios from "axios";
const ContextEstado = React.createContext();

const ProveedorState = ({ children }) => {
  const [ventaProducto, setVentaProducto] = useState([]);
  const [listaProducto, setListaProducto] = useState([]);
  const [total, setTotal] = useState(0);
  const [perfil, setPerfil] = useState("");
  const [empleados, setEmpleados] = useState([]);
  const [pagar, setPagar] = useState("");
  const [articulos, setArticulos] = useState(0);

  const handleInputChange = (e) => {
    setListaProducto(e.target.value);
  };

  const [tituloPos, setTituloPOS] = useState("Sistema Pos");

  const handleSubmit = (e, value) => {
    e.preventDefault();
    if (listaProducto.trim().length > 5) {
      console.log("se insertó a la lista");
      setArticulos(articulos + 1);
      const obtenerProducto = async () => {
        const sku = listaProducto;
        const respuesta = await Axios.get(`/productos/carrito/${sku}`);
        setVentaProducto([...ventaProducto, ...respuesta.data]);
      };
      obtenerProducto();
    }
  };
  return (
    <ContextEstado.Provider
      value={{
        total,
        articulos,
        setArticulos,
        ventaProducto,
        listaProducto,
        ventaProducto,
        pagar,
        setPagar,
        listaProducto,
        setListaProducto,
        setVentaProducto,
        handleInputChange,
        handleSubmit,
        empleados,
        setEmpleados,
        perfil,
        setPerfil,
        setTituloPOS,
        tituloPos,
      }}
    >
      {children}
    </ContextEstado.Provider>
  );
};

export { ContextEstado, ProveedorState };
