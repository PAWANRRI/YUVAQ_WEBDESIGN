const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    desc: 'We deep-dive into your business goals, target audience, and technical requirements to map a clear path forward.',
    duration: '1–2 weeks',
  },
  {
    num: '02',
    title: 'Design & Prototyping',
    desc: 'High-fidelity wireframes and interactive prototypes tested with real users before a single line of code is written.',
    duration: '2–3 weeks',
  },
  {
    num: '03',
    title: 'Agile Development',
    desc: 'Iterative sprints with weekly demos, continuous integration, and transparent communication at every stage.',
    duration: '8–24 weeks',
  },
  {
    num: '04',
    title: 'QA & Testing',
    desc: 'Rigorous automated and manual testing across devices, browsers, and load conditions to ensure rock-solid quality.',
    duration: '2–4 weeks',
  },
  {
    num: '05',
    title: 'Launch & Scale',
    desc: 'Zero-downtime deployment, performance monitoring, and dedicated post-launch support to keep you running smoothly.',
    duration: 'Ongoing',
  },
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-[#0D0D0D] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <span className="section-num block mb-4" style={{ color: '#4A4A4A' }}>05 / Process</span>
            <h2
              className="animate-on-scroll text-white"
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: '0.95', letterSpacing: '-0.03em' }}
            >
              How We<br />
              <span style={{ color: '#4A4A4A' }}>Work Together</span>
            </h2>
          </div>
          <p className="animate-on-scroll delay-2 text-[#4A4A4A] text-base leading-relaxed max-w-xs lg:text-right">
            A proven process refined over 200+ projects, designed to maximize quality and minimize surprises.
          </p>
        </div>

        <div className="space-y-px bg-[#1A1A1A]">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`bg-[#0D0D0D] p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-16 group animate-on-scroll delay-${i + 1} hover:bg-[#0A0A0A] transition-colors duration-300`}
            >
              <div className="shrink-0 flex items-center gap-6 lg:gap-8">
                <span
                  className="text-6xl font-bold transition-colors duration-300"
                  style={{ fontFamily: 'Syne, sans-serif', color: i === 0 ? '#00E87A' : '#1A1A1A' }}
                >
                  {step.num}
                </span>
                <div
                  className="hidden lg:block w-px h-16 transition-colors duration-300"
                  style={{ background: '#1A1A1A' }}
                />
              </div>

              <div className="flex-1">
                <h3
                  className="text-2xl font-bold text-white mb-3 tracking-tight"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {step.title}
                </h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">{step.desc}</p>
              </div>

              <div className="shrink-0 text-right">
                <span className="px-4 py-2 text-xs font-medium tracking-widest uppercase border border-[#1A1A1A] text-[#4A4A4A]">
                  {step.duration}
                </span>
              </div>

              <div className="hidden lg:block shrink-0">
                <div className="w-10 h-10 border border-[#1A1A1A] group-hover:border-[#00E87A] flex items-center justify-center transition-colors duration-300">
                  <div className="w-2 h-2 bg-[#1A1A1A] group-hover:bg-[#00E87A] rounded-full transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
