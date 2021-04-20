import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
  } from "reactstrap";
  import 'bootstrap/dist/css/bootstrap.css';
  import styled from 'styled-components';
const ModalPerfil = ({modal, setModal}) => {
  const cuenta = sessionStorage.getItem("perfil")
  
    return (
      <>
      <Modal isOpen={modal}>
      <ModalHeader>
        Perfil
      </ModalHeader>
      <ModalBody>
      <div>
      <Ventas>Ventas realizadas</Ventas>
      <Cifra>$5000</Cifra>

      <img src="https://img.icons8.com/officel/80/000000/person-male.png"/>
      <hr />
      <Ventas>Tipo de cuenta: {cuenta || 'Empleado'}</Ventas>
      </div>
      <hr />
      <div>
        <h3>{sessionStorage.getItem('nombre') || 'Invitado'}</h3>

      </div>
        </ModalBody>
      <ModalFooter>
         <Button color="dark" onClick={() => setModal(false)}>Cambiar foto</Button> 
         <Button color="warning" onClick={() => setModal(false)}>Cerrar</Button> 
      </ModalFooter>
      </Modal>    
    </>
     );
}

const Ventas = styled.h5`
  text-align: right;
`;

const Cifra = styled.h6`
  text-align: right;
  color: #198236;
`;



export default ModalPerfil;