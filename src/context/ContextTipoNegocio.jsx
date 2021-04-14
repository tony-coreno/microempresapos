import React from 'react';

const ContextTipoNegocio = React.createContext();

const NegocioState = ({children}) => {

    return ( 
        <ContextTipoNegocio.Provider value={{}}>
            {children}
        </ContextTipoNegocio.Provider>
     );
}
 
export {ContextTipoNegocio, NegocioState};