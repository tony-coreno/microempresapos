import React from "react";
import ReactDOM from "react-dom";
import { ProveedorState } from "./context/ContextEstado";
import { BrowserRouter } from "react-router-dom";
import Axios from "axios";
import App from "./components/App";
import "./index.css";
// import Login from "./components/Login";

Axios.defaults.baseURL = "http://localhost:4000";

ReactDOM.render(
  <ProveedorState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </ProveedorState>,
  document.getElementById("root")
);
