import React from 'react'

const Footer = () => {
    const today = new Date();
  return (
    <footer className='foot'>
      <p> copyright@ACE-STORES {today.getFullYear}</p>
    </footer>
  )
}

export default Footer
