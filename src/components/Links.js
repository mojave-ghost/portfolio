import React from 'react';

const Links = () => {
  return ( 
    <section id="links" data-testid="links-section" className="relative flex flex-col items-center justify-center">
      <a href="https://linkedin.com/in/mario-s-0b13a7236" target="_blank" rel="noreferrer" className="link-button">
        LinkedIn
      </a>
      <a href="https://github.com/mojave-ghost" target="_blank" rel="noreferrer" className="link-button">
        GitHub
      </a>
      <a href="https://www.upwork.com/freelancers/~011a9437c584f2328d?mp_source=share" target="_blank" rel="noreferrer" className="link-button">
        Upwork
      </a>
    </section>
   );
}
 
export default Links;