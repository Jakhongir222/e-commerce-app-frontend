"use client"
import React, { useEffect, useState } from 'react'
import "../../styles/styleCards.css"
import useShoes from '../useShoes';
import images from './images'

const childrenShoes = () => {
    const shoes = useShoes("http://e-commerce-app-backend-production.up.railway.app/shoes?gender=boy,girl");

    return (
    <div className='category-page-layout'>
      {shoes.filter(shoe => shoe.gender === 'boy' || shoe.gender === 'girl')
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

export default childrenShoes;
