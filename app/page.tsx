import React from 'react';
import "../styles/Home.css";
import Image from 'next/image'


const HomePage = () => {
    
  return <div>
    
    <a href='/men'>
        <button className='button'>Men</button>
    </a>
    <a href='/women'>
        <button className='button'>Women</button>
    </a>
    <a href='children' >
        <button className='button'>Children</button>
    </a>
  
  </div>;
};


export default HomePage;

