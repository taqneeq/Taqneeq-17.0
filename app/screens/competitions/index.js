"use client";
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// const getIconComponent = (name) => {
//   const icons = {
//     crown: Crown,
//     gem: Gem,
//     shield: Shield,
//     rocket: Rocket,
//     diamond: Diamond,
//   };
//   const IconComponent = icons[name];
//   return IconComponent ? <IconComponent size={32} /> : null;
// };

// const getTitleIcon = (name) => {
//   const icons = {
//     star: Star,
//     'check-circle': CheckCircle,
//     bolt: Bolt,
//     award: Award,
//     crown: Crown,
//   };
//   const IconComponent = icons[name];
//   return IconComponent ? <IconComponent size={20} /> : null;
// };

const Card = ({ title, description, buttonText, link, bgLink }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setMousePosition({ x, y });
    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    e.currentTarget.style.transform = '';
  };

  return (
    <div
      className="relative bg-[#12141c]/70 rounded-[20px] overflow-hidden cursor-pointer transition-all duration-500 transform-gpu border border-white/5 backdrop-blur-lg hover:-translate-y-2 hover:scale-105 hover:bg-[#1a1d2a]/80 hover:shadow-lg hover:shadow-brandRed/10"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="p-8 flex flex-col gap-6 h-full relative z-10">
        <div className="h-40 border-2 border-brandOffWhite rounded-xl relative overflow-hidden flex items-center justify-center">
          <div className={`absolute inset-0 bg-radial-gradient opacity-100 transition-opacity duration-500 mix-blend-overlay ${isHovered ? 'opacity-100' : ''}`} 
          style={{ backgroundImage: `url(${bgLink})`, backgroundSize: 'cover',
          backgroundPosition: 'center', }} />
          <div className="text-white/90 transform transition-transform duration-500 hover:scale-110 hover:-translate-y-1">
            
          </div>
        </div>

        <h2 className="text-white text-2xl font-semibold flex items-center gap-2 transition-all duration-300 transform-gpu font-BSD">
          
          {title}
        </h2>

        <p className="text-brandOffWhite font-ibm leading-relaxed text-base transition-all duration-300">
          {description}
        </p>

        <a href={link} target="_blank" rel="noopener noreferrer" className="inline-block">
            <button className="flex font-BSD items-center gap-2 px-6 py-3 bg-gradient-to-r from-brandRed via-red-500 to-[#d4477f] text-white rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brandRed/30 hover:tracking-wide w-fit">
            {buttonText}
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
        </a>
      </div>
    </div>
  );
};

const PremiumCardGrid = () => {
  const cards = [
    {
      title: 'CONTROL SHIFT: The NEW Ultimate Esports Showdown ',
      description: 'Taqneeq 17.0 brings you CONTROL SHIFT, the battleground where skill meets strategy! Get ready for high-stakes esports action as you compete in FIFA  and VALORANT  to prove your dominance.',
      buttonText: 'Learn More!',
      link: 'https://ctrl-shift.taqneeqfest.com/',
      bgLink: 'https://cdn.sanity.io/images/zoz4y99f/production/63fe73d90694450859da70fe142d72e445a0a9cc-1600x900.jpg?w=1600&auto=format'
    },
    {
      title: 'BETAVERSE: Where Reality is Overrated',
      description: 'Experience the future with BETAVERSE, an immersive AR/VR competition where creativity meets technology to redefine storytelling and digital interaction.',
      buttonText: 'Learn More!',
      link: '#',
      bgLink: 'https://www.ediiie.com/blog/assets/admin/uploads/careers-options-in-ar-vr.jpg'
    },
    {
      title: 'VR Storytelling & Animation Competition',
      description: 'Unleash your creativity and technical prowess by crafting an immersive VR experience or animated story using Unity, Unreal Engine, or other platforms.',
      buttonText: 'Learn More!',
      link: '#',
      bgLink: 'https://www.consultantsreview.com/newstransfer/upload/289jpXiaomi-VR.jpg'
    },
    {
      title: 'Cyber Cypher: The Ultimate Tech Showdown!',
      description: 'An 18-hour coding marathon where developers compete for a ₹1,50,000 prize pool, showcasing their problem-solving skills in UI/UX and Generative AI challenges.',
      buttonText: 'Learn More!',
      link: 'https://cybercypher.taqneeqfest.com/',
      bgLink: 'https://nybles.github.io/adam/assets/hackathon-bigpic.jpg'
    },
    
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative mb-24">
        <hr className="w-1/2 border-2 md:border-4 absolute top-10 -left-1/4 text-brandOffWhite opacity-70"></hr>
        <h1 className="font-BSD text-4xl md:text-5xl text-white absolute top-5 left-1/4 ml-4">/ [ Competitions ]</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumCardGrid;