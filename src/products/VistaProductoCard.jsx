import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import HerramientaVistaProducto from "./HerramientaVistaProducto";
import {Contenedorapp, Contenedor, Contenedor2} from './styled/VistaProductoStyled'

const VistaProductoCard = () => {
  const [productos, setProductos] = useState([""]);
  let cantidad = 0;
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
      <HerramientaVistaProducto buscar={buscar} />
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
                <span className="badge badge-success badge-pill">
                  {cantidad}
                </span>
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
              cantidad = cantidad + producto.marca;
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
                        <h6 className="card-text">Existencia: {producto.existencia}</h6>
                        <p className="card-text">
                          <small className="text-muted">
                            <br />
                          </small>
                        </p>
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

export default VistaProductoCard;
