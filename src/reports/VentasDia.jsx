import React, { useEffect } from "react";
import { Switch, NavLink, Route } from "react-router-dom";
import Productos from "../components/Productos";
import { VentasDiahook } from "../hooks/VentasDiaHook";
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
  Contenedorapp,
  Contenedor,
  Contenedor2,
  Menu,
} from "./Style/VentasDiaStyle";
import CalendarVentasDia from "./CalendarVentasDia";
const VentasDia = () => {
  const { obtenerVentas, pago, obtenerVentasEmpleado } = VentasDiahook();
  let perfil = sessionStorage.getItem("perfil");

  useEffect(() => {
    if (perfil === "Administrador") {
      obtenerVentas();
    } else {
      obtenerVentasEmpleado();
    }
    // eslint-disable-next-line
  }, []);

  const data = [
    {
      name: "MXN",
      Total: `${pago}`,
      //Perdidas: 10,
    },
    // {
    //   name: "Marzo",
    //   Tarjeta: 250,
    //   Perdidas: 15,
    // },
  ];

  return (
    <div>
      <Menu>
        <NavLink to="/reportes">Reportes</NavLink>
        <NavLink to="/ventas-dia">Ventas del día</NavLink>
        <NavLink to="/devoluciones">Ventas del mes</NavLink>
      </Menu>
      <main>
        <Switch>
          <Route path="/productos" component={Productos} />
        </Switch>
      </main>
      <Contenedorapp>
        <Contenedor>
          <h4>
            Ventas del Día:{" "}
            <strong className="badge badge-success">${pago}.00</strong>
          </h4>
          <>
            {/* <Principal>Ventas Mayo</Principal> */}
            <hr />
            <div>
              <div>
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
                  <Bar dataKey="Total" stackId="a" fill="#212E36" />
                  {/*fill="#82ca9d" */}
                </BarChart>
              </div>
            </div>
          </>
        </Contenedor>

        <aside>
          <Contenedor2>
            <CalendarVentasDia />
          </Contenedor2>
        </aside>
      </Contenedorapp>
    </div>
  );
};

export default VentasDia;
