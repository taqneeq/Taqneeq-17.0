import React from "react";

const index = () => {
  return (
    <section
      id="about"
      className="h-screen max-h-[1440px] max-w-7xl flex flex-col md:flex-col justify-center items-center relative md:gap-5 mx-auto"
    >
      <hr className="w-1/2 border-1 md:border-2 absolute top-[15%] md:top-[10%] -left-1/4 text-brandGrey opacity-70"></hr>
      <h1 className="font-BSD text-2xl md:text-3xl text-white absolute top-[13%] md:top-[8%] left-1/4 ml-4">
        / [ About ]
      </h1>
      <div className="flex flex-row justify-center items-center relative md:gap-10 mx-auto">
        <p className="mt-44 md:mt-10 md:text-xl font-ibm max-w-prose w-[80%] md:w-full">
          Welcome to Taqneeq 17.0, the annual Techfest of MPSTME, NMIMS Mumbai!
          This year, we take you on a journey through the Cosmic Rewind – an
          odyssey where the past, present, and future of technology collide in
          an interstellar fusion of innovation and creativity. Taqneeq is where
          aspiring tech enthusiasts, developers, and visionaries come together
          to compete, learn, and revolutionize the future. With a perfect blend
          of competitions, workshops, hackathons, and exhibitions, this year’s
          edition promises to be bigger and better than ever before. <br></br>{" "}
          <br></br>
          Are you ready to travel through time and space, innovate, and conquer?
          Join us at Taqneeq 17.0 and be a part of an unforgettable tech
          experience!
        </p>{" "}
        <img
          src="/astronaut.svg"
          alt="filler image"
          width="30%"
          className="hidden md:block"
        ></img>
      </div>
    </section>
  );
};

export default index;
