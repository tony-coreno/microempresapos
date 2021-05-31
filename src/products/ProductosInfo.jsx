import React from "react";
import EditarProductos from "./EditarProductos";

const ProductosInfo = ({ info ,setInfo }) => {
  return (
    <>
      {info.map((prod) => {
        return <EditarProductos key={prod._id} prod={prod} setInfo={setInfo} />;
      })}
    </>
  );
};

export default ProductosInfo;
