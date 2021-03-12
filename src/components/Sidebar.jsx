import React, {useState} from 'react';
import "./side.css";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalPerfil from '../modals/ModalPerfil';
import ModalSesion from '../modals/ModalSesion';
import {Button} from "reactstrap";
import { Link, BrowserRouter, Route} from 'react-router-dom';
import Ventas from './Ventas';
import {
  faUserAlt,
  faCog,
  faPowerOff,
  faShoppingCart,
  faSearch,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
const Sidebar = () => {
  const [modal, setModal] = useState(false);
  const [modalSesion, setModalSesion] = useState(false);
  return(
    <>

      <a className="navbar-brand" href="#"></a>
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading"></div>
          <div className="list-group list-group-flush">
             
            <Button color="blue" className="list-group-item list-group-item-action bg-light" data-toggle="tooltip" data-placement="right" title="Notificaciones">
              <FontAwesomeIcon icon={faBell} /><span class="badge badge-primary">4</span>
            </Button>
             <Button color="light" className="list-group-item list-group-item-action bg-light" onClick={() => setModal(true)} data-toggle="tooltip" data-placement="right" title="Perfil">
              <FontAwesomeIcon icon={faUserAlt} />
            </Button> 
         {/* <a
              href="#"
              className="list-group-item list-group-item-action bg-light"
            >
              <FontAwesomeIcon icon={faUserAlt} />
            </a> */}
            {/* <Route>
            <Link to="/carrito">
              <FontAwesomeIcon icon={faSearch} />
              </Link>
              </Route> */}
              <a
              href="#"
              className="list-group-item list-group-item-action bg-light" data-toggle="tooltip" data-placement="right" title="Buscar"
            >
              <FontAwesomeIcon icon={faSearch} />
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-light" data-toggle="tooltip" data-placement="right" title="Compras"
            >
              <FontAwesomeIcon icon={faShoppingCart} /><span className="badge badge-primary">0</span>
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-light" data-toggle="tooltip" data-placement="right" title="Ajustes"
            >
              <FontAwesomeIcon icon={faCog} />
            </a>

          {/* <a
              href="#"
              className="list-group-item list-group-item-action bg-light"
            >
              <FontAwesomeIcon icon={faPowerOff} />
            </a> */}
            <Button color="light" className="list-group-item list-group-item-action bg-light" onClick={() => setModalSesion(true)} ata-toggle="tooltip" data-placement="right" title="Cerrar Sesión">
              <FontAwesomeIcon icon={faPowerOff} />
            </Button> 
          </div>
        </div>
      </div>

    <ModalPerfil modal={modal} setModal={setModal}/>
    <ModalSesion modalSesion={modalSesion} setModalSesion={setModalSesion}/>
   
    </>
  );
};

export default Sidebar;
