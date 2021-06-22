import React, { useContext } from "react";
import styled from "styled-components";
import { ContextEstado } from "../context/ContextEstado";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const TablaCarrito = () => {
  const { ventaProducto, setTotal, setVentaProducto, setArticulos, articulos } =
    useContext(ContextEstado);
  let pagar = 0;

  const eliminar = (e, id) => {
    e.preventDefault();
    let nuevoCarrito = ventaProducto.filter((venta) => {
      return venta._id !== id;
    });
    setVentaProducto(nuevoCarrito);
    setArticulos(articulos - 1);

    if (articulos === 1) {
      setTotal(0);
    }
  };
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
                      <th>CANT</th>
                      <th>COD</th>
                      <th>PRODUCTO</th>
                      <th>PRECIO</th>
                      <th>ELIMINAR</th>
                    </tr>
                  </thead>
                  <Tabla>
                    {ventaProducto.map((producto) => {
                      const { precioventa } = producto;
                      // const { sku } = producto;
                      pagar = pagar + precioventa;
                      setTotal(pagar);
                      // let existe = ventaProducto.some((item) => {
                      //   return item.sku === sku;
                      // });
                      // console.log(existe);
                      if (articulos === 0) {
                        pagar = 0;
                      }
                      return (
                        <tr key={producto._id}>
                          <td>{1}</td>
                          <td>{producto.sku}</td>
                          <td>{`${producto.producto.toUpperCase()} ${producto.marca.toUpperCase()}`}</td>
                          <td>{precioventa}</td>
                          <td>
                            <button
                              className="bn btn-outline-dark mr-2"
                              onClick={(e) => eliminar(e, producto._id)}
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </Tabla>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Titulo = styled.h5`
  color: #fff;
  text-align: center;
`;

const Tabla = styled.tbody`
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export default TablaCarrito;
