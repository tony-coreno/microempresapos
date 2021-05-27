import React from "react";
import EditarProveedor from "./EditarProveedor";

const ProveedorInfo = ({ info ,setInfo }) => {
  return (
    <>
      {info.map((prov) => {
        return <EditarProveedor key={prov._id} prov={prov} setInfo={setInfo} />;
      })}
    </>
  );
};

export default ProveedorInfo;
