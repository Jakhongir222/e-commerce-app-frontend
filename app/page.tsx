import React from 'react';
import "../styles/Home.css";

const HomePage = () => {
    
  return <div>
    <h1>Shoe Store</h1>
    <p>Welcome to the Shoe Store</p>
    <a href='/men'>
        <button>Men</button>
    </a>
    <a href='/women'>
        <button>Women</button>
    </a>
    <a href='children' >
        <button>Children</button>
    </a>
  </div>;
};

export default HomePage;

