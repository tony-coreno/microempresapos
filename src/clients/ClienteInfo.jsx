import React from "react";
import EditarCliente from "./EditarCliente";

const ClienteInfo = ({ info ,setInfo }) => {
  return (
    <>
      {info.map((cli) => {
        return <EditarCliente key={cli._id} cli={cli} setInfo={setInfo} />;
      })}
    </>
  );
};

export default ClienteInfo;
