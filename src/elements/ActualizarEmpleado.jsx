import React, {useEffect, useState} from 'react'
import Axios from 'axios';
import Swal from 'sweetalert2'
import { ContextEstado } from '../context/ContextEstado';
const Actualizar = (props) => {
    const [nombre, setNombre] = useState('');
    const [apellidopaterno, setApellidoPaterno] = useState('');
    const [apellidomaterno, setApellidoMaterno] = useState('');
    const [numeroempleado, setNumeroEmpleado] = useState('');
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [perfilSelected, setPerfilSelected] = useState([]);
    const {perfil, setPerfil} = useContext(ContextEstado);
    const [estado, setEstado] = useState('');
    const [estadoSelected, setEstadoSelected] = useState([]);
  
    useEffect(() => {
      obtenerEmpleado()
      setTcontratos(["fijo", "Temporal", "Practicante"])
    }, []);
  
    const actualizar = async(e)=>{
        e.preventDefault()
        const id = props.match.params.id
        const token = sessionStorage.getItem('token')
        const empleado = {
            nombre,
            apellidopaterno,
            apellidomaterno,
            numeroempleado,
            usuario,
            contrasena,
            perfil,
            estado
        }
        const respuesta = await Axios.put('/empleados/actualizar/'+id,empleado,{
            headers:{'autorizacion':token}
        })
        const mensaje = respuesta.data.mensaje
        Swal.fire({
            icon: 'success',
            title: mensaje,
            showConfirmButton: false
        })
        setTimeout(()=>{
            window.location.href='/index'
        },1500)
    }


    return ( 
        <div className="container col-md-6 mt-4">
                <div className="card">
                    <div className="card-header">
                        <h3>Editar</h3>
                        <div className="card-body">
                            <form onSubmit={actualizar}>
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" required onChange={e => setNombre(e.target.value)} value={nombre}/>
                                </div>
                                <div className="form-group">
                                    <label>Apellidos</label>
                                    <input type="text" className="form-control" required onChange={e => setApellidos(e.target.value)} value={apellidos}/>
                                </div>
                                <div className="form-group">
                                    <label>Puesto</label>
                                    <input type="text" className="form-control" required onChange={e => setPuesto(e.target.value)} value={puesto} />
                                </div>
                                <div className="form-group">
                                    <label>Identificación</label>
                                    <input type="text" className="form-control" required onChange={e => setIdentificacion(e.target.value)} value={identificacion}/>
                                </div>
                                <div className="form-group">
                                    <label>Tipo de contrato</label>
                                    <select className="form-control" onChange={(e) => setContratoSelect(e.target.value)} value={contratoSelect}>
                                        {
                                            tcontratos.map(tcontrato =>
                                                <option key={tcontrato}>
                                                    {tcontrato}
                                                </option>)
                                        }
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-warning" type="submit">Actualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default Actualizar;