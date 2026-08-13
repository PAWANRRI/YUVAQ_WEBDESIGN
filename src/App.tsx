import { useEffect } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AllProjects from './pages/AllProjects.tsx';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import { useCursor } from './hooks/useCursor';
import ServicesPage from './pages/ServicesPage.tsx';
import ProcessPage from './pages/ProcessPage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import Products from './pages/Products.tsx';

function Layout() {
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
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function HomePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Projects />
      <Process />
      <About />
      <Testimonials />
      <CTA />
      {/* <Contact /> */}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/all-projects" element={<AllProjects />} />
        <Route path="/process" element={<ProcessPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<Products />} />
      </Route>
    </Routes>
  );
}

export default App;