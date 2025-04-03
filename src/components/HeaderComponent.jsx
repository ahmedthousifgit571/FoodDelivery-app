import React, { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

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
         <li> <Link to="/">Home</Link></li>
          <li> <Link to="/about"> About</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li><Link>Cart</Link></li> 
          
        </ul>
      </div>
      {
     
       loggedIn ? <button onClick={()=> setloggedIn(false)}>logout</button> : <button onClick={()=> setloggedIn(true)}>login</button>
      }
      
    </div>
  );
}

export default HeaderComponent;
