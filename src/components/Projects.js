import React from 'react';
function Projects() {
  return (
    <section className="my-4">
      <h2 className="m-4 text-2xl text-primary font-montserrat" id="projects">Projects</h2>
      <div className="grid grid-cols-1 mx-8
                      lg:grid-cols-2 lg:gap-6
                      2xl:grid-cols-3 2xl:gap-8">
      {"results-component-card" && (
          <div className="project-card">
            <img src="results-card-component.webp" 
                  alt="Project 2" 
                  className="project-img"
                  loading="lazy"
                  width="400"
                  height="300"
                  style={{ aspectRatio: '1/1' }} />
            <h3 className="text-primary text-xl font-montserrat">Modern Interactive Landing Page</h3>
            <p className="project-p">A modern, interactive landing page showcasing cutting-edge web design trends for 
              2025. Built with pure HTML, CSS, and JavaScript to demonstrate advanced design concepts and conversion-focused UX.
            </p>
            <div className="relative flex flex-col items-center justify-center">
              <a href="https://modern-interactive-landing-page.netlify.app/" className="project-a" target="_blank" rel="noreferrer">View Site</a>
            </div>
          </div> )
      }
        {"results-component-card" && (
          <div className="project-card">
            <img src="results-card-component.webp" 
                  alt="Project 2" 
                  className="project-img"
                  loading="lazy"
                  width="400"
                  height="300"
                  style={{ aspectRatio: '1/1' }} />
            <h3 className="text-primary text-xl font-montserrat">Conversion-Driven Landing Page</h3>
            <p className="project-p">A high-converting, mobile-responsive landing page designed for service-based businesses and coaching programs. 
              This project demonstrates modern web development practices with a focus on conversion optimization and user experience.
            </p>
            <div className="relative flex flex-col items-center justify-center">
              <a href="https://conversion-driven-landing-page.netlify.app/" className="project-a" target="_blank" rel="noreferrer">View Site</a>
            </div>
          </div> )
        }
        {"results-component-card" && (
          <div className="project-card">
            <img src="results-card-component.webp" 
                  alt="Project 2" 
                  className="project-img"
                  loading="lazy"
                  width="400"
                  height="300"
                  style={{ aspectRatio: '1/1' }} />
            <h3 className="text-primary text-xl font-montserrat">Basic Landing Page</h3>
            <p className="project-p">A simple visual reference page that captures a broader vision for a website.</p>
            <div className="relative flex flex-col items-center justify-center">
              <a href="https://spanish-merchat-lp.netlify.app/" className="project-a" target="_blank" rel="noreferrer">View Site</a>
            </div>
          </div> )
        }
        {"./shatteronline.png" && (
          <div className="project-card">
            <img src="./shatteronline (1).webp" 
                  alt="Shatter Online" 
                  className="project-img"
                  loading="lazy"
                  width="400"
                  height="300"
                  style={{ aspectRatio: '1/1' }} />
            <h3 className="text-primary text-xl font-montserrat">Shatter.io</h3>
            <p className="project-p">A search bar that retrieves World of Warcraft players' PvP Stats.</p>
            <div className="relative flex flex-col items-center justify-center">
              <a href="https://shatteronline.netlify.app" className="project-a" target="_blank" rel="noreferrer">View Site</a>
            </div>
          </div> )
        }
      </div>
    </section>
  );
}

export default Projects;
