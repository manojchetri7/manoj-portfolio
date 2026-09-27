import React from 'react';
import { 
  Megaphone, 
  Laptop, 
  Share2, 
  PenTool, 
  Search, 
  Globe, 
  TrendingUp, 
  Table, 
  LayoutGrid, 
  Layers, 
  Share 
} from 'lucide-react';
import { SOFTWARE_TOOLS } from '../data/portfolioData';

export const SkillsTools: React.FC = () => {
  // Exact user-specified skills with matching red icons
  const skillsList = [
    { title: 'Digital Marketing Fundamentals', icon: Megaphone },
    { title: 'Computer Applications', icon: Laptop },
    { title: 'Social Media Marketing', icon: Share2 },
    { title: 'Content Creation', icon: PenTool },
    { title: 'SEO Fundamentals', icon: Search },
    { title: 'Online Marketing Fundamentals', icon: Globe },
    { title: 'Basic Market & Competitor Research', icon: TrendingUp },
  ];

  return (
    <section 
      id="skills" 
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#070708] border-b border-[#8B001F]/30 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#8B001F]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 border-b border-[#8B001F]/30 pb-3 sm:pb-4">
          <span className="text-xs font-mono tracking-[0.25em] text-[#BE123C] uppercase font-bold block mb-2">
            CORE EXPERTISE & DIGITAL CAPABILITIES
          </span>
          <h2 className="font-headline text-4xl xs:text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase text-white font-black">
            PERSONAL <span className="text-[#9E1B32]">SKILLS</span>
          </h2>
        </div>

        {/* 2-Column Grid: Editorial Skills List on Left, Tools I Use on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Personal Skills Editorial List (Matches Reference) */}
          <div className="md:col-span-7 space-y-3 sm:space-y-4">
            <span className="text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase font-semibold block mb-2 sm:mb-4">
              SPECIALIZED SKILLS
            </span>

            <div className="space-y-2.5 sm:space-y-3">
              {skillsList.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div
                    key={skill.title}
                    className="p-3 xs:p-4 sm:p-4.5 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/20 hover:border-[#8B001F]/60 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-2.5 xs:gap-3.5">
                      {/* Red icon container matching reference */}
                      <div className="w-7 h-7 xs:w-8 xs:h-8 rounded-xs bg-[#8B001F]/20 border border-[#BE123C]/40 flex items-center justify-center shrink-0 text-[#BE123C] group-hover:scale-110 transition-transform">
                        <IconComponent className="w-3.5 h-3.5 xs:w-4 xs:h-4" />
                      </div>
                      
                      <span className="font-headline text-base xs:text-lg sm:text-xl text-white tracking-wide uppercase group-hover:text-[#F43F5E] transition-colors">
                        {skill.title}
                      </span>
                    </div>

                    <span className="font-mono text-xs text-[#BE123C] font-bold">
                      0{index + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Tools I Use (Dark Square Tiles matching Reference) */}
          <div className="md:col-span-5 space-y-4 sm:space-y-6">
            <div>
              <span className="text-xs font-mono tracking-[0.2em] text-[#BE123C] uppercase font-bold block mb-1 sm:mb-2">
                PLATFORMS & WORKFLOWS
              </span>
              <h3 className="font-headline text-2xl xs:text-3xl sm:text-4xl text-white tracking-wide uppercase">
                TOOLS I USE
              </h3>
            </div>

            {/* Dark Minimal Square Tiles Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              {SOFTWARE_TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="p-3.5 xs:p-4 sm:p-5 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/25 hover:border-[#8B001F] transition-all flex flex-col justify-between min-h-[120px] sm:min-h-[140px] group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-[#BE123C]">
                      {tool.abbr}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BE123C] group-hover:scale-150 transition-transform shadow-[0_0_6px_rgba(190,18,60,0.8)]" />
                  </div>

                  <div>
                    <h4 className="font-headline text-lg sm:text-xl text-white tracking-wide uppercase group-hover:text-[#F43F5E] transition-colors">
                      {tool.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 font-light line-clamp-2">
                      {tool.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Summary Note */}
            <div className="p-4 rounded-xs bg-[#8B001F]/10 border border-[#8B001F]/30 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
              <p>
                Proficient with industry-standard digital tools for spreadsheet modeling, analytics, campaign execution, and social media scheduling.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
