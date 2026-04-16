import { useEffect, useRef } from 'react';
import { ArrowRight, MoveRight } from 'lucide-react';
import LaptopOrbit from './LaptopOrbit';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      const shapes = heroRef.current.querySelectorAll('.parallax-shape');

      shapes.forEach((el, i) => {
        const speed = 0.08 + i * 0.03;
        (el as HTMLElement).style.transform = `translateY(${y * speed}px)`;
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen grid-bg overflow-hidden flex flex-col pt-20"
      id="hero"
    >
      {/* Left-side accent shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="parallax-shape shape-2 absolute bottom-48 left-8 w-16 h-16 lg:w-24 lg:h-24 rotate-45"
          style={{ background: '#FF4F17', opacity: 0.7 }}
        />
        <div
          className="parallax-shape shape-3 absolute bottom-64 left-[12%] w-10 h-10 lg:w-16 lg:h-16 rounded-full"
          style={{ border: '2px solid #0060FF' }}
        />
      </div>

      {/* ================= DESKTOP / TABLET (UNCHANGED LOOK) ================= */}
      {/* ================= DESKTOP / TABLET (SAME LAYOUT, CENTERED) ================= */}
      <div className="hidden lg:block relative flex-1">
        {/* Laptop + orbit */}
        <div
          className="absolute right-[-40px] md:right-[-10px] lg:right-[4%] pointer-events-none"
          style={{ top: 'calc(50% + 12px)', transform: 'translateY(-50%) scale(1.05)' }}
        >
          <LaptopOrbit />
        </div>

        {/* Content block */}
        <div className="absolute inset-x-0 top-[calc(50%+12px)] -translate-y-1/2 z-10">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
            <div className="mb-8">
              <span className="label-tag">
                <span className="label-dot" />
                A Software Revolution
              </span>
            </div>
            <div className="mb-6">
              <div className="rule-accent w-40 mb-6" />
            </div>

            <div className="overflow-hidden mb-6">
              <h1 className="hero-title hero-muted !text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95]">
                Building
              </h1>
            </div>
            <div className="overflow-hidden mb-6">
              <h1 className="hero-title hero-muted !text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95]">
                Scalable
              </h1>
            </div>
            <div className="overflow-hidden mb-6">
              <h1 className="hero-title hero-muted !text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95]">
                &amp; Innovative
              </h1>
            </div>
            <div className="overflow-hidden mb-12">
              <h1 className="hero-title !text-[clamp(2.4rem,6vw,4.0rem)] leading-[0.95]">
                Custom Software
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-8 justify-between">
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="btn-dark cursor-none">
                  <span>Start a Project</span>
                  <ArrowRight size={16} className="relative z-10" />
                </a>
                <a href="#work" className="btn-ghost cursor-none">
                  <span>View Our Work</span>
                  <MoveRight size={16} />
                </a>
              </div>

              <div className="flex items-center gap-12 pb-2">
                <div>
                  <div
                    className="font-display text-4xl font-bold"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    3+
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#6B6B6B] mt-1">
                    Years Experience
                  </div>
                </div>

                <div className="w-px h-12 bg-[#D4D3CF]" />

                <div>
                  <div
                    className="font-display text-4xl font-bold"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    15+
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#6B6B6B] mt-1">
                    Projects Delivered
                  </div>
                </div>

                <div className="w-px h-12 bg-[#D4D3CF] hidden sm:block" />

                <div className="hidden sm:block">
                  <div
                    className="font-display text-4xl font-bold"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    98%
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[#6B6B6B] mt-1">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ONLY (NEW LAYOUT) ================= */}
      <div className="relative z-10 w-full px-5 pb-10 pt-4 lg:hidden">
        <div className="max-w-md mx-auto">
          <div className="mb-5">
            <span className="label-tag">
              <span className="label-dot" />
              A Software Revolution
            </span>
          </div>

          <div className="overflow-hidden mb-1">
            <h1
              className="hero-title hero-muted max-[380px]:!text-[2.5rem] max-[340px]:!text-[2.15rem]"
              style={{ fontSize: 'clamp(3.4rem, 8vw, 2.4rem)', lineHeight: 0.96 }}
            >
              Building
            </h1>
          </div>

          <div className="overflow-hidden mb-1">
            <h1
              className="hero-title hero-muted max-[380px]:!text-[2.5rem] max-[340px]:!text-[2.15rem]"
              style={{ fontSize: 'clamp(3.4rem, 8vw, 2.4rem)', lineHeight: 0.96 }}
            >
              Scalable
            </h1>
          </div>

          <div className="overflow-hidden mb-1">
            <h1
              className="hero-title hero-muted max-[380px]:!text-[2.5rem] max-[340px]:!text-[2.15rem]"
              style={{ fontSize: 'clamp(3.4rem, 8vw, 2.4rem)', lineHeight: 0.96 }}
            >
              &amp;
            </h1>
          </div>

          <div className="overflow-hidden mb-1">
            <h1
              className="hero-title hero-muted max-[380px]:!text-[2.4rem] max-[340px]:!text-[1.8rem]"
              style={{ fontSize: 'clamp(3.00rem, 6.2vw, 1.85rem)', lineHeight: 0.98 }}
            >
              Innovative
            </h1>
          </div>

          <div className="overflow-hidden mb-2">
            <h1
              className="hero-title whitespace-normal max-[380px]:!text-[2.4rem] max-[340px]:!text-[1.5rem] max-[380px]:max-w-[10ch] max-[340px]:max-w-[9ch]"
              style={{
                fontSize: 'clamp(3.3rem, 5.4vw, 1.55rem)',
                lineHeight: 1,
              }}
            >
              Software Solutions
            </h1>
          </div>

          <div className="pointer-events-none flex justify-center mb-6">
            <div className="origin-center scale-[0.72] min-[380px]:scale-[0.88] min-[420px]:scale-[0.54] sm:scale-[0.68]">
              <LaptopOrbit />
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-7">
            <a href="#contact" className="btn-dark w-full justify-center">
              <span>Start a Project</span>
              <ArrowRight size={16} className="relative z-10" />
            </a>
            <a href="#work" className="btn-ghost w-full justify-center">
              <span>View Our Work</span>
              <MoveRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 border-t border-[#D4D3CF] pt-5">
            <div className="rounded-2xl border border-[#D4D3CF] bg-white/40 backdrop-blur-sm p-4">
              <div
                className="font-display text-3xl font-bold"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                2+
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#6B6B6B] mt-1">
                Years Experience
              </div>
            </div>

            <div className="rounded-2xl border border-[#D4D3CF] bg-white/40 backdrop-blur-sm p-4">
              <div
                className="font-display text-3xl font-bold"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                15+
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#6B6B6B] mt-1">
                Projects Delivered
              </div>
            </div>

            <div className="col-span-2 rounded-2xl border border-[#D4D3CF] bg-white/40 backdrop-blur-sm p-4">
              <div
                className="font-display text-3xl font-bold"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                98%
              </div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#6B6B6B] mt-1">
                Client Satisfaction
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-[#D4D3CF] overflow-hidden">
        <div className="flex whitespace-nowrap">
          <div className="marquee-track flex items-center gap-0">
            {[
              'React',
              'TypeScript',
              'Node.js',
              'Python',
              'AWS',
              'Docker',
              'GraphQL',
              'Next.js',
              'PostgreSQL',
              'Kubernetes',
              'React',
              'TypeScript',
              'Node.js',
              'Python',
              'AWS',
              'Docker',
              'GraphQL',
              'Next.js',
              'PostgreSQL',
              'Kubernetes',
            ].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-0 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 border-r border-[#D4D3CF]"
              >
                <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-[#6B6B6B]">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}