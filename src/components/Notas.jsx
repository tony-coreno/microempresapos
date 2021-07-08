import React, { useState, useEffect } from "react";
import "../tools/App.css";
import Header from "../tools/Header";
import FormularioTareas from "../tools/FormularioTareas";
import ListaTareas from "../tools/ListaTareas";

const Notas = () => {
  // Obtenemos las tareas guardadas de localstorage.
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];

  // Establecemos el estado de las tareas.
  const [tareas, cambiarTareas] = useState(tareasGuardadas);

  // Guardando el estado dentro de localstorage
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Accedemos a localstorage y comprobamos si mostrarCompletadas es null
  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === "true";
  }

  // El estado de mostrarCompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(
    configMostrarCompletadas
  );

  useEffect(() => {
    localStorage.setItem("mostrarCompletadas", mostrarCompletadas.toString());
  }, [mostrarCompletadas]);

  return (
    <div className="container mt-5">
      <div className="contenedor">
        <Header
          mostrarCompletadas={mostrarCompletadas}
          cambiarMostrarCompletadas={cambiarMostrarCompletadas}
        />
        <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
        <ListaTareas
          tareas={tareas}
          cambiarTareas={cambiarTareas}
          mostrarCompletadas={mostrarCompletadas}
        />
      </div>
    </div>
  );
};

export default Notas;
