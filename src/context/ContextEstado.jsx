import React, { useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2'
const ContextEstado = React.createContext();

const ProveedorState = ({ children }) => {
  const [ventaProducto, setVentaProducto] = useState([]);
  const [listaProducto, setListaProducto] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalProd, setTotalProd] = useState(0);
  const [perfil, setPerfil] = useState("");
  const [empleados, setEmpleados] = useState([]);
  const [pagar, setPagar] = useState("");
  const [articulos, setArticulos] = useState(0);
  const [clientes, setClientes] = useState([""]);
  const [proveedores, setProveedores] = useState([""]);
  const [metodopago, setMetodoPago] = useState("");
  const [pagoSelected, setPagoSelected] = useState([]);
  const handleInputChange = (e) => {
    setListaProducto(e.target.value);
  };

  const [tituloPos, setTituloPOS] = useState("Sistema Pos");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (listaProducto.trim().length > 5) {
      const obtenerProducto = async () => {
        const sku = listaProducto;
        const respuesta = await Axios.get(`/productos/carrito/${sku}`);
        if (respuesta.data.length > 0) {
          setVentaProducto([...ventaProducto, ...respuesta.data]);
          setArticulos(articulos + 1);
        } else {
          Swal.fire({
            icon: "error",
            title: "Producto Inválido",
            showConfirmButton: false,
            timer: 1000,
          });        }
      };
      obtenerProducto();
    }
  };
  return (
    <ContextEstado.Provider
      value={{
        total,
        setTotal,
        setTotalProd,
        totalProd,
        articulos,
        setArticulos,
        ventaProducto,
        listaProducto,
        pagar,
        setPagar,
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
        clientes,
        setClientes,
        proveedores,
        setProveedores,
        metodopago,
        setMetodoPago,
        pagoSelected,
        setPagoSelected,
      }}
    >
      {children}
    </ContextEstado.Provider>
  );
};

export { ContextEstado, ProveedorState };
