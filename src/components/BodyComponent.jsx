import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../constants/api";


function BodyComponent() {
  const [searchInput,setSearchInput] = useState("KFC")
  const [searchclicked,setSearClicked] = useState("false")
  return (
    <>
      <div className="search-container">
        <input className="search-text" type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
        <button className="search-input" onClick  ={()=>searchclicked==='false333'? setSearClicked("true") : set}>search</button>
        <h1>{searchclicked}</h1>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant, index) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            restaurant={restaurant}
          />
        ))}
      </div>
    </>
  );
}

export default BodyComponent;

