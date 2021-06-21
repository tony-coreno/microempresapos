import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Navbar } from "reactstrap";
import {
  ContenedorProductos,
  ContenedorAppProductos,
  Contenedor3Productos,
} from "./styled/VistaProductoStyled";
import Swal from "sweetalert2";
import ProductosInfo from "./ProductosInfo";
import BarraProductosGeneral from "./BarraProductosGeneral";
import CardsProductosGeneral from "./CardsProductosGeneral";

const ProductosGeneral = () => {
  const [productos, setProductos] = useState([""]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/productos/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setProductos(respuesta.data);
  };

  const buscarProducto = async (e, prov) => {
    e.preventDefault();
    const id = prov;
    const respuesta = await Axios.get("/productos/buscar/" + id);
    setInfo(respuesta.data);
  };

  const eliminar = async (id) => {
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.delete("/productos/eliminar/" + id, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1500,
    });
    obtenerProductos();
  };
  const buscar = async (e) => {
    if (e.target.value === "") {
      return obtenerProductos();
    }
    const buscar = e.target.value;
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get(
      `/productos/buscar/${buscar}/${sessionStorage.getItem("idusuario")}`,
      {
        headers: { autorizacion: token },
      }
    );
    setProductos(respuesta.data);
  };
  return (
    <div>
      {sessionStorage.getItem("token") &&
      sessionStorage.getItem("perfil") === "Administrador" ? (
        <Contenedor3Productos>
          <Navbar>
            <BarraProductosGeneral buscar={buscar} />
          </Navbar>
        </Contenedor3Productos>
      ) : null}
      <ContenedorAppProductos>
        <ContenedorProductos>
          {info.length === 0 ? (
            <>
              <img
                className="img-thumbnail"
                src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
                alt="POS"
              />
            </>
          ) : (
            <ProductosInfo setInfo={setInfo} info={info} />
          )}
        </ContenedorProductos>
        <aside>
          <CardsProductosGeneral
            productos={productos}
            eliminar={eliminar}
            buscarProducto={buscarProducto}
          />
        </aside>
      </ContenedorAppProductos>
    </div>
  );
};

export default ProductosGeneral;
