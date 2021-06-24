import React, { useEffect } from "react";
import { ClientesTablaHook } from "../hooks/ClientesHook";
import { Navbar } from "reactstrap";
import ClientesMap from "../clients/ClientesMap";
import { Tabla } from "../clients/style/ClienteStyle";
import ClientesHerramientas from "../clients/ClientesHerramientas";

const ClientesTabla = () => {
  const { obtenerClientes, buscar, clientes } = ClientesTablaHook();

  useEffect(() => {
    obtenerClientes();
    // eslint-disable-next-line
  }, []);
  //obtener empleados del admin

  return (
    <>
      <Navbar>
        <ClientesHerramientas buscar={buscar} />
      </Navbar>
      <div className="table-responsive table-borderless table-hover">
        <Tabla>
          <ClientesMap clientes={clientes} />
        </Tabla>
      </div>
    </>
  );
};

export default ClientesTabla;
