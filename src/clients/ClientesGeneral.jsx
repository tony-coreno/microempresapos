import React, { useEffect } from "react";
import { ClientesHook } from "../hooks/ClientesHook";
import { Contenedorapp, Contenedor, Buscar } from "./style/ClienteStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ClienteInfo from "./ClienteInfo";
import BarraClientes from "./BarraClientes";
import CardsClientes from "./CardsClientes";

const ClientesGeneral = () => {
  const {
    clientes,
    info,
    setInfo,
    obtenerClientes,
    buscarCliente,
    eliminar,
    buscar,
  } = ClientesHook();

  useEffect(() => {
    obtenerClientes();
    // eslint-disable-next-line
  }, []);

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
          <CardsClientes
            clientes={clientes}
            eliminar={eliminar}
            buscarCliente={buscarCliente}
          />
        </aside>
      </Contenedorapp>
    </div>
  );
};

export default ClientesGeneral;
