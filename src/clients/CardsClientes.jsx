import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Contenedor2 } from "./style/ClienteStyle";

const CardsClientes = ({ clientes, eliminar, buscarCliente }) => {
  return (
    <>
      <Contenedor2>
        {clientes.map((cliente, index) => {
          return (
            <Fragment key={index}>
              <div
                //className="card ms-1 animate__animated animate__fadeIn"
                className="img-thumbnail animate__animated animate__bounceIn"
                style={{ maxWidth: 240 }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="https://img.icons8.com/color/96/000000/permanent-job.png"
                      className="card-img"
                      alt="POS"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{cliente.nombre}</h5>
                      <h6 className="card-text">
                        Tipo Cliente: {cliente.tipocliente}
                      </h6>

                      <p className="card-text">
                        <small className="text-muted">
                          Tel: {cliente.telefono}
                          <button
                            className="btn btn-outline-primary mr-1"
                            onClick={(e) => buscarCliente(e, cliente._id)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => eliminar(cliente._id)}
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

export default CardsClientes;
