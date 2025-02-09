import React from "react";

const index = () => {
  return (
    <section
      className="min-h-[90vh] max-h-[1440px] max-w-7xl flex flex-col justify-center items-center relative md:gap-5 mx-auto overflow-hidden"
    >
      {/* Background Text Layer */}
      <div className="absolute -z-20 w-full" id="base-1">
        <div className="absolute bottom-20 md:bottom-10 left-3 md:left-10">
          <h1 className="text-7xl md:text-9xl font-impact font-retro font-bold text-brandOffWhite">
            TAQNEEQ 17.0
          </h1>
        </div>
        <div className="absolute top-10 right-3 md:right-16 text-right">
          <h1 className="text-6xl md:text-8xl font-BSD font-retro font-bold text-brandOffWhite">
            INNOVATION <br></br> MEETS REALITY
          </h1>
        </div>
      </div>

      {/* Astronaut Image */}
      <img
        id="base-2"
        src="/astronaut.svg"
        alt="Astronaut"
        className="absolute z-10 w-4/5 md:w-1/3"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: "4%",
        }}
      />

      {/* Outlined Text Layer */}
      <div id="base-3" className="absolute z-20 w-full">
        {/* TAQNEEQ 17.0 - Top Left (Outlined) */}
        <div className="absolute bottom-20 md:bottom-10 left-3 md:left-10">
          <h1
            className="text-7xl md:text-9xl font-impact font-retro font-bold text-transparent"
            style={{
              WebkitTextStroke: "2px #D6D5D5",
            }}
          >
            TAQNEEQ 17.0
          </h1>
        </div>

        <div className="absolute top-10 right-3 md:right-16 text-right">
          <h1
            className="text-6xl md:text-8xl font-BSD font-retro font-bold text-transparent"
            style={{
              WebkitTextStroke: "2px #D6D5D5",
            }}
          >
            INNOVATION <br></br> MEETS REALITY
          </h1>
        </div>
      </div>

      {/* Description Text */}
      <p className="absolute bottom-24 text-center md:text-left md:bottom-10 justify-center w-[80%] md:w-full md:left-10 text-brandOffWhite font-ibm text-base font-extralight max-w-md z-30">
        Step into the realm of the most prestigious technical fest, where we
        value bold ideas and innovations.
      </p>
    </section>
  );
};

export default index;
