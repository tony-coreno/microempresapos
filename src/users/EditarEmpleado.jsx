import React, { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

const EditarEmpleado = ({ emp, setInfo }) => {

  const [nombre, setNombre] = useState("");
  const [numeroempleado, setNumeroEmpleado] = useState(0);
  const [usuario, setUsuario] = useState("");
  const [estado, setEstado] = useState("");
  const [ide, setIde] = useState("");


  useEffect(()=>{
    nuevosValores()
        // eslint-disable-next-line
  },[])


  const cancelar = (e) => {
    e.preventDefault();
    setInfo([]);
    // setNombre("");
    // setTelefono(0);
    // setCorreo("");
    // setMarcaProveedor("");
    // setIde("");
  };

  const nuevosValores = () => {
    setNombre(emp.nombre)
    setNumeroEmpleado(emp.numeroempleado)
    setUsuario(emp.usuario)
    setEstado(emp.estado)
    setIde(emp._id)
    console.log(nombre)
  }

  const actualizar = async(e)=>{
    e.preventDefault();
    const id = ide
    const token = sessionStorage.getItem('token')
    const empleado = {
      nombre,
      numeroempleado,
      usuario,
      estado,
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
        window.location.href='/empleado'
    },1500)
}
  return (
    <>
      <form className="container" key={ide}>
        <label>Editar Nombre Empleado</label>
        <input className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <label className="mt-2">Editar Numero empleado</label>
        <input
          className="form-control mt-1"
          value={numeroempleado}
          onChange={(e)=>setNumeroEmpleado(e.target.value)}
        />
        <label className="mt-2">Editar Usuario</label>
        <input className="form-control mt-1" value={usuario} onChange={(e)=>setUsuario(e.target.value)} />
        <label className="mt-2">Editar Estado</label>
        <input className="form-control mt-1" value={estado} onChange={(e)=>setEstado(e.target.value)} />
        <button
          className="btn btn-warning  mt-3 mr-3"
          onClick={(e) => cancelar(e)}
        >
          Cancelar
        </button>
        <button className="btn btn-success  mt-3" 
        onClick={(e)=> actualizar(e)}>
          Guardar</button>
      </form>
    </>
  );
};

export default EditarEmpleado;
