import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import styled from "styled-components";
import FormularioLogin from "./FormularioLogin";
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
      const negocio = respuesta.data.negocio;
      const perfil = respuesta.data.perfil;
      const imagen = respuesta.data.imagen;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("nombre", nombre);
      sessionStorage.setItem("idusuario", idusuario);
      sessionStorage.setItem("negocio", negocio);
      sessionStorage.setItem("perfil", perfil);
      sessionStorage.setItem("imagen", imagen);

      window.location.href = "/crear-venta";
    }
  };

  return (
    <Contenedor className="container mt-4">
      <FormularioLogin login={login} setUsuario={setUsuario} setContrasena={setContrasena} />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#0099ff"
          fillOpacity="1"
          d="M0,256L34.3,240C68.6,224,137,192,206,165.3C274.3,139,343,117,411,122.7C480,128,549,160,617,181.3C685.7,203,754,213,823,218.7C891.4,224,960,224,1029,202.7C1097.1,181,1166,139,1234,122.7C1302.9,107,1371,117,1406,122.7L1440,128L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </Contenedor>
  );
};

const Contenedor = styled.div``;
export default Login;
