"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <nav className="absolute top-10 right-16 text-brandOffWhite font-ibm z-30 text-right">
      {/* Toggle list visibility on click */}
      <p
        onClick={toggleListVisibility}
        className="font-bold text-white cursor-pointer hover:underline"
      >
        [ Navigate ]
      </p>
      {/* Conditionally render the list */}
      {isListVisible && (
        <ul className="space-y-2 cursor-pointer">
          <li className="hover:underline">/about</li>
          <li className="hover:underline">/events</li>
          <li className="hover:underline">/competition</li>
          <li className="hover:underline">/sponsors</li>
          <li className="hover:underline">/contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;


