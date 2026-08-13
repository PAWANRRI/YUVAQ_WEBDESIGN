import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

type NavLink = {
  label: string;
  path: string;
};

const links: NavLink[] = [
  {
    label: 'Services',
    path: '/services',
  },
  {
    label: 'Work',
    path: '/all-projects',
  },
  {
    label: 'Process',
    path: '/process',
  },
  {
    label: 'Products',
    path: '/products',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
  {
    label: 'Career',
    path: '/careers',
  }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const scrollYRef = useRef(0);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        closeMenu();
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;

    scrollYRef.current = window.scrollY;

    const body = document.body;
    const html = document.documentElement;

    body.style.position = 'fixed';
    body.style.top = `-${scrollYRef.current}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    body.style.overflow = 'hidden';

    html.style.overflow = 'hidden';

    return () => {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.overflow = '';
      html.style.overflow = '';

      window.scrollTo(0, scrollYRef.current);
    };
  }, [open]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const handleHomeClick = () => {
    closeMenu();

    if (location.pathname !== '/') {
      navigate('/');
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavigation = (path: string) => {
    closeMenu();

    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    navigate(path);
  };

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }

    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || open
            ? 'bg-[#EDECE8]/95 backdrop-blur-sm border-b border-[#D4D3CF]'
            : ''
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16 flex items-center justify-between h-20">
          <button
            type="button"
            onClick={handleHomeClick}
            className="relative flex items-center h-full w-[170px] sm:w-[180px] overflow-visible cursor-none"
            aria-label="Go to home"
          >
            <img
              src="/yuvaQ-01.png"
              alt="Yuvaq Logo"
              className="absolute left-0 top-1/2 -translate-y-1/2 h-28 sm:h-32 w-auto max-w-none object-contain"
            />
          </button>

          <div className="hidden lg:flex items-center gap-10">
            {links.map((link) => {
              const active = isActiveLink(link.path);

              return (
                <button
                  key={link.path}
                  type="button"
                  onClick={() => handleNavigation(link.path)}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 relative group cursor-none ${active ? 'text-[#0D0D0D]' : 'text-[#6B6B6B] hover:text-[#0D0D0D]'
                    }`}
                >
                  {link.label}

                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-[#00E87A] transition-all duration-400 ${active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleNavigation('/contact')}
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
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <>
          <button
            type="button"
            aria-label="Close mobile menu"
            className="lg:hidden fixed inset-0 top-20 z-40 bg-black/20 backdrop-blur-[1px]"
            onClick={closeMenu}
          />

          <div
            id="mobile-menu"
            className="lg:hidden fixed top-20 left-0 right-0 bottom-0 z-50 bg-[#EDECE8] border-t border-[#D4D3CF] px-6 sm:px-8 py-8 overflow-y-auto overscroll-contain"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => {
                const active = isActiveLink(link.path);

                return (
                  <button
                    key={link.path}
                    type="button"
                    onClick={() => handleNavigation(link.path)}
                    className={`text-left text-2xl font-bold tracking-tight cursor-none ${active ? 'text-[#00E87A]' : 'text-[#0D0D0D]'
                      }`}
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {link.label}
                  </button>
                );
              })}

              <button
                type="button"
                onClick={() => handleNavigation('/contact')}
                className="btn-dark w-fit mt-4 cursor-none"
              >
                <span>Start a Project</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}