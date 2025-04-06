import React, { useState } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedInUser = () => {
  //authentication api
  return true;
};

function HeaderComponent() {
  const [loggedIn, setloggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            {" "}
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/about" className="nav-link">
              {" "}
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
        </ul>
      </div>

      {/* to show online status using custom hook useOnline */}
      <div className="header-actions">
        <div className={`online-status ${isOnline ? "online" : "offline"}`}>
          <div className="status-indicator"></div>
          <span className="status-text">{isOnline ? "Online" : "Offline"}</span>
        </div>

        <button
          className={`auth-button ${loggedIn ? "logout-btn" : "login-btn"}`}
          onClick={() => setloggedIn(!loggedIn)}
        >
          {loggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default HeaderComponent;
