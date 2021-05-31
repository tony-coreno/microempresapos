import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { Button, Navbar } from "reactstrap";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTools,
  faTrash,
  faSearch,
  faFileExcel,
  faShoppingBag,
  faFilePdf,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import ProductosInfo from "./ProductosInfo";
import BarraProductos from "./BarraProductos";

const ProductosGeneral = () => {
  const [productos, setProductos] = useState([""]);
  const [info, setInfo] = useState([]);

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

  const buscarProducto = async (e, prov) => {
    e.preventDefault();
    const id = prov;
    const respuesta = await Axios.get("/productos/buscar/" + id);
    setInfo(respuesta.data);
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
      <BarraProductos />
      {sessionStorage.getItem("token") &&
      sessionStorage.getItem("perfil") === "Administrador" ? (
        <Contenedor3>
          <Navbar>
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
            <NavLink to="/productos">
              <Button
                className="btn btn-info d-flex d-flex justify-content-between align-items-center"
                data-toggle="tooltip"
                data-placement="right"
                title="Productos tabla"
              >
                <FontAwesomeIcon icon={faTools} />
              </Button>
            </NavLink>
            <NavLink to="/agregar-producto">
              <Boton
                className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
                data-toggle="tooltip"
                data-placement="right"
                title="Agregar Producto"
              >
                <FontAwesomeIcon icon={faShoppingBag} />
              </Boton>
            </NavLink>

            <NavLink to="/agregar-empleado">
              <Boton
                className="btn btn-danger d-flex d-flex justify-content-between align-items-center pr-2"
                data-toggle="tooltip"
                data-placement="right"
                title="Imprimir productos"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </Boton>
            </NavLink>
            <NavLink to="/agregar-empleado">
              <Button
                className="btn btn-success d-flex d-flex justify-content-between align-items-center pr-2"
                data-toggle="tooltip"
                data-placement="right"
                title="Exportar productos"
              >
                <FontAwesomeIcon icon={faFileExcel} />
              </Button>
            </NavLink>

            <NavLink to="/productos-cards">
              <Button
                className="btn btn-warning d-flex d-flex justify-content-between align-items-center pr-2"
                data-toggle="tooltip"
                data-placement="right"
                title="Filtrar stock"
              >
                <FontAwesomeIcon icon={faFilter} />
              </Button>
            </NavLink>
            <div className="">
              <div className="input-group">
                <Buscar
                  className="form-control mr-sm-4"
                  type="search"
                  placeholder="Buscar por nombre..."
                  aria-label="Search"
                  autoFocus
                  onChange={buscar}
                ></Buscar>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>
          </Navbar>
        </Contenedor3>
      ) : null}
      <Contenedorapp>
        <Contenedor>
          {info.length === 0 ? (
            <>
              <img
                className="img-thumbnail"
                src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
                alt="POS"
              />
            </>
          ) : (
            <ProductosInfo setInfo={setInfo} info={info} key={productos._id} />
          )}
        </Contenedor>
        <aside>
          <Contenedor2>
            {productos.map((producto) => {
              return (
                <Fragment key={producto._id}>
                  <div
                    className="card ms-1 animate__animated animate__fadeIn"
                    style={{ maxWidth: 240 }}
                  >
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <img
                          src="https://img.icons8.com/color/96/000000/permanent-job.png"
                          className="card-img"
                          alt="POS"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{producto.producto}</h5>
                          <h6 className="card-text">Marca: {producto.marca}</h6>
                          <p className="card-text">
                            <small className="text-muted">
                              Existencia: {producto.existencia}
                              <button
                                className="btn btn-outline-primary mr-1"
                                onClick={(e) => buscarProducto(e, producto._id)}
                              >
                                <FontAwesomeIcon icon={faEdit} />
                              </button>
                              <button
                                className="btn btn-outline-danger"
                                onClick={() => eliminar(producto._id)}
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                            </small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Fragment>
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
const Contenedor3 = styled.div`
  display: flex;
  padding: 0px;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  //background: #eef3f5;
  background: #f9f9f9;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;
const Buscar = styled.input`
  border-radius: 10px;
`;
const Boton = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
`;

export default ProductosGeneral;
