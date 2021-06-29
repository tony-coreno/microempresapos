import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Contenedor2 } from "./style/EmpleadoStyle";
const CardsEmpleados = ({ empleados, eliminar, buscarEmpleadoID }) => {
  return (
    <>
      <Contenedor2>
        {empleados.map((empleado, index) => {
          return (
            <Fragment key={index}>
              <div
                className="card ms-1 animate__animated animate__fadeIn"
                style={{ maxWidth: 240 }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={empleado.imagen}
                      className="card-img"
                      alt="POS"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{empleado.nombre}</h5>
                      <h6 className="card-text">Puesto: {empleado.perfil}</h6>

                      <p className="card-text">
                        <small className="text-muted">
                          Usuario: {empleado.usuario}
                          <button
                            className="btn btn-outline-primary mr-1"
                            onClick={(e) => buscarEmpleadoID(e, empleado._id)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => eliminar(empleado._id)}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Fragment>
          );
        })}
      </Contenedor2>
    </>
  );
};

export default CardsEmpleados;
