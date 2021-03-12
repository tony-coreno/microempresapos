import React from 'react';
import DataTable from 'react-data-table-component';
const columnas = [
    {
    name: "ID",
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
    name: "Apellido",
    selector: "apellido",
    sortable: true
},
{
    name: "Teléfono",
    selector: "perfil",
    sortable: true
},
{
    name: "Compras Realizadas",
    selector: "perfil",
    sortable: true
},
{
    name: "Opciones",
    selector: "opciones",
    sortable: true
}
];

const tablaEmpleados =[
    {id:"", nombre:"", apellido: "", perfil: "", opciones: ""}

];

const paginacionOpcion = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

const Clientes = () => {
    return ( 
        <div>
             <DataTable 
                columns={columnas}
                data={tablaEmpleados}
                title="Clientes"
                pagination
                paginationComponentOptions={paginacionOpcion}
                fixedHeader
                fixedHeaderScrollHeight="300px"
            />
        </div>
     );
}
 
export default Clientes;