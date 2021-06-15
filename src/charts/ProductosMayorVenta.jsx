import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";

const ProductosMayorVenta = () => {
  const [ventas, setVentas] = useState([""]);

  useEffect(() => {
    obtenerVentas();
    // eslint-disable-next-line
  }, []);

  const obtenerVentas = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/ventas/ventasdia/" + id, {
      headers: { autorizacion: token },
    });
    setVentas(respuesta.data);
    // console.log(ventas)
    // const dia = await ventas.filter((venta) => {
    //   return venta.metodopago === "Tarjeta";
    // });
    console.log(ventas);
  };

  return (
    <>
      <Contenedor>
        <div
          className="card ms-1 animate__animated animate__fadeIn"
          style={{ maxWidth: 740 }}
        >
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/shopping-cart-loaded.png"
                className="card-img"
                alt="POS"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">
                  <small className="text-muted">
                    <br />
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Contenedor>
    </>
  );
};

const Contenedor = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 2fr;
  //background: #eef3f5;
  background: #fff;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

export default ProductosMayorVenta;
