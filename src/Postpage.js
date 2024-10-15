import {  useParams,Link } from 'react-router-dom'
import React from 'react'

const Postpage = ({posts,handledelete}) => {
  const {id} = useParams()
  const post = posts.find( post => (post.id).toString() === id);
  return (
    <main className='postpage'>
     <article className='post'>
      {post && 
        <>
         <h2>{post.title}</h2>
         <p className='postdate'>{post.datetime}</p>
         <p className='postbody'>{post.body}</p>
         <button onClick={()=> handledelete(post.id)} style={{backgroundColor:'red', padding:'5px'}}>deletepost</button>

        </>
      }

      {!post && 
      <>
      <h2> post not found</h2>
      <h3>that is disapointing let check later</h3>
       <p>
        <Link to={'/'}>kindly visit our home</Link>
       </p>
      </>
      }
      </article> 
    </main>
  )
}

export default Postpage
