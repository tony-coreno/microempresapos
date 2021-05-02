import React from "react";
import styled from "styled-components";
import { Switch, NavLink, Route } from "react-router-dom";
import Productos from "./Productos";
import Devluciones from "../products/Devoluciones";

const Categorias = () => {
  return (
    <div>
      <Contenedorapp>
        <Contenedor>
          <h4>Categorias de admin</h4>
        </Contenedor>
        <aside>
          <Contenedor2>
            <h3>Productos</h3>
            {/* {proveedores.map((provider) => {
              return (
                <div
                  className="card ms-1 animate__animated animate__fadeIn"
                  style={{ maxWidth: 240 }}
                  key={provider._id}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src="https://img.icons8.com/color/96/000000/salesman.png"
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
                            <button className="btn btn-outline-info">
                              <FontAwesomeIcon icon={faQuestion} />
                            </button>
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </Contenedor2>
        </aside>
      </Contenedorapp>
    </div>
  );
};


const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Titulo = styled.h6`
  color: #fff;
  text-align: center;
`;
const Contenedor = styled.div`
  padding: 25px;
  width: 100%;
  display: grid;
  gap: 20px;
  //background: #eef3f5;
  background: #fff;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;
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
export default Categorias;
