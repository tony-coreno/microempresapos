import React, { useEffect, useState } from "react";
import Axios from "axios";
import ProveedorInfo from "../providers/ProveedorInfo";
import { Contenedorapp, Contenedor, Buscar } from "../providers/style/ProveedorStyle";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BarraProveedores from "../providers/BarraProveedores";
import CardsProveedores from "../providers/CardsProveedores";

const Proveedores = () => {
  const [proveedores, setProveedores] = useState([""]);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    obtenerProveedores();
  }, []);

  const obtenerProveedores = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/proveedores/proveedorporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setProveedores(respuesta.data);
  };

  const buscarProveedor = async (e, prov) => {
    e.preventDefault();
    const id = prov;
    const respuesta = await Axios.get("/proveedores/buscar/" + id);
    setInfo(respuesta.data);
  };

  const eliminar = async (id) => {
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/proveedores/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerProveedores();
  };
  const buscar = async (e) => {
    if (e.target.value === "") {
      return obtenerProveedores();
    }
    const buscar = e.target.value;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      `/proveedores/buscar/${buscar}/${sessionStorage.getItem("idusuario")}`,
      {
        headers: { autorizacion: token },
      }
    );
    setProveedores(respuesta.data);
  };

  return (
    <div>
      {sessionStorage.getItem("token") &&
      sessionStorage.getItem("perfil") === "Administrador" ? (
        <BarraProveedores />
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
            <ProveedorInfo
              setInfo={setInfo}
              info={info}
              key={proveedores._id}
            />
          )}
        </Contenedor>
        <aside>
          <CardsProveedores
            proveedores={proveedores}
            eliminar={eliminar}
            buscarProveedor={buscarProveedor}
          />
        </aside>
      </Contenedorapp>
    </div>
  );
};

export default Proveedores;
