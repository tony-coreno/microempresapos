import React, { useContext, useEffect, useState } from "react";
import { ContextEstado } from "../context/ContextEstado";
import ModalPagar from "../modals/ModalPagar";
import TablaCarrito from "./../elements/TablaCarrito";
import BarraTotal from "./BarraTotal";
import styled from "styled-components";
import {
  faBan,
  faCreditCard,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.css";

const Carrito = () => {
  const [modal, setModal] = useState(false);
  const {
    ventaProducto,
    setVentaProducto,
    setListaProducto,
    //total,
  } = useContext(ContextEstado);
  const { setArticulos, articulos } = useContext(ContextEstado);

  // useEffect(() => {
  // }, [pagar]);

  useEffect(() => {
    limpiar();
  }, [ventaProducto]);

  const limpiar = () => {
    setListaProducto("");
  };

  const cancelar = () => {
    if(articulos > 0){
      setVentaProducto([""]);
      setListaProducto("");
      setArticulos(0);
      window.location.href = "/crear-venta";
      // Swal.fire({
      //   title: 'Cancelar venta',
      //   text: '¿Desea continuar?',
      //   icon: 'warning',
      //   confirmButtonText: 'De acuerdo',
      //   cancelButtonText:'Cancel'
      // })
    }
    else{
      return null;
    }
    }

  return (
    <>
      <TituloEmpleado>''</TituloEmpleado>
      <hr />

      <Contenedor>
        <TituloCarrito>Carrito de compras </TituloCarrito>
        <TablaCarrito />
      </Contenedor>
      <div>
        <Contenedor>
          <BarraTotal />
        </Contenedor>

        <button className="btn btn-outline-danger mr-2" onClick={cancelar}>
          {" "}
          <FontAwesomeIcon icon={faBan} /> Cancelar
        </button>
        {"           "}
        <button className="btn btn-outline-info mr-2">
          {" "}
          <FontAwesomeIcon icon={faCreditCard} /> Corte de caja
        </button>
        <button
          className="btn btn-outline-success mr-4"
          onClick={() => setModal(true)}
        >
          {" "}
          <FontAwesomeIcon icon={faMoneyBill} /> Pagar
        </button>
      </div>
      <ModalPagar modal={modal} setModal={setModal} />
    </>
  );
};

const Contenedor = styled.div`
  padding: 25px;
  width: 100%;
  display: grid;
  gap: 20px;
  //background: #eef3f5;
  background: #fff;
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
export default Carrito;
