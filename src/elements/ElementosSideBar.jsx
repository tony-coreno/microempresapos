import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import ModalPerfil from '../modals/ModalPerfil';
import ModalSesion from '../modals/ModalSesion';
import { Link} from 'react-router-dom';
import {
  faUserAlt,
  faCog,
  faPowerOff,
  faShoppingCart,
  faSearch,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import {Button} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import PopoverExampleMulti from "../modals/PopDerecha";

const ElementosSideBar = () => {
    const [modal, setModal] = useState(false);
    const [modalSesion, setModalSesion] = useState(false);
  return (
    <>
     <img src="https://img.icons8.com/plasticine/100/000000/total-sales.png" title="POS"/>
     {/* <PopoverExampleMulti /> */}
      <Button
        color="blue"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Notificaciones"
      >
        <FontAwesomeIcon icon={faBell} />
        <span className="badge badge-primary">4</span>
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
        to="/productos"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Buscar producto"
      >
        <FontAwesomeIcon icon={faSearch} />
      </Link>

      <Link
        to="/crear-venta"
        className="list-group-item list-group-item-action bg-light"
        data-toggle="tooltip"
        data-placement="right"
        title="Compras"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="badge badge-primary">0</span>
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
    <ModalPerfil modal={modal} setModal={setModal}/>
    <ModalSesion modalSesion={modalSesion} setModalSesion={setModalSesion}/>
    </>
  );
};

export default ElementosSideBar;
