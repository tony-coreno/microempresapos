import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from 'styled-components';
import "bootstrap/dist/css/bootstrap.css";
const ModalUnidadProducto = ({modalUnidad, setModalUnidad, unidadSelected, setUnidadSelected}) => {
  const [unidadaAgregar, setUnidadAgregar] = useState('');

  const guardar = (e) => {
    e.preventDefault();
    setUnidadSelected([...unidadSelected,unidadaAgregar])
    setModalUnidad(false)
    alert(unidadSelected)
  }

    return ( 
      <>
      <Modal isOpen={modalUnidad}>
        <ModalHeader>
          <img
            src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
            alt="POS"
          />
        </ModalHeader>
        <ModalBody>
          <Contenedor>
            <h3>Unidades disponibles</h3>
            {
                unidadSelected.map((unidad=> <p key={unidad}>{unidad}</p>))
                
            }

          </Contenedor>
          <hr />
          <h6 className="text-center">Agregar Unidad</h6>
          <input className="form-control" onChange={(e)=>setUnidadAgregar(e.target.value)} />
         
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => setModalUnidad(false)}>
            Cancelar
          </Button>
          <Button color="info" onClick={(e) => guardar(e)}>
            Aceptar
          </Button>
          {/* {total !== 0 ? (
            <Button color="success" onClick={(e) => guardar(e)}>
              
            </Button>
          ) : (
            <></>
          )} */}
 
        </ModalFooter>
      </Modal>
    </>
     );
}
 
const Contenedor = styled.div`
  padding: 25px;
  width: 90%;
  height: 40%;
  display: grid;
  gap: 20px;
  //background: #eef3f5;
  background: #f2f4e5;
  opacity: 0.8;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;
export default ModalUnidadProducto;