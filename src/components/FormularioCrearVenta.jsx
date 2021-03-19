import React, { useState } from 'react';
import styled from 'styled-components';

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
            <form onSubmit={handleSubmit}>
                <InputFormulario value={listaProducto}  onChange={handleInputChange} ></InputFormulario>
                    
                
            </form>
        </>
        
     );
}

const InputFormulario = styled.input`

    border-radius: 5px;
    overflow: hidden;
    width: 30%;
`;



 
export default FormularioCrearVenta;
