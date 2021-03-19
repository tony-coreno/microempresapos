import React from "react";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import DataTable from "react-data-table-component";
import Categorias from "./Categorias";
const Productos = () => {
  const tablaProductos = [
    {
      id: "",
      nombre: "",
      apellido: "",
      perfil: "",
      estatus: "",
    },
  ];

  const columnas = [
    {
      name: "SKU",
      selector: "id",
      sortable: true,
      grow: 1,
    },
    {
      name: "Nombre Producto",
      selector: "nombre",
      sortable: true,
    },
    {
      name: "Existencia",
      selector: "apellido",
      sortable: true,
    },
    {
      name: "Categoria",
      selector: "perfil",
      sortable: true,
    },
    {
      name: "Precio de venta",
      selector: "estatus",
      sortable: true,
    },
  ];

  const paginacionOpcion = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <div>
      <Contenedorapp>
        <Menu>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/categorias">Categorias</NavLink>
        </Menu>
        <main>
          <Switch>
            <Route path="/categorias" component={Categorias} />
          </Switch>
        </main>

        <DataTable
          columns={columnas}
          data={tablaProductos}
          title="Gestión producto"
          pagination
          paginationComponentOptions={paginacionOpcion}
          fixedHeader
          fixedHeaderScrollHeight="300px"
        />
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


background: #fff;
margin: 5px 0;
border-radius: 20px;
box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default Productos;
