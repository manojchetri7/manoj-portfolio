import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  pulseSpeed: number;
  pulsePhase: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  tailWidth: number;
  active: boolean;
}

export const GlobalCosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Palette: Deep burgundy, crimson, soft rose, and starlight white
    const colors = [
      'rgba(190, 18, 60, ',   // Crimson
      'rgba(244, 63, 94, ',   // Rose red
      'rgba(251, 113, 133, ', // Soft pinkish red
      'rgba(255, 255, 255, ', // Starlight white
      'rgba(139, 0, 31, ',    // Deep Burgundy
    ];

    // Responsive star count: Desktop has ~75, mobile has ~35
    const isMobile = width < 768;
    const starCount = isMobile ? 35 : 75;

    const stars: Star[] = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.6 + 0.5,
      speedY: (Math.random() * 0.22 + 0.08) * (prefersReducedMotion ? 0 : 1),
      speedX: (Math.random() * 0.08 - 0.04) * (prefersReducedMotion ? 0 : 1),
      opacity: Math.random() * 0.55 + 0.15,
      pulseSpeed: Math.random() * 0.02 + 0.008,
      pulsePhase: Math.random() * Math.PI * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    // Shooting stars state
    const shootingStars: ShootingStar[] = [];
    let nextShootingStarTime = Date.now() + 2500;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const spawnShootingStar = () => {
      // Spawn diagonally across upper viewport
      const startX = Math.random() * width * 0.85 + width * 0.05;
      const startY = Math.random() * (height * 0.4);
      shootingStars.push({
        x: startX,
        y: startY,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 5 + 6,
        angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1), // ~45-50 degrees diagonal
        opacity: 0.85,
        tailWidth: Math.random() * 1.4 + 0.8,
        active: true,
      });
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();

      // Check shooting star spawn timer
      if (!prefersReducedMotion && now > nextShootingStarTime) {
        spawnShootingStar();
        nextShootingStarTime = now + Math.random() * 4500 + 4000;
      }

      // Render & update background stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        if (!prefersReducedMotion) {
          star.y += star.speedY;
          star.x += star.speedX;
          star.pulsePhase += star.pulseSpeed;

          // Wrap around edges seamlessly
          if (star.y > height) {
            star.y = 0;
            star.x = Math.random() * width;
          }
          if (star.x > width) star.x = 0;
          if (star.x < 0) star.x = width;
        }

        const dynamicOpacity = Math.max(
          0.12,
          Math.min(0.85, star.opacity + Math.sin(star.pulsePhase) * 0.3)
        );

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${dynamicOpacity})`;
        ctx.fill();

        // Extra soft glow for larger stars
        if (star.size > 1.3) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(190, 18, 60, ${dynamicOpacity * 0.25})`;
          ctx.fill();
        }
      }

      // Render & update shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        if (!s.active) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        gradient.addColorStop(0, 'rgba(190, 18, 60, 0)');
        gradient.addColorStop(0.6, `rgba(190, 18, 60, ${s.opacity * 0.35})`);
        gradient.addColorStop(0.95, `rgba(244, 63, 94, ${s.opacity * 0.85})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${s.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = s.tailWidth;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Glowing comet head
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.tailWidth * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.fill();

        // Move shooting star
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.012;

        if (s.opacity <= 0 || s.x > width + 100 || s.y > height + 100) {
          s.active = false;
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none select-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Canvas Starfield & Shooting Stars (Full Viewport) */}
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 2. Top Celestial Event Horizon / Accretion Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-44 sm:h-56 pointer-events-none overflow-hidden flex flex-col items-center opacity-85">
        {/* Soft Volumetric Light Fan */}
        <div className="w-[85%] sm:w-[65%] h-full bg-gradient-to-b from-[#BE123C]/18 via-[#8B001F]/8 to-transparent blur-3xl" />
        {/* Outer Luminous Accretion Ellipse */}
        <div className="absolute -top-16 sm:-top-20 w-[340px] sm:w-[500px] md:w-[620px] h-[120px] sm:h-[160px] rounded-[100%] border-b-2 border-r border-l border-[#BE123C]/50 shadow-[0_15px_60px_rgba(190,18,60,0.45)] blur-[1px]" />
        {/* Middle Core Ring */}
        <div className="absolute -top-14 sm:-top-16 w-[260px] sm:w-[380px] md:w-[480px] h-[90px] sm:h-[120px] rounded-[100%] border-b-2 border-[#F43F5E]/70 shadow-[0_10px_40px_rgba(244,63,94,0.6)]" />
        {/* Focal Arc */}
        <div className="absolute -top-10 sm:-top-12 w-[180px] sm:w-[260px] md:w-[320px] h-[60px] sm:h-[80px] rounded-[100%] border-b-2 border-white/80 shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
        {/* Dark core */}
        <div className="absolute -top-16 sm:-top-20 w-[140px] sm:w-[200px] h-[70px] sm:h-[90px] rounded-[100%] bg-[#070708] shadow-[inset_0_-10px_20px_rgba(190,18,60,0.7)]" />
      </div>

      {/* 3. Deep Burgundy Ambient Nebular Glows */}
      <div className="absolute top-[10%] right-[-100px] w-[500px] h-[500px] bg-[#8B001F]/12 rounded-full blur-[140px]" />
      <div className="absolute top-[45%] left-[-150px] w-[550px] h-[550px] bg-[#5A0B1A]/16 rounded-full blur-[150px]" />
      <div className="absolute top-[75%] right-[-120px] w-[600px] h-[600px] bg-[#8B001F]/14 rounded-full blur-[160px]" />

      {/* 4. Global Fixed Orbital Ring Systems in Background */}
      {/* Upper-Right Global Orbital System */}
      <div className="absolute -top-24 -right-24 w-[550px] h-[550px] sm:w-[700px] sm:h-[700px] opacity-40 lg:opacity-50">
        <div className="w-full h-full rounded-full border border-[#8B001F]/30 animate-orbit-slow relative">
          <div className="absolute inset-0 rounded-full border-t border-r border-t-[#F43F5E]/40 border-r-transparent blur-[0.5px]" />
          <span className="absolute top-[10%] left-[20%] w-2 h-2 rounded-full bg-[#BE123C] shadow-[0_0_10px_#BE123C]" />
          <span className="absolute bottom-[15%] right-[25%] w-1.5 h-1.5 rounded-full bg-[#F43F5E] shadow-[0_0_8px_#F43F5E]" />
        </div>
        {/* Concentric Dashed Ring */}
        <div className="absolute inset-14 sm:inset-20 rounded-full border border-dashed border-[#BE123C]/20 animate-orbit-reverse-slow">
          <span className="absolute top-[25%] right-[10%] w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#F43F5E]" />
        </div>
      </div>

      {/* Lower-Left Global Orbital System */}
      <div className="absolute top-[55%] -left-32 w-[500px] h-[500px] sm:w-[650px] sm:h-[650px] opacity-30 lg:opacity-40">
        <div className="w-full h-full rounded-full border border-dashed border-[#BE123C]/20 animate-orbit-reverse-slow relative">
          <div className="absolute inset-0 rounded-full border-b border-l border-b-[#BE123C]/40 border-l-transparent blur-[0.5px]" />
          <span className="absolute bottom-[20%] left-[25%] w-2 h-2 rounded-full bg-[#BE123C] shadow-[0_0_10px_#BE123C]" />
        </div>
      </div>
    </div>
  );
};
