import React from "react";
import {NavLink} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { faArrowLeft, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NuevoEmpleado = () => {
  const boton = document.getElementById('boton');
  const pass = document.getElementById('pass');
  const mostrarContraseña = (e) => {
    e.preventDefault();
    if(pass.type=="password"){
      pass.type ="text";
      
    }

  }
  return (
    <>
      <main className="caja-contenido col-12">
        <div>
            <NavLink to="/empleados">
          <button className="fa fa-button-light">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          </NavLink>
          <h5>Nuevo Empleado</h5>
        </div>
        <form>
          <hr />
          <div className="row">
            <div className="col">
              <input type="text" className="form-control" placeholder="Nombre" />
            </div>
            <div class="col">
              <input type="text" className="form-control" placeholder="Apellido Paterno" />
            </div>
          </div>


          <div className="row mt-4">
            <div className="col">
              <input type="text" className="form-control" placeholder="Apellido Materno" />
            </div>
            <div className="col">
              <input type="number" className="form-control" placeholder="Numero de empleado" />
            </div>
          </div>
        
        
          <div className="row mt-4">
            <div className="col">
              <input type="text" className="form-control" placeholder="Usuario para ingresar al sistema " />
            </div>
            <div class="col">
              <input id="pass" type="password" className="form-control" placeholder="Contraseña" />
              <button id="boton" className="btn-sm btn-primary " onClick={()=>mostrarContraseña} ><i>Mostrar <FontAwesomeIcon icon={faEye} /></i></button>
            </div>
          </div>
{/* 
          <div class="row mt-4">
            <div class="col">
              <input
                type="number"
                class="form-control"
                placeholder="Numero de empleado"
              />
            </div>
          </div> */}

          <hr />
          <div className="form-group col-mt-4">
            <h5>Perfil</h5>
            <select id="inputState" className="form-control mt-2">
              <option>Administrador</option>
              <option>Vendedor</option>
            </select>
          </div>

          <hr />
          <div className="form-group col-mt-4">
            <h5>Estado</h5>
            <select id="inputState" className="form-control mt-2">
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
          </div>
          
          <div>
            <button className="btn btn-success">Enviar</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default NuevoEmpleado;
