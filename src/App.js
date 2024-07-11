import React from 'react';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
        <Footer />
      </main>
    </div>
  );
}

export default App;