import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import {
  faArrowLeft,
  faEye,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import styled from "styled-components";
import Swal from "sweetalert2";
import { ContextEstado } from "../context/ContextEstado";
const NuevoEmpleado = () => {
  const [nombre, setNombre] = useState("");
  const [apellidopaterno, setApellidoPaterno] = useState("");
  const [apellidomaterno, setApellidoMaterno] = useState("");
  const [numeroempleado, setNumeroEmpleado] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [perfilSelected, setPerfilSelected] = useState([""]);
  const { perfil, setPerfil } = useContext(ContextEstado);
  const [estado, setEstado] = useState("");
  const [estadoSelected, setEstadoSelected] = useState([""]);

  useEffect(() => {
    setPerfilSelected(["", "Encargado", "Vendedor", "Cajero"]);
    setEstadoSelected(["", "Activo", "Inactivo"]);
  }, []);

  const guardar = async (e) => {
    e.preventDefault();
    const empleado = {
      nombre,
      apellidopaterno,
      apellidomaterno,
      numeroempleado,
      usuario,
      contrasena,
      perfil,
      estado: estado,
      jefe: sessionStorage.getItem("idusuario"),
    };
    if((estado === "") || (perfil ==="") ){
      return Swal.fire({
        icon: "error",
        title: "Complete todos los campos",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (numeroempleado < 0 ){
      return Swal.fire({
        icon: "error",
        title: "Núm. Empleado tiene que ser positivo",
        showConfirmButton: false,
        timer: 1700,
      });
    }
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.post("/empleados/crear", empleado, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    // if(mensaje === 'Por favor seleccione un perfil'){
    Swal.fire({
      icon: "warning",
      title: mensaje,
      showConfirmButton: false,
      timer: 2000,
    });

    // }
    // if(estado === 'Por favor asigne un estado'){
    //   Swal.fire({
    //     icon: "warning",
    //     title: mensaje,
    //     showConfirmButton: false,
    //     timer:2000
    //   });

    // }
    setTimeout(() => {
      window.location.href = "/empleados";
    }, 1500);
  };

  return (
    <>
      <main className="caja-contenido col-12">
        <div>
          <NavLink to="/empleado">
            <Button className="btn btn-info">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </NavLink>
          <Titulo>Nuevo Empleado</Titulo>
        </div>
        <form onSubmit={guardar}>
          <hr />
          <div className="row">
            <div className="col">
              <input
                type="text"
                onChange={(e) => setNombre(e.target.value)}
                className="form-control"
                placeholder="Nombre"
                required
              />
            </div>
            <div class="col">
              <input
                type="text"
                onChange={(e) => setApellidoPaterno(e.target.value)}
                className="form-control"
                placeholder="Apellido Paterno"
                required
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col">
              <input
                type="text"
                onChange={(e) => setApellidoMaterno(e.target.value)}
                className="form-control"
                placeholder="Apellido Materno"
                required
              />
            </div>
            <div className="col">
              <input
                type="number"
                onChange={(e) => setNumeroEmpleado(e.target.value)}
                className="form-control"
                placeholder="Numero de empleado"
                required
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <input
                type="text"
                onChange={(e) => setUsuario(e.target.value)}
                className="form-control"
                placeholder="Usuario para ingresar al sistema "
                required
              />
            </div>
            <div class="col">
              <input
                type="password"
                onChange={(e) => setContrasena(e.target.value)}
                className="form-control"
                placeholder="Contraseña"
                required
              />
            </div>
            <div class="col">
              <input
                type="password"
                onChange={(e) => setContrasena(e.target.value)}
                className="form-control"
                placeholder="Confirmar contraseña"
                required
              />
              <button className="btn-sm btn-primary mt-2">
                <i>
                  Mostrar <FontAwesomeIcon icon={faEye} />
                </i>
              </button>
            </div>
          </div>

          <hr />
          <div className="form-group col-mt-4">
            <Titulo>Perfil</Titulo>
            <select
              className="form-control mt-2"
              onChange={(e) => setPerfil(e.target.value)}
              value={perfil}
            >
              {perfilSelected.map((perfiles) => (
                <option key={perfiles}>{perfiles}</option>
              ))}
            </select>
          </div>

          <hr />
          <div className="form-group col-mt-4">
            <Titulo>Estado</Titulo>
            <select
              className="form-control mt-2"
              onChange={(e) => setEstado(e.target.value)}
              value={estado}
            >
              {estadoSelected.map((estados) => (
                <option key={estados}>{estados}</option>
              ))}
            </select>
          </div>
          <div>
            <button className="btn btn-outline-info">
              <FontAwesomeIcon icon={faPlusCircle} /> Registrar
            </button>
          </div>
        </form>
      </main>
    </>
  );
};

const Titulo = styled.h5`
  text-align: center;
`;

export default NuevoEmpleado;
