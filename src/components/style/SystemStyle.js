
import styled from "styled-components";

export const ContenedorPrincipal = styled.div`
padding: 10px;
margin-top: 0px;
width: 93%;
max-width: 1400px;
`;

export const Main = styled.main`
background: #fff;
padding: 10px;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

export const ContenedorHeader = styled.header`
  text-align: center;
  color: #fff;
  margin-bottom: 0px;
  background-color: FFFFFF;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px;
  margin: 20px 0 0 0;
  max-height: 125px;
`;
export const Titulo = styled.h1`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

export const MenuNav = styled.nav`
  a {
    text-decoration: none;
    //color: #165168;
    color: #ffffff;
    margin: 0 12px;
    padding: 7px;
  }
  a:hover {
    color: #052c48;
    cursor: pointer;
    transition: 0.3s ease all;
  }
  a.active {
    border-bottom: 2px solid #f2f2f2;
    //border-bottom: 2px solid #165168;
    padding-bottom: 3px;
  }
`;

export const Contenedor = styled.div`
  background: #147551;
  opacity: 0.8;
  //background: #FFF;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

