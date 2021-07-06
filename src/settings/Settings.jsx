import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { subirImagen } from "../hooks/SubirImgHook";
import Axios from "axios";
import { Button } from "reactstrap";
import { faArrowLeft, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Titulo } from "../clients/style/ClienteStyle";
import Swal from "sweetalert2";

const Settings = () => {
  let inputFile;
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipocliente] = useState("");
  const [codigopromocional, setCodigoPromocional] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    eventos();
    // eslint-disable-next-line
  }, []);

  const guardar = async (e) => {
    e.preventDefault();
    const cliente = {
      nombre,
      apellido,
      tipocliente: tipocliente,
      codigopromocional,
      telefono,
      correo,
      jefe: sessionStorage.getItem("idusuario"),
      imagen,
    };
    if (tipocliente === "") {
      return Swal.fire({
        icon: "error",
        title: "Seleccione tipo de cliente",
        showConfirmButton: false,
        timer: 1200,
      });
    }
    if (codigopromocional < 0) {
      return Swal.fire({
        icon: "error",
        title: "Código Prom. no puede ser negativo",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    if (telefono < 0 || telefono.length !== 10) {
      return Swal.fire({
        icon: "error",
        title: "Ingrese Tel a 10 dígitos",
        showConfirmButton: false,
        timer: 1500,
      });
    }
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
      window.location.href = "/cliente";
    }, 1000);
  };
  const eventos = () => {
    inputFile = document.querySelector("#foto");
    inputFile.addEventListener("change", (event) => {
      console.log(event);
      const file = event.target.files[0];
      subirImagen(file).then((url) => {
        setImagen(url);
      });
    });
  };
  return (
    <>
      <main className="caja-contenido col-12">
        <div>
          <NavLink to="/cliente">
            <Button className="btn btn-info">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </NavLink>
          <Titulo>Ajustes</Titulo>
        </div>
        <form onSubmit={guardar}>
          <hr />
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre negocio"
                autoFocus
                required
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Calle"
                required
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Número Ext."
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Colonia"
                onChange={(e) => setTelefono(e.target.value)}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="CP"
                onChange={(e) => setCodigoPromocional(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Teléfono"
                onChange={(e) => setCodigoPromocional(e.target.value)}
              />
            </div>
          </div>
          <div>
            <hr />
            <Titulo>Insertar imagen</Titulo>
            <input
              type="file"
              id="foto"
              className="form-group"
              accept="img/png,img/jpeg"
            />
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

export default Settings;
