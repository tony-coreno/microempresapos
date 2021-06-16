import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from "styled-components";
const ModalCorteDeCaja = ({ setCorte, corte }) => {
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
                <p className="text-center">Ingrese la cantidad que va retirar de la caja</p>
                <input className="form-control" placeholder="$ 0.00 MXN" />
            </div>
            <hr />
            <small className="badge badge-info">Fecha: {f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}</small>
          </Contenedor>
          <hr />
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={() => setCorte(false)}>
            Cancelar
          </Button>
          <Button color="success">Agregar</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const Contenedor = styled.div`
  padding: 15px;
  width: 100%;
  height: 40%;
  display: grid;
  gap: 20px;
  //background: #eef3f5;
  background: #f2f4e5;
  //background: #212E36;
  margin: 10px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;
export default ModalCorteDeCaja;
