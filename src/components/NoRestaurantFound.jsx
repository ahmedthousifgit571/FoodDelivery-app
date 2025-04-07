import React from 'react';


function NoRestaurantFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-6 text-center bg-white">
    {/* Animated icon container */}
    <div className="relative mb-6">
      <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center mb-4 animate-pulse">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-16 w-16 text-orange-500" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>
      </div>
      
      {/* Small floating food icons */}
      <div className="absolute top-0 right-0 animate-bounce delay-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 animate-bounce delay-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </div>
    
    {/* Content */}
    <h2 className="text-2xl font-bold text-gray-800 mb-3">No Restaurants Found</h2>
    <p className="text-gray-600 mb-2 max-w-md">We couldn't find any restaurants matching your search criteria.</p>
    <p className="text-gray-500 mb-6 max-w-md">Try different keywords or adjust your filters.</p>
    
    {/* Action buttons */}
    <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs">
     
      <button 
        className="flex-1 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        Browse Restaurants
      </button>

      <button 
        className="flex-1 px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-50 font-medium rounded-lg transition-colors duration-200"
      >
        Clear Filters
      </button>
    </div>
    
    {/* Suggestions */}
    <div className="mt-8 w-full max-w-md">
      <p className="text-sm font-medium text-gray-700 mb-3">Popular cuisines</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {['Pizza', 'Burgers', 'Biryani', 'Chinese', 'Desserts'].map(cuisine => (
          <span 
            key={cuisine} 
            className="px-3 py-1 bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-500 rounded-full text-sm cursor-pointer transition-colors duration-200"
          >
            {cuisine}
          </span>
        ))}
      </div>
    </div>
  </div>
  );
} 

export default NoRestaurantFound;