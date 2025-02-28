"use client";
import React from "react";
import { Mail } from "lucide-react";

export default function Contact() {
  // Contact information
  const contacts = [
    {
      number: "+91 99679 72473",
      link: "tel:+919967972473",
      name: "Rushabh Chhajed",
      designation: "Chairperson",
      walink:
        "https://api.whatsapp.com/send?phone=919967972473&text=Hi%20there%2C%20I%20had%20some%20queries%20about%20Cyber%20Cypher!",
      hover: "hover:bg-red-500", // Changed from brandRed to standard Tailwind red
    },
    {
      number: "+91 73036 11722",
      link: "tel:+917303611722",
      name: "Anushka Saxena",
      designation: "Publicity Head",
      walink:
        "https://api.whatsapp.com/send?phone=917303611722&text=Hi%20there%2C%20I%20had%20some%20queries%20about%20Cyber%20Cypher!",
      hover: "hover:bg-red-500", // Changed from brandRed to standard Tailwind red
    },
    {
      number: "+91 88509 69672",
      link: "tel:+918850969672",
      name: "Siddhi Gandhi",
      designation: "Publicity Head",
      walink:
        "https://api.whatsapp.com/send?phone=918850969672&text=Hi%20there%2C%20I%20had%20some%20queries%20about%20Cyber%20Cypher!",
      hover: "hover:bg-red-500", // Changed from brandRed to standard Tailwind red
    },
  ];

  return (
    <section
      className="min-h-screen py-20 w-full flex flex-col justify-center items-center p-8 gap-10 max-w-7xl mx-auto relative"
      id="contact"
    >
      <div className="flex flex-col items-center gap-4">
        <hr className="w-1/2 border border-gray-400 absolute top-[15%] md:top-[10%] -left-1/4 opacity-70"></hr>
        <h1 className="font-BSD text-2xl md:text-3xl text-white absolute top-[13%] md:top-[8%] left-1/4 ml-4 font-bold">
          / [ Contact Us ]
        </h1>
      </div>

      <a
        className="font-BSD mt-[200%] md:mt-0 xl:mt-44 w-full h-fit sm:w-2/3 lg:w-1/2 md:py-10 bg-gray-700 backdrop-blur-sm bg-opacity-20 border border-white/60 flex flex-col md:flex-row md:items-center justify-center gap-6 text-white text-center p-6 shadow-lg hover:bg-red-500 transition-colors duration-300 ease-in-out rounded-sm shadow-gray-300/40"
        href="mailto:support@taqneeqfest.com"
      >
        <Mail className="font-ibm text-purple-200 w-10 h-10" />
        <div>
          <p className="text-3xl font-bold mb-2 text-left">Email Us</p>
          <p className=" font-ibm text-lg hover:underline text-left">
            support@taqneeqfest.com
          </p>
        </div>
      </a>

      <div className="font-BSD w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {contacts.map((contact, index) => (
          <a
            key={index}
            className={`relative w-full h-72 bg-gray-700 backdrop-blur-sm bg-opacity-10 border border-white/60 flex flex-col items-center justify-center gap-4 text-white text-center p-6 shadow-lg ${contact.hover} transition-colors duration-300 ease-in-out`}
            href={contact.walink}
          >
            <p className="font-BSD text-4xl font-bold">{contact.name}</p>
            <p className=" font-ibm text-lg opacity-80">{contact.designation}</p>
            <a
              href={contact.link}
              className="font-ibm text-lg font-bold hover:underline"
            >
              {contact.number}
            </a>
          </a>
        ))}
      </div>
    </section>
  );
}
