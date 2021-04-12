import React, { useContext } from "react";
import styled from "styled-components";
const TablaCarrito = () => {
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
                <table className="table table-responsive-lg ">
                  <thead className="light">
                    <tr>
                      <th>#</th>
                      <th>SKU</th>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {empleados.map((empleado, i) => {
                        return (
                          <tr key={empleado.id}>
                            <td>{i + 1}</td>
                            <td>{empleado.numeroempleado}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellidopaterno}</td>
                            <td>{empleado.usuario}</td>
                            <td>{empleado.perfil}</td>
                            <td>{empleado.estado}</td>
                            <td>
                              <button
                                className="bn btn-outline-info mr-2"
                                
                              >
                                <FontAwesomeIcon icon={faUserEdit} />
                              </button>
                              <button className="bn btn-outline-dark" onClick={() => eliminar(empleado._id)}>
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
    </>
  );
};

// const Tabla = styled.section`
//   background: #fff;
//   text-align: center;
//   font-family: "Open Sans", sans-serif;
// `;

const Titulo = styled.h6`
  color: #fff;
  text-align: center;
`;

export default TablaCarrito;
