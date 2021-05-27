import React from "react";
import EditarEmpleado from './EditarEmpleado';

const EmpleadoInfo = ({ info ,setInfo }) => {
  return (
    <>
      {info.map((emp) => {
        return <EditarEmpleado key={emp._id} emp={emp} setInfo={setInfo} />;
      })}
    </>
  );
};

export default EmpleadoInfo;
