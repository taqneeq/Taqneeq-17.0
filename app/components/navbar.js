"use client";
import React, { useState } from "react";
import Link from 'next/link';

const Navbar = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <nav className="absolute top-6 right-10 md:right-16 text-brandOffWhite font-ibm 
      z-30 text-right backdrop-filter backdrop-blur-sm bg-white/10 p-3 w-48 rounded-lg 
      flex flex-col items-center shadow-lg">
      
      {/* Toggle list visibility on click with scale animation */}
      <p
        onClick={toggleListVisibility}
        className={`font-bold text-white cursor-pointer transition-all duration-300 ease-in-out hover:underline 
        w-full text-center ${isListVisible ? 'scale-110' : ''}`}
      >
        [ Navigate ]
      </p>

      {/* Animated list container */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isListVisible ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-2 mt-4 text-right">
          {[
            { path: '/#about', delay: 0, name:'/about' },
            { path: '/#events', delay: 1, name:'/events' },
            { path: '/#competition', delay: 2, name:'/competitions' },
            { path: '/#contact', delay: 3, name:'/contact' },
            { path: '/', delay: 4, name:'/home' },
          ].map((item, index) => (
            <li
              key={item.path}
              className={`hover:underline cursor-pointer transition-all duration-300 ease-in-out
                ${isListVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}
              `}
              style={{
                transitionDelay: `${item.delay * 100}ms`,
              }}
            >
              <Link href={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
