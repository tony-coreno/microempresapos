import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ContextEstado } from "../context/ContextEstado";
import TablaCarrito from "./../elements/TablaCarrito";
import "bootstrap/dist/css/bootstrap.css";
import {
  faBan,
  faCreditCard,
  faDollarSign,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";

const Carrito = () => {
  const { ventaProducto, setVentaProducto, setListaProducto} = useContext(
    ContextEstado
  );
  const { pagar, setPagar, setArticulos } = useContext(ContextEstado);

  useEffect(() => {
    pago();
  }, [pagar]);

  useEffect(() => {
    limpiar()

  }, [ventaProducto]);


  const limpiar = () =>{
    setListaProducto('')
}


  const cancelar = () => {
    setVentaProducto([""]);
    setListaProducto("");
    setArticulos(0);
    window.location.href='/crear-venta'
    // Swal.fire({
    //   title: 'Cancelar venta',
    //   text: '¿Desea continuar?',
    //   icon: 'warning',
    //   confirmButtonText: 'De acuerdo',
    //   cancelButtonText:'Cancel'
    // })
  };
  const pago = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Venta exitosa",
    });
  };

  return (
    <>
      <TituloEmpleado>''</TituloEmpleado>
      <hr />

      <Contenedor>
      <TituloCarrito>Carrito de compras </TituloCarrito>
        <TablaCarrito/>
      </Contenedor>
      <TotalDiv>
        <input readOnly className="form-control"></input>
        <h3>
          {" "}
          <FontAwesomeIcon icon={faDollarSign} /> Total
        </h3>
      </TotalDiv>
      <div>
        <button className="btn btn-outline-danger" onClick={() => cancelar()}>
          {" "}
          <FontAwesomeIcon icon={faBan} /> Cancelar
        </button>
        {"           "}
        <button className="btn btn-outline-info">
          {" "}
          <FontAwesomeIcon icon={faCreditCard} /> Método de pago
        </button>
        <button
          className="btn btn-outline-success mr-4"
          onClick={() => setPagar("")}
        >
          {" "}
          <FontAwesomeIcon icon={faMoneyBill} /> Pagar
        </button>
      </div>
    </>
  );
};

const Contenedor = styled.div`
  padding: 25px;
  width: 100%;
  display: grid;
  gap: 20px;
  //background: #eef3f5;
  background: #FFF;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

const TituloEmpleado = styled.h6`
  color: #fff;
`;
const TituloCarrito = styled.h4`
  text-align: center;
`;
const TotalDiv = styled.div`
  float: right;
`;

export default Carrito;
