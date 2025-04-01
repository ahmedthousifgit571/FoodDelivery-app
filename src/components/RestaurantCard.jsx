import React from 'react'
import burger from '../assets/burger.png'
import { IMG_CDN_URL } from '../constants/api';
function RestaurantCard({restaurant}) {

    const { info } = restaurant;

  return (
    <div className='card'>
      <img src={`${IMG_CDN_URL}${info.cloudinaryImageId}`} alt="burger" />
      <h3>{info.name}</h3>
      <h3>{info.locality}</h3>
      <h4>{info.avgRating}</h4>
    </div>
  )
}

export default RestaurantCard
