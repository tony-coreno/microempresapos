import React from "react";
import styled from "styled-components";
import { Switch, NavLink, Route, Link } from "react-router-dom";
import AdministrarVentas from "./AdministrarVentas";
import Reportes from "./Reportes";
import Carrito from "./Carrito";
import FormularioCrearVenta from "./FormularioCrearVenta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBarcode, faCashRegister} from "@fortawesome/free-solid-svg-icons";
import ProductoManual from "../elements/ProductoManual";
import "bootstrap/dist/css/bootstrap.css";
// import ModalVentaManual from "../modals/ModalVentaManual";
const CrearVenta = () => {
  let f = new Date();
  return (
    <div>
      <Contenedorapp>
        <Menu>
          {(sessionStorage.getItem("perfil") === "Administrador") ?
          <>
          <NavLink to="/crear-venta">Crear Venta</NavLink>
          <NavLink to="/administrar-venta">Administrar</NavLink>
          <NavLink to="/reportes">Reportes</NavLink>
          </>
          :
          <NavLink to="/crear-venta">Crear Venta</NavLink>
          }
        </Menu>
        <main>
          <Switch>
            <Route path="/reportes" component={Reportes} />
            <Route path="/administrar-venta" component={AdministrarVentas} />
          </Switch>
          <TituloEmpleado>
            Vendedor : {sessionStorage.getItem('nombre')} | Fecha: {f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}
          </TituloEmpleado>

          <hr />
          <Contenedor>
          <h4>  Escanea un producto </h4>
          <FontAwesomeIcon icon={faBarcode} /><FormularioCrearVenta />
          <hr />

          <Link
              to="/"
              className="btn btn-outline-primary"
              data-toggle="modal"
              data-target="#addEmpleado"
            >
              <i><FontAwesomeIcon icon={faCashRegister} /></i> Ingresar producto manual
            </Link>
          {/* <button className="btn btn-outline-primary">
             <FontAwesomeIcon icon={faCashRegister} />  Ingresar producto manual</button> */}
          <ProductoManual />
          </Contenedor>
          <div className="modal fade" id="addEmpleado">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Add Empleado</h5>
              <button className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    // onChange={(e) => setNombres(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    // onChange={(e) => setApellidos(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Puesto</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    // onChange={(e) => setPuesto(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Identificación</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    // onChange={(e) => setIdentificacion(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Tipo de contrato</label>
                  {/* <select
                    className="form-control"
                    onChange={(e) => setContratoSelect(e.target.value)}
                    value={contratoSelect}
                  >
                    {tcontratos.map((tcontrato) => (
                      <option key={tcontrato}>{tcontrato}</option>
                    ))}
                  </select> */}
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" type="submit">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </main>

        <aside>
          <Carrito />
        </aside>
      </Contenedorapp>
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
  background: #FFF;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

export default CrearVenta;
