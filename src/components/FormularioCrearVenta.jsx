import React, { useState } from 'react';

const FormularioCrearVenta = ({ventaProducto, setVentaProducto}) => {
    
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
        <>
        <h1></h1>
            <form onSubmit={handleSubmit}>
                <input 
                    value={listaProducto}
                    onChange={handleInputChange}
                />
            </form>
        </>
        
     );
}
 
export default FormularioCrearVenta;
