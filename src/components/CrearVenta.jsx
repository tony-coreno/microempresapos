import React, { useContext, useState } from "react";
import { ContextEstado } from "../context/ContextEstado";
import AdministrarVentas from "./AdministrarVentas";
import DetalleVenta from "../elements/DetalleVenta";
import ModalVentaManual from "../modals/ModalVentaManual";
import Reportes from "./Reportes";
import Carrito from "./Carrito";
import FormularioCrearVenta from "./FormularioCrearVenta";
import { Switch, NavLink, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode, faCashRegister } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import { Spinner } from "reactstrap";

const CrearVenta = () => {
  const { articulos } = useContext(ContextEstado);
  const [modalManual, setModalManual] = useState(false);
  let f = new Date();
  return (
    <div>
      <Contenedorapp>
        <Menu>
          {sessionStorage.getItem("perfil") === "Administrador" ? (
            <>
              <NavLink to="/crear-venta">Crear Venta</NavLink>
              <NavLink to="/administrar-venta">Administrar</NavLink>
              <NavLink to="/reportes">Reportes</NavLink>
            </>
          ) : (
            <NavLink to="/crear-venta">Crear Venta</NavLink>
          )}
        </Menu>
        <main>
          <Switch>
            <Route path="/reportes" component={Reportes} />
            <Route path="/administrar-venta" component={AdministrarVentas} />
          </Switch>
          <TituloEmpleado>
            Vendedor : {sessionStorage.getItem("nombre")} | Fecha:{" "}
            {f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}
          </TituloEmpleado>

          <hr />
          <Contenedor>
            <h4> Escanea un producto </h4>
            <FontAwesomeIcon icon={faBarcode} />
            <FormularioCrearVenta />
            <hr />

            <button
              to="/"
              className="btn btn-outline-primary"
              data-toggle="modal"
              data-target="#addEmpleado"
              onClick={() => setModalManual(true)}
            >
              <i>
                <FontAwesomeIcon icon={faCashRegister} />
              </i>{" "}
              Ingresar producto manual
            </button>
            {/* <button className="btn btn-outline-primary">
             <FontAwesomeIcon icon={faCashRegister} />  Ingresar producto manual</button> */}
            {articulos > 0 ? <DetalleVenta /> : null}
          </Contenedor>
        </main>
        <aside>
          <Carrito />
        </aside>
      </Contenedorapp>
      <ModalVentaManual
        modalManual={modalManual}
        setModalManual={setModalManual}
      />
    </div>
  );
};

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #147551;
  //opacity: 0.8;
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

const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 4fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const TituloEmpleado = styled.h6`
  font-family: Open-sans;
`;

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

export default CrearVenta;
