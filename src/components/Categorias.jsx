import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CategoriasProductos from "../products/CategoriasProductos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import AgregarCategoria from "./AgregarCategoria";
import BarraProductos from "../products/BarraProductos";
import Unidades from "../products/Unidades";
import AgregarUnidad from "./AgregarUnidad";
import CategoriasHerramientas from "../products/CategoriasHerramientas";

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [categoria, setCategoria] = useState(true);
  const [unidades, setUnidades] = useState([]);
  const [unidad, setUnidad] = useState(true);
  const validacion = sessionStorage.getItem("perfil");

  useEffect(() => {
    obtenerCategorias();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    obtenerUnidades();
    // eslint-disable-next-line
  }, []);

  const obtenerCategorias = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/categorias/obtener/" + id, {
      headers: { autorizacion: token },
    });
    setCategorias(respuesta.data);
  };

  const obtenerUnidades = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/unidades/obtener/" + id, {
      headers: { autorizacion: token },
    });
    setUnidades(respuesta.data);
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
      {validacion === "Administrador" ? (
        <CategoriasHerramientas buscar={buscar} />
      ) : null}
      <Contenedorapp>
        <Contenedor2>
          <div className="container-small">
            {categoria ? (
              <Contenedorapp>
                <h4>
                  Categorías de{" "}
                  <span className="badge badge-dark">
                    {sessionStorage.getItem("nombre")}
                  </span>
                </h4>
                <p></p>
                <hr />
                {validacion === "Administrador" ? (
                  <button
                    className="btn btn-outline-dark mt-3"
                    onClick={() => setCategoria(false)}
                  >
                    <FontAwesomeIcon icon={faShoppingBasket} /> Agregar
                    Categoría
                  </button>
                ) : (
                  <img
                    src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
                    title="POS"
                    alt="POS"
                    className="text-center"
                  />
                )}
              </Contenedorapp>
            ) : (
              <AgregarCategoria
                setCategoria={setCategoria}
                obtenerCategorias={obtenerCategorias}
              />
            )}
          </div>
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
                    <span className="badge badge-dark">
                      {sessionStorage.getItem("nombre")}
                    </span>
                  </h4>
                  <p></p>
                  <hr />
                  {validacion === "Administrador" ? (
                    <button
                      className="btn btn-outline-dark mt-3"
                      onClick={() => setUnidad(false)}
                    >
                      <FontAwesomeIcon icon={faShoppingBasket} /> Agregar Unidad
                    </button>
                  ) : (
                    <img
                      src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
                      title="POS"
                      alt="POS"
                      className="text-center"
                    />
                  )}
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

export default Categorias;
