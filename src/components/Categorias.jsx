import React from "react";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import Productos from "./Productos";

const Categorias = () => {
  return (
    <div>
      <Contenedorapp>
        <Menu>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/categorias">Categorías</NavLink>
          <NavLink to="/">Devoluciones</NavLink>
        </Menu>
        <main>
          <Switch>
            <Route path="/productos" component={Productos} />
          </Switch>
        </main>
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
                        <th>Categorias</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {pago.map((medio, i) => {
                   return (
                     <tr key={medio}>
                       <td>{medio}</td>
                       <td>
                          <button
                           className="bn btn-outline-info mr-2"
                           
                         >
                           <FontAwesomeIcon icon={faUserEdit} />
                         </button>
                         <button className="bn btn-outline-dark" onClick={() => eliminar(empleado._id)}>
                           <FontAwesomeIcon icon={faTrashAlt} />
                         </button> 
                       </td>
                     </tr>
                   );
                 })}  */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Contenedorapp>
    </div>
  );
};

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

const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;
  display: grid;
  gap: 20px;
  //grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Titulo = styled.h6`
  color: #fff;
  text-align: center;
`;

export default Categorias;
