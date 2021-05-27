import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from 'axios';
import { faArrowLeft, faSave} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from 'styled-components';
import { ContextEstado } from "../context/ContextEstado";
import "bootstrap/dist/css/bootstrap.css";

const Settings = () => {
  // const boton = document.getElementById("boton");
  // const pass = document.getElementById("pass");
  // // const mostrarContraseña = (e) => {
  // //   e.preventDefault();
  // //   if (pass.type == "password") {
  // //     pass.type = "text";
  // //   }
  // // };
  const obtenerTitulo = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/sistema/obtener/" + id, {
      headers: { autorizacion: token },
    });
    console.log(respuesta.data)
    // setTituloPOS(respuesta.data.nombre)
  }; 
  
  
  useEffect(()=>{
    obtenerTitulo()
    
  },[])


  const {setTituloPOS} = useContext(ContextEstado);
  const [empresa, setEmpresa] = useState('');
  const onSubmit= (e) => {
    e.preventDefault();
    setTituloPOS(empresa);
  }  
  return (

    <>
      <main className="caja-contenido col-12">
        <div>
          <NavLink to="/">
            <button className="btn btn-warning">
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          </NavLink>
          <Titulo>Ajustes</Titulo>
        </div>
        <form onSubmit={onSubmit}>
          <hr />


          <div className="row">
            <div className="col">
       
            <h6>Nombre</h6>
              <input type="text" className="form-control mt-2"
              placeholder="Nombre del Negocio"
              onChange={(e)=>setEmpresa(e.target.value)}
              />
            </div>
            <div className="col">
            <h6>Tema</h6>
            <select id="inputState" className="form-control mt-2">
              <option>Claro</option>
              <option>Dark</option>
            </select>
            </div>
          </div>

          <hr />
          <div className="form-group col-mt-4">
            <h5>Fuente</h5>
            <button className="btn btn-outline-primary mt-2">Aumentar</button>
            <hr />
            <button className="btn btn-outline-dark mt-2" >Disminuir</button>
          </div>

          <hr />

          <SeccionBoton>
            <button className="btn btn-outline-success"><FontAwesomeIcon icon={faSave} /> Guardar</button>
          </SeccionBoton>
        </form>
      </main>
    </>
  );
};

export default Settings;


const SeccionBoton = styled.div`

    width: 50%;
`;

const Titulo = styled.h5`

    text-align: center;
`;