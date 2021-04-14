import { useContext } from 'react';
import {NavLink, Route} from 'react-router-dom';
import styled from 'styled-components';
import { ContextEstado } from '../context/ContextEstado';
import Barra from '../elements/Barra'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faCashRegister, faClipboardList, faLayerGroup, faQuestionCircle, 
//         faTachometerAlt, faUsers, faUserTie} from "@fortawesome/free-solid-svg-icons";
// import Barra from './../elements/Barra';
// import Login from './Login';

const Header = () => {
    const {tituloPos} = useContext(ContextEstado)
    return ( 
        <>
        { (sessionStorage.getItem("token") && ((sessionStorage.getItem("perfil") ==="Administrador"))) ?
        <ContenedorHeader>
        <Route>
            {/* <Barra /> */}
            <Titulo>{tituloPos}</Titulo>
            <MenuNav>
                {/* <NavLink to="/" exact={true} >Dashboard <FontAwesomeIcon icon={faTachometerAlt} /></NavLink>
                <NavLink to="/empleados">Empleados <FontAwesomeIcon icon={faUserTie} /></NavLink>
                <NavLink to="/almacen">Almacén <FontAwesomeIcon icon={faClipboardList} /></NavLink>
                <NavLink to="/clientes">Clientes <FontAwesomeIcon icon={faUsers} /></NavLink>
                <NavLink to="/ventas">Ventas <FontAwesomeIcon icon={faCashRegister} /></NavLink>
                <NavLink to="/ayuda">Ayuda <FontAwesomeIcon icon={faQuestionCircle} /></NavLink> */}

                <NavLink to="/" exact={true} >Dashboard </NavLink>
                <NavLink to="/empleados">Empleados </NavLink>
                <NavLink to="/almacen">Almacén </NavLink>
                <NavLink to="/clientes">Clientes </NavLink>
                <NavLink to="/ventas" >Ventas </NavLink>
                <NavLink to="/ayuda">Ayuda </NavLink>
            </MenuNav>
        </Route>
    </ContenedorHeader>
    :
    <Barra />

    }
    </>
    );
}
const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom: 0px;
    background-color: FFFFFF;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 10px;
    margin: 20px 0 0 0;
`;
const Titulo = styled.h1`
    margin-bottom: 5px;
    font-size: 26px;
    text-transform: uppercase;     
`;

const MenuNav = styled.nav`
    a {
        text-decoration: none;
        color: #165168;
        //color: #FFFFFF;
        margin: 0 10px;
    }
    a:hover {
        color: #190238;
        cursor: pointer;
        transition: .3s ease all;
    }
    a.active{
        border-bottom: 2px solid #165168;
        padding-bottom: 3px;
    }
    
`;

export default Header;