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
  import 'bootstrap/dist/css/bootstrap.css';
const ModalSesion = ({modalSesion, setModalSesion}) => {
    return (
      <Modal isOpen={modalSesion}>
      <ModalHeader>
        Cerrar Sesión
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label for="usuario" className="form-control">Usuario</Label>
          <Input type="text" name="usuario"/>
        </FormGroup>
        <FormGroup>
        <Label for="password"></Label>
        <Input type="password" name="password"/>
        </FormGroup>
        </ModalBody>
      <ModalFooter>
        <Button color="dark" onClick={() => setModalSesion(false)}>Cerrar</Button>
      </ModalFooter>
      </Modal>    
     );
}
 
export default ModalSesion;