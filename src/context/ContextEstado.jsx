import React, {useState} from 'react';

const ContextEstado = React.createContext();

const ProveedorState = ({children}) => {

    const [ventaProducto, setVentaProducto] = useState([]);
    const [listaProducto, setListaProducto] = useState('');
    const [perfil, setPerfil] = useState('');
    const [empleados, setEmpleados] = useState([]);
    const [pagar, setPagar] = useState('');
    const [articulos, setArticulos] = useState(0);
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
        if (listaProducto.trim().length > 5 ){
            console.log('se insertó a la lista');
            setVentaProducto([...ventaProducto, listaProducto]);
            setArticulos(articulos + 1)
            
        }
    }

    return ( 
        <ContextEstado.Provider value={{articulos,setArticulos,ventaProducto, setVentaProducto, pagar, setPagar, listaProducto, setListaProducto, setVentaProducto, handleInputChange, handleSubmit, base, empleados, setEmpleados, perfil, setPerfil}}>
            {children}
        </ContextEstado.Provider>
     );
}
 
export {ContextEstado, ProveedorState};