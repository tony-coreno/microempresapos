import React, {Fragment} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const CardsEmpleados = ({empleados,  eliminar, buscarEmpleadoID}) => {
  return (
    <>
      <Contenedor2>
        {empleados.map((empleado) => {
          return (
            <Fragment key={empleado._id}>
              <div
                className="card ms-1 animate__animated animate__fadeIn"
                style={{ maxWidth: 240 }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src="https://img.icons8.com/color/96/000000/businessman.png"
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
                          Estado: {empleado.estado}
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

const Contenedor2 = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 2fr;
  //background: #eef3f5;
  background: #fff;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;
export default CardsEmpleados;
