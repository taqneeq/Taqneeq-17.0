"use client";
import Image from "next/image";
import Event1 from "./Event1.svg";
import Event2 from "./Event2.svg";
import Event3 from "./Event3.svg";
import Event4 from "./Event4.svg";
import Event5 from "./Event5.svg";
import Event6 from "./Event6.svg";
import Event7 from "./Event7.svg";
import Event8 from "./Event8.svg";
import Event9 from "./Event9.svg";
import Event10 from "./Event10.svg";
import Event11 from "./Event11.svg";
import { useRef } from "react";
import { useInView } from "motion/react";

export default function Competition() {
  const events = [
    Event1,
    Event2,
    Event3,
    Event4,
    Event5,
    Event6,
    Event7,
    Event8,
    Event9,
    Event10,
    Event11
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger only once

  return (
    <section
      className="relative min-h-screen flex items-center justify-center p-8"
      id="events"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div
          className="relative mb-36 md:mb-32"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease-out, transform 0.9s ease-out",
            transitionDelay: "0.5s",
          }}
        >
          <hr className="w-3/4 md:w-1/2 border-2 absolute mt-[24%] md:mt-[4%] -left-[45%] text-brandOffWhite opacity-70" />
          <h1 className="font-BSD text-4xl text-white absolute mt-[20%] md:mt-[2.5%] left-[30%] md:left-[5%] ml-4 whitespace-nowrap">
            / [ Events ]
          </h1>
        </div>

        {/* Grid for event images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-10">
          {events.map((event, index) => (
            <div
              key={index}
              className="relative rounded-[20px] overflow-hidden cursor-pointer"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.9s ease-out, transform 0.9s ease-out",
                transitionDelay: `${0.3 + index * 0.1}s`, // Staggered delay
              }}
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src={event || "/placeholder.svg"}
                  alt={`Event ${index + 1}`}
                  fill
                  className="object-fill rounded-t-[20px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
