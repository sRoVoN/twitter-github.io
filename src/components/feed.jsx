import React from 'react';
import CardHeader from './cardHeader';
// import Post from './post';
import { Link } from 'react-router-dom';
// import User from './user';
import {getPosts} from './services/fakeTwitterPostService';
// import { getUsers } from './services/fakeTwitterUserService';
import { DARKBLUE, LIGHTBLUE } from '../helpers/colors';




function Feed(props) {
   const posts = getPosts();
//    const users = getUsers();  
   console.log(posts);   


    return ( 
        <>
            <div className="card card-me" style={{gap:10}}>
            <CardHeader />
            {posts.map(post=>(
                 <div key={post.id} className="card-body "style={{border:`1px solid ${DARKBLUE}`}}> 
                 {/* <User /> */}
                 <h4>{post.title}</h4>
                 <p key={post.id}>{post.body}</p>
                 <span style={{display:'flex'}}>
                         <Link to="" className='fa fa-edit m-2'></Link>
                         <Link to="" className='fa fa-trash m-2' style={{color: LIGHTBLUE}}></Link>
                         <Link to="" className='fa fa-star m-2' style={{color: '#FFFF00'}}></Link>  
                       </span>                             
                 </div>    
            

            ))}
            

                


 
                              

             
        </div>                   
        </>           
     );
} 
 
export default Feed;
