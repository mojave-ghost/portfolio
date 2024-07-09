import React from 'react';
import project1 from '../assets/images/landing-page-component.png';
import project2 from '../assets/images/results-card-component.png';

function Projects() {
  return (
    <section>
      <h2 className="m-4 text-2xl text-primary">Projects</h2>
      <div id="projects" className="grid grid-cols-1 mx-8">
        {project1 && (
          <div className="project-card">
            <img src={project1} alt="Project 1" className="project-img" />
            <h3 className="text-primary">Landing Page Component</h3>
            <p className="text-text">A landing page component built with React.js and TailwindCSS.</p>
            <a href="https://social-links-profile15.netlify.app">View Site</a>
          </div> )
        }
        {project2 && (
          <div className="project-card">
            <img src={project2} alt="Project 2" className="project-img" />
            <h3 className="text-primary">Results Card Component</h3>
            <p className="text-text">A responsive results card component built with React.js and TailwindCSS.</p>
            <a href="https://results-summary-component15.netlify.app">View Site</a>
          </div> )
        }

      </div>
    </section>
  );
}

export default Projects;