'use client';
import React, { useEffect, useState } from "react";

const Index = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  
  const fullText1 = "TAQNEEQ 17.0";
  const fullText2 = "INNOVATION";
  const fullText3 = "MEETS REALITY";

  useEffect(() => {
    // Random movement animation with wider horizontal range
    const moveAstronaut = () => {
      const newX = (Math.random() - 0.5) * 50; // Random value between -8 and 8 (wider range)
      const newY = (Math.random() - 0.5) * 6;  // Random value between -3 and 3 (smaller range)
      setPosition({ x: newX, y: newY });
      setRotation(prev => (prev + 1) % 360);
    };

    const movementInterval = setInterval(moveAstronaut, 2000);

    // Text animation code
    let currentIndex1 = 0;
    const scrambleInterval1 = setInterval(() => {
      if (currentIndex1 <= fullText1.length) {
        const scrambled = fullText1.slice(0, currentIndex1) + 
          (currentIndex1 < fullText1.length ? 
            Array(3).fill().map(() => 
              String.fromCharCode(Math.floor(Math.random() * 26) + 65)
            ).join('') : '');
        setText1(scrambled);
        currentIndex1++;
      } else {
        clearInterval(scrambleInterval1);
      }
    }, 70);

    let currentIndex2 = 0;
    const scrambleInterval2 = setInterval(() => {
      if (currentIndex2 <= fullText2.length) {
        const scrambled = fullText2.slice(0, currentIndex2) + 
          (currentIndex2 < fullText2.length ? 
            Array(3).fill().map(() => 
              String.fromCharCode(Math.floor(Math.random() * 26) + 65)
            ).join('') : '');
        setText2(scrambled);
        currentIndex2++;
      } else {
        clearInterval(scrambleInterval2);
      }
    }, 70);

    let currentIndex3 = 0;
    const scrambleInterval3 = setInterval(() => {
      if (currentIndex3 <= fullText3.length) {
        const scrambled = fullText3.slice(0, currentIndex3) + 
          (currentIndex3 < fullText3.length ? 
            Array(3).fill().map(() => 
              String.fromCharCode(Math.floor(Math.random() * 26) + 65)
            ).join('') : '');
        setText3(scrambled);
        currentIndex3++;
      } else {
        clearInterval(scrambleInterval3);
      }
    }, 70);

    return () => {
      clearInterval(scrambleInterval1);
      clearInterval(scrambleInterval2);
      clearInterval(scrambleInterval3);
      clearInterval(movementInterval);
    };
  }, []);

  return (
    <section className="min-h-[90vh] max-h-[1440px] max-w-7xl flex flex-col justify-center items-center relative md:gap-5 mx-auto overflow-hidden"
    id='hero'
    >
      {/* Background Text Layer */}
      <div className="absolute -z-20 w-full" id="base-1">
        <div className="absolute bottom-20 md:bottom-10 left-3 md:left-10">
          <h1 className="text-7xl md:text-9xl font-impact font-retro font-bold text-brandOffWhite">
            {text1}
          </h1>
        </div>
        <div className="absolute top-10 right-3 md:right-16 text-right">
          <h1 className="text-6xl md:text-8xl font-BSD font-retro font-bold text-brandOffWhite">
            {text2}<br/>{text3}
          </h1>
        </div>
      </div>

      {/* Astronaut Image with wider horizontal movement */}
      <img
        id="base-2"
        src="/astronaut.svg"
        alt="Astronaut"
        className="absolute z-10 w-4/5 md:w-1/3 transition-all duration-2000 ease-in-out"
        style={{
          top: `calc(50% + ${position.y}%)`,
          left: `calc(50% + ${position.x}%)`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
          marginTop: "4%",
        }}
      />

      {/* Outlined Text Layer */}
      <div id="base-3" className="absolute z-20 w-full">
        <div className="absolute bottom-20 md:bottom-10 left-3 md:left-10">
          <h1
            className="text-7xl md:text-9xl font-impact font-retro font-bold text-transparent"
            style={{
              WebkitTextStroke: "2px #D6D5D5",
            }}
          >
            {text1}
          </h1>
        </div>

        <div className="absolute top-10 right-3 md:right-16 text-right">
          <h1
            className="text-6xl md:text-8xl font-BSD font-retro font-bold text-transparent"
            style={{
              WebkitTextStroke: "2px #D6D5D5",
            }}
          >
            {text2}<br/>{text3}
          </h1>
        </div>
      </div>

      {/* Description Text */}
      <p className="absolute bottom-12 text-center md:text-left md:bottom-10 justify-center w-[80%] md:w-full md:left-10 text-brandOffWhite font-ibm text-base font-extralight max-w-md z-30">
        Step into the realm of the most prestigious technical fest, where we
        value bold ideas and innovations.
      </p>

      <style jsx global>{`
        .transition-all {
          transition: all 2s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Index;