import React from "react";
import { CorteCajaHook } from "../hooks/CorteCaja.Hook";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Contenedor } from "./style/CorteStyle";
const ModalCorteDeCaja = ({ setCorte, corte }) => {
  const { setCantidad, guardar } = CorteCajaHook();
  let f = new Date();
  return (
    <>
      <Modal isOpen={corte}>
        <ModalHeader className="">
          <img
            src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
            alt="POS"
          />
        </ModalHeader>
        <ModalBody>
          <Contenedor>
            <h3 className="text-center">Corte de Caja</h3>
            <hr />
            <p className="text-right">
              Usuario:{" "}
              <span className="badge badge-success">
                {sessionStorage.getItem("nombre")}
              </span>
            </p>
            <div>
              <p className="text-center">
                Ingrese la cantidad que va retirar de la caja
              </p>
              <input
                className="form-control"
                placeholder="$ 0.00 MXN"
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
            <hr />
            <small className="badge badge-info">
              Fecha:{" "}
              {f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}
            </small>
          </Contenedor>
          <hr />
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={() => setCorte(false)}>
            Cancelar
          </Button>
          <Button color="success" onClick={(e) => guardar(e)}>
            Agregar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};


export default ModalCorteDeCaja;
