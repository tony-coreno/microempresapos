import React, { useState } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';

const AgregarUnidad = ({setUnidad, obtenerUnidades}) => {
    const [nombre, setNombre] = useState("");
    const handleInput = (e) => {
        e.preventDefault();
        setUnidad(true)
    }

    const guardar = async (e) => {
        e.preventDefault();
        if (nombre === "") {
          Swal.fire({
            icon: "error",
            title: "Agrega unidad válida",
            showConfirmButton: false,
            timer: 1500,
          });
          return null;
        }
        const unidad = {
          jefe: sessionStorage.getItem("idusuario"),
          nombre: nombre,
        };
        const token = sessionStorage.getItem("token");
        const respuesta = await Axios.post("/unidades/guardar", unidad, {
          headers: { autorizacion: token },
        });
        const mensaje = respuesta.data.mensaje;
        Swal.fire({
          icon: "success",
          title: mensaje,
          showConfirmButton: false,
          timer: 1500,
        });
        obtenerUnidades();
      };
    return ( 
        <div className="container-sm">
            <form onSubmit={guardar}>
                <legend>Ingrese Unidad</legend>
                <hr />
                <label>Nombre</label>
                <input className="form-control mt-2" autoFocus onChange={(e)=>setNombre(e.target.value)} />
                <button className="btn btn-primary mt-4 mr-2" onClick={(e) => handleInput(e)}>Cancelar</button>
                <button type="submit" className="btn btn-info mt-4">Enviar</button>
            </form>
        </div>
     );
}
 
export default AgregarUnidad;