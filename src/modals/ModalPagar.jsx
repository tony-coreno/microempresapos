import React, { useContext, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ContextEstado } from "../context/ContextEstado";
import styled from "styled-components";
import Axios from "axios";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.css";

const ModalVenta = ({ modal, setModal }) => {
  const { total, metodopago, ventaProducto } = useContext(ContextEstado);
  const [cambio, setCambio] = useState(0);
  let f = new Date();

  /* ==== Fecha
  // console.log(f)
  // console.log('____');
  // let hora = Date.parse(f);
  // console.log(hora);
  // console.log('____');
  // f = new Date(hora * 1000)
  // console.log(f.toUTCString())

  */

  const guardar = async (e) => {
    e.preventDefault();
    const venta = {
      idusuario: sessionStorage.getItem("idusuario"),
      jefe: sessionStorage.getItem("idusuario"),
      total: total,
      metodopago: metodopago,
      fechaventa: f,
      articulos: ventaProducto
    };
    const token = sessionStorage.getItem("token");
    darCambio();

    if(cambio >= 0 ){
    
    const respuesta = await Axios.post("/ventas/crearventa", venta, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;

    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
    });
     setTimeout(() => {
       window.location.href = "/crear-venta";
     }, 1500);
     return cambio;
    }
    else{
      alert('Mayor')
    }
  };

  const darCambio = () => {
    let restante = cambio - total;
    alert(restante);
  };
  return (
    <>
      <Modal isOpen={modal}>
        <ModalHeader>
          <img
            src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
            alt="POS"
          />
        </ModalHeader>
        <ModalBody>
          <Contenedor>
            {total !== 0  ? (
              <>
                <Ventas>Metodo de pago</Ventas>
                <Cifra>{metodopago}</Cifra>
                <Ventas>Total</Ventas>
                <Cifra>${total}</Cifra>
              </>
            ) : (
              <>
                <Cifra>Sin compras</Cifra>
              </>
            )}
            <hr />
            {metodopago === "Efectivo" ? (
              <>
                <Ventas>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Efectivo recibido"
                    onChange={(e) => setCambio(e.target.value)}
                  />
                </Ventas>
                <Ventas>
                  <label>Cambio</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="$0.00"
                    value={0}
                    onChange={()=>darCambio()}
                    readOnly
                  />
                </Ventas>
              </>
            ) : null}
          </Contenedor>
          <hr />
          {total !== 0 ? (
            <div>
              {/* <p className="text-center">
                Ingrese contraseña para confirmar venta
              </p>
              <input className="form-control" autoFocus type="password" /> */}
            </div>
          ) : (
            null
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal(false)}>
            Cancelar
          </Button>
          {total !== 0 && metodopago !== "" ? (
            <Button color="success" onClick={(e) => guardar(e)}>
              Confirmar venta
            </Button>
          ) : (
            null
          )}
        </ModalFooter>
      </Modal>
    </>
  );
};

const Ventas = styled.h5`
  text-align: right;
`;

const Cifra = styled.h6`
  text-align: right;
  color: #198236;
`;
const Contenedor = styled.div`
  padding: 25px;
  width: 90%;
  height: 40%;
  display: grid;
  gap: 20px;
  //background: #eef3f5;
  background: #f2f4e5;
  opacity: 0.8;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

export default ModalVenta;
