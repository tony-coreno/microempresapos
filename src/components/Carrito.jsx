import React, { useContext } from "react";
import styled from "styled-components";
import { ContextEstado } from "../context/ContextEstado";
import TablaCarrito from './../elements/TablaCarrito';

const Carrito = () => {
const {ventaProducto} = useContext(ContextEstado);
  return (
    <>
      <TituloEmpleado>''</TituloEmpleado>
      <hr />
      <TituloCarrito>Carrito de compras </TituloCarrito>
      <Contenedor>
        <ol>
          {ventaProducto.map((venta) => {
            return <ul>{venta}</ul>;
          })}
        </ol>
        <TablaCarrito />
      </Contenedor>
      <TotalDiv>
        <input readOnly></input>

        <h3>Total</h3>
      </TotalDiv>
      <Boton>Metodo de pago</Boton>
    </>
  );
};

const Contenedor = styled.div`
  padding: 15px;
  width: 90%;
  display: grid;
  gap: 20px;
  background: #eef3f5;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const TituloEmpleado = styled.h6`
  color: #fff;
`;
const TituloCarrito= styled.h4`
  text-align: left;
`;
const TotalDiv = styled.div`
  float: right;
`;
const Boton = styled.button`
  background-color: #000;
  color: #FFF;
`;

export default Carrito;
