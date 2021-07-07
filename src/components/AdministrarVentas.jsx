import React, {  useEffect } from "react";

import { ContenedorappAdmin } from "../reports/Style/ReporteStyle";
import { AdministrarPagosHook } from "../hooks/AdministrarPagos.hook";
import TablaPagosVentas from "../reports/TablaPagosVentas";
import BarraVentas from "../reports/BarraVentas";
const Almacen = () => {
  const {
    pagos,
    obtenerIva,
    setNombre,
    iva,
    obtenerPagos,
    obtenerPagosEmpleados,
    guardar,
    eliminar,
    actualizar,
    actualizarIva,
  } = AdministrarPagosHook();
  let perfil = sessionStorage.getItem("perfil");

  useEffect(() => {
    if (perfil === "Administrador") {
      obtenerPagos();
      obtenerIva();
    } else {
      obtenerPagosEmpleados();
    }
    // eslint-disable-next-line
  }, []);

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
              <h6 className="text-center">Agregar medio de pago</h6>
              <input
                type="text"
                className="form-control mt-2"
                placeholder="Inserte medio presione enter o guardar..."
                onChange={(e) => setNombre(e.target.value)}
                autoFocus
              />
            </div>
            <div className="col">
              <h6 className="text-center">IVA (16%)</h6>
              {iva.map((impuesto, i) => {
                let { estado } = impuesto;
                let status = "";
                let clase = "";
                if (estado) {
                  status = "Activo";
                  clase = "btn btn-outline-success btn-block";
                } else {
                  status = "Inactivo";
                  clase = "btn btn-outline-danger btn-block";
                }
                return (
                  <div key={i}>
                    <button
                      type="button"
                      className={clase}
                      onClick={(e) => actualizarIva(e, impuesto)}
                    >
                      {status}
                    </button>
                  </div>
                );
              })}
              {/* <select id="inputState" className="form-control mt-2">
                <option>Activo</option>
                <option>Inactivo</option>
              </select> */}
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
