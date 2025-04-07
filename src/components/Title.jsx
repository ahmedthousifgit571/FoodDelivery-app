import React from "react";
import logo from "../assets/logo.png";

function Title() {
  return (
    <a href="/" className="flex items-center">
      <div>
        <img className="h-12 w-auto" src={logo} alt="Food Delivery Logo" />
      </div>
    </a>
  );
}

export default Title;
