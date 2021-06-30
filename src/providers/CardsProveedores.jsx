import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Contenedor2 } from "./style/ProveedorStyle";
const CardsProveedores = ({ proveedores, buscarProveedor, eliminar }) => {
  return (
    <>
      <Contenedor2>
        {proveedores.map((provider, index) => {
          return (
            <Fragment key={index}>
              <div
              className="img-thumbnail animate__animated animate__bounceIn"
                //className="card ms-1 animate__animated animate__fadeIn"
                style={{ maxWidth: 240 }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={provider.imagen}
                      className="card-img"
                      alt="POS"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{provider.nombre}</h5>
                      <h6 className="card-text">
                        Marca: {provider.marcaproveedor}
                      </h6>

                      <p className="card-text">
                        <small className="text-muted">
                          Tel: {provider.telefono}
                          <button
                            className="btn btn-outline-info mr-1"
                            onClick={(e) => buscarProveedor(e, provider._id)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </button>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => eliminar(provider._id)}
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


export default CardsProveedores;
