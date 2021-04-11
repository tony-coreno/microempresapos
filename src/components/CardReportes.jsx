import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
const CardReportes = () => {
  return (
    <>
      {/* <div class="card" style="width: 18rem;"> */}
      <Cuadros className="p-4">
        <div>
          <div className="card">
            <img src="https://img.icons8.com/plasticine/100/000000/business-report.png" alt="Reportes" />
            {/* <img src="..." className="card-img-top" alt="..." />  */}
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <button className="btn btn-outline-success">
                Reportes del día
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
              alt="Reportes del mes"
            />
            {/* <img src="..." className="card-img-top" alt="..." />  */}
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <button className="btn btn-outline-success">
                Reportes del Mes
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text"></p>
              <button className="btn btn-outline-success">
                Filtrar busqueda
              </button>
            </div>
          </div>
        </div>
      </Cuadros>
    </>
  );
};

const Cuadros = styled.div`
  display: flex;
  flex-direction: row;
`;

export default CardReportes;
