import {useState,useEffect} from 'react'
import { FETCH_MENU_URL } from '../constants/api'

const useRestaurant = (id) =>{
    const [isLoading, setIsLoading] = useState(true)
    const [restaurant, setRestaurant] = useState(null)
    useEffect(() => {
        getRestaurantDetails()
    }, [])

    async function getRestaurantDetails() {
        setIsLoading(true)
        try {
            const url = FETCH_MENU_URL.replace('RESTAURANT_ID', id)
            const data = await fetch(url)
            const json = await data.json()
            console.log("getRestaurantDetails", json)
            setRestaurant(json.data)
            setIsLoading(false)
        } catch (error) {
            console.error("Error fetching restaurant details:", error)
            setIsLoading(false)
        }
    }

     
    
       
    
    return {restaurant,isLoading}
    
}

export default useRestaurant 