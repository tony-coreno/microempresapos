import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from 'axios';
import { Button } from "reactstrap";
import { faArrowLeft, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Swal from 'sweetalert2';
import "bootstrap/dist/css/bootstrap.css";

const NuevoCliente = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [tipocliente, setTipoCliente] = useState('');
  const [tipoclienteSelected, setTipoClienteSelected] = useState(['']);
  const [codigopromocional, setCodigoPromocional] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  useEffect(() => {
    setTipoClienteSelected(['','Mayorista', 'Minorista'])
  },[])

  const guardar = async (e) => {
    e.preventDefault();
    const cliente = {
      nombre,
      apellido,
      tipocliente,
      codigopromocional,
      telefono,
      correo,
      jefe: sessionStorage.getItem("idusuario"),
    };
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.post("/clientes/crear", cliente, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
    });
    setTimeout(() => {
      window.location.href = "/clientes";
    }, 1000);
  };
  return (
    <>
      <main className="caja-contenido col-12">
        <div>
          <NavLink to="/clientes">
            <Button className="btn btn-info">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </NavLink>
          <Titulo>Agregar Cliente</Titulo>
        </div>
        <form onSubmit={guardar}>
          <hr />
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre"
                autoFocus
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div class="col">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div class="col">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Telefono"
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Código promocional"
                onChange={(e) => setCodigoPromocional(e.target.value)}
              />
            </div>
            <div className="col">
              <select
                className="form-control"
                onChange={(e) => setTipoCliente(e.target.value)}
                value={tipocliente}
              >
                {tipoclienteSelected.map((cliente) => (
                  <option key={cliente}>{cliente}</option>
                ))}
              </select>
            </div>
          </div>

          <hr />

          <button className="btn btn-outline-info">
            <FontAwesomeIcon icon={faUserTag} /> Agregar
          </button>
        </form>
      </main>
    </>
  );
};

const Titulo = styled.h5`
  text-align: center;
`;

export default NuevoCliente;
