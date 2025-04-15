import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../constants/api'
import useRestaurant from '../utils/useRestaurant'
import MenuShimmer from './MenuShimmer'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'

function MenuDetails() {
    const { id } = useParams()
    const { restaurant, isLoading } = useRestaurant(id)   //custom hook 
    const dispatch = useDispatch()
    const [activeCategory, setActiveCategory] = useState(null)

    useEffect(() => {
        // Set the first category as active when data is loaded
        if (!isLoading && restaurant) {
            const categories = getCategories()
            if (categories.length > 0) {
                setActiveCategory(categories[0])
            }
        }
    }, [isLoading, restaurant])

    if (isLoading) return <MenuShimmer />

    const restaurantInfo = restaurant?.cards?.find(card => 
        card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info

    // Find menu categories
    const menuItems = restaurant?.cards?.find(card => 
        card.groupedCard
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards || []

    // Function to get categories
    const getCategories = () => {
        return menuItems
            .filter(item => item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
            .map(item => item.card?.card?.title)
            .filter(Boolean)
    }

    // Function to get items for a specific category
    const getItemsForCategory = (categoryTitle) => {
        const categoryCard = menuItems.find(item => 
            item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && 
            item.card?.card?.title === categoryTitle
        )
        
        return categoryCard?.card?.card?.itemCards || []
    }

    const handleAddItem = (item) => {
        // Adding item details to cart instead of just "grapes"
        dispatch(addItem({
            id: item.card.info.id,
            name: item.card.info.name,
            price: item.card.info.price || item.card.info.defaultPrice,
            imageId: item.card.info.imageId,
            description: item.card.info.description
        }))
    }
        
    return (
        <div className="max-w-6xl mx-auto px-4 py-6">
            {restaurantInfo ? (
                <>
                    {/* Restaurant Banner */}
                    <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden mb-6 hidden md:block">
                        {restaurantInfo.cloudinaryImageId && (
                            <img 
                                src={`${IMG_CDN_URL}${restaurantInfo.cloudinaryImageId}`} 
                                alt={restaurantInfo.name}
                                className="w-full h-full object-cover"
                            />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>
                    
                    {/* Restaurant Info Section */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        {/* Restaurant Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                            <div className="flex-grow">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{restaurantInfo.name}</h1>
                                <p className="text-gray-600 mb-1">{restaurantInfo.cuisines?.join(", ")}</p>
                                <p className="text-gray-500 text-sm">{restaurantInfo.areaName}, {restaurantInfo.city}</p>
                            </div>
                            
                            {/* Restaurant Thumbnail */}
                            <div className="mt-4 md:mt-0">
                                {restaurantInfo.cloudinaryImageId && (
                                    <img 
                                        className="w-24 h-24 rounded-lg object-cover"
                                        src={`${IMG_CDN_URL}${restaurantInfo.cloudinaryImageId}`} 
                                        alt={restaurantInfo.name} 
                                    />
                                )}
                            </div>
                        </div>
                        
                        {/* Restaurant Metadata */}
                        <div className="flex flex-wrap border-t border-b border-gray-200 py-4 mb-6">
                            {/* Ratings */}
                            <div className="flex flex-col mr-8 mb-4 md:mb-0">
                                <span className="text-xs font-medium text-gray-500 mb-1">RATINGS</span>
                                <div className="flex items-center">
                                    <span className={`flex items-center px-1 py-0.5 text-sm rounded ${
                                        parseFloat(restaurantInfo.avgRating) >= 4.0 
                                        ? "bg-green-600 text-white" 
                                        : parseFloat(restaurantInfo.avgRating) >= 3.0 
                                            ? "bg-orange-500 text-white" 
                                            : "bg-gray-400 text-white"
                                    }`}>
                                        <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 16.5l-5.83 3.07 1.11-6.47-4.72-4.6 6.51-.95L12 1.5l2.93 5.95 6.51.95-4.72 4.6 1.11 6.47z" />
                                        </svg>
                                        {restaurantInfo.avgRating}
                                    </span>
                                    <span className="ml-2 text-xs text-gray-500">
                                        {restaurantInfo.totalRatingsString}
                                    </span>
                                </div>
                            </div>
                            
                            {/* Delivery Time */}
                            <div className="flex flex-col mr-8 mb-4 md:mb-0">
                                <span className="text-xs font-medium text-gray-500 mb-1">DELIVERY TIME</span>
                                <span className="text-sm font-semibold text-gray-800">{restaurantInfo.sla?.deliveryTime} mins</span>
                            </div>
                            
                            {/* Cost for Two */}
                            <div className="flex flex-col">
                                <span className="text-xs font-medium text-gray-500 mb-1">COST FOR TWO</span>
                                <span className="text-sm font-semibold text-gray-800">{restaurantInfo.costForTwoMessage}</span>
                            </div>
                        </div>
                        
                        {/* Menu Categories */}
                        {getCategories().length > 0 && (
                            <div className="mb-6">
                                <h3 className="text-lg font-bold text-gray-800 mb-4">Menu Categories</h3>
                                <div className="flex flex-wrap gap-3">
                                    {getCategories().map((category, index) => (
                                        <button 
                                            key={index} 
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                                                category === activeCategory 
                                                ? "bg-orange-500 text-white" 
                                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                            }`}
                                            onClick={() => setActiveCategory(category)}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* Menu Items */}
                        {activeCategory && (
                            <div className="mt-8">
                                <h2 className="text-xl font-bold mb-4">{activeCategory}</h2>
                                <div className="space-y-6">
                                    {getItemsForCategory(activeCategory).map((item) => (
                                        <div key={item.card.info.id} className="flex justify-between border-b pb-6">
                                            <div className="flex-grow pr-4">
                                                <h3 className="text-lg font-medium text-gray-800">
                                                    {item.card.info.name}
                                                </h3>
                                                <div className="flex items-center mt-1">
                                                    <span className="text-sm font-medium text-gray-700">
                                                        ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                                                    {item.card.info.description}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-center">
                                                {item.card.info.imageId && (
                                                    <div className="w-28 h-28 relative">
                                                        <img 
                                                            src={`${IMG_CDN_URL}${item.card.info.imageId}`}
                                                            alt={item.card.info.name}
                                                            className="w-full h-full object-cover rounded-lg"
                                                        />
                                                    </div>
                                                )}
                                                <button 
                                                    className="mt-2 bg-white hover:bg-gray-50 text-green-600 font-medium border border-green-600 rounded-lg px-4 py-1 transition-colors duration-200"
                                                    onClick={() => handleAddItem(item)}
                                                >
                                                    ADD
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 mt-8 pt-4 border-t">
                            <button className="flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-200">
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 20l-5.5-5.5 1.5-1.5 4 4 12-12 1.5 1.5L9 20z" />
                                </svg>
                                Order Online
                            </button>
                            <button className="flex items-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium border border-gray-300 rounded-lg transition-colors duration-200">
                                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 8v8" />
                                    <path d="M8 12h8" />
                                </svg>
                                Add Review
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-20 h-20 mb-6 text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Restaurant information not found</h2>
                    <p className="text-gray-600">We couldn't find details for this restaurant. Please try again later.</p>
                </div>
            )}
        </div>
    )
}

export default MenuDetails