import React, { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";

const EditarProveedor = ({ cli, setInfo }) => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [tipocliente, setTipoCliente] = useState("");
  const [telefono, setTelefono] = useState(0);
  const [codigopromocional, setCodigoPromocional] = useState("");
  const [ide, setIde] = useState("");
  const cancelar = (e) => {
    e.preventDefault();
    setInfo([]);
    // setNombre("");
    // setTelefono(0);
    // setCorreo("");
    // setMarcaProveedor("");
    // setIde("");
  };

  const nuevosValores = () => {
    setNombre(cli.nombre);
    setTelefono(parseInt(cli.telefono));
    setCodigoPromocional(cli.codigopromocional);
    setTipoCliente(cli.tipocliente);
    setIde(cli._id);
    setApellido(cli.apellido);
  };

  useEffect(() => {
    nuevosValores();
        // eslint-disable-next-line
  }, []);

  const actualizar = async (e) => {
    e.preventDefault();
    const id = ide;
    const token = sessionStorage.getItem("token");
    const cliente = {
      nombre,
      tipocliente,
      telefono,
      apellido,
      codigopromocional,
    };
    const respuesta = await Axios.put("/clientes/actualizar/" + id, cliente, {
      headers: { autorizacion: token },
    });
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
    });
    setTimeout(() => {
      window.location.href = "/cliente";
    }, 1500);
  };
  return (
    <>
      <form className="container" key={ide}>
        <label>Editar Nombre</label>
        <input
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label className="mt-2">Editar Apellido</label>
        <input
          className="form-control"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label className="mt-2">Editar Tipo cliente</label>
        <input
          className="form-control mt-1"
          value={tipocliente}
          onChange={(e) => setTipoCliente(e.target.value)}
        />
        <label className="mt-2">Editar Telefóno</label>
        <input
          className="form-control mt-1"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <label className="mt-2">Editar Código promocional</label>
        <input
          className="form-control mt-1"
          value={codigopromocional}
          onChange={(e) => setCodigoPromocional(e.target.value)}
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

export default EditarProveedor;
