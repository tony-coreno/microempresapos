import React, { useContext } from "react";
import styled from "styled-components";
import { ContextEstado } from "../context/ContextEstado";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTrash, faTrashRestoreAlt} from "@fortawesome/free-solid-svg-icons";
const TablaCarrito = () => {

  const {ventaProducto} = useContext(ContextEstado)


  return (
    <>
      <div className="table-responsive table-borderless table-hover">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="bg-dark card-header py-1">
                  <Titulo>Detalle de venta</Titulo>
                </div>
                <table className="table table-responsive-lg text-center ">
                  <thead className="light">
                    <tr>
                      <th># Artículos</th>
                      <th>SKU</th>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ventaProducto.map((producto, i) => {
                        return (
                          <tr key={producto._id}>
                            <td>{i + 1}</td>
                            <td>{producto.sku}</td>
                            <td>{producto.producto}</td>
                            <td>{producto.precioventa}</td>
                            <td>{producto.unidad}</td>
                            <td>
                              <button
                                className="bn btn-outline-dark mr-2"
                                
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                          </td>
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
    </>
  );
};

// const Tabla = styled.section`
//   background: #fff;
//   text-align: center;
//   font-family: "Open Sans", sans-serif;
// `;

const Titulo = styled.h6`
  color: #fff;
  text-align: center;
`;

export default TablaCarrito;
