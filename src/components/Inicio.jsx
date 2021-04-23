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
import styled from "styled-components";
import { ContextEstado } from "../context/ContextEstado";
const Inicio = () => {
  const {articulos} = useContext(ContextEstado)
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

  const data2 = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
      <Principal>Panel de control</Principal>
      <hr />
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
          <Bar dataKey="Ganancia" stackId="a" fill= "#193545" />
          <Bar dataKey="Perdidas" stackId="a"  fill="#e2d409ea" /> 
          {/*fill="#82ca9d" */}
        </BarChart>
        <Titulo>
        
        </Titulo>
      </Divisor>
    </>
  );
};

const Divisor = styled.div`
  display: flex;
  flex-direction: row;
`;


const Titulo =styled.div`

     display: flex;
     flex-direction: col;
`;


const Principal = styled.h4`

     text-align: center;
`;

export default Inicio;