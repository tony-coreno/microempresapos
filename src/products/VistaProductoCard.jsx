import React, { useEffect } from "react";
import { ProductosHook } from "../hooks/ProductosHook";
import HerramientaVistaProducto from "./HerramientaVistaProducto";
import { Contenedor2 } from "./styled/VistaProductoStyled";

const VistaProductoCard = () => {
  const { obtenerProductos, buscar, productos } = ProductosHook();
  let cantidad = 0;
  useEffect(() => {
    obtenerProductos();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <HerramientaVistaProducto buscar={buscar} />
      <Contenedor2>
        {productos.map((producto, index) => {
          cantidad = cantidad + producto.marca;
          return (
            <div
              key={index}
              className="card ms-3 animate__animated animate__fadeIn"
              style={{ maxWidth: 300 }}
            >
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img
                    src={`${producto.imagen}`}
                    className="card-img animate__animated animate__pulse"
                    alt="POS"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{producto.producto}</h5>
                    <small>Marca: {producto.marca}</small>
                    <h6 className="card-text badge badge-dark">
                      Existencia: {producto.existencia}
                    </h6>
                    <p className="card-text">
                      <small className="text-muted">
                        <br />
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Contenedor2>
    </div>
  );
};

export default VistaProductoCard;
