import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import { Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HerramientasProductos from "../products/HerramientasProductos";
import BarraProductos from "../products/BarraProductos";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  let perfil = sessionStorage.getItem("perfil");
  let surtir = "";

  useEffect(() => {
    if (perfil === "Administrador") {
      obtenerProductos();
    } else {
      obtenerProductosEmpleados();
    }
    // eslint-disable-next-line
  }, []);
  const obtenerProductos = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/productos/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setProductos(respuesta.data);
  };
  const obtenerProductosEmpleados = async () => {
    const token = sessionStorage.getItem("token");
    const jefe = sessionStorage.getItem("jefe");
    const respuesta = await Axios.get("/productos/listarporadmin/" + jefe, {
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
      <BarraProductos />
      <Contenedorapp>
        <Navbar>
          {
            sessionStorage.getItem("perfil") === "Administrador" ? <HerramientasProductos /> : null
          }

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
        <div className="table-responsive table-borderless table-hover">
          <div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="bg-light card-header">
                      <Titulo>
                        Productos de{" "}
                        {sessionStorage.getItem("nombre") || "Invitado"}
                      </Titulo>
                    </div>
                    <table
                      className="table table-responsive-lg "
                      id="tablaProductos"
                    >
                      <thead className="light">
                        <tr>
                          <th>#</th>
                          <th>SKU</th>
                          <th>Marca</th>
                          <th>Producto</th>
                          <th>Existencia</th>
                          <th>Precio de venta</th>
                          <th>Categoría</th>
                          <th>Unidad</th>
                          <th>Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productos.map((producto, i) => {
                          let { existencia } = producto;
                          let { estado } = producto;
                          let clase = "";
                          if (existencia < 50) {
                            surtir = `alert alert-danger text-center`;
                          } else {
                            surtir = `alert alert-success text-center`;
                          }
                          if (estado === "Agotado") {
                            clase = "alert alert-danger";
                          }
                          return (
                            <tr key={producto._id}>
                              <td>{i + 1}</td>
                              <td>{producto.sku}</td>
                              <td>{producto.marca}</td>
                              <td>{producto.producto}</td>
                              <td className={surtir}>{producto.existencia}</td>
                              <td className="text-center">
                                {producto.precioventa}
                              </td>
                              <td>{producto.categoria}</td>
                              <td>{producto.unidad}</td>
                              <td className={clase}>{producto.estado}</td>
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
const Titulo = styled.h4`
  color: #000;
`;
const Buscar = styled.input`
  border-radius: 10px;
`;

export default Productos;
