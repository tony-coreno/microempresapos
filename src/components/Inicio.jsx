import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  Divisor,
  Titulo,
  Principal,
  Contenedor2,
  Contenedor3,
} from "./style/DashboardStyle";
import ProductosMayorVenta from "../charts/ProductosMayorVenta";
import { ContextEstado } from "../context/ContextEstado";
const Inicio = () => {
  const { articulos } = useContext(ContextEstado);
  const data = [
    {
      name: "Ventas del día",
      Ganancia: articulos,
      Perdidas: 400,
    },
    {
      name: "Marzo",
      Ganancia: 4841,
      Perdidas: 2100,
    },
  ];

  return (
    <>
      <Principal>Ventas Mayo</Principal>
      <hr />
      <Contenedor2>
        <Divisor>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Ganancia" stackId="a" fill="#193545" />
            <Bar dataKey="Perdidas" stackId="a" fill="#e2d409ea" />
            {/*fill="#82ca9d" */}
          </BarChart>
          <Titulo></Titulo>
        </Divisor>
        <aside>
          <Principal>Productos con mayor venta</Principal>

          <Contenedor3>
            <ProductosMayorVenta />
          </Contenedor3>
        </aside>
      </Contenedor2>
    </>
  );
};

export default Inicio;
