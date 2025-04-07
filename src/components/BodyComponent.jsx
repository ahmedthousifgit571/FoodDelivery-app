import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import NoRestaurantFound from "./NoRestaurantFound";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

function BodyComponent() {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFitleredRestaurant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let isOnline = useOnline();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    setIsLoading(true);
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.9214807&lng=77.004626&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setAllRestaurant(restaurants);
      setFitleredRestaurant(restaurants);

      console.log(json);
      setIsLoading(false);
    } catch (error) {
      console.error("error fetching data:", error);
      setIsLoading(false);
    }
  }

  if (!isOnline) {
    return (
      <div className="flex flex-col items-center justify-center h-96">
        <div className="text-red-500 text-6xl mb-4">🔴</div>
        <h1 className="text-2xl font-bold text-gray-800">You are offline</h1>
        <p className="text-gray-600 mt-2">Please check your internet connection and try again</p>
      </div>
    );
  }
  if (isLoading) return <Shimmer />;

  if (filteredRestaurant.length === 0) return <NoRestaurantFound />;
  return (
    
        <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Hungry? We've got you covered
        </h1>
        <p className="text-gray-600 mb-6">
          Order food from the best restaurants in your area
        </p>
        
        <div className="flex flex-col md:flex-row gap-3">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <input
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              type="text"
              placeholder="Search for restaurants and food..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200"
            onClick={() => {
              const data = filterData(searchInput, allRestaurant);
              setFitleredRestaurant(data);
            }}
          >
            Search
          </button>
        </div>
      </div>
      
      {/* Restaurant Grid */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Top Restaurants Near You</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((resto) => (
          <Link to={"/menu/" + resto.info.id} key={resto.info.id} className="block transform hover:-translate-y-1 transition-transform duration-300">
            <RestaurantCard restaurant={resto} />
          </Link>
        ))}
      </div>
    </div>
    
  );
}

export default BodyComponent;
