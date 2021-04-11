import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Clientes = () => {
  return (
    <div>
      <Navbar>
        <NavLink to="/nuevo-cliente">
          <Button
            className="btn btn-info d-flex d-flex justify-content-between align-items-center"
            data-toggle="tooltip"
            data-placement="right"
            title="Agregar cliente"
          >
            <FontAwesomeIcon icon={faUserTie} />
          </Button>
        </NavLink>
      </Navbar>
      <div className="table-responsive table-borderless table-hover">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="bg-info card-header">
                    <Titulo>
                      Clientes de{" "}
                      {sessionStorage.getItem("nombre") || "Invitado"}
                    </Titulo>
                  </div>
                  <table className="table table-responsive-lg ">
                    <thead className="light">
                      <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Teléfono</th>
                        <th>Compras realizadas</th>
                        <th>Opciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {productos.map((producto, i) => {
                          return (
                            <tr key={producto.id}>
                              <td>{i + 1}</td>
                              <td>{producto.sku}</td>
                              <td>{producto.producto}</td>
                              <td>{producto.existencia}</td>
                              <td>{producto.precioventa}</td>
                              <td>{producto.categoria}</td>
                              <td>{producto.unidad}</td>
                              <td>
                                {producto.estado}
                              </td>
                              <td>
                                <button
                                  className="bn btn-outline-dark mr-2"
                                  //   onClick={() => eliminar(empleado._id)}
                                >
                                  <FontAwesomeIcon icon={faUserEdit} />
                                </button>
                                <button className="bn btn-outline-dark">
                                  <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                              </td>
                            </tr>
                          );
                        })} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Titulo = styled.h4`
  color: #fff;
  text-align: center;
`;

export default Clientes;
