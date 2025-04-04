import React from 'react';
import Links from './Links';


function Home() {
  return (
    <section id="home" 
              data-testid="home-section"
              className="relative flex items-center justify-center min-h-screen">
      <div className="relative flex items-center justify-center min-h-screen flex-col text-center">
        <img 
          src="bioPhoto.webp"
          alt="Profile" 
          className="rounded-full border-8 border-secondary"
          loading="lazy"
          width="200"
          height="200"
          style={{ aspectRatio: '1/1' }}
        />
        <h1 className="text-3xl text-primary my-2 font-montserrat font-bold">Mario Salinas</h1>
        <h2 className="text-text mx-4 mb-2">
          Computer Science student and web developer passionate about innovative solutions and enhancing user experience.
        </h2>
        <Links />
        <a href="#projects"
          className="w-1/2 h-2/3 py-2 rounded-2xl my-4
                          bg-accent text-white 
                          border-2 border-accent
                          animate-shadow-pulse font-montserrat
                          hover:bg-secondary hover:text-accent
                          transition-colors duration-500 ease-linear">
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Home;
