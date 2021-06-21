import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Contenedorapp, Contenedor, Buscar } from "./style/EmpleadoStyle";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import EditarEmpleado from "./EditarEmpleado";
import BarraEmpleadosGeneral from "./BarraEmpleadosGeneral";
import CardsEmpleados from "./CardsEmpleados";

const EmpleadosGeneral = () => {
  const [empleados, setEmpleados] = useState([""]);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    obtenerEmpleados();
  }, []);

  const obtenerEmpleados = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/empleados/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setEmpleados(respuesta.data);
  };

  const buscarEmpleadoID = async (e, emp) => {
    e.preventDefault();
    const id = emp;
    const respuesta = await Axios.get("/empleados/buscar/" + id);
    setInfo(respuesta.data);
  };

  const eliminar = async (id) => {
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/empleados/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerEmpleados();
  };
  const buscar = async (e) => {
    if (e.target.value === "") {
      return obtenerEmpleados();
    }
    const buscar = e.target.value;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      `/empleados/buscar/${buscar}/${sessionStorage.getItem("idusuario")}`,
      {
        headers: { autorizacion: token },
      }
    );
    setEmpleados(respuesta.data);
  };

  return (
    <div>
      {sessionStorage.getItem("token") &&
      sessionStorage.getItem("perfil") === "Administrador" ? (
        <BarraEmpleadosGeneral />
      ) : null}
      <Contenedorapp>
        <Contenedor>
          {info.length === 0 ? (
            <>
              <img
                className="img-thumbnail"
                src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
                alt="POS"
              />
              <div className="">
                <div className="input-group">
                  <Buscar
                    className="form-control mr-sm-4"
                    type="search"
                    placeholder="Buscar por nombre..."
                    aria-label="Search"
                    autoFocus
                    onChange={buscar}
                  ></Buscar>
                  <FontAwesomeIcon icon={faSearch} />
                </div>
              </div>
            </>
          ) : (
            <EditarEmpleado setInfo={setInfo} info={info} key={empleados._id} />
          )}
        </Contenedor>
        <aside>
          <CardsEmpleados empleados={empleados} eliminar={eliminar} buscarEmpleadoID={buscarEmpleadoID} />
        </aside>
      </Contenedorapp>
    </div>
  );
};

export default EmpleadosGeneral;
