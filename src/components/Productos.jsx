import React, { useEffect } from "react";
import { Contenedorapp, Buscar } from "../products/styled/CategoriaStyle";
import { ProductosHook } from "../hooks/ProductosHook";
import { Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HerramientasProductos from "../products/HerramientasProductos";
import BarraProductos from "../products/BarraProductos";
import ProductosMap from "./ProductosMap";

const Productos = () => {
  const { productos, obtenerProductos, obtenerProductosEmpleados, buscar } =
    ProductosHook();
  let perfil = sessionStorage.getItem("perfil");

  useEffect(() => {
    if (perfil === "Administrador") {
      obtenerProductos();
    } else {
      obtenerProductosEmpleados();
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <BarraProductos />
      <Contenedorapp>
        <Navbar>
          {sessionStorage.getItem("perfil") === "Administrador" ? (
            <HerramientasProductos />
          ) : null}

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
        <ProductosMap productos={productos} />
      </Contenedorapp>
    </div>
  );
};

export default Productos;
