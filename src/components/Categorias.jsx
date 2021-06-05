import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import CategoriasProductos from "../products/CategoriasProductos";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePdf,
  faFilter,
  faSearch,
  faShoppingBag,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import AgregarCategoria from "./AgregarCategoria";
import BarraProductos from "../products/BarraProductos";
import Unidades from "../products/Unidades";
import AgregarUnidad from "./AgregarUnidad";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(true);
  const [unidades, setUnidades] = useState([]);
  const [unidad, setUnidad] = useState(true);

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    obtenerUnidades();
  }, []);

  const obtenerCategorias = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/categorias/obtener/" + id, {
      headers: { autorizacion: token },
    });
    setCategorias(respuesta.data);
    console.log(categorias);
  };

  const obtenerUnidades = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/unidades/obtener/" + id, {
      headers: { autorizacion: token },
    });
    setUnidades(respuesta.data);
    console.log(unidades);
  };

  const buscar = async (e) => {
    if (e.target.value === "") {
      return obtenerCategorias();
    }
    const categoria = e.target.value;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      `/categorias/buscar/${categoria}/${sessionStorage.getItem("idusuario")}`,
      {
        headers: { autorizacion: token },
      }
    );
    setCategorias(respuesta.data);
  };
  return (
    <div>
      <BarraProductos />
      <Navbar>
        <Herramientas className="">
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
        </Herramientas>
        {sessionStorage.getItem("token") ? (
          <div className="col-md-4 ml-auto">
            <div className="input-group fa-2x">
              <Buscar
                className="form-control mr-sm-4"
                type="search"
                placeholder="Buscar categoría..."
                aria-label="Search"
                autoFocus
                onChange={buscar}
              ></Buscar>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        ) : null}
      </Navbar>
      <Contenedorapp>
        <Contenedor2>
          {
            <div className="container-small">
              {categoria ? (
                <Contenedorapp>
                  <h4>
                    Categorías de{" "}
                    <span className="badge badge-success">
                      {sessionStorage.getItem("nombre")}
                    </span>
                  </h4>
                  <p></p>
                  <hr />
                  <button
                    className="btn btn-outline-primary mt-3"
                    onClick={() => setCategoria(false)}
                  >
                    <FontAwesomeIcon icon={faShoppingBasket} /> Agregar
                    Categoría
                  </button>
                </Contenedorapp>
              ) : (
                <AgregarCategoria
                  setCategoria={setCategoria}
                  obtenerCategorias={obtenerCategorias}
                />
              )}
            </div>
          }
          <CategoriasProductos
            categorias={categorias}
            obtenerCategorias={obtenerCategorias}
          />
        </Contenedor2>
        <aside>
          <Contenedor2>
          <div className="container-small">
              {unidad ? (
                <Contenedorapp>
                  <h4>
                    Unidades de{" "}
                    <span className="badge badge-success">
                      {sessionStorage.getItem("nombre")}
                    </span>
                  </h4>
                  <p></p>
                  <hr />
                  <button
                    className="btn btn-outline-info mt-3"
                    onClick={() => setUnidad(false)}
                  >
                    <FontAwesomeIcon icon={faShoppingBasket} /> Agregar
                    Unidad
                  </button>
                </Contenedorapp>
              ) : (
                <AgregarUnidad
                  setUnidad={setUnidad}
                  obtenerUnidades={obtenerUnidades}
                />
              )}
            </div>
            <Unidades unidades={unidades} obtenerUnidades={obtenerUnidades} />
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
  //grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Contenedor2 = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 4fr;
  //background: #eef3f5;
  background: #fff;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

const Boton = styled.button`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  outline: none;
`;

const Herramientas = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px;
  padding: 10px;
  gap: 20px;
`;

const Buscar = styled.input`
  border-radius: 10px;
`;
export default Categorias;
