import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextEstado } from '../context/ContextEstado';

    const FormularioCrearVenta = () => {
        const {handleSubmit, listaProducto, handleInputChange} = useContext(ContextEstado);

    return (     
        <>
            <form onSubmit={handleSubmit}>
                <InputFormulario type="number" className="form-control" value={listaProducto}  onChange={handleInputChange} >

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
