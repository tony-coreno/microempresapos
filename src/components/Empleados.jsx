import React, { useEffect } from "react";
import { EmpleadosHook } from "../hooks/EmpleadosHook";
import { Navbar } from "reactstrap";
import { Tabla } from "../users/style/EmpleadoStyle";
import EmpleadosMap from "../users/EmpleadosMap";
import HerramientasEmpleados from "../users/HerramientasEmpleados";
const Empleados = () => {
  const { empleados, buscar, obtenerEmpleados } = EmpleadosHook();

  useEffect(() => {
    obtenerEmpleados();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar>
        <HerramientasEmpleados buscar={buscar} />
      </Navbar>
      <div className="table-responsive table-borderless table-hover">
        <Tabla>
          <EmpleadosMap empleados={empleados} />
        </Tabla>
      </div>
    </>
  );
};

export default Empleados;
