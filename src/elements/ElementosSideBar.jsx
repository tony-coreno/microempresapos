import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ModalPerfil from "../modals/ModalPerfil";
import ModalSesion from "../modals/ModalSesion";
import ModalNotificacion from '../modals/ModalNotificacion';
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
        color="blue"
        className="list-group-item list-group-item-action bg-light"
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
        className="list-group-item list-group-item-action bg-light"
        onClick={() => setModal(true)}
        data-toggle="tooltip"
        data-placement="right"
        title="Perfil"
      >
        <FontAwesomeIcon icon={faUserAlt} />
      </Button>

      <Link
        to="/crear-venta"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Compras"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge badge-success">{articulos}</span>
      </Link>
      <Link
        to="/productos"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Buscar producto"
      >
        <FontAwesomeIcon icon={faSearch} />
      </Link>
      <Link
        to="/kardex"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Kardex"
      >
        <FontAwesomeIcon icon={faDollyFlatbed} />
      </Link>

      <Link
        to="/calendar"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Calendario"
      >
        <FontAwesomeIcon icon={faCalendarAlt} />
        <span className="badge badge-warning">0</span>
      </Link>
      <Link
        to="/proveedores"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Proveedores"
      >
        <FontAwesomeIcon icon={faTruck} />
      </Link>
      <Link
        to="cliente"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Clientes"
      >
        <FontAwesomeIcon icon={faIdCard} />
      </Link>
      <Link
        to="/notas"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Notas"
      >
        <FontAwesomeIcon icon={faClipboard} />
      </Link>

      <Link
        to="settings"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Ajustes"
      >
        <FontAwesomeIcon icon={faCog} />
      </Link>

      {sessionStorage.getItem("token") &&
      sessionStorage.getItem("perfil") !== "Administrador" ? (
        <>
          <Link
            to="ayuda"
            className="list-group-item list-group-item-action bg-light"
            data-toggle="tooltip"
            data-placement="right"
            title="Ayuda"
          >
            <FontAwesomeIcon icon={faQuestion} />
          </Link>
        </>
      ) : (
        null
      )}
      <Button
        color="light"
        className="list-group-item list-group-item-action bg-light"
        onClick={() => setModalSesion(true)}
        ata-toggle="tooltip"
        data-placement="right"
        title="Cerrar Sesión"
      >
        <FontAwesomeIcon icon={faPowerOff} />
      </Button>
      <ModalPerfil modal={modal} setModal={setModal} />
      <ModalSesion modalSesion={modalSesion} setModalSesion={setModalSesion} />
      <ModalNotificacion modalNotificacion={modalNotificacion} setModalNotificacion={setModalNotificacion} />
    </>
  );
};

export default ElementosSideBar;
