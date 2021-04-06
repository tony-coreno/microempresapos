import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
  } from "reactstrap";
  import styled from 'styled-components';
  import 'bootstrap/dist/css/bootstrap.css';
const ModalSesion = ({modalSesion, setModalSesion}) => {
  const salir = () => {
    sessionStorage.clear()
    window.location.href='/login'

  }
    return (
      <Modal isOpen={modalSesion}>
      <ModalHeader>
        <Texto> Cerrar Sesión </Texto>
      </ModalHeader>
      <ModalBody>
        <FormGroup>
        
        </FormGroup>
        <FormGroup>
          <Texto>¿Desea continuar?</Texto>
        </FormGroup>
        </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={() => setModalSesion(false)}>Cancelar</Button>
        <Button color="warning" onClick={()=> salir()}>Cerrar Sesión</Button>
      </ModalFooter>
      </Modal>    
     );
}
 
const Texto = styled.h6`

  text-align: center;

`;
export default ModalSesion;