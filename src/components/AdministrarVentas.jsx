import React, { useState, useEffect } from "react";
import Axios from "axios";
import { ContenedorappAdmin } from "../reports/Style/ReporteStyle";
import Swal from "sweetalert2";
import TablaPagosVentas from "../reports/TablaPagosVentas";
import BarraVentas from "../reports/BarraVentas";
const Almacen = () => {
  const [pagos, setPagos] = useState([]);
  const [nombre, setNombre] = useState("");
  let perfil = sessionStorage.getItem("perfil");

  useEffect(() => {
    if (perfil === "Administrador") {
      obtenerPagos();
    } else {
      obtenerPagosEmpleados();
    }
    // eslint-disable-next-line
  }, []);
  const obtenerPagos = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/pagos/pagoadmin/" + id, {
      headers: { autorizacion: token },
    });
    setPagos(respuesta.data);
  };

  const obtenerPagosEmpleados = async () => {
    const jefe = sessionStorage.getItem("jefe");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/pagos/pagoadmin/" + jefe, {
      headers: { autorizacion: token },
    });
    setPagos(respuesta.data);
  };

  const guardar = async (e) => {
    e.preventDefault();
    if (nombre === "") {
      Swal.fire({
        icon: "error",
        title: "Agrega pago válido",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    const pago = {
      jefe: sessionStorage.getItem("idusuario"),
      nombre: nombre,
    };
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.post("/pagos/crear", pago, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "warning",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    setNombre("");
    obtenerPagos();
  };

  const eliminar = async (e, id) => {
    e.preventDefault();
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/pagos/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "warning",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerPagos();
  };
  const actualizar = async (e, medio) => {
    e.preventDefault();
    const id = medio._id;
    const token = sessionStorage.getItem("token");
    const pago = {
      estado: `${!medio.estado}`,
    };
    const respuesta = await Axios.put("/pagos/actualizar/" + id, pago, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1000,
    });
    obtenerPagos();
  };
  return (
    <div>
      <BarraVentas />
      <ContenedorappAdmin>
        <h3>Administrar Pagos</h3>
        <form onSubmit={guardar}>
          <hr />
          <p></p>
          <div className="row">
            <div className="col">
              <h6>Agregar medio de pago</h6>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Inserte medio presione enter o guardar..."
                onChange={(e) => setNombre(e.target.value)}
                autoFocus
              />
            </div>
            <div className="col">
              <h6>IVA (16%)</h6>
              <select id="inputState" className="form-control mt-2">
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>
          </div>
        </form>
        <hr />
        <TablaPagosVentas
          pagos={pagos}
          eliminar={eliminar}
          actualizar={actualizar}
        />
      </ContenedorappAdmin>
    </div>
  );
};


export default Almacen;
