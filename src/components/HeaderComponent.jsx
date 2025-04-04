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
         <li> <Link to="/" className="nav-link">Home</Link></li>
          <li> <Link to="/about" className="nav-link"> About</Link></li>
          <li> <Link to="/contact" className="nav-link">Contact</Link></li>
          <li><Link>Cart</Link></li> 
          
        </ul>
      </div>
      {
     
       loggedIn ? <button  className="auth-button" onClick={()=> setloggedIn(false)}>logout</button> : <button className="auth-button" onClick={()=> setloggedIn(true)}>login</button>
      }
      
    </div>
  );
}

export default HeaderComponent;
