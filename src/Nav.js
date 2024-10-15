import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({search,setsearch}) => {
  return (
    <nav>
      <form className='searchform' onSubmit={(e)=> setsearch.preventDefault(e)}>
        <label className='searchlabel'>search</label>
      <input id='search' type='Text' placeholder='search' value={search} onChange={(e)=> setsearch(e.target.value)}/>
      </form>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/poster'}><li>Post</li></Link>
        <Link to={'/about'}><li>About</li></Link>
        <Link to={'/contact'}><li>Contact</li></Link>
      </ul>
    </nav>
  )
}

export default Nav
