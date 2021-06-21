import React, { useContext, useState } from "react";
import { ContextEstado } from "../context/ContextEstado";
import DetalleVenta from "../elements/DetalleVenta";
import ModalVentaManual from "../modals/ModalVentaManual";
import Carrito from "./Carrito";
import FormularioCrearVenta from "./FormularioCrearVenta";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarcode, faCashRegister } from "@fortawesome/free-solid-svg-icons";
import { Menu, Contenedorapp, TituloEmpleado, Contenedor } from "../reports/Style/ReporteStyle";

const CrearVenta = () => {
  const { articulos } = useContext(ContextEstado);
  const [modalManual, setModalManual] = useState(false);
  let f = new Date();
  return (
    <div>
      <Menu>
        {sessionStorage.getItem("perfil") === "Administrador" ? (
          <>
            <NavLink to="/crear-venta">Crear Venta</NavLink>
            <NavLink to="/administrar-venta">Administrar</NavLink>
            <NavLink to="/reportes">Reportes</NavLink>
          </>
        ) : (
          <NavLink to="/crear-venta">Crear Venta</NavLink>
        )}
      </Menu>
      <Contenedorapp>
        <main>
          <TituloEmpleado>
            Vendedor : {sessionStorage.getItem("nombre")} | Fecha:{" "}
            {f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear()}
          </TituloEmpleado>

          <hr />
          <Contenedor>
            <h4> Escanea un producto </h4>
            <FontAwesomeIcon icon={faBarcode} />
            <FormularioCrearVenta />
            <hr />

            <button
              to="/"
              className="btn btn-outline-primary"
              data-toggle="modal"
              data-target="#addEmpleado"
              onClick={() => setModalManual(true)}
            >
              <i>
                <FontAwesomeIcon icon={faCashRegister} />
              </i>{" "}
              Ingresar producto manual
            </button>
            {articulos > 0 ? <DetalleVenta /> : null}
          </Contenedor>
        </main>
        <aside>
          <Carrito />
        </aside>
      </Contenedorapp>
      <ModalVentaManual
        modalManual={modalManual}
        setModalManual={setModalManual}
      />
    </div>
  );
};

export default CrearVenta;
