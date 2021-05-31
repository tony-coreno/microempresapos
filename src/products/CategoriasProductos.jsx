import React from "react";

const CategoriasProductos = ({ categorias }) => {
  return (
    <>
      <table className="table text-center">
        <thead className="thead-dark">
          <tr>
            <th scope="col-2">#</th>
            <th scope="col-4">Categoría</th>
            <th scope="col-4">Estado</th>
            <th scope="col-2">Eliminar</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {categorias.map((categoria, i) => {
            let estado = 'Activo'
            let clase = 'btn btn-outline-success'
            if(!categoria.estado){
              estado = 'Inactivo'
              clase = 'btn btn-outline-info'
            }

            return (
              <tr key={categoria._id}>
                <th scope="row">{i+1}</th>
                <td>{categoria.nombre}</td>
                <td><button className={clase}>{estado}</button></td>
                <td><button className="btn btn-outline-danger">Eliminar</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default CategoriasProductos;
