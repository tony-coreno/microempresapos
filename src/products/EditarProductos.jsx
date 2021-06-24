import React, { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

const EditarProductos = ({ prod, setInfo }) => {
  const [producto, setProducto] = useState("");
  const [marca, setMarca] = useState("");
  const [existencia, setExistencia] = useState(0);
  const [precioventa, setPrecioVenta] = useState(0);
  const [estado, setEstado] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [ide, setIde] = useState("");
  const cancelar = (e) => {
    e.preventDefault();
    setInfo([]);
  };

  const nuevosValores = () => {
    setProducto(prod.producto);
    setMarca(prod.marca);
    setExistencia(parseInt(prod.existencia));
    setPrecioVenta(parseInt(prod.precioventa));
    setIde(prod._id);
    setEstado(prod.estado);
    setCantidad(prod.cantidad)
  };

  useEffect(() => {
    nuevosValores();
    // eslint-disable-next-line
  }, []);

  const actualizar = async (e) => {
    e.preventDefault();
    const id = ide;
    const token = sessionStorage.getItem("token");
    const prod = {
      producto,
      marca,
      existencia,
      precioventa,
      estado,
      cantidad,
    };
    const respuesta = await Axios.put("/productos/actualizar/" + id, prod, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
    });
    setTimeout(() => {
      window.location.href = "/producto";
    }, 1500);
  };
  return (
    <>
      <form className="container" key={ide}>
        <label>Editar Producto</label>
        <input
          className="form-control"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
        />
        <label className="mt-2">Editar Marca</label>
        <input
          className="form-control"
          value={marca}
          onChange={(e) => setMarca(e.target.value)}
        />
        <label className="mt-2">Editar Existencia</label>
        <input
          className="form-control mt-1"
          value={existencia}
          onChange={(e) => setExistencia(e.target.value)}
        />
        <label className="mt-2">Cont. Neto</label>
        <input
          className="form-control mt-1"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
        <label className="mt-2">Editar Precio Venta</label>
        <input
          className="form-control mt-1"
          value={precioventa}
          onChange={(e) => setPrecioVenta(e.target.value)}
        />
        <label className="mt-2">Editar Estado</label>
        <input
          className="form-control mt-1"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        />
        <button
          className="btn btn-warning  mt-3 mr-3"
          onClick={(e) => cancelar(e)}
        >
          Cancelar
        </button>
        <button
          className="btn btn-success  mt-3"
          onClick={(e) => actualizar(e)}
        >
          Guardar
        </button>
      </form>
    </>
  );
};

export default EditarProductos;
