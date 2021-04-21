import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
const ActualizarEmpleados = ({ modal, setModal }) => {
  return (
    <>
      <Modal isOpen={modal}>
        <ModalHeader>
          <h5>Actualizar empleado</h5>
        </ModalHeader>
        <ModalBody>
          <Contenedor>
            <form className="">
              <label className="text-center"># Empleado</label>
              <input
                type="text"
                className="form-control"
                autoFocus={true}
              ></input>
              <label className="mt-1">Nombre</label>
              <input type="text" className="form-control"></input>

              <label className="mt-1">Apellido paterno</label>
              <input type="text" className="form-control"></input>

              <label className="mt-1">Apellido materno</label>
              <input type="text" className="form-control"></input>

              <label className="mt-1">Usuario</label>
              <input type="text" className="form-control"></input>

              <label className="mt-1">Perfil</label>
              <select className="form-control mt-1">
                <option>Administrador</option>
                <option>Vendedor</option>
              </select>

              <label className="mt-1">Estado</label>
              <select className="form-control mt-2">
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </form>
          </Contenedor>
        </ModalBody>

        <ModalFooter>
          <Button color="dark" onClick={() => setModal(false)}>
            Cancelar
          </Button>
          <Button color="warning" onClick={() => setModal(false)}>
            Actualizar empleado
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

const Contenedor = styled.div`
  padding: 20px;
  //grid-template-columns: 2fr 4fr;
  width: 100%;
  display: grid;
  gap: 10px;
  //background: #eef3f5;
  background: #f2f4e5;
  opacity: 0.8;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

export default ActualizarEmpleados;
