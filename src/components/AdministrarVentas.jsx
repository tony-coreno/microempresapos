import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import Reportes from "./Reportes";
import CrearVenta from "./CrearVenta";
const Almacen = () => {
    const [pago, setPago] = useState([]);

    useEffect( ()=>{
        setPago(['Efectivo', 'Tarjeta'])
    },[])

  return (
    <div>
      <Contenedorapp>
        <Menu>
          <NavLink to="/crear-venta">Crear Venta</NavLink>
          <NavLink to="/administrar-venta">Administrar</NavLink>
          <NavLink to="/reportes">Reportes</NavLink>
        </Menu>
        <main>
          <Switch>
            <Route path="/crear-venta" component={CrearVenta} />
            <Route path="/reportes" component={Reportes} />
          </Switch>
        </main>
        <p>
          <h3>Administrar</h3>
          <hr />
          <form>
            <hr />

            <div className="row">
              <div className="col">
                <h7>Agregar medio de pago</h7>
                <input
                  type="text"
                  className="form-control mt-2"
                  placeholder=""
                />
              </div>
              <div class="col">
                <h7>IVA (16%)</h7>
                <select id="inputState" className="form-control mt-2">
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>
            </div>

            <hr />
            <div className="table-responsive table-borderless table-hover">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="bg-light card-header py-1">
                        <Titulo>Detalle de venta</Titulo>
                      </div>
                      <table className="table table-responsive-sm ">
                        <thead className="light">
                          <tr>
                            <th>Medio de pago</th>
                            <th>Estado</th>
                            <th>Eliminar</th>
                          </tr>
                        </thead>
                        <tbody>
                           {pago.map((medio, i) => {
                   return (
                     <tr key={medio}>
                       <td>{medio}</td>
                       <td>
                         {/* <button
                           className="bn btn-outline-info mr-2"
                           
                         >
                           <FontAwesomeIcon icon={faUserEdit} />
                         </button>
                         <button className="bn btn-outline-dark" onClick={() => eliminar(empleado._id)}>
                           <FontAwesomeIcon icon={faTrashAlt} />
                         </button> */}
                       </td>
                     </tr>
                   );
                 })} 
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <SeccionBoton>
              <button className="btn btn-outline-success">Guardar</button>
            </SeccionBoton>
          </form>
        </p>
      </Contenedorapp>
    </div>
  );
};

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #147551;
  //grid-column: span 2;
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
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 20px;
  //grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
const SeccionBoton = styled.div`
  width: 50%;
`;
// const Tabla = styled.section`
//   background: #fff;
//   text-align: center;
//   font-family: "Open Sans", sans-serif;
// `;

const Titulo = styled.h6`
  color: #fff;
  text-align: center;
`;

export default Almacen;
