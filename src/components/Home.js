import React from 'react';
import profilePhoto from '../assets/images/bioPhoto.jpeg'; // Ensure you have a profile photo in the assets folder
import Skills from './Skills';

function Home() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen
                                  m-6">
      <div className="relative flex items-center justify-center min-h-screen flex-col text-center">
        <img 
          src={profilePhoto} 
          alt="Profile" 
          className="rounded-full m-4 border-8 border-secondary" 
        />
        <h1 className="text-3xl text-primary my-2 font-montserrat font-bold">Mario Salinas</h1>
        <h2 className="font-merriweather text-text mx-4 mb-2">
          Computer Science student and web developer passionate about innovative solutions and enhancing user experience.
        </h2>
        <Skills />
        <button className="w-1/2 h-2/3 py-2 rounded-2xl
                          bg-accent text-white 
                          border-2 border-accent
                          animate-shadow-pulse font-montserrat
                          hover:bg-secondary hover:text-accent">
          View Projects
        </button>
      </div>
    </section>
  );
}

export default Home;