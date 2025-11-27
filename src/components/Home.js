import React from 'react';
import Links from './Links';

// Hobbit-inspired SVG component
const HobbitGraphic = () => (
  <svg 
    className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
    viewBox="0 0 800 400" 
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
    style={{
      '--primary': '#6b8e23',
      '--secondary': '#f7f5f3', 
      '--support1': '#2d4a2b',
      '--support2': '#8b7355',
      '--support3': '#d4af37'
    }}
  >
    <defs>
      {/* Gradients using CSS custom properties */}
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor:"var(--secondary)", stopOpacity:0.8}} />
        <stop offset="100%" style={{stopColor:"var(--support3)", stopOpacity:0.3}} />
      </linearGradient>
      
      <linearGradient id="hillGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor:"var(--primary)", stopOpacity:0.9}} />
        <stop offset="100%" style={{stopColor:"var(--support1)", stopOpacity:1}} />
      </linearGradient>
      
      <linearGradient id="doorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor:"var(--support2)", stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:"#5a4a37", stopOpacity:1}} />
      </linearGradient>
      
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor:"var(--support3)", stopOpacity:1}} />
        <stop offset="50%" style={{stopColor:"#f4d03f", stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:"#b8941f", stopOpacity:1}} />
      </linearGradient>
      
      <radialGradient id="windowGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{stopColor:"var(--support3)", stopOpacity:0.8}} />
        <stop offset="100%" style={{stopColor:"var(--support3)", stopOpacity:0.2}} />
      </radialGradient>
      
      {/* Filters for effects */}
      <filter id="dropshadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="var(--support1)" floodOpacity="0.3"/>
      </filter>
      
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Sky background */}
    <rect width="800" height="400" fill="url(#skyGradient)"/>
    
    {/* Distant hills */}
    <path d="M0,200 Q200,160 400,180 T800,170 L800,400 L0,400 Z" fill="var(--support1)" opacity="0.4"/>
    <path d="M0,220 Q300,180 600,200 T800,190 L800,400 L0,400 Z" fill="var(--support1)" opacity="0.2"/>
    
    {/* Main hobbit hill */}
    <ellipse cx="400" cy="320" rx="280" ry="120" fill="url(#hillGradient)" filter="url(#dropshadow)"/>
    
    {/* Hobbit hole door */}
    <circle cx="400" cy="280" r="45" fill="url(#doorGradient)" filter="url(#dropshadow)"/>
    
    {/* Door frame */}
    <circle cx="400" cy="280" r="45" fill="none" stroke="var(--support2)" strokeWidth="3"/>
    
    {/* Door panels */}
    <path d="M400,235 L400,325" stroke="#5a4a37" strokeWidth="2"/>
    <path d="M355,280 L445,280" stroke="#5a4a37" strokeWidth="2"/>
    
    {/* Door handle */}
    <circle cx="430" cy="285" r="4" fill="url(#goldGradient)" filter="url(#glow)"/>
    
    {/* Windows */}
    <circle cx="340" cy="260" r="18" fill="url(#windowGlow)" filter="url(#glow)"/>
    <circle cx="460" cy="260" r="18" fill="url(#windowGlow)" filter="url(#glow)"/>
    
    {/* Window frames */}
    <circle cx="340" cy="260" r="18" fill="none" stroke="var(--support2)" strokeWidth="2"/>
    <circle cx="460" cy="260" r="18" fill="none" stroke="var(--support2)" strokeWidth="2"/>
    
    {/* Window cross patterns */}
    <path d="M340,242 L340,278 M322,260 L358,260" stroke="var(--support2)" strokeWidth="1.5"/>
    <path d="M460,242 L460,278 M442,260 L478,260" stroke="var(--support2)" strokeWidth="1.5"/>
    
    {/* Chimney */}
    <rect x="450" y="200" width="20" height="40" fill="var(--support2)" filter="url(#dropshadow)"/>
    <rect x="448" y="198" width="24" height="8" fill="#5a4a37"/>
    
    {/* Smoke */}
    <path d="M460,198 Q465,185 460,175 Q455,165 465,155 Q470,145 460,135" 
          fill="none" stroke="var(--secondary)" strokeWidth="2" opacity="0.2"/>
    
    {/* Garden elements */}
    <g opacity="20.0">
      <circle cx="300" cy="340" r="3" fill="var(--support3)"/>
      <circle cx="320" cy="335" r="2" fill="var(--support3)"/>
      <circle cx="480" cy="340" r="3" fill="var(--support3)"/>
      <circle cx="500" cy="335" r="2" fill="var(--support3)"/>
      <circle cx="520" cy="345" r="2" fill="var(--support3)"/>
    </g>
    
    {/* Flower stems */}
    <g stroke="var(--primary)" strokeWidth="1" opacity="100.0">
      <line x1="300" y1="340" x2="300" y2="355"/>
      <line x1="320" y1="335" x2="320" y2="350"/>
      <line x1="480" y1="340" x2="480" y2="355"/>
      <line x1="500" y1="335" x2="500" y2="350"/>
      <line x1="520" y1="345" x2="520" y2="360"/>
    </g>
    
    {/* Trees */}
    <g opacity="20.0">
      <rect x="140" y="220" width="8" height="40" fill="var(--support2)"/>
      <ellipse cx="144" cy="210" rx="25" ry="30" fill="var(--support1)"/>
      
      <rect x="620" y="200" width="10" height="50" fill="var(--support2)"/>
      <ellipse cx="625" cy="185" rx="30" ry="35" fill="var(--support1)"/>
    </g>
    
    {/* Floating sparkles/magic */}
    <g opacity="18.0">
      <circle cx="200" cy="150" r="2" fill="var(--support3)" filter="url(#glow)"/>
      <circle cx="600" cy="120" r="1.5" fill="var(--support3)" filter="url(#glow)"/>
      <circle cx="150" cy="180" r="1" fill="var(--support3)" filter="url(#glow)"/>
      <circle cx="650" cy="160" r="1" fill="var(--support3)" filter="url(#glow)"/>
    </g>
    
    {/* Pathway */}
    <ellipse cx="400" cy="360" rx="60" ry="15" fill="var(--support2)" opacity="0.4"/>
    <ellipse cx="400" cy="350" rx="40" ry="8" fill="var(--support2)" opacity="0.3"/>
    
    {/* Grass details */}
    <g stroke="var(--primary)" strokeWidth="1" opacity="0.4">
      <path d="M250,350 Q252,345 250,340"/>
      <path d="M270,355 Q272,350 270,345"/>
      <path d="M530,350 Q532,345 530,340"/>
      <path d="M550,355 Q552,350 550,345"/>
    </g>
    
    {/* Corner flourishes */}
    <g opacity="0.4">
      <path d="M20,20 Q40,20 40,40" fill="none" stroke="var(--support3)" strokeWidth="2"/>
      <path d="M780,20 Q760,20 760,40" fill="none" stroke="var(--support3)" strokeWidth="2"/>
      <path d="M20,380 Q40,380 40,360" fill="none" stroke="var(--support3)" strokeWidth="2"/>
      <path d="M780,380 Q760,380 760,360" fill="none" stroke="var(--support3)" strokeWidth="2"/>
    </g>
  </svg>
);

function Home() {
  return (
    <section id="home" 
              data-testid="home-section"
              className="relative flex items-center justify-center min-h-screen overflow-hidden">
      
      {/* Background Hobbit Graphic */}
      <HobbitGraphic />
      
      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center min-h-screen flex-col text-center">
        <img 
          src="profile_pic.png"
          alt="Profile" 
          className="rounded-full border-8 border-support2 shadow-lg"
          loading="lazy"
          width="200"
          height="200"
          style={{ aspectRatio: '1/1' }}
        />
        <h1 className="text-3xl text-support3 my-2 font-montserrat font-bold">Mario Salinas</h1>
        <h2 className="text-text mx-4 mb-2 font-merriweather">
          Computer Science student and web developer passionate about innovative solutions and enhancing user experience.
        </h2>
        <Links />
        <a href="#projects"
          className="w-1/2 h-2/3 py-2 rounded-2xl my-4
                          bg-accent text-secondary 
                          border-2 border-accent
                          animate-shadow-pulse font-montserrat
                          hover:bg-secondary hover:text-accent
                          transition-colors duration-500 ease-linear
                          shadow-lg">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Home;
