import React from 'react';

const Links = () => {
  return ( 
    <section id="links" data-testid="links-section" className="relative flex flex-col items-center justify-center">
      <a href="https://www.linkedin.com/in/mario-salinas-0b13a7236" target="_blank" rel="noreferrer" className="link-button">
        LinkedIn
      </a>
      <a href="https://github.com/mojave-ghost" target="_blank" rel="noreferrer" className="link-button">
        GitHub
      </a>
      <a href="https://www.frontendmentor.io/profile/mojabi-geist" target="_blank" rel="noreferrer" className="link-button">
        Frontend Mentor
      </a>
    </section>
   );
}
 
export default Links;