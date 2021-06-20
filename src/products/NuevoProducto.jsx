import React, { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HerramientasNuevoProducto from "./HerramientasNuevoProducto";
import styled from "styled-components";

const NuevoProducto = () => {
  const [sku, setSku] = useState("");
  const [producto, setProducto] = useState("");
  const [existencia, setExistencia] = useState("");
  const [precioventa, setPrecioventa] = useState("");
  const [marca, setMarca] = useState("");
  const [categoriaSelected, setCategoriaSelected] = useState([]);
  const [categoria, setCategoria] = useState("");
  const [unidadSelected, setUnidadSelected] = useState([""]);
  const [unidad, setUnidad] = useState("");
  const [talla, setTalla] = useState("");

  useEffect(() => {
    obtenerCategorias();
    obtenerUnidades();
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
        <HerramientasNuevoProducto />
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
                required
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
                required
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Precio de venta"
                onChange={(e) => setPrecioventa(e.target.value)}
                required
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
                {unidadSelected.map((unidad) => {
                  if (!unidad.estado) {
                    return null;
                  }
                  return <option key={unidad._id}>{unidad.nombre}</option>;
                })}
              </select>
            </div>
          </div>
          <hr />
          <button className="btn btn-outline-success">
            <FontAwesomeIcon icon={faSave} /> Guardar
          </button>
        </form>
      </main>
    </>
  );
};

const Titulo = styled.h5`
  text-align: center;
`;

export default NuevoProducto;
