import React from "react";
import styled from 'styled-components'

const Proveedores = () => {
  return (
    <>
    <Contenedorapp>
      <Contenedor>
        <h4>Proveedores</h4>

      </Contenedor>
      <aside>
          <Contenedor2>
          <div className="card ms-1 animate__animated animate__fadeIn" style={ { maxWidth: 240 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="https://img.icons8.com/officel/80/000000/supplier.png" className="card-img" alt="POS" />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title">Provider</h5>
                        <p className="card-text">Coca-Cola</p>
{/* 
                        {
                            ( alter_ego !== characters ) 
                                && <p className="card-text"> { characters } </p>
                        } */}

                        <p className="card-text">
                            <small className="text-muted">Tel(55-11-92-34-85)</small>
                        </p>
{/* 
                        <Link to={ `./hero/${ id }` }>
                            Más...
                        </Link> */}

                    </div>

                </div>
            </div>
        </div>
        <div className="card ms-1 animate__animated animate__fadeIn" style={ { maxWidth: 240 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="https://img.icons8.com/officel/80/000000/supplier.png" className="card-img" alt="POS" />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title">Provider</h5>
                        <p className="card-text">Coca-Cola</p>
{/* 
                        {
                            ( alter_ego !== characters ) 
                                && <p className="card-text"> { characters } </p>
                        } */}

                        <p className="card-text">
                            <small className="text-muted">Tel(55-11-92-34-85)</small>
                        </p>
{/* 
                        <Link to={ `./hero/${ id }` }>
                            Más...
                        </Link> */}

                    </div>

                </div>
            </div>
        </div>
        <div className="card ms-1 animate__animated animate__fadeIn" style={ { maxWidth: 240 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="https://img.icons8.com/officel/80/000000/supplier.png" className="card-img" alt="POS" />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title">Provider</h5>
                        <p className="card-text">Coca-Cola</p>
{/* 
                        {
                            ( alter_ego !== characters ) 
                                && <p className="card-text"> { characters } </p>
                        } */}

                        <p className="card-text">
                            <small className="text-muted">Tel(55-11-92-34-85)</small>
                        </p>
{/* 
                        <Link to={ `./hero/${ id }` }>
                            Más...
                        </Link> */}

                    </div>

                </div>
            </div>
        </div>
        <div className="card ms-1 animate__animated animate__fadeIn" style={ { maxWidth: 240 } }>
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="https://img.icons8.com/officel/80/000000/supplier.png" className="card-img" alt="POS" />
                </div>
                <div className="col-md-8">
                    
                    <div className="card-body">
                        <h5 className="card-title">Provider</h5>
                        <p className="card-text">Coca-Cola</p>
{/* 
                        {
                            ( alter_ego !== characters ) 
                                && <p className="card-text"> { characters } </p>
                        } */}

                        <p className="card-text">
                            <small className="text-muted">Tel(55-11-92-34-85)</small>
                        </p>
{/* 
                        <Link to={ `./hero/${ id }` }>
                            Más...
                        </Link> */}

                    </div>

                </div>
            </div>
        </div>
          </Contenedor2>
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
const Contenedor2 = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: 2fr 2fr;
  //background: #eef3f5;
  background: #FFF;
  margin: 10px 0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(129, 129, 129, 0.7);
`;

export default Proveedores;
