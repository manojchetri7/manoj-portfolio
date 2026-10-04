import React from 'react';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePortraitImg from '../assets/images/regenerated_image_1790411853949.jpg';
import { FuturisticTechOrbit } from './FuturisticTechOrbit';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-20 xs:pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent border-b border-[#8B001F]/30"
    >
      {/* Editorial Vignette & Deep Burgundy Glows */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#8B001F]/15 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-10 left-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-[#5A0B1A]/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* Top Editorial Bar */}
      <div className="max-w-7xl mx-auto w-full pt-2 sm:pt-4 pb-3 sm:pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3 border-b border-[#8B001F]/20 text-xs">
        <div>
          <span className="font-headline tracking-widest text-white text-xs xs:text-sm sm:text-base uppercase block">
            {PERSONAL_INFO.name}
          </span>
          <span className="font-mono text-[9px] xs:text-[10px] sm:text-xs text-[#BE123C] tracking-[0.2em] sm:tracking-[0.25em] uppercase font-bold">
            {PERSONAL_INFO.role}
          </span>
        </div>

        <a 
          href={`mailto:${PERSONAL_INFO.email}`}
          className="flex items-center gap-1.5 sm:gap-2 text-neutral-400 hover:text-white transition-colors font-mono text-[10px] xs:text-[11px] sm:text-xs break-all sm:break-normal"
        >
          <Mail className="w-3.5 h-3.5 text-[#BE123C] shrink-0" />
          <span>{PERSONAL_INFO.email}</span>
        </a>
      </div>

      {/* Main Two-Column Hero Layout */}
      <div className="relative max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 py-8 sm:py-12 my-auto z-10">
        
        {/* Left Editorial Content: Headline + Description + Buttons */}
        <div className="flex-1 max-w-2xl text-left select-none w-full">
          
          {/* Main Headline */}
          <h1 
            id="hero-main-headline"
            className="font-headline font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl tracking-tight uppercase leading-[0.98] sm:leading-[0.95] text-white"
          >
            I build<br />
            digital ideas<br />
            <span className="text-[#BE123C]">into impact.</span>
          </h1>

          {/* Description */}
          <p className="text-sm xs:text-base sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed mt-4 sm:mt-6 mb-6 sm:mb-8 max-w-xl">
            Hi, I’m Manoj Chetri, a B.Com student with a growing interest in Digital Marketing, Business, and Technology. I’m currently focused on turning what I learn into practical projects, content creation, and digital marketing experiments.
          </p>

          {/* Buttons: Primary & Secondary */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              id="hero-view-work-btn"
              onClick={onExploreWork}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-[#8B001F] hover:bg-[#A11D33] text-white font-bold text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.2em] uppercase rounded-xs transition-all duration-300 shadow-lg shadow-[#8B001F]/25 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2.5 group border border-[#BE123C]/50"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-contact-btn"
              onClick={onContactClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 bg-[#0c0a0b] hover:bg-[#8B001F]/20 text-white border border-[#8B001F]/40 hover:border-[#BE123C] font-bold text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.2em] uppercase rounded-xs transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              <span>CONTACT ME</span>
            </button>
          </div>

          {/* Metadata badges below CTAs */}
          <div className="mt-8 pt-5 border-t border-[#8B001F]/20 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-neutral-400 font-mono">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
              Available for 2026 Projects
            </span>
            <span className="text-[#8B001F] hidden xs:inline">•</span>
            <span>Based in {PERSONAL_INFO.location}</span>
          </div>

        </div>

        {/* Right Side: Hero Visual & Currently Status Card with Futuristic Tech Orbit Animation */}
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-md xl:max-w-lg shrink-0 flex flex-col items-center lg:items-end mx-auto lg:mx-0">
          
          <div className="relative w-full max-w-[280px] xs:max-w-[310px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[380px] flex flex-col items-center">
            
            {/* Subtle Futuristic Tech Orbit Animation in Red/Burgundy Theme */}
            <FuturisticTechOrbit />

            {/* Deep Burgundy Radial Glow behind portrait */}
            <div className="absolute inset-0 bg-[#8B001F]/30 rounded-2xl blur-3xl scale-95 pointer-events-none" />

            {/* Hero Image Frame */}
            <div className="relative z-10 w-full aspect-[4/5] rounded-xs overflow-hidden border border-[#8B001F]/50 shadow-[0_20px_60px_rgba(0,0,0,0.9)] bg-[#0d0a0b]">
              <img 
                src={profilePortraitImg} 
                alt="Manoj Chetri - Digital Marketing & Business"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/85 via-transparent to-transparent pointer-events-none" />
              
              {/* Corner Tag */}
              <div className="absolute top-3 right-3 px-2 py-0.5 bg-[#070708]/90 border border-[#8B001F]/40 rounded-xs text-[9px] font-mono text-[#BE123C] font-bold tracking-widest uppercase">
                EDITION 2026
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Hero Bottom Editorial Bar with Scroll Indicator */}
      <div className="relative pt-4 sm:pt-6 border-t border-[#8B001F]/25 w-full mt-6">
        <div className="flex items-center justify-between text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 uppercase font-mono max-w-7xl mx-auto">
          <span className="hidden md:inline-block">MANOJ CHETRI // PORTFOLIO</span>
          
          <button 
            onClick={onExploreWork}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer mx-auto md:mx-0 group text-[#BE123C] font-semibold"
          >
            <span>— SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:translate-y-1 text-white" />
          </button>

          <span className="hidden md:inline-block text-[#BE123C]">EDITION // 2026</span>
        </div>
      </div>
    </section>
  );
};
