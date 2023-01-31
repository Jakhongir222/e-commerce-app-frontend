import React from 'react';
import "../styles/Home.css";
import Image from 'next/image'

const Navbar = () => {
  return (
    <div>
     <div className='logo' >
        <a href='/'>
        <Image className='Logo' src="/logo.png" width="300" height="100" alt="Logo" priority />
        </a>
        </div>
      <div className='categories'>
        <div className='navbar'>
          <a href='/'>Home</a>
          <a href='/men'>Men's Section</a>
          <a href='/women'>Women's Section</a>
          <a href='/children'>Children's Section</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
