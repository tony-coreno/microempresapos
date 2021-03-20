import React, {useContext, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalPerfil from '../modals/ModalPerfil';
import ModalSesion from '../modals/ModalSesion';
import {Button} from "reactstrap";
import { Link} from 'react-router-dom';
import {faUserAlt, faCog, faPowerOff, faShoppingCart, faSearch,faBell} from "@fortawesome/free-solid-svg-icons";
import "./side.css";
import "bootstrap/dist/css/bootstrap.css";
import { ContextEstado } from '../context/ContextEstado';
const Sidebar = () => {
  const [modal, setModal] = useState(false);
  const [modalSesion, setModalSesion] = useState(false);
  const {ventaProducto} = useContext(ContextEstado);
  
  const acumulador = () => {
    
    const cuenta =ventaProducto.length
  }


  return(
    <>

      {/* <a className="navbar-brand" href="#"></a> */}
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
            <Link
              to="/productos"
              className="list-group-item list-group-item-action bg-light" data-toggle="tooltip" data-placement="right" title="Buscar producto"
            >
              <FontAwesomeIcon icon={faSearch} />
            </Link>
            
            <Link
              to="/crear-venta"
              className="list-group-item list-group-item-action bg-light" data-toggle="tooltip" data-placement="right" title="Compras"
            >
              <FontAwesomeIcon icon={faShoppingCart} /><span className="badge badge-primary">0</span>
            </Link>
            <a
              href="#"
              className="list-group-item list-group-item-action bg-light" data-toggle="tooltip" data-placement="right" title="Ajustes"
            >
              <FontAwesomeIcon icon={faCog} />
            </a>
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
