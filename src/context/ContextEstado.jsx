import React, {useState} from 'react';
import Axios from 'axios'
const ContextEstado = React.createContext();

const ProveedorState = ({children}) => {

    const [ventaProducto, setVentaProducto] = useState([]);
    const [listaProducto, setListaProducto] = useState([]);
    const [item, setItem] = useState([]);
    const [perfil, setPerfil] = useState('');
    const [empleados, setEmpleados] = useState([]);
    const [pagar, setPagar] = useState('');
    const [articulos, setArticulos] = useState(0);

    
    const handleInputChange = (e) => {
        setListaProducto(e.target.value);
    }
    
    const [tituloPos, setTituloPOS] = useState('Sistema Pos');


    const handleSubmit = (e, value, ventaProducto) => {

        e.preventDefault();
        if (listaProducto.trim().length > 5 ){
            console.log('se insertó a la lista');
            //setVentaProducto([...ventaProducto, listaProducto]);
            //setVentaProducto([listaProducto]);
            
            obtenerProducto(listaProducto, setVentaProducto, ventaProducto)
        }
        if(obtenerProducto){
            setArticulos(articulos + 1)
        }
        
    }
    const obtenerProducto = async (listaProducto, setVentaProducto, ventaProducto) => {
        const sku = listaProducto;
        const respuesta = await Axios.get(`/productos/carrito/${sku}`)
        setVentaProducto(respuesta.data)
        
      };



    return ( 
        <ContextEstado.Provider value={{articulos,setArticulos,ventaProducto,listaProducto, ventaProducto, pagar, setPagar, listaProducto, setListaProducto, setVentaProducto, handleInputChange, handleSubmit, empleados, setEmpleados, perfil, setPerfil, setTituloPOS, tituloPos}}>
            {children}
        </ContextEstado.Provider>
     );
}
 
export {ContextEstado, ProveedorState};