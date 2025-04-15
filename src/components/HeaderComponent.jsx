import React, { useState ,useContext} from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const loggedInUser = () => {
  //authentication api
  return true;
};



function HeaderComponent() {
  const [loggedIn, setloggedIn] = useState(false);
  const isOnline = useOnline();

  const {user} = useContext(UserContext)
  const cartItems = useSelector((store)=> store.cart.items)
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" >

    <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
      <Title />
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li>
            {" "}
            <Link to="/" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200">
              Home
            </Link>
          </li>
          <li className="px-2">
            {" "}
            <Link to="/about" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200">
              {" "}
              About
            </Link>
          </li>
          <li className="px-2">
            {" "}
            <Link to="/contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200">
              Contact
            </Link>
          </li>
          <li className="px-2">
            {" "}
            <Link to="/instamart" className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-200">
              instamart
            </Link>
          </li>
          <li className="px-2">
            <Link className="relative flex items-center text-gray-700 hover:text-orange-500 transition-colors duration-200" to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* to show online status using custom hook useOnline */}
     {/* Right Section - Status & Actions */}
     <div className="flex items-center space-x-6">
          {/* Online Status Indicator */}
          <div className="hidden md:flex items-center">
            <div className={`h-2 w-2 rounded-full mr-2 ${isOnline ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-sm font-medium text-gray-600">
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>

          <span className="p-10 font-bold text-red-900">{user.name}</span>
          <button
            onClick={() => setloggedIn(!loggedIn)}
            className={`py-2 px-4 rounded-md font-medium text-sm transition-colors duration-200 ${
              loggedIn
                ? "bg-white text-orange-500 border border-orange-500 hover:bg-orange-50"
                : "bg-orange-500 text-white hover:bg-orange-600"
            }`}
          >
            {loggedIn ? "Logout" : "Login"}
          </button>
      </div>
    </div>
  </header>
  );
}

export default HeaderComponent;
