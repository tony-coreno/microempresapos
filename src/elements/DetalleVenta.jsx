import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ContextEstado } from "../context/ContextEstado";
const DetalleVenta = () => {

  const {metodopago, setMetodoPago,pagoSelected, setPagoSelected} = useContext(ContextEstado)
  // const {
  //   metodopago,
  //   setMetodoPago,
  //   metodoPagoSelected,
  //   setMetodoPagoSelected,
  // } = useState([]);

  useEffect(() => {
    setPagoSelected(["","Efectivo", "Tarjeta", "Vale despensa"]);
  }, []);
  const codigo = (e) => {
    e.preventDefault();
    alert("Me llegó");
  };
  return (
    <>
      <Contenedorapp>
        <hr />
        <h4>Método de pago</h4>
        <select
          onChange={(e) => setMetodoPago(e.target.value)}
          value={metodopago}
          className="form-control mt-"
        >
          {pagoSelected.map((pago) => (
            <option key={pago}>{pago}</option>
          ))}
        </select>
        <form onSubmit={codigo}>
          <label>Código Promocional</label>
          <input className="form-control" />
          <div className="table-responsive table-borderless table-hover mt-2">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="bg-success card-header py-1">
                      <div className="form-group col-mt-4">
                        <Titulo></Titulo>
                      </div>
                      <Titulo>Subtotal</Titulo>
                    </div>
                    <table className="table table-responsive-lg text-center ">
                      <thead className="light">
                        <tr>
                          <th>IVA</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* {ventaProducto.map((producto, i) => {
                      
                        return (
                          <tr key={producto._id}>
                            <td>{i + 1}</td>
                            <td>{producto.sku}</td>
                            <td>{producto.producto}</td>
                            <td>{producto.precioventa}</td>
                            <td>{producto.unidad}</td>
                            <td>
                              <button
                                className="bn btn-outline-dark mr-2"
                                
                              >
                                <FontAwesomeIcon icon={faTrash} />
                              </button>
                          </td>
                          </tr>
                        );
                      })} */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Contenedorapp>
    </>
  );
};

const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;
  display: grid;
  gap: 20px;
  //grid-template-columns: 2fr 2fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
// const Contenedor = styled.div`
//   padding: 25px;
//   width: 100%;
//   display: grid;
//   gap: 20px;
//   //background: #eef3f5;
//   background: #fff;
//   margin: 10px 0;
//   border-radius: 10px;
//   box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
// `;
const Titulo = styled.h6`
  color: #fff;
  text-align: center;
`;

export default DetalleVenta;
