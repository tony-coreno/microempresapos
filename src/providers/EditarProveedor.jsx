import React, { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

const EditarProveedor = ({ prov, setInfo }) => {

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [correo, setCorreo] = useState("");
  const [marcaproveedor, setMarcaProveedor] = useState("");
  const [ide, setIde] = useState("");
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
    setNombre(prov.nombre)
    setTelefono(parseInt(prov.telefono))
    setCorreo(prov.correo)
    setMarcaProveedor(prov.marcaproveedor)
    setIde(prov._id)
  }

  useEffect(()=>{
    nuevosValores()
  },[])
  

  const actualizar = async(e)=>{
    e.preventDefault();
    const id = ide
    const token = sessionStorage.getItem('token')
    const proveedor = {
        nombre: nombre,
        correo: correo,
        telefono: telefono,
        marcaproveedor: marcaproveedor
    }
    const respuesta = await Axios.put('/proveedores/actualizar/'+id,proveedor,{
        headers:{'autorizacion':token}
    })
    const mensaje = respuesta.data.mensaje
    Swal.fire({
        icon: 'success',
        title: mensaje,
        showConfirmButton: false
    })
    setTimeout(()=>{
        window.location.href='/proveedores'
    },1500)
}
  return (
    <>
      <form className="container" key={ide}>
        <label>Editar Nombre</label>
        <input className="form-control" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <label className="mt-2">Editar Marca</label>
        <input
          className="form-control mt-1"
          value={marcaproveedor}
          onChange={(e)=>setMarcaProveedor(e.target.value)}
        />
        <label className="mt-2">Editar Telefóno</label>
        <input className="form-control mt-1" value={telefono} onChange={(e)=>setTelefono(e.target.value)} />
        <label className="mt-2">Editar Correo</label>
        <input className="form-control mt-1" placeholder={correo} onChange={(e)=>setCorreo(e.target.value)} />
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

export default EditarProveedor;
