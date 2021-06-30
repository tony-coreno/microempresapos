import React, { useEffect, useState } from "react";
import Axios from "axios";
// import Swal from "sweetalert2";
const ContextEstado = React.createContext();

const ProveedorState = ({ children }) => {
  const [ventaProducto, setVentaProducto] = useState([]);
  const [listaProducto, setListaProducto] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalProd, setTotalProd] = useState(0);
  const [articulos, setArticulos] = useState(0);
  const [metodopago, setMetodoPago] = useState("");
  const [pagoSelected, setPagoSelected] = useState([]);
  const [tituloPos, setTituloPOS] = useState("");
  const [acumulado, setAcumulado] = useState(0);

  useEffect(() => {
    obtenerTitulo();
  }, []);

  const obtenerTitulo = async () => {
    if (sessionStorage.getItem("idusuario") === null) {
      setTituloPOS("sistema");
      return;
    }
    if( sessionStorage.getItem("perfil") === ("Vendedor" || "Cajero")){
      const id = sessionStorage.getItem("jefe");
      const token = sessionStorage.getItem("token");
      const respuesta = await Axios.get("/sistema/obtener/" + id, {
        headers: { autorizacion: token },
      });
      const [name] = respuesta.data;
      const { nombre } = name;
      setTituloPOS(nombre)
      return;

    }else {
      const id = sessionStorage.getItem("idusuario");
      const token = sessionStorage.getItem("token");
      const respuesta = await Axios.get("/sistema/obtener/" + id, {
        headers: { autorizacion: token },
      });
      const [name] = respuesta.data;
      const { nombre } = name;
      setTituloPOS(nombre)
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
        setListaProducto,
        setVentaProducto,
        setTituloPOS,
        tituloPos,
        metodopago,
        setMetodoPago,
        pagoSelected,
        setPagoSelected,
        acumulado,
        setAcumulado
      }}
    >
      {children}
    </ContextEstado.Provider>
  );
};

export { ContextEstado, ProveedorState };
