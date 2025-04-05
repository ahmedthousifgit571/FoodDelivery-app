import {useState,useEffect} from 'react'

const useRestaurant = (id) =>{
    const [isLoading, setIsLoading] = useState(true)
    const [restaurant, setRestaurant] = useState(null)
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

     
    
       
    
    return {restaurant,isLoading}
    
}

export default useRestaurant 