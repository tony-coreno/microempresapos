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
const ModalPerfil = ({modal, setModal}) => {
    return (
      <Modal isOpen={modal}>
      <ModalHeader>
        Perfil
      </ModalHeader>
      <ModalBody>

        <FormGroup>
        {/* <Label for="password"></Label> */}
        </FormGroup>
        </ModalBody>
      <ModalFooter>
         <Button color="dark" onClick={() => setModal(false)}>Cerrar</Button> 
      </ModalFooter>
      </Modal>    
     );
}
 
export default ModalPerfil;