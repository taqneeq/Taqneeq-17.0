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
      hover: "hover:bg-brandRed",
    },
    {
      number: "+91 73036 11722",
      link: "tel:+917303611722",
      name: "Anushka Saxena",
      designation: "Publicity Head",

      walink:
        "https://api.whatsapp.com/send?phone=917303611722&text=Hi%20there%2C%20I%20had%20some%20queries%20about%20Cyber%20Cypher!",
      hover: "hover:bg-brandRed",
    },
    {
      number: "+91 88509 69672",
      link: "tel:+918850969672",
      name: "Siddhi Gandhi",
      designation: "Publicity Head",

      walink:
        "https://api.whatsapp.com/send?phone=918850969672&text=Hi%20there%2C%20I%20had%20some%20queries%20about%20Cyber%20Cypher!",
      hover: "hover:bg-brandRed",
    },
  ];
  return (
    <section
      className="h-screen py-20 w-full flex flex-col justify-center items-center p-8 gap-10 max-w-7xl mx-auto relative"
      id="contact"
    >
      <div className=" flex flex-col items-center gap-4">
        <hr className="w-1/2 border-1 md:border-2 absolute top-[14%] md:top-[10%] -left-1/4 text-brandGrey opacity-70"></hr>
        <h1 className="font-BSD text-2xl md:text-3xl text-white absolute top-[12%] md:top-[8%] left-1/4 ml-4">
          / [ CONTACT US ]
        </h1>
      </div>

      <a
        className="mt-[200%] md:mt-0 w-full h-fit sm:w-2/3 lg:w-1/2 md:py-10 bg-[#4d4d4d] backdrop-filter backdrop-blur-sm bg-opacity-20 border border-white/60 flex flex-col md:flex-row md:items-center justify-center gap-6 text-white text-center p-6 shadow-lg hover:bg-brandRed transition-colors duration-300 ease-in-out rounded-sm shadow-brandOffWhite/40 "
        href="mailto:support@taqneeqfest.com"
      >
        <Mail className="text-purple-200 w-10 h-10" />
        <div>
          <p className="text-3xl font-BSD mb-2 text-left">Email Us</p>
          <p className="text-lg hover:underline font-ibm text-left">
            support@taqneeqfest.com
          </p>
        </div>
      </a>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {contacts.map((contact, index) => (
          <a
            key={index}
            className={`relative w-full h-72 bg-[#4D4D4D] backdrop-filter backdrop-blur-sm bg-opacity-10 border border-white/60 flex flex-col items-center justify-center gap-4 text-white text-center p-6 shadow-lg ${contact.hover} transition-colors duration-300 ease-in-out`}
            href={contact.walink}
          >
            <p className={`text-4xl font-BSD ${contact.colour}`}>
              {contact.name}
            </p>
            <p className="text-lg font-ibm opacity-80 font-code">
              {contact.designation}
            </p>
            <a
              href={contact.link}
              className="text-lg font-ibm font-bold hover:underline font-code"
            >
              {contact.number}
            </a>
          </a>
        ))}
      </div>
    </section>
  );
}
