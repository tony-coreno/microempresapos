import React, { useEffect } from "react";
import { ProveedoresHook } from "../hooks/ProveedoresHook";
import ProveedorInfo from "../providers/ProveedorInfo";
import {
  Contenedorapp,
  Contenedor,
  Buscar,
} from "../providers/style/ProveedorStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BarraProveedores from "../providers/BarraProveedores";
import CardsProveedores from "../providers/CardsProveedores";

const Proveedores = () => {
  const {
    proveedores,
    info,
    setInfo,
    eliminar,
    obtenerProveedores,
    buscarProveedor,
    buscar,
  } = ProveedoresHook();

  useEffect(() => {
    obtenerProveedores();
    // eslint-disable-next-line
  }, []);

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
