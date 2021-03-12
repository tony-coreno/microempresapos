import React from 'react';
import posts from './../data/posts';     
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUserAlt,
    faCog,
    faPowerOff,
    faShoppingCart,
    faSearch,
  } from "@fortawesome/free-solid-svg-icons";
const Ventas = () => {
    return (
         
        <div>
            <h2>Ventas</h2>
            <ul>
                {posts.map((post) => {
                    return( 
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.titulo}</Link>
                        </li>
                    )
                })}
            </ul>
            <div>
                <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
            </div>
        </div>
        
     );
}
 
export default Ventas;
;