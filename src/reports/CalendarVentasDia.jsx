import React, { useState } from "react";
import { ContenedorInput } from "./Style/ReporteStyle";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
// import getUnixTime from 'date-fns/fromUnixTime';
import "react-day-picker/lib/style.css";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import { es } from "date-fns/locale";
// import { fromUnixTime } from "date-fns/esm";

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
// var timestamp = Date.now()
// console.log(timestamp)

// var date = new Date(timestamp);
// console.log(date)



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
        <hr />
        {/* <button className="btn btn-dark">Calcular</button> */}
      </ContenedorInput>

    </>
  );
};



export default CalendarVentasDia;
