import React from "react";
import { Titulo } from "../products/styled/CategoriaStyle";
const ProductosMap = ({productos}) => {
    let surtir = "";
  return (
    <>
      <div className="table-responsive table-borderless table-hover">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="bg-light card-header">
                    <Titulo>
                      Productos de{" "}
                      {sessionStorage.getItem("nombre") || "Invitado"}
                    </Titulo>
                  </div>
                  <table
                    className="table table-responsive-lg "
                    id="tablaProductos"
                  >
                    <thead className="light">
                      <tr>
                        <th>#</th>
                        <th>SKU</th>
                        <th>Marca</th>
                        <th>Producto</th>
                        <th>Existencia</th>
                        <th>Precio de venta</th>
                        <th>Categoría</th>
                        <th>Unidad</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productos.map((producto, i) => {
                        let { existencia } = producto;
                        let { estado } = producto;
                        let clase = "";
                        if (existencia < 50) {
                          surtir = `alert alert-danger text-center`;
                        } else {
                          surtir = `alert alert-success text-center`;
                        }
                        if (estado === "Agotado") {
                          clase = "alert alert-danger";
                        }
                        return (
                          <tr key={producto._id}>
                            <td>{i + 1}</td>
                            <td>{producto.sku}</td>
                            <td>{producto.marca}</td>
                            <td>{producto.producto}</td>
                            <td className={surtir}>{producto.existencia}</td>
                            <td className="text-center">
                              {producto.precioventa}
                            </td>
                            <td>{producto.categoria}</td>
                            <td>{producto.unidad}</td>
                            <td className={clase}>{producto.estado}</td>
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
      </div>
    </>
  );
};

export default ProductosMap;
