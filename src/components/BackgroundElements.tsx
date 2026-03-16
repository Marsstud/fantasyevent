import { useMemo } from 'react';

export const BackgroundElements = () => {
  // Generate random sparkles for the magic dust effect
  const sparkles = useMemo(() => Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 4 + 2}px`,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 3 + 2}s`
  })), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-magic-deep">
      {/* Dynamic Shifting Gradient Layer */}
      <div className="absolute inset-0 magic-bg opacity-40 animate-hue-shift"></div>
      
      {/* Magical Fog / Mist Layers */}
      <div className="absolute -inset-[100px] opacity-20">
        <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2)_0%,transparent_70%)] blur-[120px] animate-orb-float"></div>
        <div className="absolute top-1/4 left-1/4 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(244,209,37,0.1)_0%,transparent_60%)] blur-[100px] animate-orb-float" style={{ animationDelay: '-5s' }}></div>
      </div>

      {/* Floating Magic Dust (Sparkles) */}
      <div className="absolute inset-0">
        {sparkles.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white shadow-[0_0_10px_white] animate-twinkle"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: s.duration
            }}
          />
        ))}
      </div>
      
      {/* Layered Silhouettes for Parallax Depth */}
      <div className="absolute bottom-0 left-0 w-full h-[60vh] pointer-events-none flex flex-col justify-end">
        {/* Far Background: Distant Mountains/Castles (Lighter/More Blur) */}
        <div className="absolute bottom-0 left-0 w-full opacity-5 blur-[2px] transform translate-y-20">
          <svg className="w-full h-auto text-primary" viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,300 L0,150 C150,120 300,180 450,140 C600,100 750,160 900,120 C1050,80 1200,130 1200,100 L1200,300 Z" fill="currentColor" />
            <rect x="200" y="80" width="30" height="80" fill="currentColor" />
            <path d="M200,80 L215,40 L230,80 Z" fill="currentColor" />
            <rect x="1000" y="60" width="25" height="100" fill="currentColor" />
            <path d="M1000,60 L1012,30 L1025,60 Z" fill="currentColor" />
          </svg>
        </div>

        {/* Midground: Forest Silhouette (Deeper Purple) */}
        <div className="absolute bottom-0 left-0 w-full opacity-[0.08] silhouette-overlay">
          <svg className="w-full h-auto text-secondary" viewBox="0 0 1200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,200 L0,150 C100,130 200,180 300,140 C400,100 500,160 600,120 C700,80 800,140 900,110 C1000,80 1100,130 1200,100 L1200,200 Z" fill="currentColor" />
            {/* Tree shapes */}
            {[100, 250, 400, 550, 700, 850, 1000, 1150].map((x, i) => (
              <path key={i} d={`M${x},180 L${x + 20},120 L${x + 40},180 Z`} fill="currentColor" opacity={0.6 + (i % 3) * 0.2} />
            ))}
          </svg>
        </div>
      </div>

      {/* Floating Hero Emblems */}
      <span className="material-symbols-outlined absolute text-primary/30 text-6xl animate-float blur-[1px]" style={{ top: '10%', right: '15%' }}>auto_awesome</span>
      <span className="material-symbols-outlined absolute text-secondary/40 text-8xl animate-float-delayed blur-[2px]" style={{ bottom: '30%', left: '10%' }}>auto_awesome</span>
      <span className="material-symbols-outlined absolute text-accent/20 text-5xl animate-orb-float" style={{ top: '40%', left: '40%' }}>sparkles</span>
      
      {/* Light Beams from top */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-gradient-to-b from-primary/5 to-transparent skew-x-[-20deg] blur-3xl opacity-30"></div>
    </div>
  );
};
