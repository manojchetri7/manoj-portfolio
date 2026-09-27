import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'HOME', id: 'hero' },
    { label: 'ABOUT', id: 'about' },
    { label: 'EDUCATION', id: 'education' },
    { label: 'SKILLS', id: 'skills' },
    { label: 'CERTIFICATES', id: 'certificates' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#070708]/95 backdrop-blur-md border-b border-[#8B001F]/25 py-3.5 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          id="navbar-brand-btn"
          onClick={() => handleLinkClick('hero')}
          className="group text-left flex items-center gap-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#8B001F] rounded p-1"
        >
          <span className="font-headline text-xl sm:text-2xl tracking-wider text-white group-hover:text-[#C81E3D] transition-colors">
            {PERSONAL_INFO.name}
          </span>
          <span className="w-2 h-2 rounded-full bg-[#8B001F] hidden sm:inline-block shadow-[0_0_8px_rgba(139,0,31,0.8)]" />
        </button>

        {/* Desktop / Tablet Nav Items */}
        <nav id="desktop-navigation" className="hidden md:flex items-center gap-2.5 md:gap-3 lg:gap-5 xl:gap-8" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className={`group relative text-[11px] lg:text-[11.5px] xl:text-xs tracking-[0.1em] lg:tracking-[0.14em] xl:tracking-[0.2em] font-semibold transition-colors duration-200 py-1 focus:outline-none whitespace-nowrap ${
                  isActive ? 'text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
                {/* Burgundy animated underline on hover or active */}
                <span 
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#8B001F] transition-transform duration-300 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-2.5 lg:gap-3 xl:gap-4">
          <button
            id="nav-hire-btn"
            onClick={() => handleLinkClick('contact')}
            className="inline-flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 md:px-3.5 md:py-2 lg:px-4 lg:py-2 xl:px-5 xl:py-2 text-[11px] xl:text-xs font-bold tracking-wider xl:tracking-widest text-white bg-[#8B001F] hover:bg-[#A11D33] border border-[#BE123C]/30 transition-all rounded-xs shadow-md hover:shadow-[#8B001F]/30 hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8B001F] whitespace-nowrap"
          >
            LET'S TALK
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          className="md:hidden p-2 text-white hover:text-[#C81E3D] transition-colors focus:outline-none focus:ring-1 focus:ring-[#8B001F]"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Fullscreen Overlay */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-overlay"
          className="md:hidden fixed inset-x-0 top-[56px] sm:top-[60px] bottom-0 bg-[#070708]/98 backdrop-blur-xl z-50 border-t border-[#8B001F]/20 px-5 sm:px-8 py-6 flex flex-col justify-between overflow-y-auto"
        >
          <div className="flex flex-col space-y-2 xs:space-y-3">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C81E3D] font-bold mb-1">
              NAVIGATION
            </span>
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                id={`mobile-nav-${item.id}`}
                onClick={() => handleLinkClick(item.id)}
                className="text-left py-1.5 xs:py-2 font-display text-2xl xs:text-3xl sm:text-4xl text-white hover:text-[#C81E3D] transition-colors flex items-center justify-between group"
              >
                <span>{item.label}</span>
                <span className="font-mono text-xs sm:text-sm text-[#8B001F] opacity-70 group-hover:opacity-100 transition-opacity">
                  0{idx + 1} →
                </span>
              </button>
            ))}
          </div>

          <div className="pt-6 border-t border-[#8B001F]/20 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-[11px] sm:text-xs text-neutral-400 font-mono">DIGITAL MARKETING & BUSINESS</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <button
              id="mobile-menu-cta-btn"
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3 sm:py-3.5 bg-[#8B001F] hover:bg-[#A11D33] text-white font-bold tracking-widest text-xs sm:text-sm rounded-xs flex items-center justify-center gap-2 transition-colors shadow-lg shadow-[#8B001F]/30"
            >
              LET'S TALK
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
