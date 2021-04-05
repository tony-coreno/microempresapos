import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import Axios from 'axios'
// import DataTable from "react-data-table-component";
import Categorias from "./Categorias";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingBag, faTrashAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";
const Productos = () => {
  const [productos, setProductos] = useState([]);
  useEffect (()=>{
    obtenerProductos();
  },[]);


  // const tablaProductos = [
  //   {
  //     id: "",
  //     nombre: "",
  //     apellido: "",
  //     perfil: "",
  //     estatus: "",
  //   },
  // ];

  // const columnas = [
  //   {
  //     name: "SKU",
  //     selector: "id",
  //     sortable: true,
  //     grow: 1,
  //   },
  //   {
  //     name: "Nombre Producto",
  //     selector: "nombre",
  //     sortable: true,
  //   },
  //   {
  //     name: "Existencia",
  //     selector: "apellido",
  //     sortable: true,
  //   },
  //   {
  //     name: "Categoria",
  //     selector: "perfil",
  //     sortable: true,
  //   },
  //   {
  //     name: "Precio de venta",
  //     selector: "estatus",
  //     sortable: true,
  //   },
  //   {
  //     name: "Acciones",
  //     selector: "estatus",
  //     sortable: true,
  //   },
  // ];

  // const paginacionOpcion = {
  //   rowsPerPageText: "Filas por página",
  //   rangeSeparatorText: "de",
  //   selectAllRowsItem: true,
  //   selectAllRowsItemText: "Todos",
  // };
  const obtenerProductos = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      "http://localhost:4000/productos/listarporadmin/" + id,
      {
        headers: { autorizacion: token },
      }
    );
    setProductos(respuesta.data);
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
        <Navbar>
          <NavLink to="/agregar-producto">
            <Button
              className="btn btn-success d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar producto">
              <FontAwesomeIcon icon={faShoppingBag} />
            </Button>
          </NavLink>
          <div className="col-md-4 ml-auto mt-4">
            <div className="input-group fa-2x">
              <input
                className="form-control mr-sm-4"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
                autoFocus
                // onChange={buscar}
              /><FontAwesomeIcon icon={faSearch}/>
            </div>
          </div>
        </Navbar>
        {/* <DataTable
          columns={columnas}
          data={tablaProductos}
          title="Gestión producto"
          pagination
          paginationComponentOptions={paginacionOpcion}
          fixedHeader
          fixedHeaderScrollHeight="300px"
        /> */}
             <div className="table-responsive table-borderless table-hover">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="bg-light card-header">
                    <Titulo>
                      Productos de { sessionStorage.getItem("nombre") || 'Invitado' }
                    </Titulo>
                  </div>
                  <table className="table table-responsive-lg ">
                    <thead className="light">
                      <tr>
                        <th>#</th>
                        <th>SKU</th>
                        <th>Producto</th>
                        <th>Existencia</th>
                        <th>Precio de venta</th>
                        <th>Categoría</th>
                        <th>Unidad</th>
                        <th>Estado</th>
                        <th>Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                       {productos.map((producto, i) => {
                        return (
                          <tr key={producto.id}>
                            <td>{i + 1}</td>
                            <td>{producto.sku}</td>
                            <td>{producto.producto}</td>
                            <td>{producto.existencia}</td>
                            <td>{producto.precioventa}</td>
                            <td>{producto.categoria}</td>
                            <td>{producto.unidad}</td>
                            <td>{producto.estado ? 'En existencia' : 'Agotado'}</td>
                            <td>
                              <button
                                className="bn btn-outline-dark mr-2"
                                //   onClick={() => eliminar(empleado._id)}
                              >
                                <FontAwesomeIcon icon={faUserEdit} />
                              </button>
                              <button className="bn btn-outline-dark">
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </button>
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
const Tabla = styled.section`
  background: #fff;
  text-align: center;
  font-family: "Open Sans", sans-serif;
`;

const Titulo = styled.h4`
  color: #000;
`;

export default Productos;
