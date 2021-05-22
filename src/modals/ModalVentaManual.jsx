import React, {useState, useContext} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import styled from "styled-components";
import { ContextEstado } from "../context/ContextEstado";
import "bootstrap/dist/css/bootstrap.css";
const ModalVentaManual = ({ modalManual, setModalManual }) => {
const {setVentaProducto, ventaProducto,  setArticulos, articulos} = useContext(ContextEstado)
const [producto, setProducto] = useState('');
const [precioventa, setPrecioVenta] = useState('');
const [cantidad, setCantidad] = useState(0);
const [unidad, setUnidad] = useState('');

const manual ={
  producto: producto,
  precioventa: parseInt(precioventa),
  cantidad: parseInt(cantidad),
  unidad: unidad
}

const enviar = (e) => {
  e.preventDefault();
  setVentaProducto([...ventaProducto, manual])
  console.log(ventaProducto)
  setArticulos(articulos + 1);
  setModalManual(false)

}
  return (
    <>
      <Modal isOpen={modalManual}>
        <ModalHeader className="">
          <img
            src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
            alt="POS"
          />
        </ModalHeader>
        <ModalBody>
          <Contenedor>
            <h3 className="text-center">Ingrese producto</h3>
            <hr />
            <div className="container-fluid">
              <label>Nombre producto</label>
              <input className="form-control" onChange={(e)=>setProducto(e.target.value)} autoFocus />
              <label>Precio</label>
              <input className="form-control" onChange={(e)=>setPrecioVenta(e.target.value)} />
              <label>Cantidad</label>
              <input type="number" className="form-control" onChange={(e)=>setCantidad(e.target.value)} />
              <label>Unidad</label>
              <input className="form-control" onChange={(e)=>setUnidad(e.target.value)} />
            </div>
          </Contenedor>
          <hr />
        </ModalBody>

        <ModalFooter>
          <Button color="info" onClick={() => setModalManual(false)}>
            Cancelar
          </Button>
          <Button color="success" onClick={(e) => enviar(e)}>
            Agregar
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
};

const Contenedor = styled.div`
  padding: 15px;
  width: 100%;
  height: 40%;
  display: grid;
  gap: 20px;
  //background: #eef3f5;
  background: #f2f4e5;
  //background: #212E36;
  margin: 10px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;
export default ModalVentaManual;
