import React from "react";

const ConsultaKardex = ({setProducto, handleSubmit}) => {
  return (
    <>
      <h2>Kárdex</h2>
      <hr />
      <div>
        <form onSubmit={handleSubmit}>
        <input 
        className="form-control"
        placeholder="Código producto"
        autoFocus
        onChange={(e) => setProducto(e.target.value)}
        />
        {/* <button className="btn btn-warning mt-4 mr-4">Cancelar</button> */}
        <button className="btn btn-dark mt-4 mr-4">Consultar</button>
        </form>
      </div>
    </>
  );
};

export default ConsultaKardex;
