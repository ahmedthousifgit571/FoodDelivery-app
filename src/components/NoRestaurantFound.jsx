import React from 'react';

function NoRestaurantFound() {
  return (
    <div className="no-restaurant-container">
      <div className="no-restaurant-icon">
        <i className="fa fa-search"></i>
      </div>
      <h2>No Restaurants Found</h2>
      <p>We couldn't find any restaurants matching your search criteria.</p>
      <p>Try different keywords or browse our restaurant list.</p>
    </div>
  );
} 

export default NoRestaurantFound;