import React, { useContext } from "react";
import styled from "styled-components";
import { ContextEstado } from "../context/ContextEstado";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const TablaCarrito = () => {
  const { ventaProducto, setTotal, setVentaProducto, setArticulos, articulos } = useContext(ContextEstado);
  // const [cantidad, setCantidad] = useState(0);
  // let carritoActual = []
  // let cant = 0;
  // useMemo(()=> {
  //   setTotal([...total + ventaProducto.precioventa])
  // },[ventaProducto.precioventa])
  let pagar = 0;

  const eliminar = (e, id) => {
    e.preventDefault();
    let nuevoCarrito = ventaProducto.filter(venta =>{
      return venta._id !== id
    })
    setVentaProducto(nuevoCarrito)
    setArticulos(articulos -1)

     if(articulos === 1){
       setTotal(0)
     }

  }
  return (
    <>
      <div className="table-responsive table-borderless table-hover">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="bg-dark card-header py-1">
                  <Titulo>Detalle de venta</Titulo>
                </div>
                <table className="table table-responsive-lg text-center ">
                  <thead className="light">
                    <tr>
                      <th># Artículos</th>
                      <th>SKU</th>
                      <th>Producto</th>
                      <th>Precio</th>
                      <th>Cantidad</th>
                      <th>Eliminar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ventaProducto.map((producto) => {                      
                      const { precioventa } = producto;
                      // const { sku } = producto;
                      pagar = pagar + precioventa;
                      setTotal(pagar);
                      // let existe = ventaProducto.some((item) => {
                      //   return item.sku === sku;
                      // });
                      // console.log(existe);
                      if (articulos === 0) {
                        pagar = 0
                      }
                      return (
                        <tr key={producto._id}>
                          <td>{1}</td>
                          <td>{producto.sku}</td>
                          <td>{producto.producto}</td>
                          <td>{precioventa}</td>
                          <td>{producto.unidad}</td>
                          <td>
                            <button
                              className="bn btn-outline-danger mr-2"
                              onClick={(e)=>eliminar(e, producto._id)}
                            >
                              <FontAwesomeIcon icon={faTimes} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Titulo = styled.h6`
  color: #fff;
  text-align: center;
`;

export default TablaCarrito;
