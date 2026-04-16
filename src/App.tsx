import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useCursor } from './hooks/useCursor';

function App() {
  useScrollAnimation();
  useCursor();

  useEffect(() => {
    document.title = 'YuvaQ — Software Solutions';
  }, []);

  return (
    <>
      <div className="cursor" />
      <div className="cursor-follower" />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Projects />
        <Process />
        <About />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
