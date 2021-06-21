import React from "react";
import { SeccionBoton, Titulo } from "./Style/ReporteStyle";

const TablaPagosVentas = ({pagos, eliminar, actualizar}) => {
  return (
    <>
      <form>
        <div className="table-responsive table-borderless table-hover">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="bg-light card-header py-1">
                    <Titulo>Detalle de venta</Titulo>
                  </div>
                  <table className="table table-responsive-sm ">
                    <thead className="light">
                      <tr>
                        <th>Medio de pago</th>
                        <th>Estado</th>
                        <th>Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pagos.map((medio) => {
                        if (medio.nombre === "") {
                          return null;
                        }
                        let valor = "";
                        let clase = "";
                        if (medio.estado) {
                          valor = "Activo";
                          clase = "btn btn-outline-success";
                        } else {
                          valor = "Inactivo";
                          clase = "btn btn-outline-info";
                        }
                        return (
                          <tr key={medio._id}>
                            <td>{medio.nombre}</td>
                            <td>
                              <button
                                className={clase}
                                onClick={(e) => actualizar(e, medio)}
                              >
                                {valor}
                              </button>
                            </td>
                            <td>
                              <button
                                className="btn btn-outline-danger"
                                onClick={(e) => eliminar(e, medio._id)}
                              >
                                Eliminar
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
        <hr />
        <SeccionBoton>
          <button className="btn btn-outline-success">Guardar</button>
        </SeccionBoton>
      </form>
    </>
  );
};


export default TablaPagosVentas;
