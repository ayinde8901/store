import React from 'react';

const Header = ({ title }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <div className="loader"></div> {/* Change class to className */}
    </header>
  );
};

export default Header;