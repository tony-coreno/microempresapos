import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.css";
const ModalVentaManual = ({modalManual, setModalManual}) => {
    return ( 
      <>
      <Modal isOpen={modalManual}>
        <ModalHeader>
          <img
            src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
            alt="POS"
          />
        </ModalHeader>
        <ModalBody>
          <Contenedor>
            <h3>Ingrese producto sin código de barra</h3>
            <hr />
          </Contenedor>
          <hr />
         
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => setModalManual(false)}>
            Cancelar
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
}
 
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
export default ModalVentaManual;