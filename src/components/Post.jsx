import React from 'react';
import { Redirect, useParams } from 'react-router';
import posts from './../data/posts';

const Post = () => {
    
    const {id} = useParams();
    return ( 
        <>
            
            {posts[id-1] ?
                <div>
                    <h1>{posts[id-1].titulo}</h1>
                    <p>{posts[id-1].texto}</p>
                </div>
                :
                <div>
                   <Redirect to="/" />
                </div>
            }
            
        </>

    );
}
 
export default Post;
<h1>Post</h1>