import React, { useState } from "react";
import Axios from "axios";
import { Switch, NavLink, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import styled from "styled-components";
const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");

  const login = async (e) => {
    e.preventDefault();
    const sesion = { usuario, contrasena };
    const respuesta = await Axios.post("/administrador/login", sesion);
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
        <div className="col-md-4 mx-auto">
          <Fondo className="card">
            <div className="container text-center fa-5x">
              {/* <i><FontAwesomeIcon icon={faUserPlus} /></i> */}
              <img
                src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
                title="POS"
                alt="POS"
              />
            </div>
            <div className="card-header text-center">
              <hr />
              <Contenedorapp>
                <Menu>
                  <NavLink to="/login">Administrador</NavLink>
                  <NavLink to="/login">Empleado</NavLink>
                </Menu>
                <main>
                  <Switch>
                    <Route path="/" />
                    <Route path="/" />
                    <Route path="/" />
                  </Switch>
                </main>
              </Contenedorapp>
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
const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #147871;
  grid-column: span 2;
  border-radius: 1px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #170238;
    text-decoration: none;
  }
  // a.active {
  //   border-bottom: 2px solid #f2f2f2;
  //   padding-bottom: 3px;
  // }
`;

const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;
  display: grid;
  gap: 1px;
  //grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 0px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

const Contenedor = styled.div``;
export default Login;
