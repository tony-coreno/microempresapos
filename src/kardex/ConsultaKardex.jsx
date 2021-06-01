import React from 'react'

const ConsultaKardex = () => {
    return ( 
        <>
            <h2>Kárdex</h2>
            <hr />
            <div>
                <select className="form-control ">
                    <option>...</option>
                    <option>Entradas</option>
                    <option>Salidas</option>
                </select>
                <button className="btn btn-dark mt-4">Consultar</button>
            </div>
        </>
     );
}
 
export default ConsultaKardex;