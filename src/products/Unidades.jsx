import React from "react";

const Unidades = ({unidades}) => {

  return (
    <>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Unidad</th>
            <th scope="col">Estado</th>
            <th scope="col">Opción</th>
          </tr>
        </thead>
        <tbody>
          {unidades.map((unidad) => {
            let estado = "Activo";
            let clase = "btn btn-outline-success";
            if(unidad.nombre === ""){
              return null;
            }

            if(!unidad.estado){
              estado = "Inactivo"
              clase= "btn btn-outline-info"
            }

            return (
              <tr key={unidad._id}>
                <th scope="row">Unidades</th>
                <td>{unidad.nombre}</td>
                <td><button className={clase}>{estado}</button></td>
                <td><button className="btn btn-outline-primary">Eliminar</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Unidades;
