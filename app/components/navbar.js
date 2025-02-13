"use client";
import React, { useState } from "react";
import Link from 'next/link';

const Navbar = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <nav className="absolute top-10 right-10 md:right-16 text-brandOffWhite font-ibm z-30 text-right">
      {/* Toggle list visibility on click with scale animation */}
      <p
        onClick={toggleListVisibility}
        className={`font-bold text-white cursor-pointer transition-all duration-300 ease-in-out hover:underline 
          ${isListVisible ? 'scale-110' : ''}`}
      >
        [ Navigate ]
      </p>

      {/* Animated list container */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isListVisible ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="space-y-2 mt-4">
          {[
            { path: '/screens/about', delay: 0 },
            { path: '/screens/events', delay: 1 },
            { path: '/screens/competitions', delay: 2 },
            { path: '/screens/contact', delay: 3 },
            { path: '/screens/hero', delay: 4 },
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
                {item.path.split('/').pop()}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;