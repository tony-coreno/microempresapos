import React from 'react'
const TablaKardex = () => {
    return ( 
        <>
    <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Referencia</th>
      <th scope="col">Ubicación</th>
      <th scope="col">Proveedor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>

<table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">Fecha</th>
      <th scope="col">Entrada</th>
      <th scope="col">Disp</th>
      <th scope="col">Salida</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>

        </>
     );
}
 
export default TablaKardex;