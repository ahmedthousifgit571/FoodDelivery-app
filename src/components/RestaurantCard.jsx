import React from "react";
import { IMG_CDN_URL } from '../constants/api';

const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = restaurant.info;
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Restaurant Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={`${IMG_CDN_URL}${cloudinaryImageId}`}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent py-2 px-3">
          {sla.deliveryTime && (
            <span className="inline-block bg-white text-gray-800 text-xs font-medium px-2 py-1 rounded">
              {sla.deliveryTime} min
            </span>
          )}
         
        </div>
      </div>
      
      {/* Restaurant Info */}
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-lg mb-1 truncate">{name}</h3>
        
        <p className="text-gray-500 text-sm h-10 line-clamp-2">
          {cuisines.join(", ")}
        </p>
        
        <div className="flex items-center justify-between mt-3">
          {/* Rating */}
          <div className={`flex items-center px-2 py-1 text-sm rounded ${
            parseFloat(avgRating) >= 4.0 
              ? "bg-green-600 text-white" 
              : parseFloat(avgRating) >= 3.0 
                ? "bg-orange-500 text-white" 
                : "bg-gray-400 text-white"
          }`}>
            <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            <span>{avgRating}</span>
          </div>
          
          {/* Price */}
          <div className="text-gray-600 text-sm font-medium">
            {costForTwo}
          </div>
        </div>
        
        {/* Quick View Button (Visible on Hover) */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <button className="w-full bg-white hover:bg-orange-50 text-orange-500 border border-orange-500 py-2 rounded text-sm font-medium transition-colors duration-200">
            Quick View
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;