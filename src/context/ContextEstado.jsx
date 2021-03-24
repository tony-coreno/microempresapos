import React, {useState} from 'react';

const ContextEstado = React.createContext();

const ProveedorState = ({children}) => {

    const [ventaProducto, setVentaProducto] = useState([]);
    const [listaProducto, setListaProducto] = useState('');
    const [base, setBase] = useState([{
        id: 1,
        nombre: 'Coca-Cola',
        precio: 17.50,
        cantidad: 1

    },
    {
        id: 2,
        nombre: 'Chips',
        precio: 17.50,
        cantidad: 1

    },
    {
        id: 3,
        nombre: 'Coca-Cola',
        precio: 17.50,
        cantidad: 1

    },
    {
        id: 4,
        nombre: 'Coca-Cola',
        precio: 17.50,
        cantidad: 1

    }
    ,{
        id: 5,
        nombre: 'Coca-Cola',
        precio: 17.50,
        cantidad: 1

    }

]);

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
        <ContextEstado.Provider value={{ventaProducto, listaProducto, setListaProducto, setVentaProducto, handleInputChange, handleSubmit, base}}>
            {children}
        </ContextEstado.Provider>
     );
}
 
export {ContextEstado, ProveedorState};