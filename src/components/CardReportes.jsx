import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import styled from 'styled-components';
const CardReportes = () => {
  return (
    <>
      {/* <div class="card" style="width: 18rem;"> */}
      <Cuadros className="p-4">
        <div>
          <div className="card">
          <img src="https://img.icons8.com/plasticine/100/000000/business-report.png"/>
            {/* <img src="..." className="card-img-top" alt="..." />  */}
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">

              </p>
              <a href="#" className="btn btn-success">
                Reportes del día
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
          <img className="card-img-top" src="https://img.icons8.com/plasticine/100/000000/total-sales.png"/>
            {/* <img src="..." className="card-img-top" alt="..." />  */}
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">

              </p>
              <a href="#" className="btn btn-success">
                Reportes del Mes
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            
            
            {/* <img src="..." className="card-img-top" alt="..." />  */}
            <div className="card-body">
              <h5 className="card-title"></h5>
              <p className="card-text">

              </p>
              <a href="#" className="btn btn-success">
                Filtrar Búsqueda
              </a>
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
