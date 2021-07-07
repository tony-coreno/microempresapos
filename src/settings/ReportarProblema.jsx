import React, { useState } from "react";
import Axios from "axios";
import {
  Contenedor,
  ContenedorAyuda,
  Menu,
} from "../components/style/AyudaStyle";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const ReportarProblema = () => {
  let f = new Date();
  const [problema, setProblema] = useState("");
  const guardar = async (e) => {
    if(problema.trim() < 5){
      return alert('Coloque')
    }
    e.preventDefault();
    const reporte = {
      fecha: Date(),
      fecharegistro: Date.now(),
      problema,
      usuario: sessionStorage.getItem("idusuario"),
      jefe:
        sessionStorage.getItem("jefe") || sessionStorage.getItem("idusuario"),
    };
    const respuesta = await Axios.post("/reportar/reportar", reporte);
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 500,
    });
    setTimeout(() => {
      window.location.href = "/ayuda";
    }, 1000);
  };
  return (
    <>
      <ContenedorAyuda>
        <Contenedor>
          <Menu>
            <NavLink to="/manuales">Manuales de usuario</NavLink>
            <NavLink to="/acerca-de">Acerca De</NavLink>
            <NavLink to="/reportar">Reportar un problema</NavLink>
          </Menu>
          <div className="container">
            <hr />
            <h2>Reportar Problema</h2>
            <hr />
            <form onSubmit={guardar}>
              <textarea
                className="form-control"
                autoFocus
                placeholder="Describe el problema ..."
                required
                style={{ height: "195px" }}
                onChange={(e) => setProblema(e.target.value)}
              />
              <button className="btn btn-info mt-3">
                <FontAwesomeIcon icon={faCloud} /> Enviar{" "}
              </button>
            </form>
          </div>
          <main>
            <hr />
            Usuario:{" "}
            <span className="badge badge-info">
              {" "}
              {sessionStorage.getItem("perfil")}
            </span>
            <hr />
            Fecha:{" "}
            {f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}
          </main>
        </Contenedor>
        <aside>
          <Contenedor>
            <h3>Contacto</h3>
            <a href="https://www.github.com/tony-coreno" target="_parent">
              <img
                className="card ms-1 animate__animated animate__fadeIn"
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="Github"
              />
            </a>
            GitHub
            <a href="https://github.com/ALEXISS12" target="_parent">
              <img
                className="card ms-1 animate__animated animate__fadeIn"
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="Github"
              />
            </a>
            GitHub
          </Contenedor>
        </aside>
      </ContenedorAyuda>
    </>
  );
};

export default ReportarProblema;
