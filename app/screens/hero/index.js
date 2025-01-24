import React from "react";

const index = () => {
  return (
    <section
      className="min-h-[90vh] max-h-[1440px] max-w-7xl flex flex-col justify-center items-center relative md:gap-5 mx-auto"
    >
      {/* Background Text Layer */}
      <div className="absolute -z-20" id="base-1">
        <div>
          <h1 className="text-9xl  font-impact text-center font-retro font-bold md:mt-4 mr-20 md:mr-40 text-brandOffWhite">
            TAQNEEQ 17.0
          </h1>
        </div>
        <div>
          <h1 className="text-8xl font-BSD text-center font-retro font-bold md:mt-4 mr-20 md:mr-40 text-brandOffWhite">
            INNOVATION MEETS REALITY
          </h1>
        </div>
      </div>

      <img
        id="base-2"
        src="/astronaut.svg"
        alt="Astronaut"
        className="absolute z-10 w-1/4"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", 
        }}
      />

      <div id="base-3" className="absolute z-20">
        <div>
          <h1
            className="text-9xl text-brandOffWhite font-impact text-center font-retro font-bold md:mt-4 mr-20 md:mr-40 text-transparent"
            style={{
              WebkitTextStroke: '2px #D6D5D5'
            }}
          >
            TAQNEEQ 17.0
          </h1>
        </div>
        <div>
            <h1
            className="text-8xl text-transparent font-BSD text-center font-retro font-bold md:mt-4 mr-20 md:mr-40"
            style={{
                WebkitTextStroke: '2px #D6D5D5'
            }}
            >
            INNOVATION MEETS REALITY
            </h1>
        </div>
      </div> 
      <p className="absolute bottom-10 left-10 text-brandOffWhite font-ibm text-base font-extralight max-w-md z-30">
        Step into the realm of the most prestigious technical fest, where we
        value bold ideas and innovations.
      </p>
    </section>
  );
};

export default index;
