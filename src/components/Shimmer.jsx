import React from 'react';

function Shimmer() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
    {/* Shimmer for hero section */}
    <div className="w-full h-40 bg-gray-200 rounded-lg mb-8 animate-pulse"></div>
    
    {/* Shimmer for section title */}
    <div className="h-8 bg-gray-200 w-64 rounded mb-6 animate-pulse"></div>
    
    {/* Shimmer cards grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
            {/* Shimmer for image */}
            <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
            
            {/* Shimmer for content */}
            <div className="p-4">
              {/* Shimmer for title */}
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
              
              {/* Shimmer for cuisine tags */}
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-4 animate-pulse"></div>
              
              {/* Shimmer for details */}
              <div className="flex items-center justify-between mt-3">
                <div className="h-6 w-10 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
              
              {/* Shimmer for button */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  </div>
  );
}

export default Shimmer;