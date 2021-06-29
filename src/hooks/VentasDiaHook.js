import { useState } from "react";
import Axios from "axios";

export const VentasDiahook = () => {
  // const [ventas, setVentas] = useState([""]);
  // const [tarjeta, setTarjeta] = useState([""]);
  const [pago, setPago] = useState(0);

  const obtenerVentas = async () => {
    let total = 0;
    let mes = 0;
    let sales;
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/ventas/ventasdia/" + id, {
      headers: { autorizacion: token },
    });
    console.log(respuesta.data)
    const {data} = respuesta
    
    total = data.reduce((totalventas, all)=>{
      return totalventas + all.total

    },0);
     setPago(total)

    mes = data.map((month)=> {
      mes = month.fecha
      return mes

    })
    console.log(mes)

    mes.forEach(element => {
      console.log(new Date(element))

    });

    sales = data.map((venta)=>{
      sales = [venta.total,venta.fecha]
      return sales

    })

    console.log(sales)

    // setVentas(respuesta.data);
    // const dia = await ventas.filter((venta) => {
    //   return venta.metodopago === "Tarjeta";
    // });
    // setTarjeta(dia);
    // console.log(dia);
    // let total = 0;
    // total = tarjeta.reduce((tarjetaTotal, tarj) => {
    //   return tarjetaTotal + tarj.total;
    // }, 0);
    // console.log(total);
    // setPago(total);
  };
  return{
      pago,
      obtenerVentas,
  }
};
