import "./side.css";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <>
  
        <a className="navbar-brand" href="#"></a>
    
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading"></div>
          <div className="list-group list-group-flush">
            <a href="#" className="list-group-item list-group-item-action bg-light">
               
              <FontAwesomeIcon icon={faUserAlt}/>
            </a>
            <a href="#" className="list-group-item list-group-item-action bg-light">
              <FontAwesomeIcon icon={faCog} />
            </a>
            <a href="#" className="list-group-item list-group-item-action bg-light">
              <FontAwesomeIcon icon={faPowerOff} />
            </a>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Sidebar;
