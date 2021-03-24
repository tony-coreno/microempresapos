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
            {/* <img src="..." className="card-img-top" alt="..." />  */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-info">
                Reportes del día
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." />  */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-info">
                Reportes del Mes
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..." />  */}
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-info">
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
