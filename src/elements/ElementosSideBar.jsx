import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import ModalPerfil from "../modals/ModalPerfil";
import ModalSesion from "../modals/ModalSesion";
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
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from 'reactstrap';
import { ContextEstado } from "../context/ContextEstado";
// import PopoverExampleMulti from "../modals/PopDerecha";

const ElementosSideBar = () => {
  const [modal, setModal] = useState(false);
  const [modalSesion, setModalSesion] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const {articulos} = useContext(ContextEstado)

  const toggle = () => setPopoverOpen(!popoverOpen);
  return (
    <>
      <img
        src="https://img.icons8.com/plasticine/100/000000/total-sales.png"
        title="POS"
      />
      {/* <PopoverExampleMulti /> */}
      <Button
        color="blue"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Notificaciones"
      >
        <FontAwesomeIcon icon={faBell} />
        <span className="badge badge-primary">0</span>
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
        <span className="badge badge-primary">{articulos}</span>
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
        to="/calendar"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Agenda"
      >
        <FontAwesomeIcon icon={faCalendarAlt} />
        <span className="badge badge-primary">0</span>
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
    </>
  );
};

export default ElementosSideBar;
