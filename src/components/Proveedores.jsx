import React from "react";
import styled from 'styled-components'

const Proveedores = () => {
  return (
    <>
    <Contenedorapp>
      <Contenedor>
        <h4>Proveedores</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ut culpa possimus similique doloribus aliquid fugiat vero deleniti voluptatibus. Dicta doloribus obcaecati magnam eaque blanditiis deleniti provident sunt, ut amet.z</p>
      </Contenedor>
      <aside>
          <Contenedor>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis eligendi hic et vel temporibus commodi! Voluptate facere at, id dicta tempore dolores fuga nulla pariatur harum mollitia quos eligendi.</p>
          <h3>Hola Mundo</h3>
          </Contenedor>
      </aside>
      </Contenedorapp>
    </>
  );
};

const Contenedorapp = styled.div`
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


const Contenedor = styled.div`
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

export default Proveedores;
