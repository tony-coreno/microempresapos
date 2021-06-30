import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { subirImagen } from "../hooks/SubirImgHook";
import Axios from "axios";
import { faArrowLeft, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Titulo } from "./style/ProveedorStyle";
import Swal from "sweetalert2";

const NuevoProveedor = () => {
  let inputFile;
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [categoriaproveedor, setCategoriaProveedor] = useState("");
  const [categoriaSelected, setCategoriaSelected] = useState([""]);
  const [marcaproveedor, setMarcaProveedor] = useState("");
  const [codigoproveedor, setCodigoproveedor] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    setCategoriaSelected(["Categoria", "Bebidas", "Lacteos", "Abarrotes"]);
    eventos();
    // eslint-disable-next-line
  }, []);

  const guardar = async (e) => {
    e.preventDefault();
    const proveedor = {
      nombre,
      apellido,
      categoriaproveedor,
      marcaproveedor,
      codigoproveedor,
      telefono,
      correo,
      jefe: sessionStorage.getItem("idusuario"),
      imagen: imagen,
    };

    if (categoriaproveedor === "" || categoriaproveedor === "Categoria") {
      return Swal.fire({
        icon: "error",
        title: "Seleccione una categoría",
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
    const respuesta = await Axios.post("/proveedores/crear", proveedor, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
    });
    setTimeout(() => {
      window.location.href = "/proveedores";
    }, 1500);
  };
  const eventos = () => {
    inputFile = document.querySelector('#foto')
    inputFile.addEventListener("change", (event) => {
      console.log(event);
      const file = event.target.files[0];
      subirImagen(file).then(url => {
        setImagen(url)
        
      })
    });


  };
  return (
    <>
      <main className="caja-contenido col-12">
        <div>
          <NavLink to="/proveedores">
            <button className="btn btn-info">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </NavLink>
          <Titulo>Registrar proveedor</Titulo>
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
                required
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Apellido"
                required
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className="col">
              <select
                className="form-control"
                onChange={(e) => setCategoriaProveedor(e.target.value)}
                value={categoriaproveedor}
              >
                {categoriaSelected.map((proveedor) => (
                  <option key={proveedor}>{proveedor}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Marca"
                required
                onChange={(e) => setMarcaProveedor(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Código proveedor"
                onChange={(e) => setCodigoproveedor(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Teléfono"
                required
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                placeholder="Correo"
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
          </div>
          <hr />
          <div>
          <Titulo>Insertar imagen</Titulo>
          <input type="file" id="foto" className="form-group" accept="img/png,img/jpeg" />
          </div>
          <button className="btn btn-outline-info">
            <FontAwesomeIcon icon={faUserTag} /> Registrar
          </button>
        </form>
      </main>
    </>
  );
};



export default NuevoProveedor;
