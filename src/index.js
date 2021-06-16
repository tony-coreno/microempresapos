import React from "react";
import ReactDOM from "react-dom";
import { ProveedorState } from "./context/ContextEstado";
import { BrowserRouter } from "react-router-dom";
import Axios from "axios";
import App from "./components/App";
import "./index.css";
// require('dotenv').config();
// import Login from "./components/Login";

Axios.defaults.baseURL = "https://sistemaposutc.herokuapp.com/";

if(navigator.serviceWorker){
  navigator.serviceWorker.register('.././sw.js')
      .then(registrado => console.log('Se instaló correctamente.. ... ', registrado))
      .catch(error => console.log('Falló la instalación... ', error))
}else{
  console.log('Service Workers no soportados')
}

ReactDOM.render(
  <ProveedorState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ProveedorState>,
  document.getElementById("root")
);

