import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { ContextEstado } from '../context/ContextEstado';

    const FormularioCrearVenta = () => {
        const {handleSubmit, listaProducto, handleInputChange, setListaProducto} = useContext(ContextEstado);

        useEffect(()=>{
            limpiar()
                // eslint-disable-next-line
        },[])

        const limpiar = () =>{
            setListaProducto('')
        }

    return (     
        <>
            <form onSubmit={handleSubmit}>
                <InputFormulario type="number" className="form-control mr-2" value={listaProducto} autoFocus  onChange={handleInputChange} >
                </InputFormulario>
            </form>
        </>
        
     );
}

const InputFormulario = styled.input`

    border-radius: 5px;
    overflow: hidden;
    width: 50%;
`;

export default FormularioCrearVenta;
