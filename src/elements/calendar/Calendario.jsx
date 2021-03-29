import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import styled from "styled-components";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);
moment.locale("es");

const events = [
  {
   
  },
];

const Calendario = () => {
  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log(event, start, end, isSelected);
    const style = {
      backgroundColor: "#190238",
      borderRadius: "0px",
      opacity: 0.2,
      display: "block",
      color: "white",
    };

    return style;
  };

  const messages = {
    allDay: "Todo el día",
    previous: "<",
    next: ">",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "No hay eventos en este rango",
    showMore: (total) => `+ Ver más (${total})`,
  };

  return (
    <CalendarioEstilo>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
      />
    </CalendarioEstilo>
  );
};

const CalendarioEstilo = styled.div`
  height: 70vh;
  weight: 90wh;
`;
export default Calendario;
