import React from "react";
import BarraAyuda from "../settings/BarraAyuda";
import { Contenedor, Contenedorapp } from "./style/AyudaStyle";

const Ayuda = () => {
  return (
    <>
      <Contenedorapp>
        <BarraAyuda />
        <div></div>
        <aside>
          <Contenedor>
            <h3>Contacto</h3>
            <a href="https://www.github.com/tony-coreno" target="_parent">
              <img
                className="img-thumbnail animate__animated animate__bounceIn"
                src="https://img.icons8.com/ios-filled/50/000000/github.png"
                alt="Github"
              />
            </a>
            GitHub
          </Contenedor>
        </aside>
      </Contenedorapp>
    </>
  );
};

export default Ayuda;
