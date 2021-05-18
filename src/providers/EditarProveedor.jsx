import React from "react";
import Axios from "axios";
import Swal from "sweetalert2";

const EditarProveedor = ({ prov, setInfo }) => {
  const cancelar = (e) => {
    e.preventDefault();
    setInfo([]);
  };


  const actualizar = async(e, {prov})=>{
    e.preventDefault()
    const id = prov._id
    const token = sessionStorage.getItem('token')
    const proveedor = {
        nombre: e.target.nombre
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
      <form className="container" onSubmit={actualizar}>
        <label>Editar Nombre</label>
        <input className="form-control" placeholder={prov.nombre} onChange={(e)=>e.target.nombre} name="nombre" />
        <label className="mt-2">Editar Marca</label>
        <input
          className="form-control mt-1"
          placeholder={prov.marcaproveedor}
        />
        <label className="mt-2">Editar Telefóno</label>
        <input className="form-control mt-1" placeholder={prov.telefono} />
        <label className="mt-2">Editar Correo</label>
        <input className="form-control mt-1" placeholder={prov.correo} />
        <button
          className="btn btn-warning  mt-3 mr-3"
          onClick={(e) => cancelar(e)}
        >
          Cancelar
        </button>
        <button className="btn btn-success  mt-3">Guardar</button>
      </form>
    </>
  );
};

export default EditarProveedor;
