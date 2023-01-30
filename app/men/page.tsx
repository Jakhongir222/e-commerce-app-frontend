"use client"
import React, { useEffect, useState } from 'react'

const MenShoes = () => {
  const [menShoes, setMenShoes] = useState([]);
  const baseURL = 'http://localhost:8080/shoes?gender=man';

  useEffect(() => {
    fetch(baseURL)
      .then(data => data.json())
      .then(data => setMenShoes(data.filter(shoe => shoe.gender === 'man')))
  }, []);

  return (
    <div>
      {menShoes.map(shoe => (
        <div key={shoe.id}>
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
