import React, { useState } from "react";
import Title from "./Title";

const loggedInUser = ()=>{
  //authentication api
  return true
}


function HeaderComponent() {
  const [loggedIn, setloggedIn] = useState(false)
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {
     
       loggedIn ? <button onClick={()=> setloggedIn(false)}>logout</button> : <button onClick={()=> setloggedIn(true)}>login</button>
      }
      
    </div>
  );
}

export default HeaderComponent;
