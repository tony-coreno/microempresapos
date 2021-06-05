import React from "react";
import Axios from "axios";
import Swal from "sweetalert2";

const Unidades = ({ unidades, obtenerUnidades }) => {
  const actualizar = async (e, actualizar) => {
    e.preventDefault();
    const id = actualizar._id;
    const token = sessionStorage.getItem("token");
    const unidad = {
      estado: `${!actualizar.estado}`,
    };
    const respuesta = await Axios.put("/unidades/actualizar/" + id, unidad, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1000,
    });
    obtenerUnidades();
  };
  const eliminar = async (e, id) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/unidades/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "warning",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerUnidades();
  };

  return (
    <>
      <table className="table">
        <thead className="thead-light text-center">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Unidad</th>
            <th scope="col">Estado</th>
            <th scope="col">Opción</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {unidades.map((unidad, i) => {
            let estado = "Activo";
            let clase = "btn btn-outline-success";
            if (unidad.nombre === "") {
              return null;
            }

            if (!unidad.estado) {
              estado = "Inactivo";
              clase = "btn btn-outline-info";
            }

            return (
              <tr key={unidad._id}>
                <th scope="row">{i}</th>
                <td>{unidad.nombre}</td>
                <td>
                  <button
                    className={clase}
                    onClick={(e) => actualizar(e, unidad)}
                  >
                    {estado}
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-primary"
                    onClick={(e) => eliminar(e, unidad._id)}
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

export default Unidades;
