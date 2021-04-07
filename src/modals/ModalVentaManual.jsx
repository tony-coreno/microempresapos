import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
const ModalVentaManual = () => {
    return ( 
        <div className="modal fade" id="addEmpleado">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Add Empleado</h5>
              <button className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Nombres</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    // onChange={(e) => setNombres(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Apellidos</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    // onChange={(e) => setApellidos(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Puesto</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    // onChange={(e) => setPuesto(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Identificación</label>
                  <input
                    type="text"
                    className="form-control"
                    required
                    // onChange={(e) => setIdentificacion(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Tipo de contrato</label>
                  {/* <select
                    className="form-control"
                    onChange={(e) => setContratoSelect(e.target.value)}
                    value={contratoSelect}
                  >
                    {tcontratos.map((tcontrato) => (
                      <option key={tcontrato}>{tcontrato}</option>
                    ))}
                  </select> */}
                </div>
                <div className="form-group">
                  <button className="btn btn-primary" type="submit">
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default ModalVentaManual;