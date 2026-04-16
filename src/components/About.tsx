import { ArrowRight } from 'lucide-react';

const techs = [
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'AWS',
  'Docker',
  'Kubernetes',
  'GraphQL',
  'PostgreSQL',
  'Redis',
  'Terraform',
  'Next.js',
];

export default function About() {
  return (
    <section id="about" className="py-32 max-w-[1440px] mx-auto px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="section-num block mb-6">06 / About</span>

          <h2
            className="animate-on-scroll mb-8"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(40px, 4.5vw, 72px)',
              lineHeight: '0.95',
              letterSpacing: '-0.03em',
            }}
          >
            We Are Engineers
            <br />
            <span style={{ color: '#A8A8A0' }}>Who Think Like</span>
            <br />
            Founders
          </h2>

          <p className="animate-on-scroll delay-2 text-[#6B6B6B] text-base leading-relaxed mb-8">
            YuvaQ was founded on a single belief — great software is built by people who care.
            Our team of 12+ engineers, designers, and strategists have shipped products for
            startups, scale-ups, and Fortune 15 companies alike.
          </p>

          <p className="animate-on-scroll delay-3 text-[#6B6B6B] text-base leading-relaxed mb-12">
            We don't just write code. We architect systems that grow with your business, and we
            stay with you long after the initial launch to ensure your success.
          </p>

          <a href="#contact" className="btn-dark animate-on-scroll delay-4 cursor-none">
            <span>Meet the Team</span>
            <ArrowRight size={16} className="relative z-10" />
          </a>
        </div>

        <div className="animate-scale delay-2">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Team collaboration"
              className="w-full object-cover"
              style={{ aspectRatio: '4/5' }}
            />

            <div className="absolute -bottom-8 -left-8 p-8 bg-[#0D0D0D] text-white w-64">
              <div
                className="text-4xl font-bold mb-2"
                style={{ fontFamily: 'Syne, sans-serif' }}
              >
                3+
              </div>

              <div className="text-sm text-[#4A4A4A] leading-relaxed">
                Years building world-class digital products
              </div>

              <div className="mt-4 h-px w-full bg-[#1A1A1A]" />

              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00E87A]" />
                <span className="text-xs text-[#4A4A4A] tracking-widest uppercase">
                  Est. 2023
                </span>
              </div>
            </div>

            {/* Soft spherical orb */}
            <div className="absolute -top-6 -right-6 pointer-events-none">
              <div className="relative w-24 h-24 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#00E87A]/40 via-[#7EF3C0]/20 to-[#0060FF]/35 blur-md" />
                <div className="absolute inset-[6px] rounded-full border border-white/40 bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.12)]" />
                <div className="absolute top-[18px] left-[20px] w-5 h-5 rounded-full bg-white/45 blur-[1px]" />
                <div className="absolute bottom-[16px] right-[18px] w-3 h-3 rounded-full bg-[#00E87A]/40 blur-[2px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-16 border-t border-[#D4D3CF]">
        <p className="text-xs font-medium tracking-widest uppercase text-[#A8A8A0] mb-8">
          Technologies We Excel In
        </p>

        <div className="flex flex-wrap gap-3">
          {techs.map((tech, i) => (
            <span
              key={tech}
              className={`px-5 py-2.5 text-sm font-medium border border-[#D4D3CF] text-[#6B6B6B] hover:border-[#0D0D0D] hover:text-[#0D0D0D] transition-colors duration-300 cursor-none animate-on-scroll delay-${(i % 7) + 1}`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}