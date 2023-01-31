'use client'
import React, { useState, useEffect } from 'react';
import "../styles/Home.css";

const shoeImages = [
  'https://img.freepik.com/premium-photo/template-with-summer-footwear-white-background-flat-lay-top-view-red-sneakers-with-copy-space-fashion-shopping-sale-concept_113876-1906.jpg?w=2000',
  'https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_supreme-x-nike-air-force-1-low-white-0.jpg',
  'https://i5.walmartimages.com/asr/659b9e9b-df9e-41ce-bc6f-5f37140d50bd_1.3c9236604938be09876edad01bfe06e4.jpeg',
  'https://www.pngall.com/wp-content/uploads/13/Nike-Shoes-No-Background.png',
  'https://www.freepnglogos.com/uploads/shoes-png/shoes-wasatch-running-3.png',
  'https://images.unsplash.com/photo-1545290211-eab92ace93ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDQyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://www.westend61.de/images/0000161806pw/family-shoes-on-white-background-MAEF004647.jpg',
  'https://www.freepnglogos.com/uploads/women-shoes-png/women-shoes-sergio-rossi-flamenco-red-patent-leather-stilettos-shoe-rate-red-shoes-really-rock-31.png',
  'https://www.freepnglogos.com/uploads/shoes-png/running-shoes-png-transparent-running-shoes-images-40.png'
];

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % shoeImages.length);
    }, 2000);
    return () => clearInterval(intervalId);
}, [currentImageIndex]);

  return (
    <div>
     <img className='home-image' src={shoeImages[currentImageIndex]} alt="shoe"/>      
     <a href='/men'>
        <button className='button-men'>Men's Section</button>
      </a>
      <a href='/women'>
        <button className='button-women'>Women's Section</button>
      </a>
      <a href='children' >
        <button className='button-children'>Children's Section</button>
      </a>
    </div>
  );
};

export default HomePage;


