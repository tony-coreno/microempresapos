import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faUserTie } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import ProveedorInfo from "../providers/ProveedorInfo";

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([""]);
  useEffect(() => {
    obtenerProveedores();
  }, []);

  const obtenerProveedores = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/proveedores/proveedorporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setProveedores(respuesta.data);
  };
  return (
    <div>
      {sessionStorage.getItem("token") &&
      sessionStorage.getItem("perfil") === "Administrador" ? (
        <Navbar>
          <NavLink to="/nuevo-proveedor">
            <Button
              className="btn btn-info d-flex d-flex justify-content-between align-items-center"
              data-toggle="tooltip"
              data-placement="right"
              title="Agregar proveedor"
            >
              <FontAwesomeIcon icon={faUserTie} />
            </Button>
          </NavLink>
        </Navbar>
      ) : (
        <></>
      )}
      <Contenedorapp>
        <Contenedor>
          <h4>Proveedores</h4>
          <ProveedorInfo />
        </Contenedor>
        <aside>
          <Contenedor2>
            {proveedores.map((provider) => {
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
            })}
          </Contenedor2>
        </aside>
      </Contenedorapp>
    </div>
  );
};

// const Titulo = styled.h4`
//   color: #000;
//   text-align: center;
// `;

const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 4fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
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

export default Proveedores;
