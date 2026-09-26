import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { SkillsTools } from './components/SkillsTools';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioAssistant } from './components/PortfolioAssistant';

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
    const sections = ['hero', 'about', 'education', 'skills', 'certificates', 'contact'];
    
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

  return (
    <div className="min-h-screen bg-[#070708] text-white selection:bg-[#8B001F] selection:text-white">
      {/* Fixed Navigation */}
      <Navbar 
        onNavigate={handleNavigate} 
        activeSection={activeSection} 
      />

      <main>
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

        {/* 6. CONTACT SECTION */}
        <Contact />
      </main>

      {/* 7. FOOTER BANNER */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Floating Personal Portfolio Assistant (Fixed Mascot Trigger) */}
      <PortfolioAssistant onNavigate={handleNavigate} />
    </div>
  );
}
