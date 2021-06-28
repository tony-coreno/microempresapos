import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { ContextEstado } from "../context/ContextEstado";
import Axios from "axios";
import Swal from "sweetalert2";

const FormularioCrearVenta = () => {
  const { listaProducto, setListaProducto, setVentaProducto, setArticulos, articulos, ventaProducto } =
    useContext(ContextEstado);

  const handleInputChange = (e) => {
    setListaProducto(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (listaProducto.trim().length > 5) {
      const obtenerProducto = async () => {
        const sku = listaProducto;
        const respuesta = await Axios.get(`/productos/carrito/${sku}`);
        if (respuesta.data.length > 0) {
          setVentaProducto([...ventaProducto, ...respuesta.data]);
          setArticulos(articulos + 1);
        } else {
          Swal.fire({
            icon: "error",
            title: "Producto Inválido",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      };
      obtenerProducto();
    }
  };

  useEffect(() => {
    limpiar();
    // eslint-disable-next-line
  }, []);

  const limpiar = () => {
    setListaProducto("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputFormulario
          type="number"
          className="form-control mr-2"
          value={listaProducto}
          autoFocus
          onChange={handleInputChange}
        ></InputFormulario>
      </form>
    </>
  );
};

const InputFormulario = styled.input`
  border-radius: 5px;
  overflow: hidden;
  width: 50%;
`;

export default FormularioCrearVenta;
