import styled from "styled-components";

export const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #147551;
  //grid-column: span 2;
  border-radius: 10px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #147571;
    text-decoration: none;
  }
  a.active {
    border-bottom: 2px solid #f2f2f2;
    padding-bottom: 3px;
  }
`;

export const ContenedorInput = styled.div`
input {
  font-family: "Work Sans", sans-serif;
  box-sizing: border-box;
  background: #f2f2f2;
  border: none;
  cursor: pointer;
  border-radius: 0.625rem; /* 10px */
  height: 5rem; /* 80px */
  width: 100%;
  padding: 0 1.25rem; /* 20px */
  font-size: 1.5rem; /* 24px */
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 60rem) {
  /* 950px */
  & > * {
    width: 100%;
  }
}
`;


export const SeccionBoton = styled.div`
  width: 50%;
`;
export const Titulo = styled.h6`
  color: #000;
  text-align: center;
`;

export const Contenedorapp = styled.div`
  max-width: 1400px;
  padding: 5px;
  width: 100%;
  display: grid;
  gap: 20px;
  grid-template-columns: 2fr 4fr;
  background: #fff;
  margin: 5px 0;
  border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export const TituloEmpleado = styled.h6`

  font-family: Open-sans;
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


export const ContenedorappAdmin = styled.div`
max-width: 1400px;
padding: 20px;
width: 100%;
display: grid;
gap: 5px;
//grid-template-columns: 2fr 1fr;
background: #fff;
margin: 5px 0;
border-radius: 20px;
box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
