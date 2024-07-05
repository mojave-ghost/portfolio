import React from 'react';
import profilePhoto from '../assets/bioPhoto.jpeg'; // Ensure you have a profile photo in the assets folder
import Skills from './Skills';

function Home() {
  return (
    <section id="home">
      <div className="intro">
        <img src={profilePhoto} alt="Profile" className="rounded-full" />
        <h1 className="text-blue-200">Mario Salinas</h1>
        <h2>Computer Science student and web developer passionate about innovative solutions and enhancing user experience.</h2>
        <Skills />
      </div>
      <button>View Projects</button>
    </section>
  );
}

export default Home;