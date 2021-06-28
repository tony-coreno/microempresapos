import { useState } from "react";
import Axios from "axios";

export const VentasDiahook = () => {
  const [ventas, setVentas] = useState([""]);
  const [tarjeta, setTarjeta] = useState([""]);
  const [pago, setPago] = useState(0);

  const obtenerVentas = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/ventas/ventasdia/" + id, {
      headers: { autorizacion: token },
    });
    setVentas(respuesta.data);
    const dia = await ventas.filter((venta) => {
      return venta.metodopago === "Tarjeta";
    });
    setTarjeta(dia);
    console.log(dia);
    let total = 0;
    total = tarjeta.reduce((tarjetaTotal, tarj) => {
      return tarjetaTotal + tarj.total;
    }, 0);
    console.log(total);
    setPago(total);
  };
  return{
      ventas,
      tarjeta,
      pago,
      obtenerVentas,
  }
};
