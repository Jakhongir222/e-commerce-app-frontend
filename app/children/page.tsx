"use client"
import React, { useEffect, useState } from 'react'

const childrenShoes = () => {
  const [childrenShoes, setChildrenShoes] = useState([]);
  const baseURL = 'http://localhost:8080/shoes';

  useEffect(() => {
    fetch(baseURL)
      .then(res => res.json())
      .then(data => setChildrenShoes(data.filter(shoe => shoe.gender === 'boy' || shoe.gender === 'girl')))
  }, []);

  return (
    <div>
      {childrenShoes.map(shoe => (
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

export default childrenShoes;