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
             <Button color="light" onClick={() => setModal(true)}>
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
              className="list-group-item list-group-item-action bg-light"
            >
              <FontAwesomeIcon icon={faSearch} />
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-light"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-light"
            >
              <FontAwesomeIcon icon={faCog} />
            </a>

          {/* <a
              href="#"
              className="list-group-item list-group-item-action bg-light"
            >
              <FontAwesomeIcon icon={faPowerOff} />
            </a> */}
            <Button color="light" onClick={() => setModalSesion(true)}>
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
