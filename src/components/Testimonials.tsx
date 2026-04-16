const testimonials = [
  {
    quote: "NexCode didn't just build our platform — they became strategic partners. Our conversion rate jumped 40% after their redesign.",
    name: 'Sarah Chen',
    role: 'CTO, FinEdge',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
    accent: '#00E87A',
  },
  {
    quote: "The quality of their code is exceptional. Six months in production and we've had zero critical bugs. Truly remarkable engineering.",
    name: 'Marcus Okafor',
    role: 'VP Engineering, MedSync',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200',
    accent: '#0060FF',
  },
  {
    quote: "They delivered 3 months ahead of schedule without cutting corners. The team is exceptional — proactive, skilled, and a joy to work with.",
    name: 'Emma Larsson',
    role: 'Founder, Artisan Marketplace',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    accent: '#FF4F17',
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 max-w-[1440px] mx-auto px-8 lg:px-16">
      <div className="mb-20">
        <span className="section-num block mb-4">07 / Testimonials</span>
        <h2
          className="animate-on-scroll"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: '0.95', letterSpacing: '-0.03em' }}
        >
          Clients Who<br />
          <span style={{ color: '#A8A8A0' }}>Trust Our Work</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[#D4D3CF]">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`bg-[#EDECE8] p-10 flex flex-col justify-between group animate-on-scroll delay-${i + 1}`}
          >
            <div>
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="w-4 h-4" style={{ color: t.accent }}>
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-[#0D0D0D] text-lg leading-relaxed mb-10 font-light">
                "{t.quote}"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-[#6B6B6B] mt-0.5">{t.role}</div>
              </div>
              <div
                className="ml-auto w-8 h-0.5 transition-all duration-500 group-hover:w-16"
                style={{ background: t.accent }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-px bg-[#D4D3CF]">
        <div className="bg-[#EDECE8] py-8 overflow-hidden">
          <div className="flex whitespace-nowrap marquee-reverse">
            {['Trusted by 150+ Companies', 'Rated 5 Stars on Clutch', '200+ Projects Delivered', 'ISO 9001 Certified', 'SOC 2 Compliant', 'Trusted by 150+ Companies', 'Rated 5 Stars on Clutch', '200+ Projects Delivered', 'ISO 9001 Certified', 'SOC 2 Compliant'].map((text, i) => (
              <span key={i} className="inline-flex items-center gap-6 px-10 text-sm font-medium tracking-widest uppercase text-[#6B6B6B]">
                {text}
                <span style={{ color: '#00E87A' }}>★</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
