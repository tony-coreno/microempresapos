import React, { useContext } from "react";
import styled from "styled-components";
import { ContextEstado } from "../context/ContextEstado";
import TablaCarrito from "./../elements/TablaCarrito";
import "bootstrap/dist/css/bootstrap.css";
import { faBan, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Carrito = () => {
  const { ventaProducto } = useContext(ContextEstado);
  return (
    <>
      <TituloEmpleado>''</TituloEmpleado>
      <hr />
      <TituloCarrito>Carrito de compras </TituloCarrito>
      <Contenedor>
        <ol>
          {ventaProducto.map((venta) => {
            return <ul key={venta}>{venta}</ul>;
          })}
        </ol>
        <TablaCarrito />
      </Contenedor>
      <TotalDiv>
        <input readOnly></input>
        <h3>Total</h3>
      </TotalDiv>
      
      <div>
        <button className="btn btn-success ">
          {" "}
          <FontAwesomeIcon icon={faBan} /> Cancelar
        </button>
          {"           "}
        <button className="btn btn-success ">
          {" "}
          {" "}
          <FontAwesomeIcon icon={faCreditCard} /> Método de pago
        </button>
      </div>
    </>
  );
};

const Contenedor = styled.div`
  padding: 25px;
  width: 100%;
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
const TituloCarrito = styled.h4`
  text-align: center;
`;
const TotalDiv = styled.div`
  float: right;
`;
export default Carrito;
