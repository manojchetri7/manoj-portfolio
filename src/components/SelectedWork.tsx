import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Filter, Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Camera, MapPin } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project, GalleryCategory } from '../types';
import { CropMark } from './Decorations';

// Easy-to-extend configuration for gallery categories
export const GALLERY_CATEGORIES: { id: GalleryCategory; label: string; description: string }[] = [
  { id: 'ALL', label: 'ALL', description: 'Display all gallery images and memories.' },
  { id: 'RANDOM', label: 'RANDOM', description: 'Casual and miscellaneous personal photographs.' },
  { id: 'NATURE', label: 'NATURE', description: 'Scenic landscapes, serene countryside waters, mountain ridges, and outdoor views.' },
  { id: 'ASSAM', label: 'ASSAM', description: 'Photographs taken in Assam, including nature, places, travel, and memories.' },
  { id: 'DELHI', label: 'DELHI', description: 'Photographs taken in Delhi, including places, city views, outings, and memories.' },
  { id: 'FITNESS', label: 'FITNESS', description: 'Gym, workout, and fitness-related photographs.' },
];

export const SelectedWork: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('ALL');
  const [lightboxProject, setLightboxProject] = useState<Project | null>(null);

  // Category behavior: ALL displays all, otherwise filter by category
  const filteredProjects = activeCategory === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const activeCategoryMeta = GALLERY_CATEGORIES.find((c) => c.id === activeCategory) || GALLERY_CATEGORIES[0];

  const handleOpenLightbox = (project: Project) => {
    setLightboxProject(project);
  };

  const handleCloseLightbox = () => {
    setLightboxProject(null);
  };

  const handlePrevPhoto = () => {
    if (!lightboxProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === lightboxProject.id);
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setLightboxProject(filteredProjects[prevIndex]);
  };

  const handleNextPhoto = () => {
    if (!lightboxProject) return;
    const currentIndex = filteredProjects.findIndex((p) => p.id === lightboxProject.id);
    const nextIndex = (currentIndex + 1) % filteredProjects.length;
    setLightboxProject(filteredProjects[nextIndex]);
  };

  // Keyboard navigation for fullscreen lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxProject) return;
      if (e.key === 'Escape') handleCloseLightbox();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
      if (e.key === 'ArrowRight') handleNextPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (lightboxProject) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [lightboxProject, filteredProjects]);

  return (
    <section 
      id="gallery" 
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#070708] border-b border-[#8B001F]/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 border-b border-[#8B001F]/30 pb-3 sm:pb-4">
          <span className="text-xs font-mono tracking-[0.25em] text-[#BE123C] uppercase font-bold block mb-2">
            VISUAL ARCHIVE & MEMORIES
          </span>
          <h2 className="font-headline text-4xl xs:text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase text-white font-black">
            GALLERY
          </h2>
        </div>

        {/* Category Tabs: ALL | RANDOM | ASSAM | DELHI | FITNESS */}
        <div 
          id="gallery-category-tabs" 
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10 pb-5 border-b border-[#8B001F]/20"
        >
          {/* Tabs bar: ALL | RANDOM | ASSAM | DELHI | FITNESS */}
          <div 
            className="flex items-center gap-2 flex-wrap"
            role="tablist" 
            aria-label="Filter gallery by location and category"
          >
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-neutral-400 font-mono mr-1">
              <Filter className="w-3.5 h-3.5 text-[#BE123C]" />
              FILTER:
            </div>

            {GALLERY_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'ALL' 
                ? PROJECTS.length 
                : PROJECTS.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  id={`gallery-tab-${cat.id.toLowerCase()}`}
                  onClick={() => setActiveCategory(cat.id)}
                  role="tab"
                  aria-selected={isActive}
                  className={`px-3.5 sm:px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-xs transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? 'bg-[#8B001F] text-white shadow-md shadow-[#8B001F]/30 border border-[#BE123C]/50'
                      : 'bg-[#0c0a0b] text-neutral-400 hover:text-white border border-[#8B001F]/20 hover:border-[#8B001F]/50'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span 
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-xs ${
                      isActive 
                        ? 'bg-black/30 text-white font-bold' 
                        : 'bg-white/5 text-neutral-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Category Description */}
          <div className="text-xs font-mono text-neutral-400 flex items-center gap-2">
            <Camera className="w-3.5 h-3.5 text-[#BE123C] shrink-0" />
            <span className="line-clamp-1">{activeCategoryMeta.description}</span>
          </div>
        </div>

        {/* Dynamic Photo Grid */}
        <div 
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 animate-fade-in"
        >
          {filteredProjects.map((project, index) => {
            const isSpanLandscape = project.featured && index % 4 === 0;

            return (
              <div
                key={project.id}
                id={`gallery-photo-${project.id}`}
                onClick={() => handleOpenLightbox(project)}
                className={`group relative bg-[#0c0a0b] rounded-xs border border-[#8B001F]/20 overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#8B001F] hover:shadow-xl hover:shadow-[#8B001F]/10 hover:-translate-y-0.5 ${
                  isSpanLandscape ? 'sm:col-span-2' : ''
                }`}
                tabIndex={0}
                role="button"
                aria-label={`View fullscreen photo: ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenLightbox(project);
                  }
                }}
              >
                {/* Image Container with Subtle Zoom */}
                <div 
                  className={`relative w-full overflow-hidden bg-neutral-900 ${
                    isSpanLandscape ? 'aspect-[16/9]' : 'aspect-[4/3] sm:aspect-[1/1]'
                  }`}
                >
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103 group-hover:brightness-105"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10 transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase bg-black/80 text-[#BE123C] border border-[#8B001F]/40 rounded-xs backdrop-blur-md font-mono">
                      {project.category}
                    </span>
                    {project.location ? (
                      <span className="text-[10px] font-mono text-neutral-300 px-2 py-0.5 bg-black/70 rounded-xs backdrop-blur-md border border-white/10 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-[#BE123C]" />
                        <span>{project.location}</span>
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-neutral-300 px-2 py-0.5 bg-black/60 rounded-xs backdrop-blur-md border border-white/10">
                        {project.year}
                      </span>
                    )}
                  </div>

                  {/* Floating Lightbox Trigger Indicator */}
                  <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-xs bg-[#8B001F] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                    <p className="text-[10px] font-mono tracking-widest text-[#BE123C] uppercase mb-1 font-semibold flex items-center gap-1.5">
                      <span>{project.subtitle}</span>
                    </p>
                    <h3 className="font-headline text-2xl sm:text-3xl text-white tracking-wide group-hover:text-[#F43F5E] transition-colors leading-tight uppercase">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-300 mt-2 line-clamp-2 opacity-85 group-hover:opacity-100 transition-opacity font-light">
                      {project.description}
                    </p>

                    {/* Interactive Prompt */}
                    <div className="mt-4 pt-3 border-t border-[#8B001F]/20 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#BE123C] tracking-wider uppercase transition-colors">
                      <span className="flex items-center gap-1.5">
                        <Maximize2 className="w-3 h-3 text-[#BE123C]" />
                        <span>VIEW FULLSCREEN</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {project.tools[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Fullscreen / Lightbox View */}
      {lightboxProject && (
        <div 
          id="gallery-fullscreen-lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 md:p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={lightboxProject.title}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between w-full max-w-7xl mx-auto pb-3 border-b border-[#8B001F]/30 z-20">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#8B001F] text-white text-[11px] font-bold tracking-widest rounded-xs uppercase font-mono">
                {lightboxProject.category}
              </span>
              <div>
                <h3 className="font-headline text-lg sm:text-xl text-white tracking-wide truncate max-w-[180px] sm:max-w-md uppercase">
                  {lightboxProject.title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
                  {lightboxProject.location && (
                    <span className="flex items-center gap-1 text-[#BE123C]">
                      <MapPin className="w-3 h-3" />
                      {lightboxProject.location}
                    </span>
                  )}
                  <span className="hidden sm:inline">•</span>
                  <span className="hidden sm:inline">{lightboxProject.subtitle}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-400 px-2.5 py-1 rounded-xs bg-[#0c0a0b] border border-[#8B001F]/30">
                {filteredProjects.findIndex((p) => p.id === lightboxProject.id) + 1} / {filteredProjects.length}
              </span>

              <button
                id="lightbox-close-btn"
                onClick={handleCloseLightbox}
                className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-xs transition-colors cursor-pointer"
                aria-label="Close fullscreen view (Esc)"
                title="Close (Esc)"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Center Stage */}
          <div className="relative flex-1 flex items-center justify-center my-3 sm:my-4 overflow-hidden z-10">
            <button
              id="lightbox-prev-btn"
              onClick={handlePrevPhoto}
              className="absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-xs bg-[#0c0a0b]/80 hover:bg-[#8B001F] text-white border border-[#8B001F]/40 transition-all duration-200 cursor-pointer shadow-xl backdrop-blur-md"
              aria-label="Previous photo (Left Arrow)"
              title="Previous (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative max-h-[72vh] md:max-h-[76vh] max-w-full flex items-center justify-center p-1">
              <img
                src={lightboxProject.heroImage}
                alt={lightboxProject.title}
                referrerPolicy="no-referrer"
                className="max-h-[72vh] md:max-h-[76vh] w-auto max-w-full object-contain rounded-xs shadow-2xl border border-[#8B001F]/30"
              />
            </div>

            <button
              id="lightbox-next-btn"
              onClick={handleNextPhoto}
              className="absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-xs bg-[#0c0a0b]/80 hover:bg-[#8B001F] text-white border border-[#8B001F]/40 transition-all duration-200 cursor-pointer shadow-xl backdrop-blur-md"
              aria-label="Next photo (Right Arrow)"
              title="Next (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Bar */}
          <div className="w-full max-w-7xl mx-auto pt-3 border-t border-[#8B001F]/30 z-20 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left max-w-2xl">
              <p className="text-xs sm:text-sm text-neutral-300 font-light line-clamp-1 sm:line-clamp-2">
                {lightboxProject.description}
              </p>
            </div>

            {/* Thumbnail strip */}
            <div className="flex items-center gap-2 overflow-x-auto py-1 max-w-full">
              {filteredProjects.map((p) => {
                const isCurrent = p.id === lightboxProject.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setLightboxProject(p)}
                    className={`relative w-12 h-10 rounded-xs overflow-hidden shrink-0 transition-all cursor-pointer border ${
                      isCurrent 
                        ? 'border-[#BE123C] scale-105 shadow-md ring-1 ring-[#BE123C]' 
                        : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`Jump to photo ${p.title}`}
                  >
                    <img 
                      src={p.heroImage} 
                      alt="" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover" 
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
