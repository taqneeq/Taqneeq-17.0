"use client";
import { useState } from 'react';
import { Crown, Gem, Shield, Rocket, Diamond, Star, Award, CheckCircle, Bolt, ArrowRight } from 'lucide-react';

const getIconComponent = (name) => {
  const icons = {
    crown: Crown,
    gem: Gem,
    shield: Shield,
    rocket: Rocket,
    diamond: Diamond,
  };
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent size={32} /> : null;
};

const getTitleIcon = (name) => {
  const icons = {
    star: Star,
    'check-circle': CheckCircle,
    bolt: Bolt,
    award: Award,
    crown: Crown,
  };
  const IconComponent = icons[name];
  return IconComponent ? <IconComponent size={20} /> : null;
};

const Card = ({ icon, titleIcon, title, description, buttonText }) => {
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
          <div className={`absolute inset-0 bg-radial-gradient opacity-0 transition-opacity duration-500 mix-blend-overlay ${isHovered ? 'opacity-100' : ''}`} />
          <div className="text-white/90 transform transition-transform duration-500 hover:scale-110 hover:-translate-y-1">
            {getIconComponent(icon)}
          </div>
        </div>

        <h2 className="text-white text-2xl font-semibold flex items-center gap-2 transition-all duration-300 transform-gpu font-BSD">
          <span className="text-brandRed transition-all duration-300">
            {getTitleIcon(titleIcon)}
          </span>
          {title}
        </h2>

        <p className="text-brandOffWhite font-ibm leading-relaxed text-base transition-all duration-300">
          {description}
        </p>

        <button className="flex font-BSD items-center gap-2 px-6 py-3 bg-gradient-to-r from-brandRed via-red-500 to-[#d4477f] text-white rounded-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brandRed/30 hover:tracking-wide w-fit">
          {buttonText}
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

const PremiumCardGrid = () => {
  const cards = [
    {
      icon: 'crown',
      titleIcon: 'star',
      title: 'Evevnt 1',
      description: 'Experience the next level of premium features with our advanced hover animations and modern design.',
      buttonText: 'Learn More'
    },
    {
      icon: 'gem',
      titleIcon: 'check-circle',
      title: 'Evevnt 2',
      description: 'Unlock exclusive benefits with our elite membership card featuring premium effects.',
      buttonText: 'Explore'
    },
    {
      icon: 'shield',
      titleIcon: 'check-circle',
      title: 'Evevnt 3',
      description: 'Experience state-of-the-art design with our modern premium card collection system.',
      buttonText: 'View More'
    },
    {
      icon: 'rocket',
      titleIcon: 'bolt',
      title: 'Evevnt 4',
      description: 'Take your experience to new heights with our professional grade premium features.',
      buttonText: 'Get Started'
    },
    {
      icon: 'diamond',
      titleIcon: 'award',
      title: 'Evevnt 4',
      description: 'Discover the epitome of luxury with our premium card collection and features.',
      buttonText: 'Details'
    },
    {
      icon: 'crown',
      titleIcon: 'crown',
      title: 'Evevnt 5',
      description: 'Experience unmatched premium features with our elite plus membership tier.',
      buttonText: 'Subscribe'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center p-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="relative mb-24">
        <hr className="w-1/2 border-2 md:border-4 absolute top-10 -left-1/4 text-brandOffWhite opacity-70"></hr>
        <h1 className="font-BSD text-4xl md:text-5xl text-white absolute top-5 left-1/4 ml-4">/ [ Events ]</h1>
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