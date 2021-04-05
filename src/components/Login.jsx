import React, { useState } from "react";
import Axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import styled from "styled-components";
const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const sesion = { usuario, contrasena };
    const respuesta = await Axios.post(
      "http://localhost:4000/administrador/login",
      sesion
    );
    const mensaje = respuesta.data.mensaje;
    if (mensaje !== "Bienvenido") {
      Swal.fire({
        icon: "error",
        title: mensaje,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "success",
        title: mensaje,
        showConfirmButton: false,
        timer: 1500,
      });
      const token = respuesta.data.token;
      const nombre = respuesta.data.nombre;
      const idusuario = respuesta.data.id;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("nombre", nombre);
      sessionStorage.setItem("idusuario", idusuario);
      window.location.href = "/";
    }
  };

  return (
    <Contenedor className="container mt-4">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <Fondo className="card">
            <div className="container text-center fa-5x">
              {/* <i><FontAwesomeIcon icon={faUserPlus} /></i> */}
              <img
                src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
                title="POS"
              />
            </div>
            <div className="card-header text-center">
              <hr />
              <br />
              <h4>Iniciar Sesión</h4>
            </div>
            <div className="card-body">
              <form onSubmit={login}>
                <div className="form-group">
                  <label>Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    autoFocus
                    required
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    onChange={(e) => setContrasena(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-outline-light btn-block"
                  value="Enviar"
                />
              </form>
            </div>
          </Fondo>
        </div>
      </div>
    </Contenedor>
  );
};

const Fondo = styled.div`
  // background: #147551;
  color: #fff;
   //opacity: 0.8;
  background: linear-gradient(#ffffff 50%, rgba(255, 255, 255, 0) 0) 0 0,
    radial-gradient(circle closest-side, #ffffff 53%, rgba(255, 255, 255, 0) 0)
      0 0,
    radial-gradient(circle closest-side, #ffffff 50%, rgba(255, 255, 255, 0) 0)
      55px 0 #48b;
  background-size: 110px 200px;
  background-repeat: repeat-x;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(129, 129, 129, 0.7);
`;

const Contenedor = styled.div``;
export default Login;
