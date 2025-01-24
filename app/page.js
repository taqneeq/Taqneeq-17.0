import Image from "next/image";
import Hero from "@/app/screens/hero";
import About from "@/app/screens/about";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
    </div>
  );
}
