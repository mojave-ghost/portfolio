import React from 'react';
import resume from '../assets/mSalinasResume.pdf'; // Ensure you have a resume file in the assets folder

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>[Your detailed bio]</p>
      <a href={resume} download>Download Resume</a>
    </section>
  );
}

export default About;