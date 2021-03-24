import React from 'react';

const Login = () => {
    return ( 
        <div className="container">
            <div>
                <h1>Iniciar Sesión</h1>
                <form>
                    <div>
                        <input type="text" id="usuario" name="usuario" placeholder="Usuario" className="form-control" />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Login;