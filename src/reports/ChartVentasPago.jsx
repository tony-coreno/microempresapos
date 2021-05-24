import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";
import ProductosMayorVenta from "../charts/ProductosMayorVenta";
const ChartVentasPago = () => {
  const data = [
    {
      name: "Ventas del día",
      Ganancia: 7000,
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
      <div>
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
      </div>
    </>
  );
};

const Divisor = styled.div`
  display: flex;
  flex-direction: row;
`;

const Titulo = styled.div`
  display: flex;
  flex-direction: col;
`;

const Principal = styled.h4`
  text-align: center;
`;
// const Contenedor = styled.div`
//   padding: 25px;
//   width: 100%;
//   display: grid;
//   gap: 20px;
//   //background: #eef3f5;
//   background: #fff;
//   margin: 10px 0;
//   border-radius: 10px;
//   box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
// `;
// const Contenedor2 = styled.div`
//   display: flex;
//   padding: 20px;
//   width: 100%;
//   display: grid;
//   gap: 10px;
//   grid-template-columns: 2fr 2fr;
//   //background: #147551;
//   background: #fff;
//   margin: 10px 0;
//   border-radius: 10px;
//   box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
// `;

// const Contenedor3 = styled.div`
//   display: flex;
//   padding: 20px;
//   width: 100%;
//   display: grid;
//   gap: 10px;
//   grid-template-columns: 2fr 2fr;
//   //background: #147551;
//   background: #f9f9f9;
//   margin: 10px 0;
//   border-radius: 10px;
//   box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
// `;

export default ChartVentasPago;