import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import Axios from "axios";
import Categorias from "../components/Categorias";
import Swal from 'sweetalert2';
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBag,
  faTrashAlt,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
const Productos = () => {
  const [productos, setProductos] = useState(['']);
  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      "/productos/listarporadmin/" + id,
      {
        headers: { autorizacion: token },
      }
    );
    setProductos(respuesta.data);
  };
  const buscar = async (e) => {
    if (e.target.value === "") {
      return obtenerProductos();
    }
    const buscar = e.target.value;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      `/productos/buscar/${buscar}/${sessionStorage.getItem("idusuario")}`,
      {
        headers: { autorizacion: token },
      }
    );
    setProductos(respuesta.data);
  };
  const eliminar = async (id) => {
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/productos/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerProductos();
  };
  return (
    <div>
      <Contenedorapp>
        <Menu>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/categorias">Categorías</NavLink>
          <NavLink to="/categorias">Devoluciones</NavLink>
        </Menu>
        <main>
          <Switch>
            <Route path="/categorias" component={Categorias} />
          </Switch>
        </main>
        <Navbar>

        { sessionStorage.getItem("perfil") ==="Administrador" ?
           
            <>
          <NavLink to="/agregar-producto">
            <Button
              className="btn btn-success d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar producto"
            >
              <FontAwesomeIcon icon={faShoppingBag} />
            </Button>
          </NavLink>
          </>
          :
          <>
          </>
          }
    
          {sessionStorage.getItem("token") ? (
            <div className="col-md-4 ml-auto mt-4">
              <div className="input-group fa-2x">
                <input
                  className="form-control mr-sm-4"
                  type="search"
                  placeholder="Buscar por producto..."
                  aria-label="Search"
                  onChange={buscar}
                  autoFocus
                  // onChange={buscar}
                />
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </Navbar>
        <Contenedor>
        <div
              className="card ms-1 animate__animated animate__fadeIn"
              style={{ maxWidth: 240 }}
            >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src="https://img.icons8.com/officel/80/000000/supplier.png"
                    className="card-img"
                    alt="POS"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Provider</h5>
                    <p className="card-text">Coca-Cola</p>
                    {/* 
                        {
                            ( alter_ego !== characters ) 
                                && <p className="card-text"> { characters } </p>
                        } */}

                    <p className="card-text">
                      <small className="text-muted">Tel(55-11-92-34-85)</small>
                    </p>
                    {/* 
                        <Link to={ `./hero/${ id }` }>
                            Más...
                        </Link> */}
                  </div>
                </div>
              </div>
            </div>
            </Contenedor>
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
  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
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
const Titulo = styled.h4`
  color: #000;
`;

export default Productos;
