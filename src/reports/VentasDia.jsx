import React, { useEffect } from "react";
import { Switch, NavLink, Route } from "react-router-dom";
import Productos from "../components/Productos";
import { VentasDiahook } from "../hooks/VentasDiaHook";
import { Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
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
  Buscar,
} from "./Style/VentasDiaStyle";
import CalendarVentasDia from "./CalendarVentasDia";
const VentasDia = () => {
  const { obtenerVentas, pago } = VentasDiahook();
  useEffect(() => {
    obtenerVentas();
    // eslint-disable-next-line
  }, []);

  const data = [
    {
      name: "Pagos con tarjeta",
      Tarjeta: `${pago}`,
      Perdidas: 400,
    },
    {
      name: "Marzo",
      Tarjeta: 4841,
      Perdidas: 2100,
    },
  ];

  return (
    <div>
      <Menu>
        <NavLink to="/reportes">Reportes</NavLink>
        <NavLink to="/reportes-dia">Reportes del día</NavLink>
        <NavLink to="/devoluciones">Reportes del mes</NavLink>
      </Menu>
      <main>
        <Switch>
          <Route path="/productos" component={Productos} />
        </Switch>
      </main>
      <Navbar>
        {sessionStorage.getItem("token") ? (
          <div className="col-md-4 ml-auto">
            <div className="input-group fa-2x">
              <Buscar
                className="form-control mr-sm-4"
                type="search"
                placeholder="Buscar por producto..."
                aria-label="Search"
                autoFocus
              ></Buscar>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </Navbar>
      <Contenedorapp>
        <Contenedor>
          <h4>Ventas del Día</h4>
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
                  <Bar dataKey="Tarjeta" stackId="a" fill="#212E36" />
                  <Bar dataKey="Perdidas" stackId="a" fill="#052C48" />
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
