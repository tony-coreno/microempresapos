import React from 'react';
import styled from 'styled-components';

const Carrito = ({ventaProducto}) => {
    return (
        <> 
            <h2>Carrito</h2>

            <ol>
                    { ventaProducto.map( (venta) =>{
                            return(

                                <ul>{venta}</ul>
                            )

                        })
                    }
                    </ol>

        </>
     )      
}

// const Contenedor = styled.div`
//     max-width: 1200px;
//     padding: 40px;
//     width: 90%;
//     display: grid;
//     gap: 20px;
//     grid-template-columns: 2fr 1fr;
//     background: #fff;
//     margin: 40px 0;
//     border-radius: 10px;
//     box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
// `;
 
// const Menu = styled.nav`
//     width: 100%;
//     text-align: center;
//     background: #092c4c;
//     grid-column: span 2;
//     border-radius: 3px;
//     a {
//         color: #fff;
//         display: inline-block;
//         padding: 15px 20px;
//     }
 
//     a:hover {
//         background: #1d85e8;
//         text-decoration: none;
//     }
// `;
 
export default Carrito;