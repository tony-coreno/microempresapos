import React from "react";

const EditarProveedor = ({ prov, setInfo }) => {
  const cancelar = (e) => {
    e.preventDefault();
    setInfo([]);
  };
  return (
    <>
      <form className="container">
        <label>Editar Nombre</label>
        <input className="form-control" placeholder={prov.nombre} />
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
