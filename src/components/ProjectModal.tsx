import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Calendar, User, Tag, Sparkles } from 'lucide-react';
import { Project } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { AdobeBadge } from './Decorations';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (project) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose, onPrev, onNext]);

  if (!project) return null;

  return (
    <div 
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl overflow-y-auto animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-5xl bg-[#0c0a0b] border border-[#8B001F]/30 rounded-xl shadow-2xl overflow-hidden z-10 my-auto flex flex-col max-h-[92vh]">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#8B001F]/20 bg-[#120c0e]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-[#8B001F] text-white text-[11px] font-bold tracking-widest rounded-xs uppercase border border-[#BE123C]/40">
              {project.category}
            </span>
            <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
              PROJECT ID: #{project.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next Buttons */}
            <button
              id="modal-prev-btn"
              onClick={onPrev}
              className="p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded transition-colors"
              aria-label="Previous Project"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              id="modal-next-btn"
              onClick={onNext}
              className="p-2 text-neutral-300 hover:text-white hover:bg-white/10 rounded transition-colors"
              aria-label="Next Project"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="w-[1px] h-6 bg-white/10 mx-1" />

            {/* Close Button */}
            <button
              id="modal-close-btn"
              onClick={onClose}
              className="p-2 text-neutral-300 hover:text-[#BE123C] hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close Modal"
              title="Close (Escape)"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Hero Banner Image */}
          <div className="relative rounded-lg overflow-hidden border border-[#8B001F]/20 aspect-[16/9] bg-neutral-900 shadow-xl">
            <img 
              src={project.heroImage} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <p className="text-xs font-mono text-[#BE123C] uppercase tracking-widest mb-1 font-bold">
                  CASE STUDY SHOWCASE
                </p>
                <h3 id="modal-project-title" className="font-headline text-3xl sm:text-5xl text-white tracking-wide">
                  {project.title}
                </h3>
              </div>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left 8 Cols: Overview, Story, Challenge & Solution */}
            <div className="md:col-span-8 space-y-6">
              <div>
                <h4 className="text-xs font-mono tracking-widest text-[#BE123C] uppercase mb-2 font-bold">
                  PROJECT OVERVIEW
                </h4>
                <p className="text-lg text-white font-medium leading-relaxed">
                  {project.subtitle}
                </p>
                <p className="text-sm text-neutral-300 mt-2 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.fullStory && (
                <div className="p-4 rounded-xs bg-[#160e10] border border-[#8B001F]/30">
                  <h5 className="text-xs font-mono tracking-wider text-neutral-400 uppercase mb-2 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#BE123C]" />
                    THE DESIGN CONCEPT
                  </h5>
                  <p className="text-sm text-neutral-200 leading-relaxed">
                    {project.fullStory}
                  </p>
                </div>
              )}

              {project.challenge && project.solution && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xs bg-[#160e10] border border-[#8B001F]/20">
                    <h5 className="text-xs font-mono tracking-wider text-[#BE123C] uppercase mb-2 font-bold">
                      THE CHALLENGE
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="p-4 rounded-xs bg-[#160e10] border border-[#8B001F]/20">
                    <h5 className="text-xs font-mono tracking-wider text-emerald-400 uppercase mb-2 font-bold">
                      CREATIVE SOLUTION
                    </h5>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
              )}

              {/* Gallery Grid */}
              {project.galleryImages && project.galleryImages.length > 1 && (
                <div>
                  <h4 className="text-xs font-mono tracking-widest text-[#BE123C] uppercase mb-3 font-bold">
                    ADDITIONAL ASSETS & MOCKUPS
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.galleryImages.slice(1).map((imgUrl, idx) => (
                      <div key={idx} className="rounded-xs overflow-hidden border border-[#8B001F]/20 aspect-[4/3] bg-neutral-900 group">
                        <img 
                          src={imgUrl} 
                          alt={`${project.title} asset ${idx + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 4 Cols: Metadata, Client, Year, Tools, Tags */}
            <div className="md:col-span-4 space-y-6">
              
              <div className="p-5 rounded-xs bg-[#120c0e] border border-[#8B001F]/25 space-y-4">
                
                {project.client && (
                  <div>
                    <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 flex items-center gap-1.5 mb-1">
                      <User className="w-3.5 h-3.5 text-[#BE123C]" />
                      CLIENT / BRAND
                    </span>
                    <p className="text-sm font-semibold text-white">{project.client}</p>
                  </div>
                )}

                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 flex items-center gap-1.5 mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#BE123C]" />
                    DELIVERY YEAR
                  </span>
                  <p className="text-sm font-semibold text-white">{project.year}</p>
                </div>

                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 flex items-center gap-1.5 mb-2">
                    <Tag className="w-3.5 h-3.5 text-[#BE123C]" />
                    DISCIPLINES & TAGS
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-1 bg-white/5 border border-white/10 rounded-xs text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-mono tracking-wider uppercase text-neutral-400 block mb-2">
                    SOFTWARE & TOOLS USED
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="text-xs px-2.5 py-1 bg-[#1a0f12] text-neutral-200 font-medium border border-[#8B001F]/30 rounded-xs">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Commission Inquiry Card */}
              <div className="p-5 rounded-xs bg-gradient-to-br from-[#8B001F]/20 to-transparent border border-[#8B001F]/40 text-center space-y-3">
                <p className="text-xs font-mono text-[#BE123C] uppercase tracking-wider font-bold">
                  WANT A SIMILAR PROJECT?
                </p>
                <p className="text-xs text-neutral-300">
                  Ready to collaborate on digital marketing strategy, visual branding, and growth experiments.
                </p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Inquiry regarding ${encodeURIComponent(project.title)}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#8B001F] hover:bg-[#A11D33] text-white font-bold text-xs tracking-wider uppercase rounded-xs transition-colors border border-[#BE123C]/40"
                >
                  DISCUSS THIS PROJECT
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 bg-[#120c0e] border-t border-[#8B001F]/20 flex items-center justify-between text-xs text-neutral-400">
          <span>Use keyboard <kbd className="px-1.5 py-0.5 bg-black rounded border border-white/20 font-mono text-white">←</kbd> <kbd className="px-1.5 py-0.5 bg-black rounded border border-white/20 font-mono text-white">→</kbd> to browse</span>
          <button
            onClick={onClose}
            className="text-white hover:text-[#BE123C] font-semibold tracking-wider transition-colors cursor-pointer"
          >
            CLOSE PREVIEW
          </button>
        </div>

      </div>
    </div>
  );
};
