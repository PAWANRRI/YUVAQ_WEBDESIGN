import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = ['Services', 'Work', 'Process', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#EDECE8]/95 backdrop-blur-sm border-b border-[#D4D3CF]' : ''
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex items-center justify-between h-20">
        <a href="#" className="relative flex items-center h-full w-[180px] overflow-visible cursor-none">
          <img
            src='./yuvaQ-01.png'
            alt="Logo"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-32 w-auto max-w-none object-contain"
          />
        </a>

        <div className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium tracking-wide text-[#6B6B6B] hover:text-[#0D0D0D] transition-colors duration-300 relative group cursor-none"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00E87A] group-hover:w-full transition-all duration-400" />
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#contact" className="btn-dark cursor-none">
            <span>Start a Project</span>
          </a>
        </div>

        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center cursor-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#EDECE8] border-t border-[#D4D3CF] px-8 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-2xl font-display font-bold tracking-tight cursor-none"
              style={{ fontFamily: 'Syne, sans-serif' }}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a href="#contact" className="btn-dark w-fit mt-4 cursor-none">
            <span>Start a Project</span>
          </a>
        </div>
      )}
    </nav>
  );
}
