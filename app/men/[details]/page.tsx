'use client'
import React, { useEffect, useState } from "react";
import images from '../images'

function detailsPage  ({id}) {

  const [shoes, setShoes] = useState([]);
  const baseURL = "http://localhost:8080/shoes?gender=man"+id
  useEffect(() => {
    if (!shoes.length) {
      fetch(baseURL)
        .then((response) => response.json())
        .then((data) => setShoes(data));
    }
  }, [shoes, baseURL]);


  return (
    <div>
        {shoes.filter(shoe => shoe.gender === 'man')
        .filter(shoe => shoe.id = shoe.id)
      .map(shoe => (
        <a className='container' key={shoe.id} href={`men/${shoe[shoe.id]}`}>
        <img className='shoe-image' src={images[shoe.brand]} width='273' height='273'/>
          <p>{shoe.name}</p>
          <p>{shoe.brand}</p>
          <p>{shoe.price} €</p>
          <p>size {shoe.size}</p>
          <p>{shoe.category}</p>
        </a>
      ))}
    </div>
  )
}

export default detailsPage
