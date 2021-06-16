import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
} from "reactstrap";
// import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
const ModalSesion = ({ modalSesion, setModalSesion }) => {
  const salir = () => {
    sessionStorage.clear();
    window.location.href = "/login";
  };
  return (
    <Modal isOpen={modalSesion}>
      <ModalHeader>
        <p> Cerrar Sesión </p>
      </ModalHeader>
      <ModalBody>
        <img
          src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
          title="POS"
          alt="POS"
          className="text-center"
        />

        <FormGroup>
          <h5>¿Desea continuar?</h5>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={() => setModalSesion(false)}>
          Cancelar
        </Button>
        <Button color="warning" onClick={() => salir()}>
          Cerrar Sesión
        </Button>
      </ModalFooter>
    </Modal>
  );
};

// const Texto = styled.h6`
//   text-align: center;
// `;

export default ModalSesion;
