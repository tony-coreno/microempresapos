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
    TextArea
  } from "reactstrap";
  import 'bootstrap/dist/css/bootstrap.css';
const ModalSalir = ({modal, setModal}) => {
    return (
      <Modal isOpen={modal}>
      <ModalHeader>
        Cerrar Sesión
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="usuario" className="form-control">Usuario</Label>
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
 
export default ModalSalir;