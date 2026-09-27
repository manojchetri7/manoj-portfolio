import React from 'react';
import { ArrowUp, Instagram, Linkedin, Globe, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="portfolio-footer" className="relative bg-[#070708] text-white pt-16 pb-12 border-t border-[#8B001F]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Tribute Banner: "THANK YOU" */}
        <div className="text-center relative py-12 mb-16 border-b border-[#8B001F]/20 select-none">
          <div className="inline-block relative">
            <h2 className="font-serif-title text-[14vw] sm:text-[11vw] md:text-[84px] lg:text-[145px] leading-[0.85] tracking-tight uppercase text-white font-black">
              THANK YOU
            </h2>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="w-12 h-[1px] bg-[#8B001F]/40" />
            <span className="text-xs font-mono tracking-[0.3em] uppercase text-[#BE123C] font-bold">
              MANOJ CHETRI PORTFOLIO // 2026
            </span>
            <span className="w-12 h-[1px] bg-[#8B001F]/40" />
          </div>
        </div>

        {/* Footer Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#8B001F]/20">
          
          {/* Col 1: Designer Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-headline text-2xl tracking-wider text-white">
                {PERSONAL_INFO.name}
              </span>
              <span className="px-2 py-0.5 bg-[#8B001F] text-white text-[10px] font-mono font-bold rounded-xs">
                PRO
              </span>
            </div>

            <p className="text-xs font-mono uppercase tracking-widest text-[#BE123C] font-semibold">
              {PERSONAL_INFO.role}
            </p>

            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed font-light">
              B.Com student exploring digital marketing, business growth, creative content, and modern technologies.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#BE123C] font-bold block mb-4">
              SITE DIRECTORY
            </span>
            <ul className="space-y-2 text-sm text-neutral-300 font-light">
              <li>
                <button 
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home / Cover
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Manoj
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('education')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Education & Degrees
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('skills')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Skills & Tools
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('certificates')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Certificates & Credentials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Social & Profiles */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#BE123C] font-bold block mb-4">
              CONNECT ONLINE
            </span>
            
            <div className="flex flex-col space-y-2.5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-between p-3 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/20 hover:border-[#8B001F] hover:text-white transition-colors text-xs text-neutral-300 group"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#BE123C]" />
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                </span>
                <span className="text-[10px] text-[#BE123C] font-mono group-hover:text-white">EMAIL →</span>
              </a>

              <a
                href={`https://instagram.com/${PERSONAL_INFO.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/20 hover:border-[#8B001F] hover:text-white transition-colors text-xs text-neutral-300 group"
              >
                <span className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#BE123C]" />
                  <span>Instagram (@{PERSONAL_INFO.instagram})</span>
                </span>
                <span className="text-[10px] text-[#BE123C] font-mono group-hover:text-white">FOLLOW →</span>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/20 hover:border-[#8B001F] hover:text-white transition-colors text-xs text-neutral-300 group"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-[#BE123C]" />
                  <span>LinkedIn Network</span>
                </span>
                <span className="text-[10px] text-[#BE123C] font-mono group-hover:text-white">CONNECT →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div>
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-400">Editorial Marketing Portfolio</span>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/30 text-neutral-300 hover:text-white hover:border-[#BE123C] transition-colors cursor-pointer group"
              aria-label="Back to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#BE123C] group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
