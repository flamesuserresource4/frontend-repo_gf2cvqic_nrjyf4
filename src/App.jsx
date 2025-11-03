import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Hero Section with 3D Spline */}
      <section id="home" className="relative h-[90vh] w-full overflow-hidden">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="relative py-24">
        <About />
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-24">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-24">
        <Contact />
      </section>

      <footer className="py-10 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
