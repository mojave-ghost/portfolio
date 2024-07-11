import React from 'react';
import resume from '../assets/mSalinasResume.pdf'; // Ensure you have a resume file in the assets folder

function About() {
  return (
    <section id="about">
      <h2 className="m-4 text-primary font-montserrat text-2xl">About Me</h2>
      <h3 className="mx-6 text-text font-merriweather text-lg">Welcome to my portfolio!</h3>
      <br></br>
      <p className="font-merriweather text-text mx-6">
        I am a senior computer science student at California State University, East Bay, living in Oakland, CA. As a dedicated and passionate web developer, I specialize in creating dynamic and responsive websites. My journey in tech began with a deep curiosity for how things work and has evolved into a full-fledged career path where I constantly push the boundaries of what is possible.
        <br></br>
        <br></br>
        As the first in my family to transition into a white-collar profession, I bring a unique perspective and a strong work ethic to everything I do. My experiences have taught me resilience and the importance of perseverance, which are evident in my approach to problem-solving and coding.
        <br></br>
        <br></br>
        My technical skill set includes:
        <br></br>
        <br></br>
	      •	<b>Languages</b>: JavaScript, HTML, CSS, Python, C++
        <br></br>
	      •	<b>Frameworks & Libraries</b>: React.js, Node.js, Tailwind CSS
        <br></br>
	      •	<b>Tools & Platforms</b>: Git, GitHub, Firebase, Vite
        <br></br>
        <br></br>
        In addition to my academic pursuits, I have hands-on experience developing web applications and providing web development services on freelance platforms. This practical exposure has honed my skills in both front-end and back-end development, ensuring I can deliver comprehensive and scalable solutions.
        <br></br>
        <br></br>
        When I’m not coding, you can find me exploring the outdoors, practicing tai-chi, or diving into a good book. I also enjoy staying up-to-date with the latest trends in video games and music.
        <br></br>
        <br></br>
        I am excited about the opportunity to bring my skills, experiences, and enthusiasm to a forward-thinking company. Let’s create something amazing together!
</p>
      <a href={resume} download>Download Resume</a>
    </section>
  );
}

export default About;