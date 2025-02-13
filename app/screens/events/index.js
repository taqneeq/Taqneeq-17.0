"use client";
import React from 'react'
import Image from "next/image";
import C1 from "./comp1.svg";
export default function competition() {
    const comp = [C1, C1, C1];

  return (
    <section
      className="min-h-[90vh] max-h-[1440px] max-w-7xl flex flex-col justify-center items-center relative md:gap-5 mx-auto"
    >
        <hr className="w-1/2 border-2 md:border-4 absolute top-10 -left-1/4 text-brandOffWhite opacity-70"></hr>
        <h1 className="font-BSD text-4xl md:text-5xl text-white absolute top-5 left-1/4 ml-4">/ [ Events ]</h1>
        <div
        
        className="w-full mt-24 md:mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center"
        
      >
        {comp.map((comp, index) => (
          <div
            key={index}
            className="relative w-full h-96"
          >
            <Image
              src={comp}
              alt={`Competition ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

