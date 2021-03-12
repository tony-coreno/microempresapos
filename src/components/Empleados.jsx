import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch, faUserPlus} from "@fortawesome/free-solid-svg-icons";

const tablaEmpleados =[
    {id:1, nombre:"Antonio", apellido: "Coreño", perfil: "Administrador"},
    {id:2, nombre:"Jose", apellido: "Torres", perfil: "Administrador"},
    {id:3, nombre:"Edgar", apellido: "Perez", perfil: "Vendedor"},
    {id:4, nombre:"Juan", apellido: "Sanchez", perfil: "Vendedor"},
    {id:5, nombre:"Pedro", apellido: "Torres", perfil: "Vendedor"},
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
            <Button className="btn btn-success pull-right"><FontAwesomeIcon icon={faUserPlus} /></Button>
            {/* <Button className="btn btn-success pull-right"><FontAwesomeIcon icon={faSearch} /></Button> */}
            {/* <h2>
                Agregar Empleado
            </h2>
            <form className="form-group">
                <label className="form-group"></label>
                <input 
                    type="text"
                    name="nombre"
                    className="input-group mt-2"
                    placeholder="Nombre(s) empleado:"
                />
                <label></label>
                <input 
                    type="text"
                    name="apellidopaterno"
                    className="input-group mt-2"
                    placeholder="Apellido paterno:"
                    
                />
                <input 
                    type="text"
                    name="apellidomaterno"
                    className="input-group mt-2"
                    placeholder="Apellido materno:"
                    
                />
                <label>Fecha alta</label>
                <br />
                <input 
                    type="date"
                    name="fecha"
                    className="input-group mt-2"
                    
                />
                <input 
                    type="text"
                    name="usuario"
                    className="input-group mt-2"
                    placeholder="Usuario ingresar al sistema"
                    
                />

                <button
                    type="submit"
                    className="btn btn-success"
                >Enviar</button>

            </form> */}
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