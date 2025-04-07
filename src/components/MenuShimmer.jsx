import React from 'react'

function MenuShimmer() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
    {/* Banner Shimmer */}
    <div className="h-64 md:h-80 w-full bg-gray-200 rounded-lg mb-6 animate-pulse hidden md:block"></div>
    
    {/* Info Section Shimmer */}
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Header Shimmer */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="flex-grow">
          {/* Restaurant Name Shimmer */}
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
          {/* Cuisines Shimmer */}
          <div className="h-4 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
          {/* Area Shimmer */}
          <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
        </div>
        
        {/* Restaurant Image Shimmer */}
        <div className="mt-4 md:mt-0">
          <div className="w-24 h-24 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
      
      {/* Meta Info Shimmer */}
      <div className="flex flex-wrap border-t border-b border-gray-200 py-4 mb-6">
        {/* Rating Shimmer */}
        <div className="flex flex-col mr-8 mb-4 md:mb-0">
          <div className="h-3 bg-gray-200 rounded w-16 mb-2 animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded w-20 animate-pulse"></div>
        </div>
        
        {/* Delivery Time Shimmer */}
        <div className="flex flex-col mr-8 mb-4 md:mb-0">
          <div className="h-3 bg-gray-200 rounded w-24 mb-2 animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
        </div>
        
        {/* Cost Shimmer */}
        <div className="flex flex-col">
          <div className="h-3 bg-gray-200 rounded w-20 mb-2 animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded w-24 animate-pulse"></div>
        </div>
      </div>
      
      {/* Category Shimmer */}
      <div className="mb-6">
        <div className="h-6 bg-gray-200 rounded w-40 mb-4 animate-pulse"></div>
        <div className="flex flex-wrap gap-3">
          {Array(5).fill('').map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded-full w-24 animate-pulse"></div>
          ))}
        </div>
      </div>
      
      {/* Buttons Shimmer */}
      <div className="flex flex-wrap gap-4">
        <div className="h-12 bg-gray-200 rounded-lg w-40 animate-pulse"></div>
        <div className="h-12 bg-gray-200 rounded-lg w-40 animate-pulse"></div>
      </div>
    </div>
  </div>
  )
}

export default MenuShimmer