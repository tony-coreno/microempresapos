import React, {useState} from 'react';

const ContextEstado = React.createContext();

const ProveedorState = ({children}) => {

    const [ventaProducto, setVentaProducto] = useState([]);
    const [listaProducto, setListaProducto] = useState('');
    const [empleados, setEmpleados] = useState([]);
    const [base, setBase] = useState([{
        id: 1,
        nombre: '',
        precio: 17.50,
        cantidad: 1

    },
    {
        id: 2,
        nombre: '',
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
        <ContextEstado.Provider value={{ventaProducto, listaProducto, setListaProducto, setVentaProducto, handleInputChange, handleSubmit, base, empleados, setEmpleados}}>
            {children}
        </ContextEstado.Provider>
     );
}
 
export {ContextEstado, ProveedorState};