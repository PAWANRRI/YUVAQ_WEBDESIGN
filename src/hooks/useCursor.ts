import { useEffect } from 'react';

export function useCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const follower = document.querySelector('.cursor-follower') as HTMLElement;

    if (!cursor || !follower) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      cursor.classList.add('hovered');
      follower.classList.add('hovered');
    };

    const onLeave = () => {
      cursor.classList.remove('hovered');
      follower.classList.remove('hovered');
    };

    document.addEventListener('mousemove', onMove);
    animate();

    const interactives = document.querySelectorAll('a, button, .service-card, .project-card');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
    };
  }, []);
}
