import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectItem {
  number: string;
  title: string;
  category: string;
  description: string;
  builtWith: string[];
  liveUrl?: string;
  buttonText: string;
}

const PROJECTS_DATA: ProjectItem[] = [
  {
    number: '01',
    title: 'MY PERSONAL PORTFOLIO',
    category: 'AI-ASSISTED PORTFOLIO PROJECT',
    description:
      'A personal portfolio website built with the help of AI-assisted development tools, combining creative ideas, experimentation, and modern web technologies into a responsive digital experience. This project represents my journey of learning, building, and exploring what I can create with AI and code.',
    builtWith: ['Google AI Studio', 'AI-assisted development'],
    buttonText: 'VIEW PORTFOLIO →',
  },
  {
    number: '02',
    title: 'GUWAHATI CAFÉ GUIDE',
    category: 'AI-ASSISTED WEB PROJECT',
    description:
      'A website built with the help of AI tools, created as a practical project to explore web design, development, and the possibilities of AI-assisted creation.',
    builtWith: ['Google AI Studio', 'AI-assisted development'],
    liveUrl: 'https://affordable-caf-s-in-guwahati.ai.studio/',
    buttonText: 'VIEW LIVE PROJECT →',
  },
];

export const Projects: React.FC = () => {
  const handleInternalPortfolioClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      id="projects" 
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-[#8B001F]/30 overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#8B001F]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#5A0B1A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10 border-b border-[#8B001F]/30 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#BE123C] uppercase font-bold block mb-1.5">
              PRACTICAL WORK & EXPERIMENTS
            </span>
            <h2 className="font-headline text-3xl xs:text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-white font-black">
              PROJECTS
            </h2>
            <p className="text-neutral-300 text-xs sm:text-sm font-light mt-1.5 max-w-2xl leading-relaxed">
              Selected projects built while learning, experimenting, and developing practical digital skills.
            </p>
          </div>

          <span className="text-[11px] sm:text-xs font-mono text-neutral-400 uppercase tracking-widest self-start md:self-end">
            SELECTED BUILDS (02)
          </span>
        </div>

        {/* 2 Projects Grid - Clean, balanced, medium-sized cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* PROJECT 01: MY PERSONAL PORTFOLIO */}
          <div 
            id="project-card-01"
            className="group relative bg-[#0c0a0b] p-5 sm:p-7 rounded-xs border border-[#8B001F]/25 hover:border-[#8B001F] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            {/* Subtle ambient hover glow gradient */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-[#8B001F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
              aria-hidden="true"
            />

            <div>
              {/* Header: Category Badge + Project Number */}
              <div className="flex items-center justify-between gap-2 pb-2.5 mb-4 border-b border-[#8B001F]/20">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#BE123C] font-bold px-2 py-0.5 bg-[#8B001F]/10 border border-[#8B001F]/30 rounded-xs">
                  {PROJECTS_DATA[0].category}
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#BE123C] tracking-wider">
                  01 //
                </span>
              </div>

              {/* Title */}
              <h3 className="font-headline text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-[#F43F5E] transition-colors mb-2.5">
                {PROJECTS_DATA[0].title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-5">
                {PROJECTS_DATA[0].description}
              </p>

              {/* Built With Tags */}
              <div className="space-y-2 mb-6 pt-3.5 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block font-bold">
                  BUILT WITH:
                </span>
                <div className="flex flex-wrap gap-2">
                  {PROJECTS_DATA[0].builtWith.map((tool) => (
                    <span 
                      key={tool}
                      className="inline-flex items-center gap-1.5 text-xs text-neutral-200 bg-[#070708] px-2.5 py-1 rounded-xs border border-[#8B001F]/20 font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BE123C]" />
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="pt-2">
              <a 
                href="#hero"
                onClick={handleInternalPortfolioClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#8B001F] hover:bg-[#A11D33] text-white font-bold text-xs sm:text-sm tracking-[0.16em] uppercase rounded-xs transition-all duration-300 shadow-md shadow-[#8B001F]/25 hover:-translate-y-0.5 border border-[#BE123C]/50 cursor-pointer"
              >
                <span>{PROJECTS_DATA[0].buttonText}</span>
              </a>
            </div>
          </div>

          {/* PROJECT 02: AFFORDABLE CAFÉS IN GUWAHATI */}
          <div 
            id="project-card-02"
            className="group relative bg-[#0c0a0b] p-5 sm:p-7 rounded-xs border border-[#8B001F]/25 hover:border-[#8B001F] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            {/* Subtle ambient hover glow gradient */}
            <div 
              className="absolute inset-0 bg-gradient-to-tr from-[#8B001F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
              aria-hidden="true"
            />

            <div>
              {/* Header: Category Badge + Project Number */}
              <div className="flex items-center justify-between gap-2 pb-2.5 mb-4 border-b border-[#8B001F]/20">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#BE123C] font-bold px-2 py-0.5 bg-[#8B001F]/10 border border-[#8B001F]/30 rounded-xs">
                  {PROJECTS_DATA[1].category}
                </span>
                <span className="font-mono text-xs sm:text-sm font-bold text-[#BE123C] tracking-wider">
                  02 //
                </span>
              </div>

              {/* Title */}
              <h3 className="font-headline text-2xl sm:text-3xl text-white uppercase tracking-wide group-hover:text-[#F43F5E] transition-colors mb-2.5">
                {PROJECTS_DATA[1].title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-5">
                {PROJECTS_DATA[1].description}
              </p>

              {/* Built With Tags */}
              <div className="space-y-2 mb-6 pt-3.5 border-t border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block font-bold">
                  BUILT WITH:
                </span>
                <div className="flex flex-wrap gap-2">
                  {PROJECTS_DATA[1].builtWith.map((tool) => (
                    <span 
                      key={tool}
                      className="inline-flex items-center gap-1.5 text-xs text-neutral-200 bg-[#070708] px-2.5 py-1 rounded-xs border border-[#8B001F]/20 font-mono"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BE123C]" />
                      <span>{tool}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Button: Opens live project in new tab */}
            <div className="pt-2">
              <a 
                href={PROJECTS_DATA[1].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#8B001F] hover:bg-[#A11D33] text-white font-bold text-xs sm:text-sm tracking-[0.16em] uppercase rounded-xs transition-all duration-300 shadow-md shadow-[#8B001F]/25 hover:-translate-y-0.5 border border-[#BE123C]/50 cursor-pointer group"
              >
                <span>{PROJECTS_DATA[1].buttonText}</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
