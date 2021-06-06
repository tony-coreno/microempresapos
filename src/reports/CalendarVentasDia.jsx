import React, { useState } from "react";
import styled from "styled-components";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import getUnixTime from 'date-fns/fromUnixTime';
import "react-day-picker/lib/style.css";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import { es } from "date-fns/locale";
import { fromUnixTime } from "date-fns/esm";

const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const dias_semana_cortos = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];

function parseDate(str, format) {
  const parsed = dateFnsParse(str, format, new Date(), { locale: es });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format) {
  return dateFnsFormat(date, format, { locale: es });
}
// var result = getUnixTime( Date(2012, 1, 29, 11, 45, 5))
// console.log(result)
var timestamp = Date.now()
console.log(timestamp)

var date = new Date(timestamp);
console.log(date)



const CalendarVentasDia = () => {
  const [fecha, setFecha] = useState( new Date());

  // var fechaConvertida = Date.now(fecha)
  
  // console.log(fechaConvertida)

  // var date = new Date(fechaConvertida);
  
  // console.log(date)
  
  return (
    <>
      <ContenedorInput>
        <DayPickerInput
          value={fecha}
          onDayChange={(day) => setFecha(day)}
          format="dd 'de' MMMM 'de' yyyy"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            months: meses,
            weekdaysShort: dias_semana_cortos,
          }}
        />
      </ContenedorInput>

    </>
  );
};

const ContenedorInput = styled.div`
  input {
    font-family: "Work Sans", sans-serif;
    box-sizing: border-box;
    background: #f2f2f2;
    border: none;
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    height: 5rem; /* 80px */
    width: 100%;
    padding: 0 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 60rem) {
    /* 950px */
    & > * {
      width: 100%;
    }
  }
`;

export default CalendarVentasDia;
