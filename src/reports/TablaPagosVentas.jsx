import React from "react";
// import { SeccionBoton } from "./Style/ReporteStyle";

const TablaPagosVentas = ({pagos, eliminar, actualizar}) => {
  return (
    <>
      <form>
        <div className="table-responsive table-borderless table-hover">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <table className="table table-responsive-sm ">
                    <thead className="light">
                      <tr>
                        <th>Medio de pago</th>
                        <th>Estado</th>
                        <th>Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pagos.map((medio, i) => {
                        if (medio.nombre === "" || medio.nombre==="Efectivo") {
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
                          <tr key={i}>
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
        {/* <SeccionBoton>
          <button className="btn btn-outline-success">Guardar</button>
        </SeccionBoton> */}
      </form>
    </>
  );
};


export default TablaPagosVentas;
