import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import { faArrowLeft, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';

import styled from "styled-components";

const NuevoProducto = () => {
  // const boton = document.getElementById("boton");
  // const pass = document.getElementById("pass");
  // const mostrarContraseña = (e) => {
  //   e.preventDefault();
  //   if (pass.type == "password") {
  //     pass.type = "text";
  //   }
  // };
  const [sku, setSku] = useState('');
  const [producto, setProducto] = useState('');
  const [existencia, setExistencia] = useState('');
  const [precioventa, setPrecioventa] = useState('');
  const [categoriaSelected, setCategoriaSelected] = useState(['']);
  const [categoria, setCategoria] = useState('');
  const [unidadSelected, setUnidadSelected] = useState([''])
  const [unidad, setUnidad] = useState('');
  const [estadoSelected, setEstadoSelected] = useState([])
  const [estado, setEstado] = useState('');
  const [talla, setTalla] = useState('');


        useEffect(() => {
        setCategoriaSelected(['','Bebidas','Abarrotes','Medicamentos'])
        setUnidadSelected(['','ml', 'grs', 'lts'])
        setEstadoSelected(['','Activo', 'Inactivo', 'Agotado'])

        },[])


  const guardar = async(req, res) => {
    const stock ={
      sku,
      producto,
      existencia,
      precioventa,
      categoria: categoria,
      unidad,
      estado: estado,
      talla,
      jefe: sessionStorage.getItem('idusuario')
    }
    const token = sessionStorage.getItem('token')
    const respuesta = await Axios.post('/productos/agregar',stock,{
      headers:{'autorizacion':token}
    })
    const mensaje = respuesta.data.mensaje
    Swal.fire({
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
    });
    setTimeout(() => {
    window.location.href = "/productos";
    }, 1500);
  }
  
  return (
    <>
      <main className="caja-contenido col-12">
        <div>
          <NavLink to="/productos">
            <Button className="btn btn-success">
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </NavLink>
          <Titulo>Agregar Producto</Titulo>
        </div>
        <form onSubmit={guardar}>
          <hr />
          <div className="row">
            <div className="col">
              <input type="number" className="form-control" placeholder="SKU" onChange={(e)=>setSku(e.target.value)} required />
            </div>
            <div class="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nombre producto"
                onChange={(e)=> setProducto(e.target.value)}
              />
            </div>


            { (sessionStorage.getItem("negocio") === "Ropa") ?
            <>
                          <div class="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ropa"
                          />
                        </div>
                        <div class="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Talla"
                            onChange={(e)=> setTalla(e.target.value)}
                          />
                        </div>
            </>
                        
                        :
                        <>
                          
                        </>
            }


          </div>

          <div className="row mt-4">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Existencia"
                onChange={(e)=>setExistencia (e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Precio de venta"
                onChange={(e)=>setPrecioventa (e.target.value)}
              />
            </div>
          </div>

          <hr />

          <div>
          <Titulo>Categoría</Titulo>
            <div className="form-group col-mt-4">
              <select className="form-control mt-2"
                onChange={(e)=> setCategoria(e.target.value)}
                value={categoria}
              >
                {categoriaSelected.map((categorias)=>(<option key={categorias}>{categorias}</option>))}
              </select>
              
            </div>
            <div className="form-group col-mt-4">
              <Titulo>Unidad</Titulo>
              <select className="form-control mt-2"
              onChange={(e)=> setUnidad(e.target.value)}
                value={unidad}
              >{unidadSelected.map((unidad)=>(<option key={unidad}>{unidad}</option>))}
              </select>
              <div className="form-group col-mt-4">
                <br />
                <Titulo>Estado</Titulo>
                <select onChange={(e)=> setEstado(e.target.value)} value={estado} className="form-control mt-"
                >{estadoSelected.map((estado)=>(<option key={estado}>{estado}</option>))}
                </select>
              </div>
            </div>
          </div>
          <hr />

          <button className="btn btn-outline-success"><FontAwesomeIcon icon={faSave}/> Guardar</button>
        </form>
      </main>
    </>
  );
};

const Titulo = styled.h5`
  text-align: center;
`;

// const Categoria = styled.h6`
//   text-align: right;
// `;

// const Contenedorapp = styled.div`
//   max-width: 1400px;
//   padding: 5px;
//   width: 100%;
//   display: grid;
//   gap: 20px;
//   grid-template-columns: 2fr 3fr;
//   background: #fff;
//   margin: 5px 0;
//   border-radius: 20px;
//   box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
// `;

export default NuevoProducto;
