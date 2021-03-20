import React from 'react';
import ElementosSideBar from './../elements/ElementosSideBar';
import "./side.css";
import "bootstrap/dist/css/bootstrap.css";
const Sidebar = () => {
  return(
    <>
      {/* <a className="navbar-brand" href="#"></a> */}
    
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <div className="sidebar-heading"></div>
          <div className="list-group list-group-flush">

            <ElementosSideBar />  

          </div>
        </div>
      </div>
    
   
    </>
  );
};


export default Sidebar;
