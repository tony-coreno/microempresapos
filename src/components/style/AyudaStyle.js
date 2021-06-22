import styled from "styled-components";

export const Contenedorapp = styled.div`
max-width: 1400px;
padding: 5px;
width: 100%;
display: grid;
gap: 20px;
grid-template-columns: 4fr 2fr;
background: #fff;
margin: 5px 0;
border-radius: 20px;
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
export const Menu = styled.nav`
width: 100%;
text-align: center;
background: #147551;
grid-column: span 2;
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