import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Inicio from "./Inicio";
import Almacen from "./Almacen";
import Ventas from "./Ventas";
import NuevoProducto from "./../products/NuevoProducto";
import Empleados from "./Empleados";
import VistaProductoCard from '../products/VistaProductoCard'
import Clientes from "./Clientes";
import Ayuda from "./Ayuda";
import NuevoCliente from "./../clients/NuevoCliente";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Error from "./Error";
import Productos from "./Productos";
import Categorias from "./Categorias";
import Reportes from "./Reportes";
import CrearVenta from "./CrearVenta";
import NuevoEmpleado from "./NuevoEmpleado";
import AdministrarVentas from "./AdministrarVentas";
import Login from "./Login";
import LoginEmpleado from './LoginEmpleado';
import Settings from "../settings/Settings";
import Calendario from "../elements/calendar/Calendario";
import Proveedores from "./Proveedores";
import Notas from "./Notas";
import "bootstrap/dist/css/bootstrap.css";
const App = () => {
  return (
    <>
      {sessionStorage.getItem("token") ? (
        <>
          <Sidebar />
          <ContenedorPrincipal>
            <Header />
            <Main>
              <Switch>
                <Route path="/" exact={true} component={Inicio} />
                <Route
                  path="/agregar-producto"
                  exact={true}
                  component={NuevoProducto}
                />
                <Route path="/empleados" component={Empleados} />
                <Route path="/almacen" component={Almacen} />
                <Route path="/ventas" component={Ventas} />
                <Route path="/clientes" component={Clientes} />
                <Route path="/ayuda" component={Ayuda} />
                <Route path="/productos" component={Productos} />
                <Route path="/productos-cards" component={VistaProductoCard} />
                <Route path="/categorias" component={Categorias} />
                <Route path="/crear-venta" component={CrearVenta} />
                <Route path="/reportes" component={Reportes} />
                <Route path="/proveedores" component={Proveedores} />
                <Route path="/notas" component={Notas} />
                <Route
                  path="/administrar-venta"
                  component={AdministrarVentas}
                />
                <Route
                  path="/agregar-empleado"
                  exact={true}
                  component={NuevoEmpleado}
                />
                <Route path="/settings" component={Settings} />
                <Route path="/login" exact component={Login} />
                <Route path="/nuevo-cliente" component={NuevoCliente} />
                <Route path="/calendar" component={Calendario} />
                <Route component={Error} />
              </Switch>
            </Main>
          </ContenedorPrincipal>
        </>
      ) : (
        <>
        <Route>
        <Route path="/sesion" exact component={LoginEmpleado} />
        </Route>
        <Login />
        </>

      )}

    </>
  );
};

const ContenedorPrincipal = styled.div`
  padding: 10px;
  margin-top: 0px;
  width: 90%;
  max-width: 1400px;
`;

const Main = styled.main`
  background: #fff;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

export default App;
