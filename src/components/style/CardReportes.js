import styled from "styled-components";

export const Cuadros = styled.div`
  display: grid;
  max-width: 1200px;
  margin: auto;
  padding: 60px 0;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
`;

export const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;
  display: grid;
  gap: 20px;
  //grid-template-columns: 2fr 1fr;
  background: #fff;
  justify-content: center;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export const Caja = styled.div`
  padding: 40px;
  border-radius: 50px;
  //background: #fff;
  text-align: center;
  box-shadow: 0px 0px 20px 0px rgba(170, 170, 170, 0.1);
`;
