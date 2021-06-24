import React, { useEffect } from "react";
import { CategoriasHook } from "../hooks/CategoriasHook";
import CategoriasProductos from "../products/CategoriasProductos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import AgregarCategoria from "./AgregarCategoria";
import BarraProductos from "../products/BarraProductos";
import Unidades from "../products/Unidades";
import AgregarUnidad from "./AgregarUnidad";
import CategoriasHerramientas from "../products/CategoriasHerramientas";
import { Contenedorapp, Contenedor2 } from "../products/styled/CategoriaStyle";

const Categorias = () => {
  const {
    categorias,
    categoria,
    unidades,
    unidad,
    setUnidad,
    setCategoria,
    obtenerCategorias,
    obtenerUnidades,
    buscar,
  } = CategoriasHook();
  const validacion = sessionStorage.getItem("perfil");

  useEffect(() => {
    obtenerCategorias();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    obtenerUnidades();
    // eslint-disable-next-line
  }, []);

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

export default Categorias;
