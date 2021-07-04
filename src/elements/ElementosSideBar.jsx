import React, { useContext, useState } from "react";
import ModalPerfil from "../modals/ModalPerfil";
import ModalSesion from "../modals/ModalSesion";
import ModalNotificacion from "../modals/ModalNotificacion";
import { Link } from "react-router-dom";
import {
  faUserAlt,
  faCog,
  faPowerOff,
  faShoppingCart,
  faSearch,
  faBell,
  faCalendarAlt,
  faTruck,
  faClipboard,
  faQuestion,
  faIdCard,
  faDollyFlatbed,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import { ContextEstado } from "../context/ContextEstado";

const ElementosSideBar = () => {
  const [modal, setModal] = useState(false);
  const [modalSesion, setModalSesion] = useState(false);
  const [modalNotificacion, setModalNotificacion] = useState(false);
  const { articulos } = useContext(ContextEstado);

  return (
    <>
      <img
        src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
        title="POS"
        alt="POS"
      />
      <Button
        style={{ background: "#24292F", color: "#A0A7AC" }}
        color="blue"
        className="list-group-item list-group-item-action"
        onClick={() => setModalNotificacion(true)}
        data-toggle="tooltip"
        data-placement="right"
        title="Notificaciones"
      >
        <FontAwesomeIcon icon={faBell} />
        <span className="badge badge-success">0</span>
      </Button>

      <Button
        color="light"
        style={{ background: "#24292F", color: "#A0A7AC" }}
        className="list-group-item"
        onClick={() => setModal(true)}
        data-toggle="tooltip"
        data-placement="right"
        title="Perfil"
      >
        <FontAwesomeIcon icon={faUserAlt} />
      </Button>

      <Link
      style={{ background: "#24292F", color: "#A0A7AC" }}
        to="/crear-venta"
        className="list-group-item"
        data-toggle="tooltip"
        data-placement="right"
        title="Compras"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge badge-success">{articulos}</span>
      </Link>
      <Link
      style={{ background: "#24292F", color: "#A0A7AC" }}
        to="/productos"
        className="list-group-item list-group-item-action"
        data-toggle="tooltip"
        data-placement="right"
        title="Buscar producto"
      >
        <FontAwesomeIcon icon={faSearch} />
      </Link>
      <Link
      style={{ background: "#24292F", color: "#A0A7AC" }}
        to="/ventas-dia"
        className="list-group-item list-group-item-action"
        data-toggle="tooltip"
        data-placement="right"
        title="Ventas día"
      >
        <FontAwesomeIcon icon={faChartLine} />
      </Link>
      <Link
      style={{ background: "#24292F", color: "#A0A7AC" }}
        to="/kardex"
        className="list-group-item list-group-item-action"
        data-toggle="tooltip"
        data-placement="right"
        title="Kardex"
      >
        <FontAwesomeIcon icon={faDollyFlatbed} />
      </Link>

      <Link
      style={{ background: "#24292F", color: "#A0A7AC" }}
        to="/calendar"
        className="list-group-item list-group-item-action"
        data-toggle="tooltip"
        data-placement="right"
        title="Calendario"
      >
        <FontAwesomeIcon icon={faCalendarAlt} />
        <span className="badge badge-warning">0</span>
      </Link>
      <Link
      style={{ background: "#24292F", color: "#A0A7AC" }}
        to="/proveedores"
        className="list-group-item list-group-item-action "
        data-toggle="tooltip"
        data-placement="right"
        title="Proveedores"
      >
        <FontAwesomeIcon icon={faTruck} />
      </Link>
      <Link
      style={{ background: "#24292F", color: "#A0A7AC" }}
        to="cliente"
        className="list-group-item list-group-item-action "
        data-toggle="tooltip"
        data-placement="right"
        title="Clientes"
      >
        <FontAwesomeIcon icon={faIdCard} />
      </Link>
      <Link
      style={{ background: "#24292F", color: "#A0A7AC" }}
        to="/notas"
        className="list-group-item list-group-item-action "
        data-toggle="tooltip"
        data-placement="right"
        title="Notas"
      >
        <FontAwesomeIcon icon={faClipboard} />
      </Link>
      {sessionStorage.getItem("perfil") === "Administrador" ? (
        <Link
        style={{ background: "#24292F", color: "#A0A7AC" }}
          to="settings"
          className="list-group-item list-group-item-action "
          data-toggle="tooltip"
          data-placement="right"
          title="Ajustes"
        >
          <FontAwesomeIcon icon={faCog} />
        </Link>
      ) : null}
      {sessionStorage.getItem("token") &&
      sessionStorage.getItem("perfil") !== "Administrador" ? (
        <>
          <Link
          style={{ background: "#24292F", color: "#A0A7AC" }}
            to="ayuda"
            className="list-group-item list-group-item-action"
            data-toggle="tooltip"
            data-placement="right"
            title="Ayuda"
          >
            <FontAwesomeIcon icon={faQuestion} />
          </Link>
        </>
      ) : null}
      <Button
      style={{ background: "#24292F", color: "#A0A7AC" }}
        color="light"
        className="list-group-item list-group-item-action"
        onClick={() => setModalSesion(true)}
        ata-toggle="tooltip"
        data-placement="right"
        title="Cerrar Sesión"
      >
        <FontAwesomeIcon icon={faPowerOff} />
      </Button>
      <ModalPerfil modal={modal} setModal={setModal} />
      <ModalSesion modalSesion={modalSesion} setModalSesion={setModalSesion} />
      <ModalNotificacion
        modalNotificacion={modalNotificacion}
        setModalNotificacion={setModalNotificacion}
      />
    </>
  );
};

export default React.memo(ElementosSideBar);
