"use client";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "motion/react";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <section
      id="about"
      className="relative py-32 flex items-center justify-center p-8"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto w-full min-h-full">
        <div
          className="relative mb-36 md:mb-32"
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            transitionDelay: "0.8s",
          }}
        >
          <hr className="w-1/2 border-2 md:border-4 absolute mt-[24%] md:mt-[4%] -left-[45%] text-brandOffWhite opacity-70" />
          <h1 className="font-BSD text-4xl md:text-5xl text-white absolute mt-[20%] md:mt-[2.5%] left-1/5 md:left-[5%] ml-4 whitespace-nowrap">
            / [ About ]
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 flex-1">
          <div
            className="w-full md:w-3/5"
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              transitionDelay: "1.2s",
            }}
          >
            <p className="font-ibm text-base md:text-lg text-brandOffWhite leading-relaxed">
              Welcome to Taqneeq 17.0, the annual Techfest of MPSTME, NMIMS
              Mumbai! This year, we take you on a journey through the Cosmic
              Rewind – an odyssey where the past, present, and future of
              technology collide in an interstellar fusion of innovation and
              creativity. Taqneeq is where aspiring tech enthusiasts,
              developers, and visionaries come together to compete, learn, and
              revolutionize the future. With a perfect blend of competitions,
              workshops, hackathons, and exhibitions, this year's edition
              promises to be bigger and better than ever before.
              <br />
              <br />
              Are you ready to travel through time and space, innovate, and
              conquer? Join us at Taqneeq 17.0 and be a part of an unforgettable
              tech experience!
            </p>
          </div>
          <div className="w-full md:w-2/5 mt-8 md:mt-0">
            <div
              className="relative aspect-[4/3] w-full"
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: "1.5s",
              }}
            >
              <Image
                src="/best.jpg"
                alt="Taqneeq 17.0 Event"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
