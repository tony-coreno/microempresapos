import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { Button } from "reactstrap";
import {
  faArchive,
  faArrowLeft,
  faLayerGroup,
  faSave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import styled from "styled-components";
import ModalUnidadProducto from "../modals/ModalUnidadProducto";

const NuevoProducto = () => {
  const [modalUnidad, setModalUnidad] = useState(false);
  const [sku, setSku] = useState("");
  const [producto, setProducto] = useState("");
  const [existencia, setExistencia] = useState("");
  const [precioventa, setPrecioventa] = useState("");
  const [marca, setMarca] = useState("");
  const [categoriaSelected, setCategoriaSelected] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [unidadSelected, setUnidadSelected] = useState([""]);
  const [unidad, setUnidad] = useState("");
  const [estadoSelected, setEstadoSelected] = useState([]);
  const [estado, setEstado] = useState("");
  const [talla, setTalla] = useState("");

  useEffect(() => {
    obtenerCategorias();
    obtenerUnidades();
    // setUnidadSelected(["", "ml", "grs", "lts", "Unidades"]);
    // setEstadoSelected(["", "Activo", "Inactivo", "Agotado"]);
  }, []);

  const guardar = async (e) => {
    e.preventDefault();
    const stock = {
      sku,
      producto,
      existencia,
      precioventa,
      marca,
      categoria: categoria,
      unidad,
      estado: estado,
      talla,
      jefe: sessionStorage.getItem("idusuario"),
    };
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.post("/productos/agregar", stock, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 500,
    });
    setTimeout(() => {
      window.location.href = "/producto";
    }, 1000);
  };
  const obtenerCategorias = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/categorias/obtener/" + id, {
      headers: { autorizacion: token },
    });
    setCategoriaSelected(respuesta.data);
  };
  const obtenerUnidades = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/unidades/obtener/" + id, {
      headers: { autorizacion: token },
    });
    setUnidadSelected(respuesta.data);
  };
  return (
    <>
      <main className="caja-contenido col-12">
        <div>
          <NavLink to="/producto">
            <Button
              className="btn btn-success mr-3"
              data-toggle="tooltip"
              data-placement="right"
              title="Regresar"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </NavLink>
          <Button
            className="btn btn-info mr-3"
            data-toggle="tooltip"
            data-placement="right"
            title="Agregar unidad"
            onClick={() => setModalUnidad(true)}
          >
            <FontAwesomeIcon icon={faLayerGroup} /> Unidades
          </Button>
          <NavLink to="/categorias">
            <Button className="btn btn-info mr-3">
              <FontAwesomeIcon icon={faArchive} /> Categorias
            </Button>
          </NavLink>
          <Titulo>Agregar Producto</Titulo>
        </div>
        <form onSubmit={guardar}>
          <hr />
          <div className="row">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="SKU"
                onChange={(e) => setSku(e.target.value)}
                required
                autoFocus
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre producto"
                onChange={(e) => setProducto(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Marca"
                onChange={(e) => setMarca(e.target.value)}
              />
            </div>
            {sessionStorage.getItem("negocio") === "Ropa" ? (
              <>
                <div class="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ropa"
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Talla"
                    onChange={(e) => setTalla(e.target.value)}
                  />
                </div>
              </>
            ) : null}
          </div>
          <div className="row mt-4">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Existencia"
                onChange={(e) => setExistencia(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Precio de venta"
                onChange={(e) => setPrecioventa(e.target.value)}
              />
            </div>
          </div>
          <hr />
          <div>
            <Titulo>Categoría</Titulo>
            <div className="form-group col-mt-4">
              <select
                className="form-control mt-2"
                onChange={(e) => setCategoria(e.target.value)}
                value={categoria}
              >
                {categoriaSelected.map((categorias) => {
                  if (!categorias.estado) {
                    return null;
                  }
                  return (
                    <option key={categorias._id}>{categorias.nombre}</option>
                  );
                })}
              </select>
            </div>
            <div className="form-group col-mt-4">
              <Titulo>Unidad</Titulo>
              <select
                className="form-control mt-2"
                onChange={(e) => setUnidad(e.target.value)}
                value={unidad}
              >
                {unidadSelected.map((unidad) => (
                  <option key={unidad._id}>{unidad.nombre}</option>
                ))}
              </select>
            </div>
          </div>
          <hr />
          <button className="btn btn-outline-success">
            <FontAwesomeIcon icon={faSave} /> Guardar
          </button>
        </form>
      </main>
      <ModalUnidadProducto
        modalUnidad={modalUnidad}
        setModalUnidad={setModalUnidad}
        unidadSelected={unidadSelected}
        setUnidadSelected={setUnidadSelected}
      />
    </>
  );
};

const Titulo = styled.h5`
  text-align: center;
`;

export default NuevoProducto;
