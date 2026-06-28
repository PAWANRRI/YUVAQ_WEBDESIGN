import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollAnimation() {
  const location = useLocation();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const frameId = window.requestAnimationFrame(() => {
      const elements = document.querySelectorAll<HTMLElement>(
        '.animate-on-scroll, .animate-slide-left, .animate-scale'
      );

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -60px 0px',
        }
      );

      elements.forEach((el) => {
        observer?.observe(el);
      });
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer?.disconnect();
    };
  }, [location.pathname, location.key]);
}