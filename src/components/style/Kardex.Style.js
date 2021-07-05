import styled from "styled-components";

export const Contenedorapp = styled.div`
max-width: 1400px;
padding: 5px;
width: 100%;
display: grid;
gap: 20px;
grid-template-columns: 2fr 4fr;
background: #fff;
margin: 5px 0;
border-radius: 10px;
box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
 

export const Contenedor = styled.div`
padding: 25px;
width: 100%;
display: grid;
gap: 20px;
//background: #eef3f5;
background: #fff;
margin: 10px 0;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;
export const Contenedor2 = styled.div`
display: flex;
padding: 20px;
width: 100%;
display: grid;
gap: 10px;
//grid-template-columns: 2fr 2fr;
//background: #eef3f5;
background: #fff;
margin: 10px 0;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

export const Buscar = styled.input`
border-radius: 10px;
`;

export const Boton = styled.button`
display: inline-flex;
justify-content: space-between;
align-items: center;
outline: none;
`;

export const Herramientas = styled.div`
display: flex;
justify-content: center;
/* flex-direction: row; */
margin: 4px;
padding: 10px;
gap: 5px;
`;