import React,{useContext} from 'react';
import convertirMoneda from '../functions/ConvertirMoneda';
import styled from 'styled-components';
import { ContextEstado } from '../context/ContextEstado';


const BarraTotalEfectivo = styled.div`
    background: #147551;
    font-size: 1.25rem; /* 20px */
    letter-spacing: 1px;
    font-weight: 500;
    text-transform: uppercase;
    padding: 0.62rem 2.25rem; /* 10px 40px */
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.7);
    @media(max-width: 31.25rem) { /* 500px */
        flex-direction: column;
        font-size: 14px;
    }
`;


const BarraTotal = () => {  
    let {total} = useContext(ContextEstado);
    return ( 
        <>
            <BarraTotalEfectivo>
                <p>Total</p>
                <p>{convertirMoneda(total)}</p>
            </BarraTotalEfectivo>
        </>
     );
}


 
export default BarraTotal;