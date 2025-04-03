import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


function MenuDetails() {
    const params = useParams()
    const {id} = params               //can be written like this as well : const {id} = useParams()
     
    // const [restaurant,setRestaurant] = useState({})       //this state to store the fetched restaurant details

    // useEffect(()=>{
    //     getRestaurantDetails()
    // },[])

    // async function getRestaurantDetails(){
    //   const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=10.931321859237757&lng=76.978055009584&restaurantId=1064318&catalog_qa=undefined&submitAction=ENTER")
    //   const json = await data.json()
    //   console.log("getRestaurantDetails",json);
      
    // }
 
  return (
    <div>
      <h1>restaurantId : {id}</h1>
      <h2>restaurant name</h2>
    </div>
  )
}

export default MenuDetails
