import React from "react";
import ElementosSideBar from "./../elements/ElementosSideBar";
import "./side.css";
const Sidebar = () => {
  return (
    <>
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
