import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 15, suffix: '+', label: 'Projects Delivered', desc: 'Across diverse industries and tech stacks' },
  { value: 98, suffix: '%', label: 'Client Retention', desc: 'Long-term partnerships built on trust' },
  { value: 3, suffix: '+', label: 'Years of Excellence', desc: 'A decade of crafting digital products' },
  { value: 12, suffix: '+', label: 'Expert Engineers', desc: 'Specialists in every domain we serve' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const step = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-32 bg-[#0D0D0D] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #00E87A, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #0060FF, transparent 70%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="mb-16">
          <span className="section-num block mb-4" style={{ color: '#4A4A4A' }}>03 / Numbers</span>
          <h2
            className="animate-on-scroll text-white"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: '0.95', letterSpacing: '-0.03em' }}
          >
            Proof In<br />
            <span style={{ color: '#4A4A4A' }}>Every Metric</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A1A1A]">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-[#0D0D0D] p-10 group animate-on-scroll delay-${i + 1}`}
            >
              <div
                className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white font-medium mb-2 tracking-tight">{s.label}</div>
              <div className="text-[#4A4A4A] text-sm leading-relaxed">{s.desc}</div>
              <div
                className="mt-8 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: 'linear-gradient(90deg, #00E87A, #0060FF)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
