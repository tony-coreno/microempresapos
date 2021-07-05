import React, { useState } from "react";
import Axios from "axios";
import { Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import {
  Contenedorapp,
  Contenedor,
  Contenedor2,
  Boton,
  Herramientas,
} from "./style/Kardex.Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOutdent, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import ConsultaKardex from "../kardex/ConsultaKardex";
import TablaKardex from "../kardex/TablaKardex";
// import HerramientasKardex from "../kardex/HerramientasKardex";

const Kardex = () => {
  const [producto, setProducto] = useState("");
  const [kardexItem, setKardexItem] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (producto.trim().length > 5) {
      const obtenerProducto = async () => {
        const sku = producto;
        const respuesta = await Axios.get(`/productos/carrito/${sku}`);
        setKardexItem(respuesta.data);
      };
      obtenerProducto();
    }
  };

  return (
    <div>
      <Navbar>
        {/* <HerramientasKardex /> */}
        <Herramientas>
          <NavLink to="/agregar-producto">
            <Boton
              className="btn btn-light d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar mercancía"
            >
              <FontAwesomeIcon icon={faShoppingBasket} /> Entrada de mercancía
            </Boton>
          </NavLink>
          <NavLink to="/agregar-producto">
            <Boton
              className="btn btn-light d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Quitar inventario"
            >
              <FontAwesomeIcon icon={faOutdent} />
              <p> </p> Salida mercancía
            </Boton>
          </NavLink>
        </Herramientas>
      </Navbar>
      <Contenedorapp>
        <Contenedor>
          <ConsultaKardex
            setProducto={setProducto}
            handleSubmit={handleSubmit}
          />
        </Contenedor>
        <aside>
          <Contenedor2>
            <h3>Producto</h3>
            <TablaKardex kardexItem={kardexItem} />
          </Contenedor2>
        </aside>
      </Contenedorapp>
    </div>
  );
};

export default Kardex;
