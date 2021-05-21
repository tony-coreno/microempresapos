import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
const ModalVentaManual = ({ modalManual, setModalManual }) => {
  return (
    <>
      <Modal isOpen={modalManual}>
        <ModalHeader className="">
          <img
            src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
            alt="POS"
          />
        </ModalHeader>
        <ModalBody>
          <Contenedor>
            <h3 className="text-center">Ingrese producto</h3>
            <hr />
            <div className="container-fluid">
              <label>Nombre producto</label>
              <input className="form-control" autoFocus />
              <label>Precio</label>
              <input className="form-control" />
              <label>Cantidad</label>
              <input type="number" className="form-control" />
              <label>Unidad</label>
              <input className="form-control" />
            </div>
          </Contenedor>
          <hr />
        </ModalBody>

        <ModalFooter>
          <Button color="info" onClick={() => setModalManual(false)}>
            Cancelar
          </Button>
          <Button color="success" onClick={() => setModalManual(false)}>
            Confirmar
          </Button>
          {/* {total !== 0 ? (
            <Button color="success" onClick={(e) => guardar(e)}>
              
            </Button>
          ) : (
            <></>
          )} */}
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
export default ModalVentaManual;
