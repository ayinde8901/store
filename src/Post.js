import { Link } from 'react-router-dom'
import React from 'react'

const Post = ({post}) => {
  return (
    <article className='post'>
       <Link to={`/post/${post.id}`}>
       <h2>{post.title}</h2>
       <h2>{post.datetime}</h2>
       </Link>
       <p className='postbody'>{(post.body).lenght <=  35 ? post.body : `${(post.body).slice (0,35)}...` }</p>
    </article>
  )
}

export default Post
