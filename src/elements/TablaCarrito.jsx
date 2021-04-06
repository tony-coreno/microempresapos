import React, { useContext } from 'react';
import DataTable from 'react-data-table-component';
import { ContextEstado } from '../context/ContextEstado';
import styled from 'styled-components';
const TablaCarrito = () => {

    const {base} = useContext(ContextEstado);
    
    // const {id} = base;

    // const columnas = [
    //     {
    //         name: "SKU",
    //         selector: "id",
    //         sortable: true,
    //         grow: 1
    //     },
    //     {
    //         name: "Nombre",
    //         selector: "nombre",
    //         sortable: true
    //     },
    //     {
    //         name: "Precio",
    //         selector: "precio",
    //         sortable: true
    //     },
    //     {
    //         name: "Cantidad",
    //         selector: "cantidad",
    //         sortable: true
    //     },
    //     {
    //         name: "Eliminar",
    //         selector: "nombre",
    //         sortable: true
    //     },
        
    //     ];
        
        // const paginacionOpcion = {
        //     rowsPerPageText: 'Filas por página',
        //     rangeSeparatorText: 'de',
        //     selectAllRowsItem: true,
        //     selectAllRowsItemText: 'Todos'
        // }



    return ( 
        <>
        {/* <DataTable 
        columns={columnas}
        data={base}
        title="Detalle venta"
        // pagination
        // paginationComponentOptions={paginacionOpcion}
        fixedHeader
        fixedHeaderScrollHeight="300px"
    /> */}
<div className="table-responsive table-borderless table-hover">
     
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="bg-dark card-header py-1">
                    <Titulo>
                      Detalle de venta
                    </Titulo>
                  </div>
                  <table className="table table-responsive-lg ">
                    <thead className="light">
                      <tr>
                        <th>#</th>
                        <th>SKU</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Eliminar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* {empleados.map((empleado, i) => {
                        return (
                          <tr key={empleado.id}>
                            <td>{i + 1}</td>
                            <td>{empleado.numeroempleado}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.apellidopaterno}</td>
                            <td>{empleado.usuario}</td>
                            <td>{empleado.perfil}</td>
                            <td>{empleado.estado}</td>
                            <td>
                              <button
                                className="bn btn-outline-info mr-2"
                                
                              >
                                <FontAwesomeIcon icon={faUserEdit} />
                              </button>
                              <button className="bn btn-outline-dark" onClick={() => eliminar(empleado._id)}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                              </button>
                            </td>
                          </tr>
                        );
                      })} */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
  
      </div>
        </>
     );
}

const Tabla = styled.section`
  background: #fff;
  text-align: center;
  font-family: "Open Sans", sans-serif;
`;

const Titulo = styled.h6`
  color: #fff;
  text-align: center;
`;
 
export default TablaCarrito;