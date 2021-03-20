import React, {useState} from 'react';

const ContextEstado = React.createContext();

const ProveedorState = ({children}) => {

    const [ventaProducto, setVentaProducto] = useState([]);
    const [listaProducto, setListaProducto] = useState('');

    const handleInputChange = (e) => {
        setListaProducto(e.target.value);
    }
    

    const handleSubmit = (e, value) => {

        e.preventDefault();
        if (listaProducto.trim().length > 2 ){
            console.log('se insertó a la lista');
            setVentaProducto([...ventaProducto, listaProducto]);
    
    
        }  
    }


    return ( 
        <ContextEstado.Provider value={{ventaProducto, listaProducto, setListaProducto, setVentaProducto, handleInputChange, handleSubmit}}>
            {children}
        </ContextEstado.Provider>
     );
}
 
export {ContextEstado, ProveedorState};