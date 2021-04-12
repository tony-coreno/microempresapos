import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileExcel,
  faFilePdf,
  faSearch,
  faTrashAlt,
  faUserEdit,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
const Barra = () => {
  let f = new Date();
  return (
    <nav className="navbar navbar bg-light">
      <div className="container p-1">
        <div>
        <ReactHTMLTableToExcel

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

        <a href=""></a>
      </div>
    </nav>
  );
};

export default Barra;
