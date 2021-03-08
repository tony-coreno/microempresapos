import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap';

const Empleados = () => {
    return ( 
        <div>
            <Button color="primary">Agregar Empleado</Button>

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
        </div>
     );
}
 
export default Empleados;