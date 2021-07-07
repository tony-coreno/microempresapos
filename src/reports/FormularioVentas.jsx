import React from "react";

const FormularioVentas = ({iva, actualizarIva, setNombre}) => {
  return (
    <>
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
            let clase= "";
            if (estado) {
              status = "Activo";
              clase = "btn btn-outline-success btn-block"
            } else {
              status = "Inactivo";
              clase = "btn btn-outline-info btn-block"
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
    </>
  );
};

export default FormularioVentas;
