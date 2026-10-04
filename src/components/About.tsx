import React from 'react';
import { MapPin, Palette, Award, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import profilePortraitImg from '../assets/images/regenerated_image_1790411853949.jpg';

export const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-[#8B001F]/30 overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#8B001F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* 2-Column Editorial Grid matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center">
          
          {/* Column 1: Image area on one side with clean minimal border & subtle burgundy glow */}
          <div className="md:col-span-5 relative flex justify-center order-2 md:order-1">
            <div className="relative group w-full max-w-[260px] xs:max-w-xs sm:max-w-sm md:max-w-full">
              {/* Deep burgundy ambient back-glow */}
              <div className="absolute -inset-2 bg-[#8B001F]/20 rounded-2xl blur-xl group-hover:bg-[#8B001F]/30 transition-all pointer-events-none" />

              {/* Minimal Border Frame */}
              <div className="relative bg-[#0d0a0b] rounded-xl p-2 border border-[#8B001F]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-neutral-900 relative">
                  <img 
                    src={profilePortraitImg} 
                    alt="Manoj Chetri - B.Com Student & Digital Marketing Explorer"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Subtle dark vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/90 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Name Overlay Tag inside image */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#070708]/90 backdrop-blur-md border border-[#8B001F]/30 p-2.5 sm:p-3 rounded-xs flex items-center justify-between">
                    <div>
                      <p className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#BE123C] font-mono font-bold">ABOUT / PROFILE</p>
                      <p className="font-headline text-base sm:text-lg text-white tracking-wide">{PERSONAL_INFO.name}</p>
                    </div>
                    <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 bg-[#8B001F] text-white font-mono font-bold rounded-xs">
                      INDIA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Bio & Metadata Blocks with Large "ABOUT ME" */}
          <div className="md:col-span-7 space-y-5 sm:space-y-6 md:space-y-6 lg:space-y-7 order-1 md:order-2">
            
            <div className="space-y-3 sm:space-y-4">
              {/* Large "ABOUT ME" Typography Treatment (as in reference image with "ME" in burgundy) */}
              <div className="border-b border-[#8B001F]/30 pb-3 sm:pb-4">
                <h2 className="font-headline text-4xl xs:text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase text-white font-black">
                  ABOUT <span className="text-[#9E1B32]">ME</span>
                </h2>
              </div>

              {/* User's exact bio text preserved */}
              <p className="text-lg xs:text-xl sm:text-2xl font-light text-white leading-relaxed">
                Hi, I'm <strong className="text-white font-bold">Manoj Chetri</strong>, a B.Com student with a growing interest in <span className="text-[#BE123C] font-semibold underline decoration-2 underline-offset-4 decoration-[#8B001F]">Digital Marketing, Business, and Technology</span>.
              </p>

              {/* Body paragraphs with structured formatting */}
              <div className="space-y-3 sm:space-y-4 text-sm xs:text-base sm:text-lg text-neutral-300 leading-relaxed font-light">
                <p>
                  At the moment, I’m focused on turning my theoretical knowledge into practical experience through <strong className="text-white font-semibold">personal projects, content creation, and digital marketing experiments</strong>. I enjoy exploring new ideas, learning how digital platforms work, and developing skills that can help businesses build and grow their online presence.
                </p>
                <p>
                  I’m curious, eager to learn, and continuously working on improving my skills. My long-term goal is to build a career in <strong className="text-white font-semibold">Digital Marketing</strong>, where I can combine my B.Com background with digital skills to create meaningful results for businesses.
                </p>
                <div className="p-3.5 sm:p-4 rounded-xs bg-[#8B001F]/10 border border-[#8B001F]/30 text-neutral-200 text-xs xs:text-sm sm:text-base flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#BE123C] mt-1.5 sm:mt-2 shrink-0 shadow-[0_0_6px_rgba(190,18,60,0.8)]" />
                  <p>
                    This portfolio represents my <strong className="text-[#F43F5E] font-semibold">learning journey, skills, projects, and progress</strong> as I prepare for future opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Information Blocks with Thin Burgundy Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#8B001F]/20">
              
              <div className="p-4 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/25 hover:border-[#8B001F] transition-colors">
                <div className="flex items-center gap-2 text-[#BE123C] text-xs font-mono font-bold tracking-wider mb-1 uppercase">
                  <MapPin className="w-4 h-4 text-[#BE123C]" />
                  LOCATION
                </div>
                <p className="text-base font-bold text-white tracking-wide">
                  {PERSONAL_INFO.location}
                </p>
                <p className="text-xs text-neutral-400 mt-1">Available Globally (Remote)</p>
              </div>

              <div className="p-4 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/25 hover:border-[#8B001F] transition-colors">
                <div className="flex items-center gap-2 text-[#BE123C] text-xs font-mono font-bold tracking-wider mb-1 uppercase">
                  <Palette className="w-4 h-4 text-[#BE123C]" />
                  FOCUS AREAS
                </div>
                <p className="text-sm font-bold text-white tracking-tight leading-snug">
                  Marketing • Business • Tech
                </p>
                <p className="text-xs text-neutral-400 mt-1">Digital Growth & Content</p>
              </div>

              <div className="p-4 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/25 hover:border-[#8B001F] transition-colors">
                <div className="flex items-center gap-2 text-[#BE123C] text-xs font-mono font-bold tracking-wider mb-1 uppercase">
                  <Award className="w-4 h-4 text-[#BE123C]" />
                  ACADEMIC
                </div>
                <p className="text-base font-bold text-white tracking-wide">
                  B.Com Student
                </p>
                <p className="text-xs text-neutral-400 mt-1">Practical Learning & Projects</p>
              </div>
            </div>

            {/* Core Working Principles */}
            <div className="pt-2">
              <h4 className="text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase font-bold mb-3">
                CORE WORKING PRINCIPLES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-neutral-300 font-light">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE123C]" />
                  <span>Data-driven audience targeting & analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE123C]" />
                  <span>High-impact digital content & campaigns</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE123C]" />
                  <span>Business reporting & spreadsheet modeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE123C]" />
                  <span>Continuous learning & practical execution</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
