import React from "react";
import { Titulo } from "../users/style/EmpleadoStyle";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
const EmpleadosMap = ({ empleados }) => {
  return (
    <>
      <div>
        <ReactHTMLTableToExcel
          id="botonExportarExcel"
          className="btn btn-success"
          table="tablaEmpleados"
          filename="empleados"
          sheet="Empleado"
          buttonText="Exportar a Excel"
        />
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="bg-light card-header py-2">
                <Titulo>
                  Empleados de {sessionStorage.getItem("nombre") || "Invitado"}
                </Titulo>
              </div>
              <table className="table table-responsive-lg " id="tablaEmpleados">
                <thead className="light">
                  <tr>
                    <th>#</th>
                    <th># Empleado</th>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Usuario</th>
                    <th>Perfil</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {empleados.map((empleado, i) => {
                    let clase = "alert alert-success";
                    let actividad = "Activo";

                    if (!empleado.estado) {
                      clase = "alert alert-danger";
                      actividad = "Inactivo";
                    }
                    return (
                      <tr key={empleado._id}>
                        <td>{i + 1}</td>
                        <td>{empleado.numeroempleado}</td>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.apellidopaterno}</td>
                        <td>{empleado.usuario}</td>
                        <td>{empleado.perfil}</td>
                        <td className={clase}>{actividad}</td>
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

export default EmpleadosMap;
