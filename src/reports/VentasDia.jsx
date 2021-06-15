import React, { useEffect, useState } from "react";
import { Switch, NavLink, Route } from "react-router-dom";
import Productos from "../components/Productos";
import Axios from "axios";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faFileExcel,
  faFilePdf,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
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
import CalendarVentasDia from "./CalendarVentasDia";
const VentasDia = () => {
  const [ventas, setVentas] = useState([""]);
  const [tarjeta, setTarjeta] = useState([""]);
  const [pago, setPago] = useState(0);
  useEffect(() => {
    obtenerVentas();
        // eslint-disable-next-line
  }, []);


  const obtenerVentas = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/ventas/ventasdia/" + id, {
      headers: { autorizacion: token },
    });
    setVentas(respuesta.data);
     console.log(ventas)
    const dia = await ventas.filter((venta) => {
      return venta.metodopago === "Tarjeta";
    });
    console.log(dia);
    setTarjeta(dia);
    console.log(dia);
    let total = 0;
     total = tarjeta.reduce((tarjetaTotal, tarj) => {
      return tarjetaTotal + tarj.total;
    }, 0);
    console.log(total);
    setPago(total);
  };
 
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
        <Herramientas className="">
          <NavLink to="/reportes">
            <Boton
              className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Reportes"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </Boton>
          </NavLink>

          <NavLink to="/agregar-empleado">
            <Boton
              className="btn btn-danger d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Imprimir productos"
            >
              <FontAwesomeIcon icon={faFilePdf} />
            </Boton>
          </NavLink>
          <NavLink to="/agregar-empleado">
            <Button
              className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Exportar productos"
            >
              <FontAwesomeIcon icon={faFileExcel} />
            </Button>
          </NavLink>

          <NavLink to="/productos-cards">
            <Button
              className="btn btn-warning d-flex d-flex justify-content-between align-items-center pr-2"
              data-toggle="tooltip"
              data-placement="right"
              title="Filtrar stock"
            >
              <FontAwesomeIcon icon={faFilter} />
            </Button>
          </NavLink>
        </Herramientas>
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
            {/* {ventas.map((venta) => {
              return (
                <div
                  className="card ms-1 animate__animated animate__fadeIn"
                  style={{ maxWidth: 240 }}
                  key={venta._id}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src="https://img.icons8.com/color/96/000000/salesman.png"
                        className="card-img"
                        alt="POS"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{venta.total}</h5>
                        <h6 className="card-text">
                          Venta: {venta.fechaventa}
                        </h6>

                        <p className="card-text">
                          <small className="text-muted">
                            Tel: {venta.metodopago}
                            <button className="btn btn-outline-info">
                              <FontAwesomeIcon icon={faQuestion} />
                            </button>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}  */}
          </Contenedor2>
        </aside>
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
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

// const Titulo = styled.h6`
//   color: #fff;
//   text-align: center;
// `;
const Contenedor = styled.div`
  padding: 25px;
  width: 100%;
  display: grid;
  gap: 20px;
  //background: #eef3f5;
  background: #fff;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;
const Contenedor2 = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 10px;
  //grid-template-columns: 1fr 5fr;
  //background: #eef3f5;
  background: #fff;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #147551;
  grid-column: span 2;
  border-radius: 10px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #147571;
    text-decoration: none;
  }
  a.active {
    border-bottom: 2px solid #f2f2f2;
    padding-bottom: 3px;
  }
`;
const Boton = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
`;

const Herramientas = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px;
  padding: 10px;
  gap: 20px;
`;

const Buscar = styled.input`
  border-radius: 10px;
`;

// const Divisor = styled.div`
//   display: flex;
//   flex-direction: row;
// `;

// const Titulo = styled.div`
//   display: flex;
//   flex-direction: col;
// `;

// const Principal = styled.h4`
//   text-align: center;
// `;

export default VentasDia;
