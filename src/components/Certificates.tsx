import React, { useState } from 'react';
import { Award, CheckCircle2, ShieldCheck, ExternalLink, Sparkles, X, Eye, FileText, Check } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';
import { CropMark } from './Decorations';
import { Certificate } from '../types';

// Official Google Digital Garage Certificate Badge SVG recreating the provided PDF certificate badge
export const GoogleCertBadge: React.FC<{ size?: number; className?: string }> = ({ size = 64, className = "" }) => (
  <div 
    className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
    style={{ width: size, height: size }}
    aria-hidden="true"
  >
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full overflow-visible"
    >
      {/* Soft circular background */}
      <circle 
        cx="50" 
        cy="50" 
        r="44" 
        fill="#EEF3F0" 
        className="transition-all duration-300 ease-out group-hover:fill-[#E4ECE7]"
      />
      
      {/* Green Certificate Document with subtle scale-up on parent hover */}
      <g className="transition-all duration-300 ease-out origin-center group-hover:scale-105">
        {/* Certificate document base */}
        <path 
          d="M32 26C32 23.8 33.8 22 36 22H55L67 34V74C67 76.2 65.2 78 63 78H36C33.8 78 32 76.2 32 74V26Z" 
          fill="#34A853"
          className="transition-all duration-300 ease-out group-hover:fill-[#2D9247]"
        />
        {/* Folded top-right corner */}
        <path 
          d="M55 22V34H67L55 22Z" 
          fill="#1E7E34"
        />
        {/* Small silhouette icon on certificate */}
        <circle cx="43" cy="36" r="3" fill="white" className="transition-opacity duration-300 group-hover:opacity-95" />
        <path 
          d="M38 45C38 42.5 40 41 43 41C46 41 48 42.5 48 45" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          className="transition-opacity duration-300 group-hover:opacity-95"
        />
        {/* Text lines */}
        <rect x="38" y="52" width="22" height="3" rx="1.5" fill="white" className="transition-opacity duration-300 group-hover:opacity-95" />
        <rect x="38" y="60" width="22" height="3" rx="1.5" fill="white" className="transition-opacity duration-300 group-hover:opacity-95" />
        <rect x="38" y="68" width="14" height="3" rx="1.5" fill="white" className="transition-opacity duration-300 group-hover:opacity-95" />
      </g>

      {/* Gold Star Medal Badge overlapping top-right with scale & opacity transition */}
      <g className="transition-all duration-300 ease-out origin-[64px_34px] group-hover:scale-110">
        <circle cx="64" cy="34" r="14" fill="#F59E0B" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.2))" />
        <circle cx="64" cy="34" r="12" fill="#FBBF24" />
        {/* Star */}
        <path 
          d="M64 27L66.1 31.3L70.8 32L67.4 35.3L68.2 40L64 37.8L59.8 40L60.6 35.3L57.2 32L61.9 31.3L64 27Z" 
          fill="#D97706"
          className="transition-opacity duration-300 group-hover:opacity-90"
        />
      </g>
    </svg>
  </div>
);

export const Certificates: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section 
      id="certificates" 
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#070708] border-b border-[#8B001F]/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16 border-b border-[#8B001F]/30 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] text-[#BE123C] uppercase font-bold block mb-2">
              VERIFIED INDUSTRY CREDENTIALS
            </span>
            <h2 className="font-headline text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase text-white font-black">
              CERTIFICATES
            </h2>
          </div>

          <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest self-start md:self-end">
            ACCREDITED CREDENTIALS ({CERTIFICATES.length})
          </span>
        </div>

        {/* 4 Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CERTIFICATES.map((cert) => {
            const isGoogleDigitalMarketing = cert.id === 'cert-google-digital-marketing';

            return (
              <div
                key={cert.id}
                id={`certificate-card-${cert.number}`}
                onClick={() => setSelectedCert(cert)}
                className="group relative bg-[#0c0a0b] p-7 sm:p-8 rounded-xs border border-[#8B001F]/25 hover:border-[#8B001F] transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Subtle ambient hover glow gradient */}
                <div 
                  className="absolute inset-0 bg-gradient-to-tr from-[#8B001F]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                  aria-hidden="true"
                />

                {/* Top Number & Status Header */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#8B001F]/20">
                    <div className="flex items-baseline gap-3">
                      <span className="font-serif-title text-5xl sm:text-6xl text-[#9E1B32] font-black group-hover:scale-105 transition-transform duration-300">
                        {cert.number}
                      </span>
                      <span className="text-[10px] font-mono text-white/90 uppercase tracking-widest px-2.5 py-0.5 bg-[#8B001F]/30 border border-[#BE123C]/40 rounded-xs font-bold">
                        {cert.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[#BE123C] uppercase tracking-widest px-2.5 py-0.5 bg-[#8B001F]/15 border border-[#8B001F]/30 rounded-xs font-bold">
                        {cert.badge}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest px-2 py-0.5 bg-white/5 rounded-xs">
                        {cert.year}
                      </span>
                    </div>
                  </div>

                  {/* Authentic Google Certificate Badge Header */}
                  {isGoogleDigitalMarketing ? (
                    <div className="flex items-center gap-4 mb-4 p-3 rounded-xs bg-[#8B001F]/10 border border-[#8B001F]/30 group-hover:border-[#BE123C]/50 transition-colors">
                      <GoogleCertBadge size={50} />
                      <div>
                        <div className="text-[11px] font-mono text-[#BE123C] font-bold uppercase tracking-wider">
                          Official Accreditation
                        </div>
                        <div className="text-xs text-neutral-200 font-medium">
                          Completed by <span className="text-white font-bold">{cert.recipient}</span>
                        </div>
                        <div className="text-[10px] font-mono text-neutral-400">
                          ID: {cert.credentialId}
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <h3 className="font-headline text-2xl sm:text-3xl text-white tracking-wide group-hover:text-[#F43F5E] transition-colors mb-2 leading-tight uppercase">
                    {cert.title}
                  </h3>
                  
                  <p className="text-xs font-mono font-semibold text-[#BE123C] mb-3 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 shrink-0 text-[#BE123C]" />
                    <span>{cert.issuer}</span>
                  </p>

                  <p className="text-[11px] font-mono text-neutral-300 mb-4 bg-black/40 px-3 py-2 rounded-xs border border-white/5">
                    KEY SKILLS: {cert.skills}
                  </p>

                  <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom detail pill with verification status & interactive view button */}
                <div className="relative z-10 mt-8 pt-4 border-t border-[#8B001F]/20 flex items-center justify-between text-xs text-neutral-400">
                  {cert.credentialId ? (
                    <span className="font-mono text-[11px] text-neutral-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      ID: {cert.credentialId}
                    </span>
                  ) : (
                    <span className="font-mono text-[11px] text-neutral-500">
                      ACCREDITED
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                    className="text-[11px] font-bold text-white uppercase hover:underline flex items-center gap-1.5 font-mono py-1 px-3 rounded-xs bg-[#8B001F]/40 hover:bg-[#8B001F] border border-[#BE123C]/40 transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>VIEW CERTIFICATE</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Official Certificate Presentation Modal in Dark Editorial Style */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <div 
            className="relative w-full max-w-xl bg-[#0c0a0b] text-white rounded-xs shadow-2xl overflow-hidden p-8 sm:p-12 text-center border border-[#8B001F]/50 animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-xs text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close certificate preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Official Certificate Modal Content */}
            <div className="py-4 space-y-6">
              
              <div className="flex justify-center py-2">
                <GoogleCertBadge size={100} />
              </div>

              <div>
                <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-white leading-snug uppercase">
                  {selectedCert.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-neutral-300 font-light">
                  Completed by <strong className="font-bold text-white">{selectedCert.recipient || 'Manoj Chetri'}</strong> on {selectedCert.year}
                </p>
              </div>

              {/* Completion ID & Status Badge */}
              <div className="pt-4 border-t border-[#8B001F]/30 flex flex-col items-center gap-3">
                {selectedCert.credentialId && (
                  <div className="font-mono text-xs sm:text-sm text-neutral-300 tracking-wider">
                    Completion ID: <span className="font-semibold text-white">{selectedCert.credentialId}</span>
                  </div>
                )}

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xs bg-[#8B001F]/30 text-white text-xs font-semibold border border-[#BE123C]/40">
                  <Check className="w-3.5 h-3.5 text-[#F43F5E]" />
                  <span>Verified Completion by {selectedCert.issuer}</span>
                </div>

                {selectedCert.verificationUrl && (
                  <a
                    href={selectedCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-xs bg-[#8B001F] hover:bg-[#A11D33] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors border border-[#BE123C]/50 shadow-lg shadow-[#8B001F]/30"
                  >
                    <span>Verify on Official Portal</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>

            {/* Footer Notice */}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-400">
              <span className="flex items-center gap-1">
                <FileText className="w-3 h-3 text-[#BE123C]" />
                ACCREDITATION CREDENTIAL
              </span>
              <span>OFFICIAL CREDENTIAL</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
