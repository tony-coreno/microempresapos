import React from "react";
import { Contenedorapp } from "./style/CardReportes";
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

export default Almacen;
