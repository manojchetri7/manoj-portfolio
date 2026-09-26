import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { YellowSquiggle, CropMark } from './Decorations';

export const DesignProcess: React.FC = () => {
  return (
    <section 
      id="process" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#090909] border-b border-white/10 overflow-hidden"
    >
      <CropMark position="top-right" className="absolute top-12 right-12 hidden md:block" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="relative inline-block">
            <span className="text-xs font-mono tracking-[0.25em] text-[#FFB000] uppercase font-bold flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              METHODOLOGY // STEP-BY-STEP
            </span>
            <h2 className="font-headline text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-white font-black">
              MY PROCESS
            </h2>
            <span 
              className="absolute -bottom-5 sm:-bottom-7 left-24 sm:left-48 font-script text-4xl sm:text-6xl text-[#FFB000] font-bold rotate-[-3deg] whitespace-nowrap drop-shadow-md"
              aria-hidden="true"
            >
              Workflow
            </span>
          </div>

          <p className="text-sm font-mono text-neutral-400 max-w-sm">
            From preliminary brief exploration to print-ready press files and viral social campaigns.
          </p>
        </div>

        {/* 6 Steps Grid / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((item) => (
            <div
              key={item.step}
              id={`process-step-${item.step}`}
              className="group relative bg-[#131313] p-8 rounded-xl border border-white/10 hover:border-[#FFB000]/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#FFB000]/5 flex flex-col justify-between"
            >
              {/* Top Accent line & Step Number */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <span className="font-headline text-5xl sm:text-6xl text-[#FFB000] font-black group-hover:scale-105 transition-transform">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-2 py-1 bg-white/5 rounded">
                    PHASE {item.step}
                  </span>
                </div>

                <h3 className="font-headline text-2xl text-white tracking-wide group-hover:text-[#FFB000] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-mono font-semibold text-neutral-300 mb-3 uppercase tracking-wider">
                  {item.tagline}
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom detail pill */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500">
                <span className="font-mono text-[11px] text-neutral-400">DESIGN DISCIPLINE</span>
                <ArrowRight className="w-4 h-4 text-[#FFB000] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
