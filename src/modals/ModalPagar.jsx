import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
const ModalVenta = ({ modal, setModal }) => {
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
            <Ventas>Ventas</Ventas>
            <Cifra>$5000</Cifra>
            <hr />
            <Ventas></Ventas>
          </Contenedor>
          <hr />
          <div>
            <p className="text-center">
              Ingrese contraseña para confirmar venta
            </p>
            <input className="form-control" autoFocus type="password" />
          </div>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => setModal(false)}>
            Cancelar
          </Button>
          <Button color="success" onClick={() => setModal(false)}>
            Confirmar venta
          </Button>
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
