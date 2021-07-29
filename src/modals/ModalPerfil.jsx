import React, { useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from "styled-components";
import { ContextEstado } from "../context/ContextEstado";
const ModalPerfil = ({ modal, setModal }) => {
  const { acumulado } = useContext(ContextEstado);
  const cuenta = sessionStorage.getItem("perfil");

  return (
    <>
      <Modal isOpen={modal}>
        <ModalHeader>Perfil</ModalHeader>
        <ModalBody>
          <div>
            <Ventas>Ventas realizadas</Ventas>
            <Cifra><span className="badge badge-success">{`$ ${acumulado} `}</span></Cifra>


            <Imagen
              className="card ms-1 animate__animated animate__fadeIn"
              style={{ maxWidth: 120 }}
              src={sessionStorage.getItem("imagen")}
              alt="POS"
            />
            <hr />
            <Ventas>
              Tipo de cuenta:{" "}
              <span className="badge badge-primary">
                {cuenta || "Empleado"}
              </span>
            </Ventas>
          </div>

          <hr />
          <div>
            <h3>{sessionStorage.getItem("nombre") || "Invitado"}</h3>
          </div>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="dark" onClick={() => setModal(false)}>
            Cambiar foto
          </Button> */}
          <Button color="warning" onClick={() => setModal(false)}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const Ventas = styled.h5`
  text-align: right;
`;

const Cifra = styled.h6`
  text-align: right;
  color: #198236;
`;

const Imagen = styled.img`
  border-radius: 50%;
`;

export default ModalPerfil;
