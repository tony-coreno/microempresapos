import React from "react";
function Cabecera() {
  return (
    <div>
      <header className="main-header">
        <a href="#" className="logo">
          <span>
            <img src="" alt="" />
          </span>
          <span>
            <img src="" alt="" />
          </span>
        </a>
        <nav className="navbar navbar-static-top">
          <a href="">
            <span>Toogle navigation</span>
          </a>
          <div>
            <ul>
              <li>
                <a href="">
                  <img src="" alt="" />
                  <span></span>
                </a>
                <ul>
                  <li>
                    <div>
                      <a href="">Salir</a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Cabecera;
