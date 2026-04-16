import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-40 max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
      <div className="relative">
        <div
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,232,122,0.08), transparent 70%)' }}
        />

        <span className="section-num inline-block mb-8">Ready to Start?</span>
        <h2
          className="animate-on-scroll mx-auto mb-8"
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(48px, 8vw, 120px)',
            lineHeight: '0.95',
            letterSpacing: '-0.04em',
            maxWidth: '12ch',
          }}
        >
          Your Vision.<br />
          <span style={{ color: '#A8A8A0' }}>Our Craft.</span>
        </h2>

        <p className="animate-on-scroll delay-2 text-[#6B6B6B] text-base leading-relaxed mb-12 max-w-md mx-auto">
          From MVP to enterprise — we scale with your ambitions. Let's ship something extraordinary together.
        </p>

        <div className="animate-on-scroll delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="btn-dark cursor-none">
            <span>Start a Conversation</span>
            <ArrowRight size={16} className="relative z-10" />
          </a>
          <a href="#work" className="btn-ghost cursor-none">
            <span>See Our Work</span>
          </a>
        </div>
      </div>
    </section>
  );
}
