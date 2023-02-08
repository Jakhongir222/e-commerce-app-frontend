"use client"
import React from 'react'
import "../../styles/styleCards.css"
import useShoes from '../useShoes';
import images from './images'

const MenShoes = () => {
    const shoes = useShoes("https://e-commerce-app-backend-production-9550.up.railway.app/shoes?gender=man");

  return (
    <div className='category-page-layout'>
      {shoes.filter(shoe => shoe.gender === 'man')
      .map(shoe => (
        <div className='container' key={shoe.id}>
        <img className='shoe-image' src={images[shoe.brand]} width='273' height='273'/>
          <p>{shoe.name}</p>
          <p>{shoe.brand}</p>
          <p>{shoe.price} €</p>
        </div>
      ))}
    </div>
  );
};

export default MenShoes;
