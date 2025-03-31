import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants/api";


function filterData(searchInput, restaurant) {
  return restaurant.filter((resto) =>
    resto.card.card.info.name.toLowerCase().includes(searchInput.toLowerCase())
  );
}

function BodyComponent() {
  const [searchInput,setSearchInput] = useState("")
  const [restaurant,setRestaurant] = useState(restaurantList)

 
  return (
    <>
      <div className="search-container">
        <input className="search-text" type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <button className="search-input" onClick  ={()=> {
          const data = filterData(searchInput,restaurant)
          setRestaurant(data)
          
         }}>search</button>
        
      </div>
      <div className="restaurant-list">
        {restaurant.map((resto) => (
          <RestaurantCard
            key={resto.card.card.info.id}
            restaurant={resto}
          />
        ))}
      </div>
    </>
  );
}

export default BodyComponent;

