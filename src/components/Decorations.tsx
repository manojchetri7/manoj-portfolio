import React from 'react';

// Burgundy squiggle matching editorial style
export const YellowSquiggle: React.FC<{ className?: string; flip?: boolean; rotate?: number }> = ({ 
  className = "w-16 h-8 text-[#BE123C]", 
  flip = false,
  rotate = 0
}) => (
  <svg 
    viewBox="0 0 100 40" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`${className} pointer-events-none select-none`}
    style={{ 
      transform: `${flip ? 'scaleX(-1)' : ''} rotate(${rotate}deg)`,
      transition: 'transform 0.3s ease'
    }}
    aria-hidden="true"
  >
    <path 
      d="M5 25C15 5 25 35 35 15C45 -5 55 35 65 18C75 0 85 30 95 12" 
      stroke="currentColor" 
      strokeWidth="5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// Looped squiggle
export const YellowLoopSquiggle: React.FC<{ className?: string }> = ({ className = "w-16 h-12 text-[#BE123C]" }) => (
  <svg 
    viewBox="0 0 80 50" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`${className} pointer-events-none select-none`}
    aria-hidden="true"
  >
    <path 
      d="M8 38C25 45 35 5 45 15C55 25 28 35 38 42C48 48 70 20 75 10" 
      stroke="currentColor" 
      strokeWidth="4.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// Curved hand-drawn dotted arrow matching reference
export const DottedArrow: React.FC<{ className?: string }> = ({ className = "w-24 h-16 text-white/70" }) => (
  <svg 
    viewBox="0 0 120 70" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={`${className} pointer-events-none select-none`}
    aria-hidden="true"
  >
    <path 
      d="M10 55C40 65 75 40 105 15" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeDasharray="5 5" 
      strokeLinecap="round" 
    />
    <path 
      d="M95 10L107 14L101 26" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
  </svg>
);

// Pen Tool cursor / icon
export const PenToolBadge: React.FC<{ size?: number; className?: string }> = ({ size = 44, className = "" }) => (
  <div 
    className={`group inline-flex items-center justify-center rounded-full bg-[#8B001F] text-white shadow-lg shadow-[#8B001F]/30 border-2 border-[#BE123C]/50 transition-all duration-300 hover:scale-110 cursor-pointer ${className}`}
    style={{ width: size, height: size }}
    aria-hidden="true"
  >
    <svg 
      width={size * 0.55} 
      height={size * 0.55} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      className="overflow-visible transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.59L8.41 12 13 7.41V11h5v2h-5v3.59z" opacity="0" />
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" opacity="0" />
      {/* Pen nib vector icon with subtle scale-105 transform and opacity transition on parent container hover */}
      <path 
        d="M19.4 4.6a2 2 0 0 0-2.8 0l-1.9 1.9 2.8 2.8 1.9-1.9a2 2 0 0 0 0-2.8zM3 18.2V21h2.8l9.4-9.4-2.8-2.8L3 18.2zm9.1-8.3l1.8 1.8-8.1 8.1H4.6v-1.2l8.1-8.1z"
        className="transition-all duration-300 ease-out origin-center opacity-100 group-hover:scale-110 group-hover:opacity-90"
      />
      <circle 
        cx="12" 
        cy="12" 
        r="1.5" 
        fill="currentColor" 
        className="transition-all duration-300 ease-out origin-center opacity-100 group-hover:scale-125 group-hover:opacity-90"
      />
    </svg>
  </div>
);

// App icon badge (authentic look like in the reference Ps, Ai, Pr, Id, Xl, Fg, Cv)
export const AdobeBadge: React.FC<{ 
  code: 'Ps' | 'Ai' | 'Pr' | 'Id' | 'Fg' | 'Cv' | 'Xl'; 
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ code, size = 'md', className = '' }) => {
  const styles = {
    Ps: { bg: '#001E36', border: '#31A8FF', text: '#31A8FF', label: 'Photoshop' },
    Ai: { bg: '#330000', border: '#FF9A00', text: '#FF9A00', label: 'Illustrator' },
    Pr: { bg: '#00005B', border: '#9999FF', text: '#9999FF', label: 'Premiere Pro' },
    Id: { bg: '#2E001F', border: '#FF3366', text: '#FF3366', label: 'InDesign' },
    Fg: { bg: '#1E1E1E', border: '#0ACF83', text: '#0ACF83', label: 'Figma' },
    Cv: { bg: '#002B36', border: '#00C4CC', text: '#00C4CC', label: 'Canva' },
    Xl: { bg: '#0A3B21', border: '#107C41', text: '#21A366', label: 'Microsoft Excel' },
  }[code];

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs rounded-md border',
    md: 'w-12 h-12 text-base font-bold rounded-lg border-2',
    lg: 'w-16 h-16 text-xl font-black rounded-xl border-2'
  }[size];

  return (
    <div 
      className={`inline-flex items-center justify-center font-sans select-none tracking-tight shadow-lg transition-transform hover:scale-110 ${sizeClasses} ${className}`}
      style={{
        backgroundColor: styles.bg,
        borderColor: styles.border,
        color: styles.text,
      }}
      title={styles.label}
    >
      <span>{code}</span>
    </div>
  );
};

// Ripped / Torn Paper Edge SVG (Used as footer divider matching reference slide 8)
export const TornPaperEdge: React.FC<{ className?: string; fill?: string }> = ({ 
  className = "w-full text-[#ffffff]",
  fill = "currentColor"
}) => (
  <div className={`overflow-hidden leading-none select-none pointer-events-none ${className}`} aria-hidden="true">
    <svg 
      viewBox="0 0 1440 80" 
      preserveAspectRatio="none" 
      className="w-full h-16 sm:h-20 block"
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M0 45L40 38L75 52L110 32L150 48L195 28L240 50L290 35L335 48L380 25L425 45L470 30L515 54L560 36L610 50L660 26L710 46L760 32L810 52L860 30L910 48L960 22L1010 45L1060 28L1110 52L1160 35L1210 49L1260 25L1310 45L1360 32L1405 50L1440 38V80H0V45Z" 
        fill={fill}
      />
      {/* Underlying shadow layer to give authentic 3D ripped paper depth */}
      <path 
        d="M0 43L40 36L75 50L110 30L150 46L195 26L240 48L290 33L335 46L380 23L425 43L470 28L515 52L560 34L610 48L660 24L710 44L760 30L810 50L860 28L910 46L960 20L1010 43L1060 26L1110 50L1160 33L1210 47L1260 23L1310 43L1360 30L1405 48L1440 36" 
        stroke="rgba(0,0,0,0.25)" 
        strokeWidth="3"
      />
    </svg>
  </div>
);

// Precision Crop Mark (for that authentic editorial / print design layout)
export const CropMark: React.FC<{ position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; className?: string }> = ({
  position = 'top-left',
  className = ''
}) => {
  return (
    <div className={`pointer-events-none select-none opacity-40 ${className}`} aria-hidden="true">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
        {position === 'top-left' && (
          <>
            <line x1="0" y1="8" x2="16" y2="8" />
            <line x1="8" y1="0" x2="8" y2="16" />
          </>
        )}
        {position === 'top-right' && (
          <>
            <line x1="8" y1="8" x2="24" y2="8" />
            <line x1="16" y1="0" x2="16" y2="16" />
          </>
        )}
        {position === 'bottom-left' && (
          <>
            <line x1="0" y1="16" x2="16" y2="16" />
            <line x1="8" y1="8" x2="8" y2="24" />
          </>
        )}
        {position === 'bottom-right' && (
          <>
            <line x1="8" y1="16" x2="24" y2="16" />
            <line x1="16" y1="8" x2="16" y2="24" />
          </>
        )}
      </svg>
    </div>
  );
};
