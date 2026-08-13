import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  Blocks,
  Brain,
  CheckCircle2,
  Code2,
  Compass,
  Layers3,
  Rocket,
  Sparkles,
} from 'lucide-react';
import type { ElementType } from 'react';

type Belief = {
  title: string;
  text: string;
  icon: ElementType;
  accent: string;
};

const beliefs: Belief[] = [
  {
    title: 'Product Thinking',
    text: 'We do not just create screens. We think about business flow, users, operations, and long-term product growth.',
    icon: Brain,
    accent: '#00E87A',
  },
  {
    title: 'Clean Architecture',
    text: 'Every product needs a strong technical base. We keep frontend, backend, APIs, and databases structured from day one.',
    icon: Blocks,
    accent: '#0060FF',
  },
  {
    title: 'Meaningful Design',
    text: 'Design should look modern, but it also needs to guide users clearly and make every action feel simple.',
    icon: Sparkles,
    accent: '#FF4F17',
  },
];

const numbers = [
  {
    value: '15+',
    label: 'Digital Projects',
  },
  {
    value: '10+',
    label: 'Business Domains',
  },
  {
    value: '5+',
    label: 'Product Types',
  },
];

const capabilities = [
  'Websites',
  'Web Apps',
  'Mobile Apps',
  'Dashboards',
  'Marketplaces',
  'Automation',
  'APIs',
  'MVPs',
];

const process = [
  {
    step: '01',
    title: 'We Listen',
    text: 'We understand your business, users, current process, and the problem you want to solve.',
  },
  {
    step: '02',
    title: 'We Structure',
    text: 'We convert ideas into modules, user flows, screens, APIs, database models, and a practical roadmap.',
  },
  {
    step: '03',
    title: 'We Build',
    text: 'We develop clean, scalable, and testable products with modern frontend and backend architecture.',
  },
  {
    step: '04',
    title: 'We Improve',
    text: 'After launch, we help refine the product with better UX, performance, features, and integrations.',
  },
];

const delayClasses = ['delay-1', 'delay-2', 'delay-3', 'delay-4'];

function useRevealAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.animate-on-scroll, .animate-slide-left, .animate-scale'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function AboutPage() {
  const navigate = useNavigate();

  useRevealAnimation();
   useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);

  return (
    <main className="bg-[#EDECE8] text-[#0D0D0D] overflow-hidden">
      {/* Editorial Hero */}
      <section className="relative min-h-screen pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-70" />

        <div className="absolute -right-16 top-28 w-72 h-72 rounded-full bg-[#00E87A]/30 blur-3xl" />
        <div className="absolute -left-16 bottom-20 w-72 h-72 rounded-full bg-[#0060FF]/20 blur-3xl" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-20 items-center min-h-[calc(100vh-7rem)]">
            <div className="animate-slide-left">
              <span className="label-tag">
                <span className="label-dot" />
                About Yuvaq
              </span>

              <h1 className="font-display mt-8 text-[clamp(3.4rem,7vw,8rem)] leading-[0.9] tracking-[-0.07em] font-extrabold">
                Building
                <span className="block text-[#A8A8A0]">digital systems</span>
                <span className="block">with purpose.</span>
              </h1>

              <p className="mt-8 max-w-xl text-[#6B6B6B] text-base sm:text-lg leading-8">
                We are a digital product studio focused on websites, apps,
                dashboards, marketplaces, and custom software that solve real
                business problems.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="btn-dark cursor-none"
                >
                  <span>Start a Project</span>
                  <ArrowRight size={16} className="relative z-10" />
                </button>

                <button
                  type="button"
                  onClick={() => navigate('/services')}
                  className="btn-ghost cursor-none"
                >
                  <span>View Services</span>
                </button>
              </div>
            </div>

            <div className="relative animate-scale">
              <div className="absolute -top-10 -right-8 hidden sm:block font-display text-[9rem] lg:text-[13rem] leading-none font-extrabold tracking-[-0.08em] text-[#0D0D0D]/[0.04]">
                YQ
              </div>

              <div className="relative border border-[#D4D3CF] bg-white/35 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {numbers.map((item, index) => (
                    <div
                      key={item.label}
                      className={`border border-[#D4D3CF] bg-[#EDECE8]/70 p-5 min-h-32 flex flex-col justify-between ${
                        index === 0 ? 'col-span-2' : ''
                      }`}
                    >
                      <span className="section-num">0{index + 1}</span>

                      <div>
                        <h3 className="font-display text-5xl sm:text-6xl font-extrabold tracking-[-0.06em]">
                          {item.value}
                        </h3>
                        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#6B6B6B]">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#D4D3CF] pt-8">
                  <p className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.04em] leading-tight">
                    We combine strategy, interface design, engineering, and
                    launch support into one clear product process.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {capabilities.map((item) => (
                    <span
                      key={item}
                      className="border border-[#D4D3CF] bg-[#EDECE8] px-4 py-2 text-xs uppercase tracking-[0.16em] text-[#6B6B6B]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#00E87A] hidden sm:block" />
              <div className="absolute -top-6 right-10 w-16 h-16 rounded-full bg-[#FF4F17] hidden sm:block" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 border-t border-[#D4D3CF]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-14 lg:gap-24">
            <div className="animate-slide-left">
              <span className="section-num">OUR STORY / 01</span>

              <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.06em] leading-[0.95]">
                From idea to product, we stay close to the problem.
              </h2>
            </div>

            <div className="space-y-8 animate-on-scroll">
              <p className="text-[#6B6B6B] text-base sm:text-lg leading-8">
                Yuvaq works with businesses that need more than a beautiful
                interface. We help create complete digital systems — from
                frontend experience to backend logic, database structure,
                automation, and deployment.
              </p>

              <p className="text-[#6B6B6B] text-base sm:text-lg leading-8">
                Our work is practical. We focus on what users need, what the
                business needs, and what the product will need when it grows.
                This helps us build platforms that are clean today and flexible
                tomorrow.
              </p>

              <div className="rule-accent w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 border-l border-t border-[#D4D3CF]">
            {beliefs.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`group min-h-[390px] border-r border-b border-[#D4D3CF] p-8 lg:p-10 bg-[#EDECE8] hover:bg-white/35 transition-all duration-500 animate-on-scroll ${
                    delayClasses[index]
                  }`}
                >
                  <div
                    className="w-16 h-16 rounded-full border border-[#D4D3CF] flex items-center justify-center mb-12 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${item.accent}18` }}
                  >
                    <Icon size={26} style={{ color: item.accent }} />
                  </div>

                  <h3 className="font-display text-3xl lg:text-4xl font-extrabold tracking-[-0.05em] mb-5">
                    {item.title}
                  </h3>

                  <p className="text-[#6B6B6B] leading-8">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dark Manifesto */}
      <section className="relative py-24 lg:py-32 bg-[#0D0D0D] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] grid-bg" />

        <div className="absolute right-10 top-10 w-44 h-44 rounded-full border border-white/10 orbit-ring-spin" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-20 items-center">
            <div className="animate-slide-left">
              <span className="label-tag border-white/20 text-white/60">
                <span className="label-dot" />
                Our Philosophy
              </span>

              <h2 className="font-display mt-8 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-[-0.06em] leading-[0.92]">
                Technology should make business simpler, not heavier.
              </h2>
            </div>

            <div className="animate-on-scroll">
              <div className="space-y-4">
                {[
                  'Simple user journeys',
                  'Scalable product structure',
                  'Reliable backend systems',
                  'Clean and modern interfaces',
                  'Practical launch planning',
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 bg-white/[0.04] p-5 flex items-center gap-4"
                  >
                    <CheckCircle2 size={18} className="text-[#00E87A] shrink-0" />
                    <span className="text-white/80 text-sm tracking-wide">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="mb-16 animate-on-scroll">
            <span className="section-num">HOW WE WORK / 02</span>

            <h2 className="font-display mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.06em] leading-[0.95] max-w-4xl">
              A calm, clear process from planning to launch.
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[#D4D3CF]" />

            <div className="space-y-10 lg:space-y-0">
              {process.map((item, index) => {
                const isRight = index % 2 !== 0;

                return (
                  <div
                    key={item.title}
                    className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center animate-on-scroll ${
                      delayClasses[index]
                    }`}
                  >
                    <div className={isRight ? 'lg:col-start-2' : ''}>
                      <div className="border border-[#D4D3CF] bg-white/30 p-8 lg:p-10">
                        <span className="font-display text-sm font-bold tracking-[0.24em] text-[#00E87A]">
                          {item.step}
                        </span>

                        <h3 className="font-display mt-8 text-3xl sm:text-4xl font-extrabold tracking-[-0.05em]">
                          {item.title}
                        </h3>

                        <p className="mt-5 text-[#6B6B6B] leading-8">
                          {item.text}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`hidden lg:flex ${
                        isRight ? 'lg:col-start-1 lg:row-start-1 justify-end' : ''
                      }`}
                    >
                      <div className="w-20 h-20 rounded-full border border-[#D4D3CF] bg-[#EDECE8] flex items-center justify-center">
                        {index === 0 && <Compass className="text-[#00E87A]" />}
                        {index === 1 && <Layers3 className="text-[#0060FF]" />}
                        {index === 2 && <Code2 className="text-[#FF4F17]" />}
                        {index === 3 && <Rocket className="text-[#00E87A]" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="relative overflow-hidden border border-[#D4D3CF] bg-[#0D0D0D] text-white p-8 sm:p-12 lg:p-16 animate-scale">
            <div className="absolute right-[-80px] top-[-80px] w-64 h-64 rounded-full bg-[#00E87A]/20 blur-3xl" />

            <div className="relative z-10 grid lg:grid-cols-[1fr_0.75fr] gap-10 items-end">
              <div>
                <span className="label-tag border-white/20 text-white/60">
                  <span className="label-dot" />
                  Build With Us
                </span>

                <h2 className="font-display mt-8 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-[-0.06em] leading-[0.95]">
                  Have a product idea?
                  <span className="block text-white/35">Let’s shape it.</span>
                </h2>
              </div>

              <div className="lg:text-right">
                <p className="text-white/60 leading-8 mb-8 lg:max-w-md lg:ml-auto">
                  Bring your rough idea, business challenge, or current system.
                  We will help you convert it into a clear digital plan.
                </p>

                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className="inline-flex items-center gap-3 bg-[#00E87A] text-[#0D0D0D] px-8 py-4 text-xs font-semibold tracking-[0.18em] uppercase cursor-none"
                >
                  Start Discussion
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}