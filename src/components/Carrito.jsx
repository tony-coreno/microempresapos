import React from "react";
import styled from "styled-components";

const Carrito = ({ ventaProducto }) => {


  return (
    <>
      <TituloEmpleado>''</TituloEmpleado>
      <hr />
      <h2>Carrito </h2>
      <Contenedor>
        <ol>
          {ventaProducto.map((venta) => {
            return <ul>{venta}</ul>;
          })}
        </ol>
      </Contenedor>
      <TotalDiv>
        <input></input>

        <h3>Total</h3>
      </TotalDiv>
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

// const Menu = styled.nav`
//     width: 100%;
//     text-align: center;
//     background: #092c4c;
//     grid-column: span 2;
//     border-radius: 3px;
//     a {
//         color: #fff;
//         display: inline-block;
//         padding: 15px 20px;
//     }

//     a:hover {
//         background: #1d85e8;
//         text-decoration: none;
//     }
// `;

const TituloEmpleado = styled.h6`
  color: #fff;
`;
const TotalDiv = styled.div`
  float: right;
`;

export default Carrito;
