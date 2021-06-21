import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Contenedorapp, Contenedor, Buscar } from "./style/ClienteStyle";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ClienteInfo from "./ClienteInfo";
import BarraClientes from "./BarraClientes";
import CardsClientes from "./CardsClientes";

const ClientesGeneral = () => {
  const [clientes, setclientes] = useState([""]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    obtenerClientes();
  }, []);

  const obtenerClientes = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/clientes/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setclientes(respuesta.data);
  };

  const buscarCliente = async (e, prov) => {
    e.preventDefault();
    const id = prov;
    const respuesta = await Axios.get("/clientes/buscar/" + id);
    setInfo(respuesta.data);
  };

  const eliminar = async (id) => {
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/clientes/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerClientes();
  };
  const buscar = async (e) => {
    if (e.target.value === "") {
      return obtenerClientes();
    }
    const buscar = e.target.value;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      `/clientes/buscar/${buscar}/${sessionStorage.getItem("idusuario")}`,
      {
        headers: { autorizacion: token },
      }
    );
    setclientes(respuesta.data);
  };
  return (
    <div>
      {sessionStorage.getItem("token") &&
      sessionStorage.getItem("perfil") === "Administrador" ? (
        <BarraClientes />
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
            <ClienteInfo setInfo={setInfo} info={info} key={clientes._id} />
          )}
        </Contenedor>
        <aside>
          <CardsClientes clientes={clientes} eliminar={eliminar} buscarCliente={buscarCliente} />
        </aside>
      </Contenedorapp>
    </div>
  );
};

export default ClientesGeneral;
