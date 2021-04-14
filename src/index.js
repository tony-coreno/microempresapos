import React from "react";
import ReactDOM from "react-dom";
import { ProveedorState } from "./context/ContextEstado";
import { BrowserRouter } from "react-router-dom";
import Axios from "axios";
import App from "./components/App";
import "./index.css";
import { NegocioState } from "./context/ContextTipoNegocio";
// import Login from "./components/Login";

Axios.defaults.baseURL = "http://localhost:4000";

ReactDOM.render(
  <ProveedorState>
    <NegocioState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NegocioState>
  </ProveedorState>,
  document.getElementById("root")
);
