'use client'
import React, { useEffect, useState } from "react";
import images from '../images'
import "../../../styles/DetailsPage.css"

function DetailsPage  () {
  const [shoes, setShoes] = useState([]);
  const baseURL = "http://e-commerce-app-backend-production.up.railway.app/shoes?gender=man"

  useEffect(() => {
    if (!shoes.length) {
      fetch(baseURL)
        .then((response) => response.json())
        .then((data) => setShoes(data));
    }
  }, [shoes, baseURL]);

  const url = window.location.href;
  const urlArray = url.split("?");
  const idString = urlArray[0].split("/").pop();
  const id = parseInt(idString, 10);
  

  return (
    <div>
      {shoes
        .filter(shoe => shoe.gender === 'man' && shoe.id === id)
        .map(shoe => (
          <div className='container' key={shoe.id}>
            <img className='shoe-image' src={images[shoe.brand]} width='273' height='273'/>
            <div className="info">
            <p>{shoe.name}</p>
            <p>{shoe.brand}</p>
            <p>{shoe.price} €</p>
            <p>size {shoe.size}</p>
            <p>{shoe.category}</p>
            <button className="order-button">order</button>
            <button className="goback-button"> <a href="/men"> go back </a></button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default DetailsPage
