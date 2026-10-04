import React from 'react';
import { 
  Laptop, 
  TrendingUp, 
  Instagram, 
  Globe, 
  Target, 
  Megaphone, 
  Search 
} from 'lucide-react';

export const FuturisticTechOrbit: React.FC = () => {
  return (
    <div 
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0 overflow-visible flex items-center justify-center scale-[0.55] xs:scale-[0.65] sm:scale-[0.76] md:scale-[0.86] lg:scale-100 xl:scale-105 transition-transform duration-500"
      aria-hidden="true"
    >
      {/* 1. Deep Burgundy / Crimson Ambient Aura */}
      <div 
        className="absolute w-[420px] h-[420px] sm:w-[500px] sm:h-[500px] rounded-full bg-gradient-to-tr from-[#8B001F]/40 via-[#BE123C]/25 to-transparent blur-[75px] animate-orbit-glow pointer-events-none" 
      />
      <div 
        className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full bg-[#BE123C]/20 blur-[50px] pointer-events-none" 
      />

      {/* 2. Inner Orbit Ring (~380px) with Glowing Beacon Nodes */}
      <div className="absolute w-[360px] h-[360px] sm:w-[390px] sm:h-[390px] rounded-full border border-[#BE123C]/40 shadow-[0_0_15px_rgba(190,18,60,0.3)] pointer-events-none">
        {/* Subtle luminous accent arc */}
        <div className="absolute inset-0 rounded-full border-t border-l border-t-[#F43F5E]/70 border-l-transparent blur-[0.5px]" />
        
        {/* Glowing orbit nodes matching reference */}
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#F43F5E]" />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#BE123C] shadow-[0_0_8px_#BE123C]" />
        <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#BE123C] shadow-[0_0_8px_#BE123C]" />
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#F43F5E] shadow-[0_0_10px_#BE123C]" />
      </div>

      {/* 3. Middle Orbit Ring (~520px) Rotating Slowly Counter-Clockwise */}
      <div className="absolute w-[490px] h-[490px] sm:w-[530px] sm:h-[530px] rounded-full border border-dashed border-[#BE123C]/35 animate-orbit-reverse-slow pointer-events-none">
        
        {/* Glowing Light Trail Arc following the orbit path */}
        <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-transparent border-t-[#F43F5E]/60 border-r-[#8B001F]/40 blur-[0.5px]" />
        
        {/* Bright Glowing Comet Node */}
        <div className="absolute top-[14%] right-[14%] w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_14px_#F43F5E] ring-4 ring-[#BE123C]/40" />
        <div className="absolute bottom-[18%] left-[16%] w-2 h-2 rounded-full bg-[#BE123C] shadow-[0_0_10px_#BE123C]" />

        {/* ICON 1 (Top-Left ~315°): TRENDING UP (Analytics & Growth) */}
        <div className="absolute top-[8%] left-[18%] translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-rotate-reverse-slow">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0c0a0b]/90 border border-[#BE123C]/60 flex items-center justify-center shadow-[0_0_20px_rgba(190,18,60,0.6)] backdrop-blur-md">
              <TrendingUp className="w-5 h-5 text-white" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#F43F5E] shadow-[0_0_8px_#F43F5E]" />
            </div>
          </div>
        </div>

        {/* ICON 2 (Bottom-Left ~225°): GLOBE (Digital Marketing & Web) */}
        <div className="absolute bottom-[8%] left-[18%] translate-x-1/2 translate-y-1/2">
          <div className="animate-counter-rotate-reverse-slow">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0c0a0b]/90 border border-[#BE123C]/60 flex items-center justify-center shadow-[0_0_20px_rgba(190,18,60,0.6)] backdrop-blur-md">
              <Globe className="w-5 h-5 text-white" />
              <span className="absolute -bottom-0.5 -left-0.5 w-2 h-2 rounded-full bg-[#F43F5E] shadow-[0_0_8px_#F43F5E]" />
            </div>
          </div>
        </div>

        {/* ICON 3 (Bottom-Right ~135°): MEGAPHONE (Campaigns & Promotion) */}
        <div className="absolute bottom-[8%] right-[18%] -translate-x-1/2 translate-y-1/2">
          <div className="animate-counter-rotate-reverse-slow">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0c0a0b]/90 border border-[#BE123C]/60 flex items-center justify-center shadow-[0_0_20px_rgba(190,18,60,0.6)] backdrop-blur-md">
              <Megaphone className="w-5 h-5 text-white" />
              <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#F43F5E] shadow-[0_0_8px_#F43F5E]" />
            </div>
          </div>
        </div>

      </div>

      {/* 4. Outer Orbit Ring (~680px) Rotating Smoothly Clockwise */}
      <div className="absolute w-[640px] h-[640px] sm:w-[690px] sm:h-[690px] rounded-full border border-[#8B001F]/40 animate-orbit-slow pointer-events-none">
        
        {/* Soft Glowing Light Trails along the outer perimeter */}
        <div className="absolute inset-0 rounded-full border-b-2 border-l-2 border-transparent border-b-[#BE123C]/60 border-l-[#F43F5E]/30 blur-[0.5px]" />
        
        {/* Bright Glowing Trail Comet Nodes */}
        <div className="absolute bottom-[3%] left-[45%] w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_14px_#F43F5E] ring-4 ring-[#BE123C]/40" />
        <div className="absolute top-[6%] right-[35%] w-2 h-2 rounded-full bg-[#BE123C] shadow-[0_0_10px_#BE123C]" />

        {/* ICON 4 (Top 0°): LAPTOP (Coding, Tools & Tech) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-rotate-slow">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0c0a0b]/90 border border-[#BE123C]/60 flex items-center justify-center shadow-[0_0_22px_rgba(190,18,60,0.65)] backdrop-blur-md">
              <Laptop className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
              <span className="absolute -top-0.5 right-0.5 w-2 h-2 rounded-full bg-[#F43F5E] shadow-[0_0_8px_#F43F5E]" />
            </div>
          </div>
        </div>

        {/* ICON 5 (Mid-Left 270°): INSTAGRAM (Social Media & Creative) */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-rotate-slow">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0c0a0b]/90 border border-[#BE123C]/60 flex items-center justify-center shadow-[0_0_22px_rgba(190,18,60,0.65)] backdrop-blur-md">
              <Instagram className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
              <span className="absolute -top-0.5 left-0.5 w-2 h-2 rounded-full bg-[#F43F5E] shadow-[0_0_8px_#F43F5E]" />
            </div>
          </div>
        </div>

        {/* ICON 6 (Bottom 180°): TARGET (Strategic Marketing & Goals) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
          <div className="animate-counter-rotate-slow">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0c0a0b]/90 border border-[#BE123C]/60 flex items-center justify-center shadow-[0_0_22px_rgba(190,18,60,0.65)] backdrop-blur-md">
              <Target className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
              <span className="absolute bottom-0.5 -left-0.5 w-2 h-2 rounded-full bg-[#F43F5E] shadow-[0_0_8px_#F43F5E]" />
            </div>
          </div>
        </div>

        {/* ICON 7 (Mid-Right 90°): SEARCH (SEO & Market Insights) */}
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
          <div className="animate-counter-rotate-slow">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#0c0a0b]/90 border border-[#BE123C]/60 flex items-center justify-center shadow-[0_0_22px_rgba(190,18,60,0.65)] backdrop-blur-md">
              <Search className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
              <span className="absolute -bottom-0.5 right-0.5 w-2 h-2 rounded-full bg-[#F43F5E] shadow-[0_0_8px_#F43F5E]" />
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
