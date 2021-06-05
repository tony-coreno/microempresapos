import React from "react";
import styled from "styled-components";
const FormularioLoginEmpleado = ({login, setContrasena, setUsuario}) => {
  return (
    <>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <Fondo className="card">
            <div className="container text-center fa-5x">
              {/* <i><FontAwesomeIcon icon={faUserPlus} /></i> */}
              <img
                src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
                title="POS"
                alt="POS"
              />
            </div>
            <div className="card-header text-center">
              <hr />
              <br />
              <h4>Iniciar Sesión Empleado</h4>
            </div>
            <div className="card-body">
              <form onSubmit={login}>
                <div className="form-group">
                  <label>Usuario</label>
                  <input
                    type="text"
                    className="form-control"
                    autoFocus
                    required
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Contraseña</label>
                  <input
                    type="password"
                    className="form-control"
                    required
                    onChange={(e) => setContrasena(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-outline-light btn-block"
                  value="Enviar"
                />
              </form>
            </div>
          </Fondo>
        </div>
      </div>
    </>
  );
};

const Fondo = styled.div`
  // background: #147551;
  color: #fff;
  //opacity: 0.8;
  background: linear-gradient(#ffffff 50%, rgba(255, 255, 255, 0) 0) 0 0,
    radial-gradient(circle closest-side, #ffffff 53%, rgba(255, 255, 255, 0) 0)
      0 0,
    radial-gradient(circle closest-side, #ffffff 50%, rgba(255, 255, 255, 0) 0)
      55px 0 #48b;
  background-size: 110px 200px;
  background-repeat: repeat-x;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(129, 129, 129, 0.7);
`;
export default FormularioLoginEmpleado;
