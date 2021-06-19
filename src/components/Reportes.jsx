import React from "react";
import styled from "styled-components";
import CardReportes from "./CardReportes";
import BarraVentas from "../reports/BarraVentas";

const Almacen = () => {
  return (
    <div>
      <BarraVentas />
      <Contenedorapp>
        <CardReportes />
      </Contenedorapp>
    </div>
  );
};

const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;
  display: grid;
  gap: 20px;
  //grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default Almacen;
