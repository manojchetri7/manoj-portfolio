import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SkillCategoryGroup {
  number: string;
  title: string;
  type: string;
  abbr: string;
  subtitle: string;
  skills: string[];
}

const SKILL_GROUPS: SkillCategoryGroup[] = [
  {
    number: '01',
    title: 'DIGITAL MARKETING',
    type: 'CORE SPECIALIZATION',
    abbr: 'DM',
    subtitle: 'Audience growth, SEO & online campaign fundamentals',
    skills: [
      'Digital Marketing Fundamentals',
      'Social Media Marketing',
      'SEO Fundamentals',
      'Online Marketing Fundamentals',
    ],
  },
  {
    number: '02',
    title: 'CONTENT & CREATIVE',
    type: 'MEDIA & DESIGN',
    abbr: 'CC',
    subtitle: 'Visual storytelling, social narratives & content ideas',
    skills: [
      'Content Creation',
      'Social Media Content',
      'Visual Content',
      'Content Strategy',
    ],
  },
  {
    number: '03',
    title: 'BUSINESS & RESEARCH',
    type: 'ANALYTICS & STRATEGY',
    abbr: 'BR',
    subtitle: 'Commercial fundamentals, audience & market insights',
    skills: [
      'Business Fundamentals',
      'Market Research',
      'Competitor Research',
      'Basic Marketing Research',
    ],
  },
  {
    number: '04',
    title: 'TOOLS & TECHNOLOGIES',
    type: 'SOFTWARE & PLATFORMS',
    abbr: 'TT',
    subtitle: 'Developer environments, web basics & social suites',
    skills: [
      'Google Tools',
      'Meta Platforms',
      'Google AI Studio',
      'GitHub',
      'VS Code',
      'Replit',
      'Computer Applications',
      'HTML / CSS Basics',
    ],
  },
  {
    number: '05',
    title: 'AI ASSISTANTS',
    type: 'INTELLIGENCE SUITES',
    abbr: 'AI',
    subtitle: 'Conversational LLMs, generative partners & code copilots',
    skills: [
      'ChatGPT',
      'Gemini',
      'Claude',
      'GitHub Copilot',
    ],
  },
  {
    number: '06',
    title: 'AI & PRODUCTIVITY',
    type: 'WORKFLOW ACCELERATION',
    abbr: 'AP',
    subtitle: 'AI-assisted ideation, rapid synthesis & workflow automation',
    skills: [
      'AI-Assisted Research',
      'AI-Assisted Content Creation',
      'AI-Assisted Brainstorming',
      'AI-Assisted Coding',
      'AI Tools for Productivity',
    ],
  },
];

export const SkillsTools: React.FC = () => {
  // Split into two sets of 3 for the desktop 3-card horizontal layout
  const rowOne = SKILL_GROUPS.slice(0, 3);
  const rowTwo = SKILL_GROUPS.slice(3, 6);

  const renderCardRow = (cards: SkillCategoryGroup[], rowIndex: number) => (
    <div key={`row-${rowIndex}`} className="relative">
      
      {/* Horizontal connecting line across the 3 cards on desktop */}
      <div 
        className="hidden lg:block absolute left-[16.66%] right-[16.66%] top-[-22px] h-[2px] bg-gradient-to-r from-[#BE123C] via-[#8B001F] to-[#5A0B1A]/40" 
        aria-hidden="true" 
      />

      {/* 3-card horizontal layout on desktop, 2 on tablet, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((item) => (
          <div 
            key={item.number}
            id={`skills-card-${item.number}`}
            className="relative group flex flex-col pt-3 lg:pt-0"
          >
            {/* Small glowing dot on the connecting line on desktop */}
            <div 
              className="hidden lg:block absolute left-1/2 -translate-x-1/2 -top-[28px] w-3.5 h-3.5 rounded-full bg-[#BE123C] ring-4 ring-[#8B001F]/30 shadow-[0_0_10px_rgba(190,18,60,0.8)] group-hover:scale-125 transition-transform z-10" 
              aria-hidden="true" 
            />

            {/* Mobile / Tablet vertical line and glowing dot marker */}
            <div 
              className="lg:hidden absolute left-0 top-6 w-3 h-3 rounded-full bg-[#BE123C] ring-4 ring-[#8B001F]/30 shadow-[0_0_8px_rgba(190,18,60,0.8)]"
              aria-hidden="true"
            />

            {/* Timeline Item Content Card (Minimal flat dark surface matching Education) */}
            <div className="h-full p-4 xs:p-5 sm:p-7 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/20 hover:border-[#8B001F]/60 transition-all duration-300 flex flex-col justify-between ml-5 lg:ml-0">
              
              <div>
                {/* Header: Icon box + Type label on left, Number and Arrow on right */}
                <div className="flex items-start justify-between gap-2 mb-3 pb-3 border-b border-[#8B001F]/20">
                  <div className="flex items-center gap-2.5">
                    {/* Short icon / initials inside bordered square */}
                    <div className="w-8 h-8 rounded-xs bg-[#8B001F]/20 border border-[#BE123C]/40 text-[#BE123C] font-mono text-xs font-bold flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {item.abbr}
                    </div>
                    <div>
                      {/* Small uppercase category/type label */}
                      <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#BE123C] uppercase block mb-0.5">
                        {item.type}
                      </span>
                    </div>
                  </div>

                  {/* Right side: Number and Arrow */}
                  <div className="flex items-center gap-2 shrink-0 pt-0.5">
                    <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#BE123C]">
                      {item.number}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#BE123C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </div>

                {/* Large Skill/Category Name */}
                <h3 className="font-headline text-xl xs:text-2xl sm:text-3xl text-white tracking-wide uppercase group-hover:text-[#F43F5E] transition-colors">
                  {item.title}
                </h3>
                
                {/* Small Supporting Text */}
                <p className="text-xs xs:text-sm sm:text-base font-medium text-neutral-300 mt-1 leading-snug">
                  {item.subtitle}
                </p>
              </div>

              {/* Skills/Tools List inside card (Matching Education description block) */}
              <div className="pt-3.5 mt-4 border-t border-white/5 space-y-2">
                {item.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BE123C] shrink-0 shadow-[0_0_6px_rgba(190,18,60,0.8)]" />
                    <span className="group-hover:text-white transition-colors">{skill}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-transparent border-b border-[#8B001F]/30 overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#8B001F]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#8B001F]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-20 border-b border-[#8B001F]/30 pb-3 sm:pb-4">
          <span className="text-xs font-mono tracking-[0.25em] text-[#BE123C] uppercase font-bold block mb-2">
            CORE EXPERTISE & DIGITAL CAPABILITIES
          </span>
          <h2 className="font-headline text-4xl xs:text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase text-white font-black">
            SKILLS & <span className="text-[#9E1B32]">TECHNOLOGIES</span>
          </h2>
        </div>

        {/* 3-Card Horizontal Rows matching Education structure */}
        <div className="space-y-16 lg:space-y-20">
          {renderCardRow(rowOne, 1)}
          {renderCardRow(rowTwo, 2)}
        </div>

      </div>
    </section>
  );
};
