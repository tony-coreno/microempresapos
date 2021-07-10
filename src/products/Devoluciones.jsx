import React, { useState } from "react";
import Axios from "axios";
// import { Navbar } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BarraProductos from "./BarraProductos";
import {
  Contenedorapp,
  Contenedor,
  Contenedor2,
  //Buscar,
} from "./styled/DevolucionStyle";
const Devoluciones = () => {
  const [articulo, setArticulo] = useState({});
  const [idcompra, setIdCompra] = useState(0);

  const obtenerVenta = async (e) => {
    e.preventDefault();
    const respuesta = await Axios.get("/ventas/buscar/" + idcompra);
    console.log(respuesta.data);
    const [articulos, ...resto] = respuesta.data
    console.log(resto)
    // const { articulos } = respuesta.data;
    // console.log(articulos);
    setArticulo(articulos);
    console.log(articulo);
  };

  //let f = new Date();
  return (
    <div>
      <BarraProductos />
      {/* <Navbar>
        <div className="col-md-4 ml-auto">
          <div className="input-group fa-2x">
            <Buscar
              className="form-control mr-sm-4"
              type="search"
              placeholder="Buscar..."
              aria-label="Search"
              autoFocus
            ></Buscar>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </Navbar> */}
      <Contenedorapp>
        <Contenedor>
          <h4>Devoluciones</h4>
          <form onSubmit={obtenerVenta}>
            <p>Localizar producto</p>
            <input
              className="form-control"
              autoFocus
              onChange={(e) => setIdCompra(e.target.value)}
            />
            <button className="btn btn-success mt-3">Buscar</button>
          </form>
        </Contenedor>
        <aside>
          <Contenedor2>
            <h3>Entrada de mercancía</h3>
            {/* {
              articulo.map((articulo)=> {
                return(
                  <h2>{articulo.metodopago}</h2>
                )
              })
            } */}
            {/* <span className="badge badge-info">
              Fecha:{" "}
              {f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}{" "}
            </span> */}
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
                //onChange={(e) => setExistencia(e.target.value)}
              />
              <button
                className="btn btn-dark mt-3 mr-2"
                // onClick={() => setMercancia(false)}
              >
                Cancelar
              </button>
              <button
                className="btn btn-success mt-3"
                //onClick={() => setMercancia(false)}
              >
                Registrar
              </button>
            </form>
          </Contenedor2>
        </aside>
      </Contenedorapp>
    </div>
  );
};

export default Devoluciones;
