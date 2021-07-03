import React,{ useContext } from "react";
import { NavLink, Route } from "react-router-dom";
import {
  ContenedorHeader,
  Titulo,
  MenuNav,
  Contenedor,
} from "./style/SystemStyle";
import { ContextEstado } from "../context/ContextEstado";
import Barra from "../elements/Barra";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faCashRegister, faClipboardList, faLayerGroup, faQuestionCircle,
//         faTachometerAlt, faUsers, faUserTie} from "@fortawesome/free-solid-svg-icons";
// import Barra from './../elements/Barra';
// import Login from './Login';

const Header = () => {
  const { tituloPos } = useContext(ContextEstado);
  return (
    <>
      {sessionStorage.getItem("token") &&
      sessionStorage.getItem("perfil") === "Administrador" ? (
        <>
          <ContenedorHeader>
            <Route>
              <Contenedor>
                {/* <Barra /> */}
                <Titulo>{tituloPos}</Titulo>
                <MenuNav>
                  {/* <NavLink to="/" exact={true} >Dashboard <FontAwesomeIcon icon={faTachometerAlt} /></NavLink>
                <NavLink to="/empleados">Empleados <FontAwesomeIcon icon={faUserTie} /></NavLink>
                <NavLink to="/almacen">Almacén <FontAwesomeIcon icon={faClipboardList} /></NavLink>
                <NavLink to="/clientes">Clientes <FontAwesomeIcon icon={faUsers} /></NavLink>
                <NavLink to="/ventas">Ventas <FontAwesomeIcon icon={faCashRegister} /></NavLink>
                <NavLink to="/ayuda">Ayuda <FontAwesomeIcon icon={faQuestionCircle} /></NavLink> */}

                  <NavLink to="/" exact={true}>
                    Dashboard{" "}
                  </NavLink>
                  <NavLink to="/empleado">Empleados </NavLink>
                  <NavLink to="/almacen">Almacén </NavLink>
                  <NavLink to="/cliente">Clientes </NavLink>
                  <NavLink to="/ventas">Ventas </NavLink>
                  <NavLink to="/ayuda">Ayuda </NavLink>
                </MenuNav>
              </Contenedor>
            </Route>
          </ContenedorHeader>
        </>
      ) : (
        <>
          <Barra />
          <hr />
        </>
      )}
    </>
  );
};

export default React.memo(Header);
