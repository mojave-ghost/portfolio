import React from 'react';
import './App.css';
import './index.css';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;