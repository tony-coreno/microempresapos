import 'bootstrap/dist/css/bootstrap.css';
import {Button, Navbar} from 'reactstrap';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';

const tablaEmpleados =[
    {id:1, nombre:"Antonio", apellido: "Coreño", perfil: "Administrador", estatus: "Activo"},
    {id:2, nombre:"Jose", apellido: "Torres", perfil: "Administrador", estatus: "Activo"},
    {id:3, nombre:"Edgar", apellido: "Perez", perfil: "Vendedor", estatus: "Activo"},
    {id:4, nombre:"Juan", apellido: "Sanchez", perfil: "Vendedor", estatus: "Activo"},
    {id:5, nombre:"Pedro", apellido: "Torres", perfil: "Vendedor", estatus: "Activo"},
];

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
    name: "Perfil",
    selector: "perfil",
    sortable: true
},
{
    name: "Estado",
    selector: "estatus",
    sortable: true
}
];

const paginacionOpcion = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

const Empleados = () => {
    return ( 
        <div className="table-responsive">
            <Navbar>
            <NavLink to="/agregar-empleado">    
                <Button className="btn btn-info d-flex d-flex justify-content-between align-items-center"><FontAwesomeIcon icon={faUserPlus} /></Button>
            </NavLink>
            </Navbar>
            <DataTable 
                columns={columnas}
                data={tablaEmpleados}
                title="Gestión Empleados"
                pagination
                paginationComponentOptions={paginacionOpcion}
                fixedHeader
                fixedHeaderScrollHeight="300px"
            />
        </div>
     );
}
 
export default Empleados;