import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Pie,
  PieChart,
  Cell,
} from "recharts";
import styled from "styled-components";
const Inicio = () => {
  const data = [
    {
      name: "Ventas del día",
      Ganancia: 2000,
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
        <PieChart width={800} height={400}>
          <Pie
            data={data2}
            cx={120}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data2.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Pie
            data={data2}
            cx={420}
            cy={200}
            startAngle={180}
            endAngle={0}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data2.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
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