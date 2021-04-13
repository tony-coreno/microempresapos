import React, {useState} from 'react';

const ContextEstado = React.createContext();

const ProveedorState = ({children}) => {

    const [ventaProducto, setVentaProducto] = useState([]);
    const [listaProducto, setListaProducto] = useState('');
    const [perfil, setPerfil] = useState('');
    const [empleados, setEmpleados] = useState([]);
    const [pagar, setPagar] = useState('');
    const [articulos, setArticulos] = useState(0);

    
    const handleInputChange = (e) => {
        setListaProducto(e.target.value);
    }
    
    const [tituloPos, setTituloPOS] = useState('Sistema Pos');
    const [fondo, setFondo] = useState('#EEF3F5')
    const handleSubmit = (e, value) => {

        e.preventDefault();
        if (listaProducto.trim().length > 5 ){
            console.log('se insertó a la lista');
            setVentaProducto([...ventaProducto, listaProducto]);
            setArticulos(articulos + 1)
            
        }
    }

    return ( 
        <ContextEstado.Provider value={{articulos,setArticulos,ventaProducto, setVentaProducto, pagar, setPagar, listaProducto, setListaProducto, setVentaProducto, handleInputChange, handleSubmit, empleados, setEmpleados, perfil, setPerfil, setTituloPOS, tituloPos, fondo}}>
            {children}
        </ContextEstado.Provider>
     );
}
 
export {ContextEstado, ProveedorState};