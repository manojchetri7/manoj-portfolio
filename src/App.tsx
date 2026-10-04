import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { SkillsTools } from './components/SkillsTools';
import { Certificates } from './components/Certificates';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioAssistant } from './components/PortfolioAssistant';
import { GlobalCosmicBackground } from './components/GlobalCosmicBackground';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const sections = ['hero', 'about', 'education', 'skills', 'certificates', 'projects', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global external link security handler:
  // Guarantees all external website links (including Google, Google Maps, Google Share, social, etc.)
  // ALWAYS open in a new browser tab with target="_blank" and rel="noopener noreferrer",
  // and NEVER inside an iframe, embedded preview, or internal page.
  useEffect(() => {
    const handleGlobalLinkClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement)?.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href) return;

      const isExternal = 
        href.startsWith('http://') || 
        href.startsWith('https://') || 
        href.startsWith('//') || 
        href.includes('maps.google') || 
        href.includes('goo.gl') || 
        href.includes('google.com');

      if (isExternal) {
        anchor.target = '_blank';
        anchor.rel = 'noopener noreferrer';
      }
    };

    document.addEventListener('click', handleGlobalLinkClick, { capture: true });
    return () => document.removeEventListener('click', handleGlobalLinkClick, { capture: true });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070708] text-white selection:bg-[#8B001F] selection:text-white">
      {/* Global Fixed Futuristic Red/Burgundy Cosmic Animated Background Layer */}
      <GlobalCosmicBackground />

      {/* Fixed Navigation */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
      />

      <main className="relative z-10">
        {/* 1. HERO SECTION (HOME) */}
        <Hero 
          onExploreWork={() => handleNavigate('skills')}
          onContactClick={() => handleNavigate('contact')}
        />

        {/* 2. ABOUT SECTION */}
        <About />

        {/* 3. ACADEMIC EDUCATION & DEGREES */}
        <Education />

        {/* 4. SKILLS & TOOLS */}
        <SkillsTools />

        {/* 5. CERTIFICATES & CREDENTIALS */}
        <Certificates />

        {/* 6. PROJECTS (SELECTED BUILDS & PRACTICAL EXPERIMENTS) */}
        <Projects />

        {/* 7. CONTACT SECTION */}
        <Contact />
      </main>

      {/* 8. FOOTER BANNER */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Floating Personal Portfolio Assistant (Fixed Mascot Trigger) */}
      <PortfolioAssistant onNavigate={handleNavigate} />
    </div>
  );
}
