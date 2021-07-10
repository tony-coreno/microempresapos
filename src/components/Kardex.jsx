import React, { useState } from "react";
import Axios from "axios";
import { Navbar } from "reactstrap";
import {
  Contenedorapp,
  Contenedor,
  Contenedor2,
  Boton,
  Herramientas,
} from "./style/Kardex.Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOutdent, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import ConsultaKardex from "../kardex/ConsultaKardex";
import TablaKardex from "../kardex/TablaKardex";
// import HerramientasKardex from "../kardex/HerramientasKardex";

const Kardex = () => {
  const [producto, setProducto] = useState("");
  const [mercancia, setMercancia] = useState(false);
  const [kardexItem, setKardexItem] = useState([]);
  const [salida, setSalida] = useState(false);
  // const [codigo, setCodigo] = useState("");
  const [existencia, setExistencia] = useState("");
  let f = new Date();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (producto.trim().length > 5) {
      const obtenerProducto = async () => {
        const sku = producto;
        const respuesta = await Axios.get(`/productos/carrito/${sku}`);
        setKardexItem(respuesta.data);
      };
      obtenerProducto();
      console.log(existencia);
    }
  };

  const mercanciaHandle = () => {
    setMercancia(true);
    setSalida(false);
  };

  const salidaHandle = () => {
    setSalida(true);
    setMercancia(false);
  };

  // const actualizar = async (e) => {
  //   e.preventDefault();
  //   //onst id = ide;
  //   const token = sessionStorage.getItem("token");
  //   if (codigo.trim().length > 5) {
  //     const obtenerProducto = async () => {
  //       const sku = codigo;
  //       const respuesta = await Axios.get(`/productos/carrito/${sku}`);
  //       console.log(respuesta)
  //       if (respuesta.data.length > 0) {
  //         const {data:{_id}} = respuesta
  //         const prod = {
  //           existencia,
  //         };
  //         const respuesta = await Axios.put(
  //           "/productos/actualizar/" + _id,
  //           prod,
  //           {
  //             headers: { autorizacion: token },
  //           }
  //         );
  //         const mensaje = respuesta.data.mensaje;
  //         Swal.fire({
  //           icon: "success",
  //           title: mensaje,
  //           showConfirmButton: false,
  //         });
  //         setTimeout(() => {
  //           window.location.href = "/kardex";
  //         }, 1500);
  //       } else {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Producto Inválido",
  //           showConfirmButton: false,
  //           timer: 1000,
  //         });
  //       }
  //     };
  //     obtenerProducto();
  //   }
  // };

  return (
    <div>
      <Navbar>
        {/* <HerramientasKardex /> */}
        <Herramientas>
          <Boton
            className="btn btn-light d-flex d-flex justify-content-between align-items-center"
            data-toggle="tooltip"
            data-placement="right"
            title="Agregar mercancía"
            onClick={() => mercanciaHandle()}
          >
            <FontAwesomeIcon icon={faShoppingBasket} /> Entrada de mercancía
          </Boton>
          <Boton
            className="btn btn-light d-flex d-flex justify-content-between align-items-center"
            data-toggle="tooltip"
            data-placement="right"
            title="Quitar inventario"
            onClick={() => salidaHandle()}
          >
            <FontAwesomeIcon icon={faOutdent} />
            <p> </p> Salida mercancía
          </Boton>
        </Herramientas>
      </Navbar>
      <Contenedorapp>
        <Contenedor>
          <ConsultaKardex
            setProducto={setProducto}
            handleSubmit={handleSubmit}
          />
        </Contenedor>
        <aside>
          <Contenedor2>
            <h3>Producto</h3>
            <TablaKardex kardexItem={kardexItem} />
          </Contenedor2>
          {mercancia ? (
            <Contenedor>
              <h3>Entrada de mercancía</h3>
              <span className="badge badge-info">
                Fecha:{" "}
                {f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}{" "}
              </span>
              <form>
                <input
                  className="form-control"
                  placeholder="Código de barras ..."
                  autoFocus
                  // onChange={(e) => setCodigo(e.target.value)}
                />
                <input
                  type="number"
                  className="form-control mt-4"
                  placeholder="Cantidad de productos a ingresar ..."
                  onChange={(e) => setExistencia(e.target.value)}
                />
                <button
                  className="btn btn-dark mt-3 mr-2"
                  // onClick={() => setMercancia(false)}
                >
                  Cancelar
                </button>
                <button
                  className="btn btn-success mt-3"
                  onClick={() => setMercancia(false)}
                >
                  Registrar
                </button>
              </form>
            </Contenedor>
          ) : null}
          {salida ? (
            <Contenedor>
              <h3>Salida de mercancía</h3>

              <span className="badge badge-info">
                Fecha:{" "}
                {f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}{" "}
              </span>
              <form>
                <input
                  className="form-control"
                  placeholder="Código de barras ..."
                  autoFocus
                />
                <input
                  type="number"
                  className="form-control mt-4"
                  placeholder="Cantidad de productos que se retiran ..."
                />
                <button
                  className="btn btn-dark mt-3 mr-2"
                  onClick={() => setSalida(false)}
                >
                  Cancelar
                </button>
                <button className="btn btn-success mt-3">Retirar</button>
              </form>
            </Contenedor>
          ) : null}
        </aside>
      </Contenedorapp>
    </div>
  );
};

export default Kardex;
