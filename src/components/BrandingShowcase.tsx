import React, { useState } from 'react';
import { Layers, Palette, Package, Sparkles, Check, ArrowRight, ExternalLink } from 'lucide-react';
import { YellowSquiggle, YellowLoopSquiggle, PenToolBadge } from './Decorations';

export const BrandingShowcase: React.FC<{ onOpenCaseStudy?: () => void }> = ({ onOpenCaseStudy }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'identity' | 'packaging' | 'merch'>('overview');

  const brandColors = [
    { name: 'Artisan Orange', hex: '#FF5500', role: 'Primary Brand Color' },
    { name: 'Toasted Mustard', hex: '#FFB000', role: 'Secondary Accent' },
    { name: 'Charcoal Noir', hex: '#141414', role: 'Typography & Background' },
    { name: 'Crisp Cream', hex: '#F9F6F0', role: 'Packaging Stock & Negative Space' },
  ];

  const brandSteps = [
    { num: '01', title: 'BRAND IDENTITY', desc: 'Core personality, vintage diner nostalgia & modern punchy energy.' },
    { num: '02', title: 'LOGO & MASCOT', desc: 'Crafting the friendly retro Baker character mascot with wink expression.' },
    { num: '03', title: 'COLOR SYSTEM', desc: 'High-appetite palette using warm terracotta, toasted gold & milk white.' },
    { num: '04', title: 'PACKAGING SUITE', desc: 'Eco-friendly cardboard burger boxes, sauce cups, wrap paper & takeaway bags.' },
    { num: '05', title: 'COLLATERAL & APPAREL', desc: 'Staff aprons, sticker packs, receipt stamps & physical menus.' },
  ];

  return (
    <section 
      id="branding" 
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#0c0c0c] border-b border-white/10 overflow-hidden"
    >
      {/* Background warm glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF5500]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Header: "BRANDING" + yellow script "Designs" */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="relative inline-block">
            <span className="text-xs font-mono tracking-[0.25em] text-[#FF5500] uppercase font-bold flex items-center gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              FEATURED CASE STUDY // DEEP DIVE
            </span>
            <h2 className="font-headline text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-white font-black">
              BRANDING
            </h2>
            <span 
              className="absolute -bottom-5 sm:-bottom-7 left-24 sm:left-48 font-script text-4xl sm:text-6xl text-[#FFB000] font-bold rotate-[-3deg] whitespace-nowrap drop-shadow-md"
              aria-hidden="true"
            >
              Designs
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-left md:text-right">
              <p className="font-headline text-2xl text-white tracking-wide">BITE BOX FAST FOOD</p>
              <p className="text-xs text-neutral-400 font-mono">Complete Visual Identity & Packaging System</p>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#FF5500] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#FF5500]/30 shrink-0">
              🍔
            </div>
          </div>
        </div>

        {/* Process Flow Ribbon */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex items-center gap-3 min-w-[700px]">
            {brandSteps.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="flex-1 bg-[#161616] border border-white/10 rounded-lg p-3 hover:border-[#FF5500]/50 transition-colors">
                  <span className="font-mono text-xs font-bold text-[#FF5500]">{step.num}</span>
                  <p className="font-headline text-sm text-white tracking-wide mt-0.5">{step.title}</p>
                </div>
                {idx < brandSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-neutral-600 shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Interactive Case Study Layout (Inspired directly by Slide 7 in reference) */}
        <div className="bg-[#141414] border-2 border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Top Bar with Case Study Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF5500]/20 border border-[#FF5500]/40 rounded-full text-xs font-mono font-bold text-[#FF5500] mb-2">
                CLIENT: BITE BOX ARTISAN BURGERS
              </div>
              <h3 className="font-headline text-3xl sm:text-4xl text-white tracking-wide">
                THE BITE BOX SYSTEM
              </h3>
            </div>

            {/* View switcher tabs */}
            <div className="flex items-center gap-2 bg-black/60 p-1.5 rounded-lg border border-white/10">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-3 py-1.5 text-xs font-bold rounded transition-colors ${
                  activeTab === 'overview' ? 'bg-[#FF5500] text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Full Collage
              </button>
              <button
                onClick={() => setActiveTab('identity')}
                className={`px-3 py-1.5 text-xs font-bold rounded transition-colors ${
                  activeTab === 'identity' ? 'bg-[#FF5500] text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Mascot & Logo
              </button>
              <button
                onClick={() => setActiveTab('packaging')}
                className={`px-3 py-1.5 text-xs font-bold rounded transition-colors ${
                  activeTab === 'packaging' ? 'bg-[#FF5500] text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Packaging Suite
              </button>
              <button
                onClick={() => setActiveTab('merch')}
                className={`px-3 py-1.5 text-xs font-bold rounded transition-colors ${
                  activeTab === 'merch' ? 'bg-[#FF5500] text-white' : 'text-neutral-400 hover:text-white'
                }`}
              >
                Colors & Palette
              </button>
            </div>
          </div>

          {/* Tab 1: Full Collage (Matches Slide 7 in Reference!) */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Big Brand Hero Collage */}
              <div className="md:col-span-8 space-y-4">
                <div className="relative rounded-xl overflow-hidden border border-white/15 aspect-[16/10] bg-neutral-900 shadow-xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=85" 
                    alt="Bite Box packaging suite and burgers"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Mascot Sticker (White outline sticker effect!) */}
                  <div className="absolute bottom-6 right-6 p-3 bg-[#FF5500] text-white rounded-2xl border-4 border-white shadow-2xl flex items-center gap-3 rotate-3 hover:rotate-0 transition-transform">
                    <span className="text-3xl">👨‍🍳</span>
                    <div>
                      <p className="font-headline text-lg tracking-wider leading-none">BITE BOX</p>
                      <p className="text-[10px] font-mono text-amber-200">OFFICIAL MASCOT</p>
                    </div>
                  </div>

                  <div className="absolute bottom-6 left-6 max-w-md">
                    <span className="text-[10px] font-mono text-[#FFB000] uppercase tracking-widest">
                      PACKAGING SUITE & PRESENTATION
                    </span>
                    <h4 className="font-headline text-2xl text-white tracking-wide">
                      ARTISAN TAKEOUT & DINE-IN COLLATERAL
                    </h4>
                  </div>
                </div>

                {/* Sub-grid of mockups */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg overflow-hidden border border-white/10 aspect-square bg-neutral-900 group">
                    <img 
                      src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=85" 
                      alt="Burger box detail"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-white/10 aspect-square bg-neutral-900 group">
                    <img 
                      src="https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=500&q=85" 
                      alt="French fries and cups"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden border border-white/10 aspect-square bg-neutral-900 group">
                    <img 
                      src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=500&q=85" 
                      alt="Takeout bag mockup"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Key Details & Palette */}
              <div className="md:col-span-4 space-y-6">
                
                <div className="p-5 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-4">
                  <h4 className="text-xs font-mono tracking-widest text-[#FF5500] uppercase font-bold">
                    BRAND SPECIFICATIONS
                  </h4>
                  
                  <div className="space-y-2 text-sm text-neutral-200">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                      <span>Custom hand-drawn Baker chef mascot with 6 sticker expressions</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                      <span>Eco-friendly unbleached corrugated burger boxes with greaseproof lining</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                      <span>Dual-sided menu cards, sauce cup sleeves & stamped brown bags</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#FF5500] shrink-0 mt-0.5" />
                      <span>Staff branded apparel including heavy canvas aprons & caps</span>
                    </div>
                  </div>
                </div>

                {/* Color Palette Swatches */}
                <div className="p-5 rounded-xl bg-[#1a1a1a] border border-white/10 space-y-3">
                  <h4 className="text-xs font-mono tracking-widest text-neutral-400 uppercase font-bold">
                    COLOR SYSTEM
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {brandColors.map((col) => (
                      <div key={col.hex} className="p-2.5 rounded-lg bg-black/50 border border-white/5 flex items-center gap-2.5">
                        <div 
                          className="w-6 h-6 rounded-md border border-white/20 shrink-0" 
                          style={{ backgroundColor: col.hex }} 
                        />
                        <div className="overflow-hidden">
                          <p className="text-xs font-bold text-white truncate">{col.name}</p>
                          <p className="text-[10px] font-mono text-neutral-400">{col.hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Case Study Call to Action */}
                <button
                  onClick={onOpenCaseStudy}
                  className="w-full py-3.5 bg-[#FF5500] hover:bg-[#ff6a1a] text-white font-extrabold text-xs tracking-widest uppercase rounded-lg shadow-lg shadow-[#FF5500]/30 transition-all flex items-center justify-center gap-2"
                >
                  EXPAND FULL CASE STUDY
                  <ExternalLink className="w-4 h-4" />
                </button>

              </div>
            </div>
          )}

          {/* Tab 2: Logo & Mascot Deep Dive */}
          {activeTab === 'identity' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-8 rounded-xl bg-[#FF5500] text-white flex flex-col justify-between aspect-square border-4 border-white shadow-xl">
                <span className="text-xs font-mono uppercase tracking-widest opacity-80">PRIMARY WORDMARK</span>
                <div className="my-auto text-center">
                  <h3 className="font-headline text-5xl tracking-wider">BITE BOX</h3>
                  <p className="font-script text-2xl text-amber-200 mt-1">Artisan Burgers</p>
                </div>
                <span className="text-[10px] font-mono">PANTONE 172 C</span>
              </div>

              <div className="p-8 rounded-xl bg-white text-black flex flex-col justify-between aspect-square border-4 border-black shadow-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">MASCOT BADGE</span>
                <div className="my-auto text-center space-y-2">
                  <span className="text-6xl block">👨‍🍳</span>
                  <p className="font-headline text-2xl tracking-wide">CHEF BAKER</p>
                </div>
                <span className="text-[10px] font-mono text-neutral-500">VECTOR EMBLEM</span>
              </div>

              <div className="p-8 rounded-xl bg-[#1c1c1c] text-white flex flex-col justify-between aspect-square border-2 border-white/20">
                <span className="text-xs font-mono uppercase tracking-widest text-[#FFB000]">TYPOGRAPHIC SYSTEM</span>
                <div className="my-auto space-y-3">
                  <div>
                    <p className="text-[10px] text-neutral-400 font-mono">HEADINGS</p>
                    <p className="font-headline text-2xl text-white">ANTON HEAVY</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-neutral-400 font-mono">ACCENT SCRIPT</p>
                    <p className="font-script text-3xl text-[#FFB000]">Caveat Brush</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-neutral-400">HERITAGE REVIVAL</span>
              </div>
            </div>
          )}

          {/* Tab 3: Packaging Suite */}
          {activeTab === 'packaging' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: 'BURGER BOX', desc: 'Locking tab corrugated box with die-cut steam vents', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=85' },
                { title: 'DRINK CUPS', desc: 'Double-walled paper cups with matte orange pattern print', img: 'https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=85' },
                { title: 'TAKEAWAY BAG', desc: 'Kraft paper flat-bottom tote with twisted cord handles', img: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=600&q=85' },
                { title: 'STICKER PACK', desc: 'Die-cut vinyl sticker badges for sealing wrapping foil', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=85' },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#181818] rounded-xl border border-white/10 overflow-hidden group">
                  <div className="aspect-[4/3] overflow-hidden bg-neutral-900">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-108 transition-transform" />
                  </div>
                  <div className="p-4">
                    <h5 className="font-headline text-base text-white tracking-wide">{item.title}</h5>
                    <p className="text-xs text-neutral-400 mt-1 leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 4: Colors & Palette */}
          {activeTab === 'merch' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {brandColors.map((col) => (
                  <div key={col.hex} className="rounded-xl overflow-hidden border border-white/10 bg-[#181818]">
                    <div className="h-32 w-full" style={{ backgroundColor: col.hex }} />
                    <div className="p-4 space-y-1">
                      <p className="font-headline text-lg text-white">{col.name}</p>
                      <p className="font-mono text-xs text-[#FF5500] font-bold">{col.hex}</p>
                      <p className="text-xs text-neutral-400">{col.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
