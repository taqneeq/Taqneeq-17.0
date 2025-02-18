"use client";
import React from 'react'
import Image from "next/image";
import Event1 from "./Event1.svg";
import Event2 from "./Event2.svg";
import Event3 from "./Event3.svg";
import Event4 from "./Event4.svg";
import Event5 from "./Event5.svg";
import Event6 from "./Event6.svg";
import Event7 from "./Event7.svg";
import Event8 from "./Event8.svg";

export default function Competition() {
  const events = [Event1, Event2, Event3, Event4, Event5, Event6, Event7, Event8];

  return (
    <section
      className="min-h-screen max-w-7xl flex flex-col justify-center items-center relative md:gap-5 mx-auto" 
      id="events"
    >
      <hr className="w-1/2 border-2 md:border-4 absolute top-10 -left-1/4 text-brandOffWhite opacity-70" />
      <h1 className="font-BSD text-4xl md:text-5xl text-white absolute top-5 left-1/4 ml-4 mb-8">
        / [ Events ]
      </h1>

      {/* Added 'relative' to fix absolute element interference */}
      <div className="relative w-full mt-32 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
        {events.map((event, index) => (
          <div key={index} className="relative w-full h-96">
            <Image
              src={event}
              alt={`Event ${index + 1}`}
              fill
              className="object-contain rounded-3xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
