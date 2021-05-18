import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
const CardReportes = () => {
  return (
    <>
      <Cuadros className="p-4">
        <div>
          <div className="card">
            <img
              src="https://img.icons8.com/plasticine/100/000000/business-report.png"
              alt="Reportes"
            />
            <div className="card-body">
              <Link className="btn btn-outline-success" to="/ventas-dia">
                Reportes del día
              </Link>
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
              <Link to="/ventas-mes" className="btn btn-outline-success" >
                Reportes del Mes
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="card">
            <div className="card-body">
              <Link className="btn btn-outline-success" to="/filtrar-ventas">
                Filtrar busqueda
              </Link>
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
