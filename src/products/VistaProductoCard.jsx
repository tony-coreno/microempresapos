import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Axios from "axios";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const VistaProductoCard = () => {
  const [productos, setProductos] = useState([""]);
  useEffect(() => {
    obtenerProductos();
  }, []);
  const obtenerProductos = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/productos/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
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
  return (
    <div>
      <Navbar>
        <NavLink to="/productos">
          <Button
            className="btn btn-success d-flex d-flex justify-content-between align-items-center"
            data-toggle="tooltip"
            data-placement="right"
            title="Regresar"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
        </NavLink>
        <div className="col-md-4 ml-auto">
          <div className="input-group fa-2x">
            <Buscar
              className="form-control mr-sm-4"
              type="search"
              placeholder="Buscar por producto..."
              aria-label="Search"
              onChange={buscar}
              autoFocus
            ></Buscar>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </Navbar>
      <Contenedorapp>
        <Contenedor>
          <div className="list-group bg">
            <Link
              to="/productos"
              // className="list-group-item list-group-item-action active"
              className="list-group-item d-flex justify-content-between align-items-center"
              aria-current="true"
            >
              Vista
            </Link>
            <ul className="list-group">
              <Link
                to="/productos"
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                Marca
                <span className="badge badge-success badge-pill">14</span>
              </Link>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Mayor stock
                <span className="badge badge-warning badge-pill">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Menor stock
                <span className="badge badge-success badge-pill">1</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Existencia
                <span className="badge badge-danger badge-pill">1</span>
              </li>
            </ul>
          </div>
        </Contenedor>
        <aside>
          <Contenedor2>
            {productos.map((producto, index) => {
              return (
                <div
                  key={index}
                  className="card ms-1 animate__animated animate__fadeIn"
                  style={{ maxWidth: 240 }}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src="https://img.icons8.com/cute-clipart/64/000000/shopping-cart-loaded.png"
                        className="card-img animate__animated animate__pulse"
                        alt="POS"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{producto.marca}</h5>
                        <h6 className="card-text">
                          {/* Stock: {producto.existencia} */}
                        </h6>

                        <p className="card-text">
                          <small className="text-muted">
                            {/* Cat: {producto.categoria} */}
                            <br />
                          </small>
                        </p>
                        {/* 
                        <Link to={ `./hero/${ id }` }>
                            Más...
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Contenedor2>
        </aside>
      </Contenedorapp>
    </div>
  );
};

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
const Buscar = styled.input`
  border-radius: 10px;
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
const Contenedor2 = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 2fr;
  //background: #eef3f5;
  background: #fff;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

export default VistaProductoCard;
