import React from "react";
import { TituloColor } from "../clients/style/ClienteStyle";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
const ClientesMap = ({ clientes }) => {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="bg-light card-header py-2">
                <TituloColor>
                  Clientes de {sessionStorage.getItem("nombre") || "Invitado"}{" "}
                  <ReactHTMLTableToExcel
                    id="botonExportarExcel"
                    className="btn btn-success"
                    table="tablaClientes"
                    filename="empleados"
                    sheet="Empleado"
                    buttonText="Exportar a Excel"
                  />
                </TituloColor>
              </div>
              <table className="table table-responsive-lg " id="tablaClientes">
                <thead className="light">
                  <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Teléfono</th>
                    <th>Código Prom.</th>
                    <th>Cliente</th>
                  </tr>
                </thead>
                <tbody>
                  {clientes.map((cliente, i) => {
                    let clase = "alert alert-success";

                    if (cliente.tipocliente === "Minorista") {
                      clase = "alert alert-warning";
                    }
                    return (
                      <tr key={cliente._id}>
                        <td>{i + 1}</td>
                        <td>{cliente.nombre}</td>
                        <td>{cliente.apellido}</td>
                        <td>{cliente.telefono}</td>
                        <td>{cliente.codigopromocional}</td>
                        <td className={clase}>{cliente.tipocliente}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientesMap;
