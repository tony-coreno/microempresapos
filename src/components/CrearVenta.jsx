import React, { useState } from "react";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import AdministrarVentas from "./AdministrarVentas";
import Reportes from "./Reportes";
import Carrito from "./Carrito";
import FormularioCrearVenta from "./FormularioCrearVenta";
const CrearVenta = () => {
  const [ventaProducto, setVentaProducto] = useState([]);
  let f = new Date();
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
            <Route path="/reportes" component={Reportes} />
            <Route path="/administrar-venta" component={AdministrarVentas} />
          </Switch>
          <TituloEmpleado>
            Vendedor:{" Antonio |"}  Fecha: {f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}
          </TituloEmpleado>

          <hr />
          <h4>Escanea un producto</h4>
          <FormularioCrearVenta
            ventaProducto={ventaProducto}
            setVentaProducto={setVentaProducto}
          />

          {/* <ol>
                    { ventaProducto.map( (venta) =>{
                            return(

                                <ul>{venta}</ul>
                            )

                        })
                    }
                    </ol> */}
        </main>

        <aside>
          <Carrito ventaProducto={ventaProducto} />
        </aside>
      </Contenedorapp>
    </div>
  );
};

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #147551;
  grid-column: span 2;
  border-radius: 3px;

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
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const TituloEmpleado = styled.h6`
  font-family: Open-sans;
`;

export default CrearVenta;
