import React from 'react'
import RestaurantCard from './RestaurantCard'
import { restaurantList } from '../constants/api'

function BodyComponent() {
    
  return (
    <div className='restaurant-list'>
      {
        restaurantList.map((restaurant,index)=> 
        <RestaurantCard key={restaurant.card.card.info.id} restaurant={restaurant}/>
        )
      }


    </div>
  )
}

export default BodyComponent
