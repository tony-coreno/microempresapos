import React, { useEffect, useState } from "react";
import {NavLink} from 'react-router-dom';
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button} from 'reactstrap';
import styled from 'styled-components';
import Swal from 'sweetalert2';
const NuevoEmpleado = () => {

  const [nombre, setNombre] = useState('');
  const [apellidopaterno, setApellidoPaterno] = useState('');
  const [apellidomaterno, setApellidoMaterno] = useState('');
  const [numeroempleado, setNumeroEmpleado] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [perfilSelected, setPerfilSelected] = useState([]);
  const [perfil, setPerfil] = useState('');
  const [estado, setEstado] = useState('');
  const [estadoSelected, setEstadoSelected] = useState([]);



  useEffect(()=>{
    setPerfilSelected(['Administrador','Vendedor'])
    setEstadoSelected(['Activo', 'Inactivo'])
  },[]);

  const guardar = async (e) =>{
    e.preventDefault()
    const empleado = {
      nombre,
      apellidopaterno,
      apellidomaterno,
      numeroempleado,
      usuario,
      contrasena,
      perfil,
      estado: estado,
      jefe: sessionStorage.getItem('idusuario')
    }
    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.post('http://localhost:4000/empleados/crear',empleado,{
      headers: {autorizacion: token}
    })
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
    });
    setTimeout(() => {
    window.location.href = "/empleados";
    }, 1500);
  }

  return (
    <>
      <main className="caja-contenido col-12">
        <div>
            <NavLink to="/empleados">
          <Button className="btn btn-info">
            <FontAwesomeIcon icon={faArrowLeft} />
          </Button>
          </NavLink>
          <Titulo>Nuevo Empleado</Titulo>
        </div>
        <form onSubmit={guardar}>
          <hr />
          <div className="row">
            <div className="col">
              <input type="text" onChange={(e)=>setNombre(e.target.value)} className="form-control" placeholder="Nombre" />
            </div>
            <div class="col">
              <input type="text" onChange={(e)=>setApellidoPaterno(e.target.value)} className="form-control" placeholder="Apellido Paterno" />
            </div>
          </div>


          <div className="row mt-4">
            <div className="col">
              <input type="text" onChange={(e)=>setApellidoMaterno(e.target.value)} className="form-control" placeholder="Apellido Materno" />
            </div>
            <div className="col">
              <input type="number" onChange={(e)=>setNumeroEmpleado(e.target.value)} className="form-control" placeholder="Numero de empleado" />
            </div>
          </div>
        
        
          <div className="row mt-4">
            <div className="col">
              <input type="text" onChange={(e)=>setUsuario(e.target.value)} className="form-control" placeholder="Usuario para ingresar al sistema " />
            </div>
            <div class="col">
              <input  type="password" onChange={(e)=>setContrasena(e.target.value)} className="form-control" placeholder="Contraseña" />
              <button  className="btn-sm btn-primary mt-2" ><i>Mostrar <FontAwesomeIcon icon={faEye} /></i></button>
            </div>
          </div>

          <hr />
          <div className="form-group col-mt-4">
            <Titulo>Perfil</Titulo>
            <select className="form-control mt-2" onChange={(e)=>setPerfil(e.target.value)}
            value={perfil} >
              {perfilSelected.map((perfiles)=>(<option key={perfiles}>{perfiles}</option>))}
            </select>
          </div>

          <hr />
          <div className="form-group col-mt-4">
            <Titulo>Estado</Titulo>
            <select className="form-control mt-2" onChange={(e)=>setEstado(e.target.value)}
            value={estado} >
            {estadoSelected.map((estados)=>(<option key={estados}>{estados}</option>))}
            </select>
          </div>
          <div>
            <button className="btn btn-info">Registrar</button>
          </div>
        </form>
      </main>
    </>
  );
};

const Titulo = styled.h5`

    text-align: center;

`;

export default NuevoEmpleado;
