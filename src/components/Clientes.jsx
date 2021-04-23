import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faUserTie } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { ContextEstado } from "../context/ContextEstado";

const Clientes = () => {
  useEffect(() => {
    obtenerClientes();
  }, []);
  const { clientes, setClientes } = useContext(ContextEstado);
  const obtenerClientes = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/clientes/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setClientes(respuesta.data);
  };
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
      <Contenedorapp>
        <Contenedor>
          <h4>Clientes destacados</h4>
        </Contenedor>
        <aside>
          <Contenedor2>
            {clientes.map((cliente) => {
              return (
                <div
                  className="card ms-1 animate__animated animate__fadeIn"
                  style={{ maxWidth: 240 }}
                  key={cliente.id}
                >
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <img
                        src="https://img.icons8.com/emoji/96/000000/man-office-worker.png"
                        className="card-img"
                        alt="POS"
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{cliente.nombre}</h5>
                        <h6 className="card-text">
                          Cliente: {cliente.tipocliente}
                        </h6>

                        <p className="card-text">
                          <small className="text-muted">
                            Tel: {cliente.telefono}
                            <button className="btn btn-outline-info">
                              <FontAwesomeIcon icon={faQuestion} />
                            </button>
                          </small>
                        </p>
                        {/* 
                        <Link to={ `./hero/${ id }` }>
                            Más...
                        </Link> */}
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

const Titulo = styled.h4`
  color: #000;
  text-align: center;
`;

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

export default Clientes;
