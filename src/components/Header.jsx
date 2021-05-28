import { useContext } from "react";
import { NavLink, Route } from "react-router-dom";
import styled from "styled-components";
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
const ContenedorHeader = styled.header`
  text-align: center;
  color: #fff;
  margin-bottom: 0px;
  background-color: FFFFFF;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  margin: 20px 0 0 0;
  max-height: 125px;
`;
const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

const MenuNav = styled.nav`
  a {
    text-decoration: none;
    //color: #165168;
    color: #ffffff;
    margin: 0 10px;
    padding: 7px;
  }
  a:hover {
    color: #052c48;
    cursor: pointer;
    transition: 0.3s ease all;
  }
  a.active {
    border-bottom: 2px solid #f2f2f2;
    //border-bottom: 2px solid #165168;
    padding-bottom: 3px;
  }
`;

const Contenedor = styled.div`
  background: #147551;
  opacity: 0.8;
  //background: #FFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

export default Header;
