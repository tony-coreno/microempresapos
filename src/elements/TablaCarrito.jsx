import React, { useContext } from 'react';
import DataTable from 'react-data-table-component';
import { ContextEstado } from '../context/ContextEstado';

const TablaCarrito = () => {

    const {base} = useContext(ContextEstado);
    
    // const {id} = base;

    const columnas = [
        {
            name: "SKU",
            selector: "id",
            sortable: true,
            grow: 1
        },
        {
            name: "Nombre",
            selector: "nombre",
            sortable: true
        },
        {
            name: "Precio",
            selector: "precio",
            sortable: true
        },
        {
            name: "Cantidad",
            selector: "cantidad",
            sortable: true
        },
        {
            name: "Eliminar",
            selector: "cantidad",
            sortable: true
        },
        
        ];
        
        const paginacionOpcion = {
            rowsPerPageText: 'Filas por página',
            rangeSeparatorText: 'de',
            selectAllRowsItem: true,
            selectAllRowsItemText: 'Todos'
        }



    return ( 
        <>
        <DataTable 
        columns={columnas}
        data={base}
        title="Detalle venta"
        // pagination
        // paginationComponentOptions={paginacionOpcion}
        fixedHeader
        fixedHeaderScrollHeight="300px"
    />
        </>
     );
}
 
export default TablaCarrito;