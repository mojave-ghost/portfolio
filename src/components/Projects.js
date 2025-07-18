import React from 'react';

function Projects() {
  return (
    <section className="my-4">
      <h2 className="m-4 text-2xl text-primary font-montserrat" id="projects">Projects</h2>
      <div className="grid grid-cols-1 mx-8 gap-6
                      lg:grid-cols-2 lg:gap-6
                      2xl:grid-cols-3 2xl:gap-8">
        
        <div className="project-card flex flex-col h-full">
          <img src="Modern-Interactive-landing-page.png" 
                alt="Project 2" 
                className="project-img"
                loading="lazy"
                width="400"
                height="300"
                style={{ aspectRatio: '1/1' }} />
          <h3 className="text-primary text-xl font-montserrat mt-4">Modern Interactive Landing Page</h3>
          <p className="project-p flex-grow mb-4">A modern, interactive landing page showcasing cutting-edge web design trends for 
            2025. Built with pure HTML, CSS, and JavaScript to demonstrate advanced design concepts and conversion-focused UX.
          </p>
          <div className="relative flex flex-col items-center justify-center mt-auto">
            <a href="https://modern-interactive-landing-page.netlify.app/" className="project-a" target="_blank" rel="noreferrer">View Site</a>
          </div>
        </div>

        <div className="project-card flex flex-col h-full">
          <img src="Conversion-driven-landing-page.png" 
                alt="Project 2" 
                className="project-img"
                loading="lazy"
                width="400"
                height="300"
                style={{ aspectRatio: '1/1' }} />
          <h3 className="text-primary text-xl font-montserrat mt-4">Conversion-Driven Landing Page</h3>
          <p className="project-p flex-grow mb-4">A high-converting, mobile-responsive landing page designed for service-based businesses and coaching programs. 
            This project demonstrates modern web development practices with a focus on conversion optimization and user experience.
          </p>
          <div className="relative flex flex-col items-center justify-center mt-auto">
            <a href="https://conversion-driven-landing-page.netlify.app/" className="project-a" target="_blank" rel="noreferrer">View Site</a>
          </div>
        </div>

        <div className="project-card flex flex-col h-full">
          <img src="Basic-landing-page.png" 
                alt="Project 2" 
                className="project-img"
                loading="lazy"
                width="400"
                height="300"
                style={{ aspectRatio: '1/1' }} />
          <h3 className="text-primary text-xl font-montserrat mt-4">Basic Landing Page</h3>
          <p className="project-p flex-grow mb-4">A simple visual reference page that captures a broader vision for a website.</p>
          <div className="relative flex flex-col items-center justify-center mt-auto">
            <a href="https://spanish-merchat-lp.netlify.app/" className="project-a" target="_blank" rel="noreferrer">View Site</a>
          </div>
        </div>

        <div className="project-card flex flex-col h-full">
          <img src="./shatteronline (1).webp" 
                alt="Shatter Online" 
                className="project-img"
                loading="lazy"
                width="400"
                height="300"
                style={{ aspectRatio: '1/1' }} />
          <h3 className="text-primary text-xl font-montserrat mt-4">Shatter.io</h3>
          <p className="project-p flex-grow mb-4">A search bar that retrieves World of Warcraft players' PvP Stats.</p>
          <div className="relative flex flex-col items-center justify-center mt-auto">
            <a href="https://shatteronline.netlify.app" className="project-a" target="_blank" rel="noreferrer">View Site</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
