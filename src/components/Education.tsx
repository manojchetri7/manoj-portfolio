import React from 'react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  // Ordered timeline matching Manoj's academic progression
  const timelineItems = [
    {
      ...EDUCATION.find(e => e.id === 'edu-college') || EDUCATION[2],
      period: '2022 – PRESENT',
    },
    {
      ...EDUCATION.find(e => e.id === 'edu-higher-secondary') || EDUCATION[1],
      period: '2020 – 2022',
    },
    {
      ...EDUCATION.find(e => e.id === 'edu-school') || EDUCATION[0],
      period: '2018 – 2020',
    },
  ];

  return (
    <section 
      id="education" 
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#070708] border-b border-[#8B001F]/30 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#8B001F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-16 border-b border-[#8B001F]/30 pb-3 sm:pb-4">
          <span className="text-xs font-mono tracking-[0.25em] text-[#BE123C] uppercase font-bold block mb-2">
            ACADEMIC BACKGROUND & MILESTONES
          </span>
          <h2 className="font-headline text-4xl xs:text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase text-white font-black">
            EDUCATION
          </h2>
        </div>

        {/* Editorial Timeline Container */}
        <div className="relative pl-5 sm:pl-10">
          
          {/* Continuous Burgundy Timeline Line */}
          <div 
            className="absolute left-[6px] sm:left-[11px] top-3 bottom-6 w-[2px] bg-gradient-to-b from-[#BE123C] via-[#8B001F] to-[#5A0B1A]/40" 
            aria-hidden="true" 
          />

          <div className="space-y-8 sm:space-y-12">
            {timelineItems.map((item) => (
              <div 
                key={item.id}
                id={`education-timeline-${item.number}`}
                className="relative group"
              >
                {/* Small circular red timeline marker */}
                <div 
                  className="absolute -left-[26px] sm:-left-[46px] top-2 sm:top-1.5 w-3.5 h-3.5 rounded-full bg-[#BE123C] ring-4 ring-[#8B001F]/30 shadow-[0_0_10px_rgba(190,18,60,0.8)] group-hover:scale-125 transition-transform" 
                  aria-hidden="true" 
                />

                {/* Timeline Item Content Card (Minimal flat dark surface) */}
                <div className="p-4 xs:p-5 sm:p-7 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/20 hover:border-[#8B001F]/60 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      {/* Education Title & Level */}
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#BE123C] uppercase block mb-1">
                        {item.level}
                      </span>
                      <h3 className="font-headline text-xl xs:text-2xl sm:text-3xl text-white tracking-wide uppercase">
                        {item.title}
                      </h3>
                      <p className="text-xs xs:text-sm sm:text-base font-medium text-neutral-300 mt-1">
                        {item.institution}
                      </p>
                    </div>

                    {/* Clean Date in Crimson Red on the Right */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0 pt-1 sm:pt-0">
                      <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#BE123C]">
                        {item.period}
                      </span>
                      <span className={`text-[9px] xs:text-[10px] font-mono font-bold tracking-widest px-2 sm:px-2.5 py-0.5 rounded-xs uppercase ${
                        item.status === 'COMPLETED'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                          : 'bg-[#8B001F]/20 text-white border border-[#BE123C]/40'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs xs:text-sm sm:text-base text-neutral-400 font-light leading-relaxed pt-2 border-t border-white/5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
