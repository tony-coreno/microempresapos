import React, { useState } from "react";

const ContextTipoNegocio = React.createContext();

const NegocioState = ({ children }) => {
  const [metodopago, setMetodoPago] = useState("");
  const [metodoPagoSelected, setMetodoPagoSelected] = useState([]);

  return (
    <ContextTipoNegocio.Provider
      value={{
        metodopago,
        metodoPagoSelected,
        setMetodoPago,
        setMetodoPagoSelected,
      }}
    >
      {children}
    </ContextTipoNegocio.Provider>
  );
};

export { ContextTipoNegocio, NegocioState };
