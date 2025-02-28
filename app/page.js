import Image from "next/image";
import Hero from "@/app/screens/hero";
import About from "@/app/screens/about";
import Events from "@/app/screens/events";
import Competitions from "@/app/screens/competitions";
import Contact from "@/app/screens/contact";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 z-0 h-screen w-screen">
        <img
          src={"/cosmic_bg.png"}
          alt="cosmic"
          className="opacity-60 h-full w-full object-cover"
        />{" "}
      </div>
      <div className="relative z-10 w-full">
        <Hero />
        <About />
        <Competitions />
        <Events />
        <Contact />
      </div>
    </>
  );
}
