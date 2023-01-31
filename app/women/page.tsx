"use client"
import React, { useEffect, useState } from 'react'
import "../../styles/styleCards.css"
import useShoes from '../useShoes';

const womenShoes = () => {
    const shoes = useShoes("http://localhost:8080/shoes?gender=woman");

    const images = {
        'Jimmy Choo': 'https://www.katescloset.com.au/uploads/2/1/2/9/21295692/rep-avmf_orig.jpg',
        'Manolo Blahnik': 'https://cdn.shopify.com/s/files/1/0516/0760/1336/products/4product-319-1161-0001-Xms-2022-11-12T1632280700_540x.jpg?v=1671791506',
        'Christian Louboutin': 'https://i.pinimg.com/originals/99/61/87/99618779a5b61711e5eb2ef2b2efa8c8.jpg',
        'Salvatore Ferragamo': 'https://i5.walmartimages.com/asr/fe08d225-fcf2-4836-9d67-997fe30c051c.accf7ee1b8afbbfd60414c2d4123ae57.jpeg',
        'Prada': 'https://i.pinimg.com/originals/0b/55/d9/0b55d9f54686cdebc0e5504906738316.jpg',
        'Converse': 'https://i5.walmartimages.com/asr/2fd7626d-9e0d-4b17-89ef-4d70ce290922.12231dfc56b820437247a9a163135499.jpeg',
        'Vans': 'https://shoeland.lt/wp-content/uploads/2021/03/VN0A3B3UW00-01.jpg',
        'Nike': 'https://cdn.shopify.com/s/files/1/0303/2871/7371/products/CI0919-119-PHSRH000_875x.jpg?v=1666178257'
    }

  return (
    <div className='category-page-layout'>
      {shoes.filter(shoe => shoe.gender === 'woman')
      .map(shoe => (
        <div className='container' key={shoe.id}>
        <img className='category-image' src={images[shoe.brand]} width='273' height='273'/>
         <p>{shoe.name}</p>
          <p>{shoe.brand}</p>
          <p>{shoe.price} €</p>
        </div>
      ))}
    </div>
  );
};

export default womenShoes;
