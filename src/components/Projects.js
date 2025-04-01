import React from 'react';
function Projects() {
  return (
    <section className="my-4">
      <h2 className="m-4 text-2xl text-primary font-montserrat" id="projects">Projects</h2>
      <div className="grid grid-cols-1 mx-8
                      lg:grid-cols-2 lg:gap-6
                      2xl:grid-cols-3 2xl:gap-8">
        {"./shatteronline.png" && (
          <div className="project-card">
            <img src="./shatteronline.webp" alt="Shatter Online" className="project-img" />
            <h3 className="text-primary text-xl font-montserrat">Shatter.io</h3>
            <p className="project-p">A website that features World of Warcraft PvP stats.</p>
            <div className="relative flex flex-col items-center justify-center">
              <a href="https://shatteronline.netlify.app" className="project-a" target="_blank" rel="noreferrer">View Site</a>
            </div>
          </div> )
        }
        {"results-component-card" && (
          <div className="project-card">
            <img src="results-card-component.webp" alt="Project 2" className="project-img" />
            <h3 className="text-primary text-xl font-montserrat">Results Card Component</h3>
            <p className="project-p">A responsive results card component built with React.js and TailwindCSS.</p>
            <div className="relative flex flex-col items-center justify-center">
              <a href="https://results-summary-component15.netlify.app" className="project-a" target="_blank" rel="noreferrer">View Site</a>
            </div>
          </div> )
        }

      </div>
    </section>
  );
}

export default Projects;