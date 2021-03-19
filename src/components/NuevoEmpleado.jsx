import React from "react";
import {NavLink} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NuevoEmpleado = () => {
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
          <div class="row">
            <div class="col">
              <input type="text" class="form-control" placeholder="Nombre" />
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Apellido Paterno" />
            </div>
          </div>


          <div class="row mt-4">
            <div class="col">
              <input type="text" class="form-control" placeholder="Apellido Materno" />
            </div>
            <div class="col">
              <input type="number" class="form-control" placeholder="Numero de empleado" />
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
          <div class="form-group col-mt-4">
            <h5>Perfil</h5>
            <select id="inputState" class="form-control mt-2">
              <option>Administrador</option>
              <option>Vendedor</option>
            </select>
          </div>

          <hr />
          <div class="form-group col-mt-4">
            <h5>Estado</h5>
            <select id="inputState" class="form-control mt-2">
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
          </div>
        </form>
      </main>
    </>
  );
};

export default NuevoEmpleado;
