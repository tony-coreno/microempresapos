import React, { useContext, useEffect, useState } from "react";
import { ContextEstado } from "../context/ContextEstado";
import ModalPagar from "../modals/ModalPagar";
import TablaCarrito from "./../elements/TablaCarrito";
import ModalCorteDeCaja from "../modals/ModalCorteDeCaja";
import BarraTotal from "./BarraTotal";
import { TituloEmpleado, TituloCarrito, Contenedor } from "./style/CarritoStyle";
import {
  faBan,
  faCreditCard,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Carrito = () => {
  const [modal, setModal] = useState(false);
  const [corte, setCorte] = useState(false);
  
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
    // eslint-disable-next-line
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
        <TituloCarrito>Artículos </TituloCarrito>
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
        <button className="btn btn-outline-info mr-2" onClick={() => setCorte(true)}>
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
      <ModalCorteDeCaja corte={corte} setCorte={setCorte} />    
    </>
  );
};


export default Carrito;
