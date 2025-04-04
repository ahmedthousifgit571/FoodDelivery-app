// import React from 'react'
// import burger from '../assets/burger.png'
// import { IMG_CDN_URL } from '../constants/api';
// function RestaurantCard({restaurant}) {

//     const { info } = restaurant;

//   return (
//     <div className='card'>
//       <img src={`${IMG_CDN_URL}${info.cloudinaryImageId}`} alt="burger" />
//       <h3>{info.name}</h3>
//       <h3>{info.locality}</h3>
//       <h4>{info.avgRating}</h4>
//     </div>
//   )
// }

// export default RestaurantCard





import React from "react";
import { IMG_CDN_URL } from '../constants/api';

const RestaurantCard = ({ restaurant }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = restaurant.info;
  
  return (
    <div className="card">
      <img
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt={name}
      />
      <div className="card-content">
        <h3 className="restaurant-name">{name}</h3>
        <p className="cuisine">{cuisines.join(", ")}</p>
        <div className="card-details">
          <div className="rating">
            <svg viewBox="0 0 24 24" fill="white" width="12" height="12">
              <path d="M12 16.5l-5.83 3.07 1.11-6.47-4.72-4.6 6.51-.95L12 1.5l2.93 5.95 6.51.95-4.72 4.6 1.11 6.47z" />
            </svg>
            {avgRating}
          </div>
          <div className="delivery-time">{sla.deliveryTime} mins</div>
          <div className="price">{costForTwo}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;