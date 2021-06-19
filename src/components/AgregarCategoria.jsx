import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

const AgregarCategoria = ({ setCategoria, obtenerCategorias }) => {
  const [nombre, setNombre] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    setCategoria(true);
  };

  const guardar = async (e) => {
    e.preventDefault();
    if (nombre === "") {
      Swal.fire({
        icon: "error",
        title: "Agrega categoría válida",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    const categoria = {
      jefe: sessionStorage.getItem("idusuario"),
      nombre: nombre,
    };
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.post("/categorias/guardar", categoria, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerCategorias();
  };
  return (
    <div className="container-sm">
        <form onSubmit={guardar}>
          <legend>Ingrese Categoría</legend>
          <hr />
          <label>Nombre</label>
          <input
            className="form-control mt-2"
            autoFocus
            onChange={(e) => setNombre(e.target.value)}
          />
          <button
            className="btn btn-primary mt-4 mr-2"
            onClick={(e) => handleInput(e)}
          >
            Cancelar
          </button>
          <button type="submit" className="btn btn-info mt-4">
            Enviar
          </button>
        </form>
    </div>
  );
};

export default AgregarCategoria;
