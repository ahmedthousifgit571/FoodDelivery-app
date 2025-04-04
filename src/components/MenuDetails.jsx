import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../constants/api'
import MenuShimmer from './MenuShimmer'

function MenuDetails() {
    const { id } = useParams()
    const [restaurant, setRestaurant] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getRestaurantDetails()
    }, [])

    async function getRestaurantDetails() {
        setIsLoading(true)
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.9214807&lng=77.004626&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`)
            const json = await data.json()
            console.log("getRestaurantDetails", json)
            setRestaurant(json.data)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching restaurant details:", error)
            setIsLoading(false)
        }
    }

    const restaurantInfo = restaurant?.cards?.find(card => 
        card.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    )?.card?.card?.info

    // Find menu categories
    const menuItems = restaurant?.cards?.find(card => 
        card.groupedCard
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards || []

    // Extract category names
    const categories = menuItems
        .filter(item => item.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        .map(item => item.card?.card?.title)
        .filter(Boolean)

    if (isLoading) return <MenuShimmer />

    return (
        <div className="body-container menu-details">
            {restaurantInfo ? (
                <>
                    <div className="restaurant-banner">
                        {restaurantInfo.cloudinaryImageId && (
                            <img 
                                src={`${IMG_CDN_URL}${restaurantInfo.cloudinaryImageId}`} 
                                alt={restaurantInfo.name} 
                            />
                        )}
                    </div>
                    
                    <div className="restaurant-info">
                        <div className="restaurant-header">
                            <div className="restaurant-details">
                                <h1 className="restaurant-name">{restaurantInfo.name}</h1>
                                <p className="restaurant-cuisine">{restaurantInfo.cuisines?.join(", ")}</p>
                                <p className="restaurant-area">{restaurantInfo.areaName}, {restaurantInfo.city}</p>
                            </div>
                            
                            {restaurantInfo.cloudinaryImageId && (
                                <img 
                                    className="restaurant-image"
                                    src={`${IMG_CDN_URL}${restaurantInfo.cloudinaryImageId}`} 
                                    alt={restaurantInfo.name} 
                                />
                            )}
                        </div>
                        
                        <div className="restaurant-meta">
                            <div className="meta-item">
                                <span className="meta-label">Ratings</span>
                                <div className="meta-value">
                                    <span className="rating-badge">
                                        <svg viewBox="0 0 24 24" fill="white" width="12" height="12">
                                            <path d="M12 16.5l-5.83 3.07 1.11-6.47-4.72-4.6 6.51-.95L12 1.5l2.93 5.95 6.51.95-4.72 4.6 1.11 6.47z" />
                                        </svg>
                                        {restaurantInfo.avgRating}
                                    </span> 
                                    <span style={{ marginLeft: '8px', fontSize: '14px', color: 'var(--text-light)' }}>
                                        {restaurantInfo.totalRatingsString}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="meta-item">
                                <span className="meta-label">Delivery Time</span>
                                <span className="meta-value">{restaurantInfo.sla?.deliveryTime} mins</span>
                            </div>
                            
                            <div className="meta-item">
                                <span className="meta-label">Cost for Two</span>
                                <span className="meta-value">{restaurantInfo.costForTwoMessage}</span>
                            </div>
                        </div>
                        
                        {categories && categories.length > 0 && (
                            <div>
                                <h3 style={{ marginBottom: '12px', fontSize: '18px' }}>Menu Categories</h3>
                                <div className="menu-categories">
                                    {categories.map((category, index) => (
                                        <button key={index} className={`category-button ${index === 0 ? 'active' : ''}`}>
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                        
                        <div className="action-buttons">
                            <button className="action-button primary-button">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M9 20l-5.5-5.5 1.5-1.5 4 4 12-12 1.5 1.5L9 20z" />
                                </svg>
                                Order Online
                            </button>
                            <button className="action-button secondary-button">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                <div className="no-restaurant">
                    <h2>Restaurant information not found</h2>
                    <p>We couldn't find details for this restaurant. Please try again later.</p>
                </div>
            )}
        </div>
    )
}

export default MenuDetails