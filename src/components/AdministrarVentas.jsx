import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import Swal from "sweetalert2";
import TablaPagosVentas from "../reports/TablaPagosVentas";
import BarraVentas from "../reports/BarraVentas";
const Almacen = () => {
  const [pagos, setPagos] = useState([]);
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    obtenerPagos();
  }, []);

  const obtenerPagos = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/pagos/pagoadmin/" + id, {
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
      <Contenedorapp>
       <BarraVentas />
        <h3>Administrar</h3>
        <form onSubmit={guardar}>
          <hr />
          <p></p>
          <div className="row">
            <div className="col">
              <h6>Agregar medio de pago</h6>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Inserte medio"
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
        <TablaPagosVentas pagos={pagos} eliminar={eliminar} actualizar={actualizar} />
      </Contenedorapp>
    </div>
  );
};


const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 20px;
  //grid-template-columns: 2fr 1fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default Almacen;
