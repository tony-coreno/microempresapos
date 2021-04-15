import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import styled from 'styled-components'
// import ReactHTMLTableToExcel from "react-html-table-to-excel";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFileExcel,
//   faFilePdf,
//   faSearch,
//   faTrashAlt,
//   faUserEdit,
//   faUserPlus,
// } from "@fortawesome/free-solid-svg-icons";
const Barra = () => {
  let f = new Date();
  return (
    <Contenedor>
    <nav>
      <div>
        <h3 className="mt-1 ">SISTEMA POS</h3>
      
        {/* <ReactHTMLTableToExcel

          id="botonExportarExcel"
          className="btn btn-info btn-block"
          table="tablaEmpleados"
          filename={`Empleados-${
            f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()
          }}`}
          sheet="13-04"
          buttonText={<FontAwesomeIcon icon={faUserPlus} />}
        />
        </div>
        <div>
        <ReactHTMLTableToExcel
          id="botonExportarExcel"
          className="btn btn-danger btn-block"
          table="tablaEmpleados"
          filename={`Empleados-${
            f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()
          }`}
          sheet="13-04"
          buttonText={<FontAwesomeIcon icon={faFilePdf} />}
        />
        </div>
        <div>
        <ReactHTMLTableToExcel
          id="botonExportarExcel"
          className="btn btn-success btn-block"
          table="tablaEmpleados"
          filename={`Empleados-${
            f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()
          }}`}
          sheet="13-04"
          buttonText={<FontAwesomeIcon icon={faFileExcel} />}
        />
        </div>

        <a href=""></a> */}
      </div>
    </nav>
    </Contenedor>
  );
};


const Contenedor = styled.div`

background: #fff;
margin-top:20px;
padding: 20px;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);

`;

export default Barra;
