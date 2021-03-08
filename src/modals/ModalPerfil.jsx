import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Input,
    Label,
  } from "reactstrap";
const ModalPerfil = ({modal, setModal}) => {
    return (
      <Modal isOpen={modal}>
      <ModalHeader>
        Perfil
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="usuario">Usuario</Label>
          <Input type="text" name="usuario"/>
        </FormGroup>
        <FormGroup>
        <Label for="password">Contraseña</Label>
        <Input type="password" name="password"/>
        </FormGroup>
        </ModalBody>
      <ModalFooter>
        <Button color="dark" onClick={() => setModal(false)}>Cerrar</Button>
      </ModalFooter>
      </Modal>    
     );
}
 
export default ModalPerfil;