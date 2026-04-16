import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const links = ['Services', 'Work', 'Process', 'About', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // if user somehow starts scrolling, close mobile menu
      if (open) {
        setOpen(false);
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    // lock body scroll when mobile menu is open
    const previousOverflow = document.body.style.overflow;
    const previousTouchAction = document.body.style.touchAction;

    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = previousOverflow || '';
      document.body.style.touchAction = previousTouchAction || '';
    }

    return () => {
      document.body.style.overflow = previousOverflow || '';
      document.body.style.touchAction = previousTouchAction || '';
    };
  }, [open]);

  useEffect(() => {
    // close menu on route/hash change
    setOpen(false);

    // handle scrolling to section after navigation like /#contact
    if (location.pathname === '/' && location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);

      if (el) {
        requestAnimationFrame(() => {
          const navHeight = 80;
          const top = el.getBoundingClientRect().top + window.scrollY - navHeight;

          window.scrollTo({
            top,
            behavior: 'smooth',
          });
        });
      }
    }
  }, [location.pathname, location.hash]);

  const handleHomeClick = () => {
    setOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleSectionClick = (section: string) => {
    setOpen(false);

    if (location.pathname !== '/') {
      navigate(`/#${section}`);
      return;
    }

    const el = document.getElementById(section);

    if (el) {
      const navHeight = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - navHeight;

      window.history.replaceState(null, '', `/#${section}`);
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#EDECE8]/95 backdrop-blur-sm border-b border-[#D4D3CF]'
            : ''
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex items-center justify-between h-20">
          <button
            type="button"
            onClick={handleHomeClick}
            className="relative flex items-center h-full w-[180px] overflow-visible cursor-none"
            aria-label="Go to home"
          >
            <img
              src="/yuvaQ-01.png"
              alt="Logo"
              className="absolute left-0 top-1/2 -translate-y-1/2 h-32 w-auto max-w-none object-contain"
            />
          </button>

          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => {
              const section = link.toLowerCase();

              return (
                <button
                  key={link}
                  type="button"
                  onClick={() => handleSectionClick(section)}
                  className="text-sm font-medium tracking-wide text-[#6B6B6B] hover:text-[#0D0D0D] transition-colors duration-300 relative group cursor-none"
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00E87A] group-hover:w-full transition-all duration-400" />
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleSectionClick('contact')}
              className="btn-dark cursor-none"
            >
              <span>Start a Project</span>
            </button>
          </div>

          <button
            type="button"
            className="lg:hidden w-10 h-10 flex items-center justify-center cursor-none"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden fixed top-20 left-0 right-0 bottom-0 z-40 bg-[#EDECE8] border-t border-[#D4D3CF] px-8 py-8 overflow-y-auto">
          <div className="flex flex-col gap-6">
            {links.map((link) => {
              const section = link.toLowerCase();

              return (
                <button
                  key={link}
                  type="button"
                  onClick={() => handleSectionClick(section)}
                  className="text-left text-2xl font-bold tracking-tight cursor-none"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {link}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => handleSectionClick('contact')}
              className="btn-dark w-fit mt-4 cursor-none"
            >
              <span>Start a Project</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}