import "./side.css";
import 'bootstrap/dist/css/bootstrap.css';

const Sidebar = () => {
  return (
    <>
  
        <a className="navbar-brand" href="#"></a>
    
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading">POS</div>
          <div className="list-group list-group-flush">
            <a href="#" className="list-group-item list-group-item-action bg-light">
              Perfil
            </a>
            <a href="#" className="list-group-item list-group-item-action bg-light">
              Ajustes
            </a>
            <a href="#" className="list-group-item list-group-item-action bg-light">
              Cerrar Sesión
            </a>
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Sidebar;
