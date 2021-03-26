import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
  } from "reactstrap";
  import 'bootstrap/dist/css/bootstrap.css';
const ModalSesion = ({modalSesion, setModalSesion}) => {
    return (
      <Modal isOpen={modalSesion}>
      <ModalHeader>
        Cerrar Sesión
      </ModalHeader>
      <ModalBody>
        <FormGroup>
        
        </FormGroup>
        <FormGroup>
          <h6>¿Desea continuar?</h6>
        </FormGroup>
        </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={() => setModalSesion(false)}>Cancelar</Button>
        <Button color="info" >Cerrar Sesión</Button>
      </ModalFooter>
      </Modal>    
     );
}
 
export default ModalSesion;