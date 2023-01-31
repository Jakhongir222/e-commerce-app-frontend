"use client"
import React from 'react'
import "../../styles/styleCards.css"
import useShoes from '../useShoes';
import images from './images'

const MenShoes = () => {
    const shoes = useShoes("http://localhost:8080/shoes?gender=man");

  return (
    <div className='category-page-layout'>
      {shoes.filter(shoe => shoe.gender === 'man')
      .map(shoe => (
        <a className='container' key={shoe.id} href={`/men/${shoe.id}`}>
        <img className='shoe-image' src={images[shoe.brand]} width='273' height='273'/>
          <p>{shoe.name}</p>
          <p>{shoe.brand}</p>
          <p>{shoe.price} €</p>
        </a>
      ))}
    </div>
  );
};

export default MenShoes;
