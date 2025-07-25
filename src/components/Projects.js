import React from 'react';

function Projects() {
  return (
    <section className="my-4">
      <h2 className="m-4 text-primary font-montserrat text-2xl" id="projects">Projects</h2>
      <div className="grid grid-cols-1 mx-8 gap-6
                      lg:grid-cols-2 lg:gap-6
                      2xl:grid-cols-3 2xl:gap-8">
        
        <div className="project-card flex flex-col h-full p-6 bg-gradient-to-b from-secondary to-primary/10 rounded-3xl border-4 border-support3 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative mb-4">
            <img src="Modern-Interactive-landing-page.png" 
                  alt="Project 2" 
                  className="w-full h-64 object-cover rounded-full border-4 border-support3 shadow-md"
                  loading="lazy"
                  width="400"
                  height="300"
                  style={{ aspectRatio: '1/1' }} />
            <div className="absolute inset-0 rounded-full border-2 border-support3/50 opacity-50"></div>
          </div>
          <h3 className="text-text text-xl font-montserrat mt-2 mb-3 font-bold">Modern Interactive Landing Page</h3>
          <p className="text-text flex-grow mb-4 text-sm leading-relaxed">A modern, interactive landing page showcasing cutting-edge web design trends for 
            2025. Built with pure HTML, CSS, and JavaScript to demonstrate advanced design concepts and conversion-focused UX.
          </p>
          <div className="relative flex flex-col items-center justify-center mt-auto">
            <a href="https://modern-interactive-landing-page.netlify.app/" 
               className="px-6 py-2 bg-accent hover:bg-accent/80 text-secondary rounded-full font-montserrat font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
               target="_blank" rel="noreferrer">View Site</a>
          </div>
        </div>

        <div className="project-card flex flex-col h-full p-6 bg-gradient-to-b from-secondary to-primary/10 rounded-3xl border-4 border-support3 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative mb-4">
            <img src="Conversion-driven-landing-page.png" 
                  alt="Project 2" 
                  className="w-full h-64 object-cover rounded-full border-4 border-support3 shadow-md"
                  loading="lazy"
                  width="400"
                  height="300"
                  style={{ aspectRatio: '1/1' }} />
            <div className="absolute inset-0 rounded-full border-2 border-support3/50 opacity-50"></div>
          </div>
          <h3 className="text-text text-xl font-montserrat mt-2 mb-3 font-bold">Conversion-Driven Landing Page</h3>
          <p className="text-text flex-grow mb-4 text-sm leading-relaxed">A high-converting, mobile-responsive landing page designed for service-based businesses and coaching programs. 
            This project demonstrates modern web development practices with a focus on conversion optimization and user experience.
          </p>
          <div className="relative flex flex-col items-center justify-center mt-auto">
            <a href="https://conversion-driven-landing-page.netlify.app/" 
               className="px-6 py-2 bg-accent hover:bg-accent/80 text-secondary rounded-full font-montserrat font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
               target="_blank" rel="noreferrer">View Site</a>
          </div>
        </div>

        <div className="project-card flex flex-col h-full p-6 bg-gradient-to-b from-secondary to-primary/10 rounded-3xl border-4 border-support3 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative mb-4">
            <img src="Basic-landing-page.png" 
                  alt="Project 2" 
                  className="w-full h-64 object-cover rounded-full border-4 border-support3 shadow-md"
                  loading="lazy"
                  width="400"
                  height="300"
                  style={{ aspectRatio: '1/1' }} />
            <div className="absolute inset-0 rounded-full border-2 border-support3/50 opacity-50"></div>
          </div>
          <h3 className="text-text text-xl font-montserrat mt-2 mb-3 font-bold">Basic Landing Page</h3>
          <p className="text-text flex-grow mb-4 text-sm leading-relaxed">A simple visual reference page that captures a broader vision for a website.</p>
          <div className="relative flex flex-col items-center justify-center mt-auto">
            <a href="https://spanish-merchat-lp.netlify.app/" 
               className="px-6 py-2 bg-accent hover:bg-accent/80 text-secondary rounded-full font-montserrat font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
               target="_blank" rel="noreferrer">View Site</a>
          </div>
        </div>

        <div className="project-card flex flex-col h-full p-6 bg-gradient-to-b from-secondary to-primary/10 rounded-3xl border-4 border-support3 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="relative mb-4">
            <img src="luna-the-llama.png" 
                  alt="luna-the-llama" 
                  className="w-full h-64 object-cover rounded-full border-4 border-support3 shadow-md"
                  loading="lazy"
                  width="400"
                  height="300"
                  style={{ aspectRatio: '1/1' }} />
            <div className="absolute inset-0 rounded-full border-2 border-support3/50 opacity-50"></div>
          </div>
          <h3 className="text-text text-xl font-montserrat mt-2 mb-3 font-bold">Creative Portfolio</h3>
          <p className="text-text flex-grow mb-4 text-sm leading-relaxed">A stellar portfolio website showcasing creative design services for freelancers and independent businesses. 
              This project demonstrates modern web design principles with a playful cosmic theme.
          </p>
          <div className="relative flex flex-col items-center justify-center mt-auto">
            <a href="https://luna-the-llama.netlify.app" 
               className="px-6 py-2 bg-accent hover:bg-accent/80 text-secondary rounded-full font-montserrat font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105" 
               target="_blank" rel="noreferrer">View Site</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
