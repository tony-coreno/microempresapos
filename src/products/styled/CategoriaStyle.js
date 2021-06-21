import styled from "styled-components";

export const Contenedorapp = styled.div`
max-width: 1400px;
padding: 5px;
width: 100%;
display: grid;
gap: 20px;
//grid-template-columns: 2fr 1fr;
background: #fff;
margin: 5px 0;
border-radius: 10px;
box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export const Contenedor2 = styled.div`
display: flex;
padding: 20px;
width: 100%;
display: grid;
gap: 10px;
grid-template-columns: 2fr 4fr;
//background: #eef3f5;
background: #fff;
margin: 10px 0;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

export const Titulo = styled.h4`
  color: #000;
`;
export const Buscar = styled.input`
  border-radius: 10px;
`;