import React from "react";
import Axios from "axios";
import Swal from "sweetalert2";

const CategoriasProductos = ({ categorias, obtenerCategorias }) => {
  const actualizar = async (e, actualizar) => {
    e.preventDefault();
    const id = actualizar._id;
    const token = sessionStorage.getItem("token");
    const categoria = {
      estado: `${!actualizar.estado}`,
    };
    const respuesta = await Axios.put(
      "/categorias/actualizar/" + id,
      categoria,
      {
        headers: { autorizacion: token },
      }
    );
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1000,
    });
    obtenerCategorias();
  };
  const eliminar = async (e, id) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/categorias/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "warning",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerCategorias();
  };
  return (
    <>
      <table className="table text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col-2">#</th>
            <th scope="col-4">Categoría</th>
            <th scope="col-4">Estado</th>
            <th scope="col-2">Eliminar</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {categorias.map((categoria, i) => {
            if (categoria.nombre === "") {
              return null;
            }
            let estado = "Activo";
            let clase = "btn btn-outline-success";
            if (!categoria.estado) {
              estado = "Inactivo";
              clase = "btn btn-outline-info";
            }
            return (
              <tr key={categoria._id}>
                <th scope="row">{i}</th>
                <td>{categoria.nombre}</td>
                <td>
                  <button
                    className={clase}
                    onClick={(e) => actualizar(e, categoria)}
                  >
                    {estado}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={(e) => eliminar(e, categoria._id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CategoriasProductos;
