import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { Button, Navbar } from "reactstrap";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTools,
  faTrash,
  faUserFriends,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import ClienteInfo from "./ClienteInfo";

const ClientesGeneral = () => {
  const [clientes, setclientes] = useState([""]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    obtenerClientes();
  }, []);

  const obtenerClientes = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/clientes/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setclientes(respuesta.data);
  };

  const buscarCliente = async (e, prov) => {
    e.preventDefault();
    const id = prov;
    const respuesta = await Axios.get("/clientes/buscar/" + id);
    setInfo(respuesta.data);
  };

  const eliminar = async (id) => {
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/clientes/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerClientes();
  };
  const buscar = async (e) => {
    if (e.target.value === "") {
      return obtenerClientes();
    }
    const buscar = e.target.value;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      `/clientes/buscar/${buscar}/${sessionStorage.getItem("idusuario")}`,
      {
        headers: { autorizacion: token },
      }
    );
    setclientes(respuesta.data);
  };
  return (
    <div>
      {sessionStorage.getItem("token") &&
      sessionStorage.getItem("perfil") === "Administrador" ? (
        <Contenedor3>
          <Navbar>
            <NavLink to="/nuevo-cliente">
              <Button
                className="btn btn-info d-flex d-flex justify-content-between align-items-center"
                data-toggle="tooltip"
                data-placement="right"
                title="Agregar cliente"
              >
                <FontAwesomeIcon icon={faUserFriends} />
              </Button>
            </NavLink>
            <NavLink to="/clientes-tabla">
              <Button
                className="btn btn-info d-flex d-flex justify-content-between align-items-center"
                data-toggle="tooltip"
                data-placement="right"
                title="Clientes tabla"
              >
                <FontAwesomeIcon icon={faTools} />
              </Button>
            </NavLink>
            <h5>Clientes General</h5>
          </Navbar>
        </Contenedor3>
      ) : null}
      <Contenedorapp>
        <Contenedor>
          {info.length === 0 ? (
            <>
              <img
                className="img-thumbnail"
                src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
                alt="POS"
              />
              <div className="">
                <div className="input-group">
                  <Buscar
                    className="form-control mr-sm-4"
                    type="search"
                    placeholder="Buscar por nombre..."
                    aria-label="Search"
                    autoFocus
                    onChange={buscar}
                  ></Buscar>
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </>
          ) : (
            <ClienteInfo setInfo={setInfo} info={info} key={clientes._id} />
          )}
        </Contenedor>
        <aside>
          <Contenedor2>
            {clientes.map((cliente) => {
              return (
                <Fragment key={cliente._id}>
                  <div
                    className="card ms-1 animate__animated animate__fadeIn"
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
const Contenedor3 = styled.div`
  display: flex;
  padding: 0px;
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
  //background: #eef3f5;
  background: #f9f9f9;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;
const Buscar = styled.input`
  border-radius: 10px;
`;

export default ClientesGeneral;
