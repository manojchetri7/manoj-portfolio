import React from 'react';
import { ArrowDown, MoveRight, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePortraitImg from '../assets/images/regenerated_image_1790411853949.jpg';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[95vh] lg:min-h-screen flex flex-col justify-between pt-20 xs:pt-22 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#070708] bg-dark-editorial border-b border-[#8B001F]/30"
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

      {/* Main Magazine Cover Hero Layout */}
      <div className="relative max-w-7xl mx-auto w-full flex-1 flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-12 py-6 sm:py-10 my-auto z-10">
        
        {/* Left Editorial Content (Dominant Headline + Tagline + Buttons) */}
        <div className="flex-1 max-w-3xl text-left select-none w-full">
          
          {/* Subtle Burgundy Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-xs border border-[#8B001F]/40 bg-[#8B001F]/10 mb-3 sm:mb-4 max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BE123C] shrink-0" />
            <span className="text-[9px] xs:text-[10px] sm:text-xs font-mono tracking-[0.18em] sm:tracking-[0.25em] uppercase text-[#F3F4F6] font-semibold truncate">
              DIGITAL MARKETING / BUSINESS & VISUAL CREATIVE
            </span>
          </div>

          {/* DOMINANT EDITORIAL HEADLINE: PORTFOLIO in Deep Burgundy / Crimson */}
          <div className="w-full overflow-hidden">
            <h1 
              id="hero-main-headline"
              className="font-serif-title text-[13vw] xs:text-[14vw] sm:text-[13vw] md:text-[84px] lg:text-[104px] xl:text-[165px] font-black leading-[0.85] tracking-tight uppercase text-[#9E1B32] drop-shadow-[0_8px_30px_rgba(139,0,31,0.3)] break-normal"
            >
              PORTFOLIO
            </h1>
          </div>

          {/* Large Clean White Subheading: DIGITAL MARKETER */}
          <div className="mt-2 sm:mt-3">
            <h2 className="font-headline text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide uppercase text-white font-black leading-tight">
              DIGITAL MARKETER
            </h2>
          </div>

          {/* Description / Tagline */}
          <p className="text-sm xs:text-base sm:text-base md:text-lg lg:text-xl text-neutral-300 font-light leading-relaxed mt-3 sm:mt-5 md:mt-6 mb-6 sm:mb-8 max-w-2xl">
            {PERSONAL_INFO.tagline}
          </p>

          {/* CTA Buttons - Burgundy Filled & Dark Bordered */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              id="hero-view-work-btn"
              onClick={onExploreWork}
              className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-3.5 bg-[#8B001F] hover:bg-[#A11D33] text-white font-bold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase rounded-xs transition-all duration-300 shadow-lg shadow-[#8B001F]/25 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group border border-[#BE123C]/40"
            >
              <span>EXPLORE SKILLS & CERTS</span>
              <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="hero-contact-btn"
              onClick={onContactClick}
              className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-3.5 bg-black/40 hover:bg-[#8B001F]/10 text-white border border-white/20 hover:border-[#BE123C] font-bold text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase rounded-xs transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
            >
              LET'S WORK TOGETHER
            </button>
          </div>

          {/* Metadata badges below CTAs */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-2 sm:gap-4 md:gap-6 text-[11px] sm:text-xs text-neutral-400 font-mono">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
              Available for 2026 Projects
            </span>
            <span className="text-[#8B001F] hidden xs:inline">•</span>
            <span>Based in {PERSONAL_INFO.location}</span>
            <span className="text-[#8B001F] hidden sm:inline">•</span>
            <span className="text-white font-semibold">Digital Marketing • Business Strategy</span>
          </div>
        </div>

        {/* Right Side: Editorial Magazine Portrait Element with Deep Burgundy Backing */}
        <div className="relative w-full max-w-[240px] xs:max-w-[270px] sm:max-w-[260px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-md shrink-0 flex justify-center mx-auto xl:mx-0 mt-6 xl:mt-0">
          {/* Deep Burgundy Radial Glow behind portrait */}
          <div className="absolute inset-0 bg-[#8B001F]/30 rounded-2xl blur-3xl scale-95 pointer-events-none" />

          {/* Minimal Border Frame */}
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#8B001F]/50 shadow-[0_20px_60px_rgba(0,0,0,0.9)] bg-[#0d0a0b]">
            <img 
              src={profilePortraitImg} 
              alt="Manoj Chetri - Digital Marketing & Business"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/80 via-transparent to-transparent pointer-events-none" />
            
            {/* Editorial Caption Tag */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3 bg-[#070708]/90 backdrop-blur-md border border-[#8B001F]/30 rounded-xs flex items-center justify-between">
              <div>
                <p className="text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-[#BE123C] font-bold">EDITION 2026</p>
                <p className="font-headline text-sm sm:text-base text-white tracking-wide">MANOJ CHETRI</p>
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono font-bold px-1.5 sm:px-2 py-0.5 bg-[#8B001F]/40 border border-[#BE123C]/50 text-white rounded-xs">
                INDIA
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Editorial Bar */}
      <div className="relative pt-3 sm:pt-4 border-t border-[#8B001F]/25 w-full">
        <div className="flex items-center justify-between text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 uppercase font-mono max-w-7xl mx-auto">
          <span className="hidden md:inline-block">MANOJ CHETRI // EDITORIAL PORTFOLIO</span>
          
          <button 
            onClick={onExploreWork}
            className="flex items-center gap-1.5 sm:gap-2 hover:text-white transition-colors cursor-pointer mx-auto md:mx-0 group text-[#BE123C]"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3 sm:w-3.5 h-3 sm:h-3.5 animate-bounce group-hover:translate-y-1 text-white" />
          </button>

          <span className="hidden md:inline-block text-[#BE123C]">DIGITAL MARKETING // 2026</span>
        </div>
      </div>
    </section>
  );
};
