import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { Button } from "reactstrap";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.css";

import styled from "styled-components";

const NuevoProducto = () => {
  const [sku, setSku] = useState("");
  const [producto, setProducto] = useState("");
  const [existencia, setExistencia] = useState("");
  const [precioventa, setPrecioventa] = useState("");
  const [marca, setMarca] = useState("");
  const [categoriaSelected, setCategoriaSelected] = useState([""]);
  const [categoria, setCategoria] = useState("");
  const [unidadSelected, setUnidadSelected] = useState([""]);
  const [unidad, setUnidad] = useState("");
  const [estadoSelected, setEstadoSelected] = useState([]);
  const [estado, setEstado] = useState("");
  const [talla, setTalla] = useState("");

  useEffect(() => {
    setCategoriaSelected(["", "Bebidas", "Abarrotes", "Frituras", "Lácteos",]);
    setUnidadSelected(["", "ml", "grs", "lts", "Unidades",]);
    setEstadoSelected(["", "Activo", "Inactivo", "Agotado"]);
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
    });
    setTimeout(() => {
      window.location.href = "/productos";
    }, 1500);
  };
  return (
    <>
      <main className="caja-contenido col-12">
        <div>
          <NavLink to="/productos">
            <Button className="btn btn-success">
              <FontAwesomeIcon icon={faArrowLeft} />
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
            <div class="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre producto"
                onChange={(e) => setProducto(e.target.value)}
                required
              />
            </div>
            <div class="col">
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
            ) : (
              <></>
            )}
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
                {categoriaSelected.map((categorias) => (
                  <option key={categorias}>{categorias}</option>
                ))}
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
                  <option key={unidad}>{unidad}</option>
                ))}
              </select>
              <div className="form-group col-mt-4">
                <br />
                <Titulo>Estado</Titulo>
                <select
                  onChange={(e) => setEstado(e.target.value)}
                  value={estado}
                  className="form-control mt-"
                >
                  {estadoSelected.map((estado) => (
                    <option key={estado}>{estado}</option>
                  ))}
                </select>
              </div>
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
