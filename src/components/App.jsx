import React from "react";
import { ContenedorPrincipal, Main } from "./style/SystemStyle";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Inicio from "./Inicio";
import Almacen from "./Almacen";
import Ventas from "./Ventas";
import NuevoProducto from "./../products/NuevoProducto";
import Empleados from "./Empleados";
import VistaProductoCard from '../products/VistaProductoCard'
import Ayuda from "./Ayuda";
import NuevoCliente from "./../clients/NuevoCliente";
import NuevoProveedor from '../providers/NuevoProveedor';
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
import Devoluciones from '../products/Devoluciones';
import Kardex from './Kardex';
import VentasDia from '../reports/VentasDia';
import VentasMes from '../reports/VentasMes';
import FiltrarVentas from '../reports/FiltrarVentas';
import EditarEmpleado from '../users/EditarEmpleado';
import EmpleadosGeneral from '../users/EmpleadosGeneral';
import ClientesTabla from './ClientesTabla';
import AcercaDe from "../settings/AcercaDe";
import ClientesGeneral from "../clients/ClientesGeneral";
import ProductosGeneral from '../products/ProductosGeneral';
import Manuales from "../settings/Manuales";
import AgregarMercancia from "../kardex/AgregarMercancia";
import ReportarProblema from "../settings/ReportarProblema";
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
                <Route path="/ayuda" component={Ayuda} />
                <Route path="/kardex" component={Kardex} />
                <Route path="/productos" component={Productos} />
                <Route path="/producto" component={ProductosGeneral} />
                <Route path="/productos-cards" component={VistaProductoCard} />
                <Route path="/categorias" component={Categorias} />
                <Route path="/devoluciones" component={Devoluciones} />
                <Route path="/crear-venta" component={CrearVenta} />
                <Route path="/clientes-tabla" component={ClientesTabla} />
                <Route path="/reportes" component={Reportes} />
                <Route path="/proveedores" component={Proveedores} />
                <Route path="/notas" component={Notas} />
                <Route path ="/editar-empleado" component={EditarEmpleado} />
                <Route path ="/empleado" component={EmpleadosGeneral} />
                <Route path ="/acerca-de" component={AcercaDe} />
                <Route path ="/manuales" component={Manuales} />
                <Route path ="/agregar-mercancia" component={AgregarMercancia} />

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
                <Route path="/nuevo-proveedor" component={NuevoProveedor} />
                <Route path="/calendar" component={Calendario} />
                <Route path="/ventas-dia" component={VentasDia} />
                <Route path="/ventas-mes" component={VentasMes} />
                <Route path="/filtrar-ventas" component={FiltrarVentas} />
                <Route path="/reportar" component={ReportarProblema} />
                <Route path="/cliente" component={ClientesGeneral} />
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



export default App;
