import React from "react";
const TablaKardex = ({ kardexItem }) => {
  return (
    <>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">COD</th>
            <th scope="col">Producto</th>
            <th scope="col">Categoria</th>
            <th scope="col">Proveedor</th>
            <th scope="col">Existencia</th>
            <th scope="col">Fecha registrada</th>
          </tr>
        </thead>
        <tbody>
          {kardexItem.map((item,i) => {
             return (
              <tr key={i}>
                <th>{item.sku}</th>
                <td>{item.producto}</td>
                <td>{item.categoria}</td>
                <td>{item.marca}</td>
                <td>{item.existencia}</td>
                <td>{item.fecharegistro}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TablaKardex;
