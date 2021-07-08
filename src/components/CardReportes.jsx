import React from "react";
import { Link } from "react-router-dom";
import { Cuadros, Caja } from "./style/CardReportes";
const CardReportes = () => {
  return (
    <>
      <Cuadros className="p-4">
        <Caja>
          <div>
            <img
              className="animate__animated animate__fadeIn"
              src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
              alt="Reportes"
            />
            <div className="card-body">
              <Link className="btn btn-outline-success" to="/ventas-dia">
                Ventas del día
              </Link>
            </div>
          </div>
        </Caja>
        <Caja>
          <div>
            <div>
              <img
                className="animate__animated animate__fadeIn"
                src="https://img.icons8.com/plasticine/100/000000/business-report.png"
                alt="Reportes"
              />
              <div className="card-body">
                <Link className="btn btn-outline-success" to="/ventas-mes">
                  Ventas del mes
                </Link>
              </div>
            </div>
          </div>
        </Caja>
      </Cuadros>
    </>
  );
};

export default CardReportes;
