import Image from "next/image";
import Hero from "@/app/screens/hero";
import About from "@/app/screens/about";
import Competitions from "@/app/screens/competitions";
import Events from "@/app/screens/events";
import Contact from "@/app/screens/contact";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Competitions/>
      <Events/>
      <Contact/>
    </div>
  );
}
