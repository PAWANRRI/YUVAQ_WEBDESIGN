import { Code2, Smartphone, Cloud, BarChart3, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Code2,
    num: '01',
    title: 'Web Development',
    desc: 'Full-stack web applications built with modern frameworks, optimized for performance and scalability at any level.',
    tags: ['React', 'Next.js', 'Node.js'],
    accent: '#00E87A',
  },
  {
    icon: Smartphone,
    num: '02',
    title: 'Mobile Apps',
    desc: 'Native and cross-platform mobile experiences that deliver seamless performance on iOS and Android devices.',
    tags: ['React Native', 'Flutter', 'Swift'],
    accent: '#0060FF',
  },
  {
    icon: Cloud,
    num: '03',
    title: 'Cloud & DevOps',
    desc: 'Scalable cloud infrastructure, CI/CD pipelines, and containerization strategies for modern development teams.',
    tags: ['AWS', 'Docker', 'Kubernetes'],
    accent: '#FF4F17',
  },
  {
    icon: BarChart3,
    num: '04',
    title: 'Data & Analytics',
    desc: 'Transform raw data into actionable intelligence with custom dashboards, ML models, and real-time pipelines.',
    tags: ['Python', 'TensorFlow', 'PostgreSQL'],
    accent: '#00E87A',
  },
  {
    icon: Shield,
    num: '05',
    title: 'Cybersecurity',
    desc: 'Comprehensive security audits, penetration testing, and proactive hardening of your digital infrastructure.',
    tags: ['OWASP', 'Pentesting', 'ISO 27001'],
    accent: '#0060FF',
  },
  {
    icon: Zap,
    num: '06',
    title: 'API & Integrations',
    desc: 'Robust REST and GraphQL APIs with third-party integrations that connect your ecosystem seamlessly.',
    tags: ['REST', 'GraphQL', 'Webhooks'],
    accent: '#FF4F17',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 max-w-[1440px] mx-auto px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
        <div>
          <span className="section-num block mb-4">02 / Services</span>
          <h2
            className="animate-on-scroll"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(40px, 5vw, 80px)', lineHeight: '0.95', letterSpacing: '-0.03em' }}
          >
            What We<br />
            <span style={{ color: '#A8A8A0' }}>Build For You</span>
          </h2>
        </div>
        <p className="animate-on-scroll delay-2 text-[#6B6B6B] text-base leading-relaxed max-w-sm lg:text-right">
          End-to-end software development services tailored to transform your vision into a market-ready digital product.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D4D3CF]">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              className={`service-card bg-[#EDECE8] p-10 group animate-on-scroll delay-${i + 1}`}
            >
              <div className="flex items-start justify-between mb-8">
                <div
                  className="w-12 h-12 flex items-center justify-center transition-colors duration-300"
                  style={{ background: `${s.accent}20` }}
                >
                  <Icon size={22} style={{ color: s.accent }} />
                </div>
                <span
                  className="text-6xl font-bold opacity-10 transition-opacity duration-300 group-hover:opacity-20"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {s.num}
                </span>
              </div>

              <h3
                className="text-2xl font-bold mb-4 tracking-tight"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                {s.title}
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8">{s.desc}</p>

              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium tracking-wide border border-[#D4D3CF] text-[#6B6B6B]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="mt-8 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                style={{ background: s.accent }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
