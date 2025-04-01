import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants/api";
import Shimmer from "./Shimmer";


function filterData(searchInput, restaurant) {
  return restaurant.filter((resto) =>
    resto.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );
}

function BodyComponent() {
  const [searchInput,setSearchInput] = useState("")
  const [restaurant,setRestaurant] = useState([])
  const [allRestaurant, setAllRestaurant] = useState([]);

  useEffect(()=>{
    getRestaurants()
  },[])

  
  async function getRestaurants(){
    try{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.9214807&lng=77.004626&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    console.log(json)
    setRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])
    setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [])

    console.log(json);
    }catch(error){
      console.error('error fetching data:',error)
    }
   
  }
  return (restaurant.length === 0 ) ? <Shimmer /> : (
    <>
      <div className="search-container">
        <input className="search-text" type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <button className="search-input" onClick  ={()=> {
          const data = filterData(searchInput,allRestaurant)
          setRestaurant(data)
          
         }}>search</button>
        
      </div>
      <div className="restaurant-list">
        {restaurant.map((resto) => (
          <RestaurantCard
            key={resto.info.id}
            restaurant={resto}
          />
        ))}
      </div>
    </>
  );
}

export default BodyComponent;

