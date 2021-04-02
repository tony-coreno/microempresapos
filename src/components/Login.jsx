import React, { useState } from 'react';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    const login = async(e)=>{
        e.preventDefault()
        const sesion = {usuario, contrasena}
        const respuesta = await Axios.post('http://localhost:4000/administrador/login',sesion)
        const mensaje = respuesta.data.mensaje
        if(mensaje !== 'Bienvenido'){
            Swal.fire({
                icon: 'error',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
            
        }else{
            Swal.fire({
                icon: 'success',
                title: mensaje,
                showConfirmButton: false,
                timer: 1500
            })
            const token = respuesta.data.token
            const nombre = respuesta.data.nombre
            const idusuario = respuesta.data.id
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('nombre', nombre)
            sessionStorage.setItem('idusuario', idusuario)
            window.location.href='/'
        }
    }

    return ( 
 
    
        <div className="container mt-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i><FontAwesomeIcon icon={faUserPlus} /></i>
              </div>
              <div className="card-header text-center">
                <h4>Iniciar Sesión</h4>
              </div>
              <div className="card-body">
                <form onSubmit={login}>
                  <div className="form-group">
                    <label>Usuario</label>
                    <input
                      type="text"
                      className="form-control"
                      autoFocus
                      required
                    onChange={(e) => setUsuario(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Contraseña</label>
                    <input
                      type="password"
                      className="form-control"
                      required
                    onChange={(e) => setContrasena(e.target.value)}
                    />
                  </div>
                  <input type="submit" className="btn btn-outline-info btn-block" value="Enviar"/>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

     );
}


export default Login;