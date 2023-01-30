"use client"
import React, { useEffect, useState } from 'react'
import "../../styles/styleCards.css"
import useShoes from '../useShoes';

const MenShoes = () => {
    const shoes = useShoes("http://localhost:8080/shoes?gender=man");

  return (
    <div className='category-page-layout'>
      {shoes.filter(shoe => shoe.gender === 'man')
      .map(shoe => (
        <div className='container' key={shoe.id}>
          <p>Brand: {shoe.brand}</p>
          <p>Name: {shoe.name}</p>
          <p>Price: {shoe.price}</p>
          <p>Color: {shoe.color}</p>
          <p>Size: {shoe.size}</p>
          <p>Category: {shoe.category}</p>
          <p>Gender: {shoe.gender}</p>
        </div>
      ))}
    </div>
  );
};

export default MenShoes;
