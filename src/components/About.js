import React from 'react';

// Hobbit Countryside SVG component inspired by the peaceful Shire aesthetic
const HobbitCountrysideGraphic = () => (
  <svg 
    className="absolute inset-0 w-full h-full object-cover opacity-15 pointer-events-none"
    viewBox="0 0 800 600" 
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
      {/* Gradients */}
      <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor:"#87ceeb", stopOpacity:0.8}} />
        <stop offset="70%" style={{stopColor:"#f0f8ff", stopOpacity:0.6}} />
        <stop offset="100%" style={{stopColor:"var(--secondary)", stopOpacity:0.3}} />
      </linearGradient>
      
      <linearGradient id="hillGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor:"var(--primary)", stopOpacity:0.9}} />
        <stop offset="100%" style={{stopColor:"var(--support1)", stopOpacity:1}} />
      </linearGradient>
      
      <linearGradient id="hillGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor:"#7ba428", stopOpacity:0.8}} />
        <stop offset="100%" style={{stopColor:"var(--primary)", stopOpacity:0.9}} />
      </linearGradient>
      
      <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{stopColor:"var(--support2)", stopOpacity:0.6}} />
        <stop offset="50%" style={{stopColor:"#d2b48c", stopOpacity:0.8}} />
        <stop offset="100%" style={{stopColor:"var(--support2)", stopOpacity:0.6}} />
      </linearGradient>
      
      <linearGradient id="treeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{stopColor:"var(--support1)", stopOpacity:1}} />
        <stop offset="100%" style={{stopColor:"#1a332a", stopOpacity:1}} />
      </linearGradient>
      
      <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{stopColor:"var(--support3)", stopOpacity:0.8}} />
        <stop offset="70%" style={{stopColor:"#f4d03f", stopOpacity:0.4}} />
        <stop offset="100%" style={{stopColor:"#f4d03f", stopOpacity:0.1}} />
      </radialGradient>
      
      {/* Filters */}
      <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="1" dy="2" stdDeviation="2" floodColor="var(--support1)" floodOpacity="0.2"/>
      </filter>
      
      <filter id="glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge> 
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    
    {/* Sky background */}
    <rect width="800" height="600" fill="url(#skyGradient)"/>
    
    {/* Sun */}
    <circle cx="150" cy="120" r="40" fill="url(#sunGradient)" filter="url(#glow)" opacity="0.7"/>
    
    {/* Distant rolling hills */}
    <path d="M0,250 Q100,200 200,220 T400,210 T600,200 T800,210 L800,600 L0,600 Z" 
          fill="var(--support1)" opacity="0.3"/>
    <path d="M0,280 Q150,240 300,260 T600,250 T800,240 L800,600 L0,600 Z" 
          fill="var(--primary)" opacity="0.4"/>
    
    {/* Main rolling hills */}
    <path d="M0,320 Q200,280 400,300 T800,290 L800,600 L0,600 Z" 
          fill="url(#hillGradient1)" filter="url(#softShadow)"/>
    <path d="M0,380 Q300,340 600,360 T800,350 L800,600 L0,600 Z" 
          fill="url(#hillGradient2)"/>
    
    {/* Winding path */}
    <path d="M50,500 Q200,480 350,490 Q500,500 650,480 Q750,470 800,475" 
          fill="none" stroke="url(#pathGradient)" strokeWidth="20" opacity="0.6"/>
    <path d="M50,500 Q200,480 350,490 Q500,500 650,480 Q750,470 800,475" 
          fill="none" stroke="#c19a6b" strokeWidth="12" opacity="0.8"/>
    
    {/* Large oak tree on the left */}
    <g opacity="0.8">
      <rect x="120" y="360" width="12" height="80" fill="var(--support2)" filter="url(#softShadow)"/>
      <ellipse cx="126" cy="330" rx="45" ry="50" fill="url(#treeGradient)" filter="url(#softShadow)"/>
      <ellipse cx="115" cy="320" rx="25" ry="30" fill="var(--support1)" opacity="0.8"/>
      <ellipse cx="140" cy="325" rx="30" ry="35" fill="var(--support1)" opacity="0.7"/>
    </g>
    
    {/* Bench under the tree */}
    <g opacity="0.7">
      <rect x="90" y="420" width="40" height="8" fill="var(--support2)" filter="url(#softShadow)"/>
      <rect x="95" y="420" width="4" height="20" fill="var(--support2)"/>
      <rect x="125" y="420" width="4" height="20" fill="var(--support2)"/>
    </g>
    
    {/* Distant trees */}
    <g opacity="0.4">
      <rect x="600" y="300" width="8" height="40" fill="var(--support2)"/>
      <ellipse cx="604" cy="290" rx="20" ry="25" fill="var(--support1)"/>
      
      <rect x="680" y="310" width="6" height="35" fill="var(--support2)"/>
      <ellipse cx="683" cy="300" rx="18" ry="22" fill="var(--support1)"/>
      
      <rect x="720" y="305" width="7" height="38" fill="var(--support2)"/>
      <ellipse cx="723.5" cy="295" rx="22" ry="28" fill="var(--support1)"/>
    </g>
    
    {/* Scattered flowers and grass */}
    <g opacity="0.6">
      {/* Flower patches */}
      <circle cx="200" cy="450" r="3" fill="var(--support3)"/>
      <circle cx="220" cy="445" r="2" fill="#ff69b4"/>
      <circle cx="240" cy="455" r="2.5" fill="#98fb98"/>
      <circle cx="450" cy="420" r="2" fill="var(--support3)"/>
      <circle cx="470" cy="425" r="3" fill="#ff69b4"/>
      <circle cx="490" cy="418" r="2" fill="#98fb98"/>
      
      {/* Flower stems */}
      <line x1="200" y1="450" x2="200" y2="465" stroke="var(--primary)" strokeWidth="1"/>
      <line x1="220" y1="445" x2="220" y2="460" stroke="var(--primary)" strokeWidth="1"/>
      <line x1="240" y1="455" x2="240" y2="470" stroke="var(--primary)" strokeWidth="1"/>
      <line x1="450" y1="420" x2="450" y2="435" stroke="var(--primary)" strokeWidth="1"/>
      <line x1="470" y1="425" x2="470" y2="440" stroke="var(--primary)" strokeWidth="1"/>
      <line x1="490" y1="418" x2="490" y2="433" stroke="var(--primary)" strokeWidth="1"/>
    </g>
    
    {/* Grass details */}
    <g stroke="var(--primary)" strokeWidth="1" opacity="0.4">
      <path d="M180,470 Q182,465 180,460"/>
      <path d="M185,475 Q187,470 185,465"/>
      <path d="M190,472 Q192,467 190,462"/>
      <path d="M420,440 Q422,435 420,430"/>
      <path d="M425,445 Q427,440 425,435"/>
      <path d="M430,442 Q432,437 430,432"/>
      <path d="M500,460 Q502,455 500,450"/>
      <path d="M505,465 Q507,460 505,455"/>
    </g>
    
    {/* Clouds */}
    <g opacity="0.3">
      <ellipse cx="300" cy="100" rx="40" ry="20" fill="white"/>
      <ellipse cx="320" cy="95" rx="30" ry="15" fill="white"/>
      <ellipse cx="280" cy="105" rx="25" ry="12" fill="white"/>
      
      <ellipse cx="550" cy="80" rx="35" ry="18" fill="white"/>
      <ellipse cx="570" cy="75" rx="25" ry="12" fill="white"/>
    </g>
    
    {/* Fence posts in distance */}
    <g opacity="0.3">
      <rect x="350" y="380" width="3" height="25" fill="var(--support2)"/>
      <rect x="370" y="378" width="3" height="27" fill="var(--support2)"/>
      <rect x="390" y="382" width="3" height="23" fill="var(--support2)"/>
      <rect x="410" y="380" width="3" height="25" fill="var(--support2)"/>
      
      {/* Fence rails */}
      <rect x="350" y="385" width="65" height="2" fill="var(--support2)"/>
      <rect x="350" y="395" width="65" height="2" fill="var(--support2)"/>
    </g>
    
    {/* Butterflies */}
    <g opacity="0.5">
      <circle cx="280" cy="350" r="1" fill="var(--support3)"/>
      <ellipse cx="278" cy="349" rx="3" ry="1" fill="#ff69b4" opacity="0.6"/>
      <ellipse cx="282" cy="349" rx="3" ry="1" fill="#ff69b4" opacity="0.6"/>
      
      <circle cx="520" cy="320" r="1" fill="var(--support3)"/>
      <ellipse cx="518" cy="319" rx="2.5" ry="1" fill="#98fb98" opacity="0.6"/>
      <ellipse cx="522" cy="319" rx="2.5" ry="1" fill="#98fb98" opacity="0.6"/>
    </g>
    
    {/* Windmill in far distance */}
    <g opacity="0.2">
      <rect x="650" y="200" width="6" height="40" fill="var(--support2)"/>
      <circle cx="653" cy="200" r="8" fill="var(--support2)"/>
      <line x1="653" y1="192" x2="653" y2="208" stroke="var(--support2)" strokeWidth="1"/>
      <line x1="645" y1="200" x2="661" y2="200" stroke="var(--support2)" strokeWidth="1"/>
    </g>
    
    {/* Corner decorative elements */}
    <g opacity="0.3">
      <path d="M20,20 Q40,20 40,40" fill="none" stroke="var(--support3)" strokeWidth="2"/>
      <path d="M780,20 Q760,20 760,40" fill="none" stroke="var(--support3)" strokeWidth="2"/>
      <circle cx="30" cy="30" r="2" fill="var(--support3)"/>
      <circle cx="770" cy="30" r="2" fill="var(--support3)"/>
    </g>
  </svg>
);

function About() {
  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background Hobbit Countryside Graphic */}
      <HobbitCountrysideGraphic />
      
      {/* Content with overlay */}
      <div className="relative z-10">
        <h2 className="m-4 text-primary font-montserrat text-2xl">About Me</h2>
        <h3 className="mx-6 text-support3 text-lg font-semibold" style={{WebkitTextStroke: '0.5px black'}}>Welcome to my portfolio!</h3>
        <br></br>
        <p className="text-support3 mx-6 my-4 leading-relaxed" style={{WebkitTextStroke: '0.5px black'}}>
          Experienced full-stack developer specializing in modern web application development with a strong foundation in computer science from California State University, East Bay. Based in Oakland, CA, I deliver high-performing, responsive, and user-centric digital solutions for businesses across industries.
          <br></br>
          <br></br>
          My development philosophy centers on creating scalable, maintainable code that solves real business challenges. I bring a structured methodology to every project, from requirements gathering through deployment and maintenance. My background in both academic computer science and practical implementation allows me to approach problems with both theoretical knowledge and hands-on experience.
          <br></br>
          <br></br>
          My technical expertise includes:
          <br></br>
          <br></br>
          • <b>Front-End Development</b>: JavaScript, React, TailwindCSS, HTML5, jQuery
          <br></br>
          • <b>Back-End Solutions</b>: Node.js, Express, C#, Python, C++
          <br></br>
          • <b>Database Management</b>: MySQL, Firebase
          <br></br>
          • <b>Development Tools</b>: Git, GitHub, Figma, Vite
          <br></br>
          <br></br>
          With extensive experience providing web development services through freelance platforms, I've refined my ability to translate client requirements into functional, elegant solutions. I specialize in creating responsive, mobile-first web applications, developing custom React components, building robust API integrations, and optimizing web performance.
          <br></br>
          <br></br>
          I am committed to clear communication, meeting deadlines, and exceeding expectations on every project. Ready to help transform your digital vision into reality with efficient, clean code and innovative solutions. Let's create something amazing together!
        </p>
      </div>
    </section>
  );
}

export default About;
