import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../constants/api'
import Shimmer from './Shimmer'


function MenuDetails() {
    const params = useParams()
    const {id} = params               //can be written like this as well : const {id} = useParams()
     
    const [restaurant,setRestaurant] = useState(null)       //this state to store the fetched restaurant details

    useEffect(()=>{
        getRestaurantDetails()
    },[])

    async function getRestaurantDetails(){
      const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.9214807&lng=77.004626&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER` )
      const json = await data.json()
      console.log("getRestaurantDetails",json);
      setRestaurant(json.data)
      
    }

    const restaurantInfo = restaurant?.cards?.find(card => 
      card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info;
 
    return (
      <div className="menu-details">
        <h1>Restaurant ID: {id}</h1>
        
        {restaurantInfo ? (
          <div className="restaurant-info">
            <h2>Restaurant Name: {restaurantInfo.name}</h2>
            <p>Cuisine: {restaurantInfo.cuisines?.join(", ")}</p>
            <p>Area: {restaurantInfo.areaName}</p>
            <p>Rating: {restaurantInfo.avgRating} ({restaurantInfo.totalRatingsString})</p>
            <p>Cost for Two: {restaurantInfo.costForTwoMessage}</p>
            {restaurantInfo.cloudinaryImageId && (
              <img 
                src={`${IMG_CDN_URL}${restaurantInfo.cloudinaryImageId}`} 
                alt={restaurantInfo.name} 
              />
            )}
          </div>
        ) : (
          <Shimmer/>
        )}
      </div>
    );
}

export default MenuDetails
