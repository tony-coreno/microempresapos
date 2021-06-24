import React, { useEffect, useState } from "react";
// import ReactPDF from '@react-pdf/renderer';
import { Contenedorapp, Buscar } from "../products/styled/CategoriaStyle";
import Axios from "axios";
import { Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import HerramientasProductos from "../products/HerramientasProductos";
import BarraProductos from "../products/BarraProductos";
import ProductosMap from "./ProductosMap";
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  let perfil = sessionStorage.getItem("perfil");

  useEffect(() => {
    if (perfil === "Administrador") {
      obtenerProductos();
    } else {
      obtenerProductosEmpleados();
    }
    // eslint-disable-next-line
  }, []);
  const obtenerProductos = async () => {
    const id = sessionStorage.getItem("idusuario");
    const token = sessionStorage.getItem("token");
    const respuesta = await Axios.get("/productos/listarporadmin/" + id, {
      headers: { autorizacion: token },
    });
    setProductos(respuesta.data);
  };
  const obtenerProductosEmpleados = async () => {
    const token = sessionStorage.getItem("token");
    const jefe = sessionStorage.getItem("jefe");
    const respuesta = await Axios.get("/productos/listarporadmin/" + jefe, {
      headers: { autorizacion: token },
    });
    setProductos(respuesta.data);
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

  // const styles = StyleSheet.create({
  //   page: {
  //     flexDirection: "row",
  //     backgroundColor: "#E4E4E4",
  //   },
  //   section: {
  //     margin: 10,
  //     padding: 10,
  //     flexGrow: 1,
  //   },
  // });

  return (
    <div>
      <BarraProductos />
      <Contenedorapp>
        <Navbar>
          {sessionStorage.getItem("perfil") === "Administrador" ? (
            <HerramientasProductos />
          ) : null}
          <div className="col-md-4 ml-auto">
            <div className="input-group fa-2x">
              <Buscar
                className="form-control mr-sm-4"
                type="search"
                placeholder="Buscar por producto..."
                aria-label="Search"
                onChange={buscar}
                autoFocus
              ></Buscar>
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </Navbar>
        <ProductosMap productos={productos} />
      </Contenedorapp>
    </div>
  );
};

export default Productos;
