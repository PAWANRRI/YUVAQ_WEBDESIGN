import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const projects = [
  {
    num: '01',
    title: 'Middletown Pharmacy',
    category: 'HealthCare',
    desc: 'Digital pharmacy platform simplifying medicine discovery, secure ordering, prescription management, and doorstep healthcare access through a fast, user-friendly experience.',
    image: 'https://i.postimg.cc/8CDQZXLM/middletown.png',
    tags: ['Next.js', 'WebSocket', 'Node.js'],
    accent: '#00E87A',
    size: 'lg',
    link: 'https://middlestown-pharmacy.co.uk/',
  },
  {
    num: '02',
    title: 'Kalpavraksh',
    category: 'Healthcare',
    desc: 'Transformational psychology and counseling practice, empowering individuals, students, professionals, and families through 25+ years of expert guidance in career growth, mental wellness, academic success, and relationship harmony.',
    image: 'https://i.postimg.cc/qvkzzj61/Kalpavraksh.png',
    tags: ['React.js', 'MongoDb', 'Express', 'Node.js'],
    accent: '#0060FF',
    size: 'sm',
    link: 'https://kalpavraksh.com',
  },
  {
    num: '03',
    title: 'LogiQ',
    category: 'Logistics / Enterprise',
    desc: 'LogiQ intuitive interface and robust features ensure efficient procurement management, transparency, and informed decision-making for logistics operations.',
    image: 'https://i.postimg.cc/28Kb14mP/Logi-QImage.png',
    tags: ['React.js', 'MongoDb', 'Express', 'Node.js'],
    accent: '#FF4F17',
    size: 'sm',
    link: 'https://logiq.yuvaq.com',
  },
  {
    num: '04',
    title: 'See Change',
    category: 'Learning Mangement / Full Stack',
    desc: 'Leading Knowledge Management Partner for MNCs and Growth Management Partner for MSMEs, delivering proof-of-concept-driven solutions through a 100+ expert.',
    image: 'https://i.postimg.cc/nzdsJ7LJ/Seechange.png',
    tags: ['Next.js', 'Razorpay', 'AWS'],
    accent: '#00E87A',
    size: 'lg',
    link: 'https://app.seechangeonline.com',
  },
];

type RevealState = {
  active: boolean;
  x: number;
  y: number;
  size: number;
};

export default function Projects() {
  const timerRef = useRef<number | null>(null);

  const [reveal, setReveal] = useState<RevealState>({
    active: false,
    x: 0,
    y: 0,
    size: 0,
  });

  const [isNavigating, setIsNavigating] = useState(false);

  const handleViewAllWork = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isNavigating) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    const distances = [
      Math.hypot(x, y),
      Math.hypot(window.innerWidth - x, y),
      Math.hypot(x, window.innerHeight - y),
      Math.hypot(window.innerWidth - x, window.innerHeight - y),
    ];

    const radius = Math.max(...distances);
    const size = radius * 2.2;

    setIsNavigating(true);
    setReveal({
      active: true,
      x,
      y,
      size,
    });

    timerRef.current = window.setTimeout(() => {
      window.location.href = '/all-projects';
    }, 900);
  };

  return (
    <>
      <AnimatePresence>
        {reveal.active && (
          <motion.div
            className="fixed inset-0 z-[200] pointer-events-none overflow-hidden"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute rounded-full"
              style={{
                left: reveal.x,
                top: reveal.y,
                width: reveal.size,
                height: reveal.size,
                marginLeft: -reveal.size / 2,
                marginTop: -reveal.size / 2,
                background:
                  'conic-gradient(from 0deg, #00E87A 0deg, #0060FF 120deg, #FF4F17 240deg, #00E87A 360deg)',
                boxShadow: '0 0 120px rgba(0, 232, 122, 0.3)',
              }}
              initial={{ scale: 0.04, opacity: 1 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                },
              }}
              exit={{
                opacity: 0,
                transition: { duration: 0.2 },
              }}
            />

            <motion.div
              className="absolute inset-0 bg-[#EDECE8]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.28,
                  delay: 0.58,
                  ease: 'easeOut',
                },
              }}
              exit={{ opacity: 0 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section id="work" className="py-32 max-w-[1440px] mx-auto px-8 lg:px-16">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20"
          animate={{
            opacity: isNavigating ? 0.65 : 1,
            y: isNavigating ? 16 : 0,
            scale: isNavigating ? 0.985 : 1,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="section-num block mb-4">04 / Work</span>
            <h2
              className="animate-on-scroll"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(40px, 5vw, 80px)',
                lineHeight: '0.95',
                letterSpacing: '-0.03em',
              }}
            >
              Selected
              <br />
              <span style={{ color: '#A8A8A0' }}>Projects</span>
            </h2>
          </div>

          <button
            type="button"
            onClick={handleViewAllWork}
            disabled={isNavigating}
            className="btn-ghost animate-on-scroll delay-2 cursor-none self-start lg:self-end disabled:opacity-80"
          >
            <span>View All Work</span>
            <motion.span
              animate={isNavigating ? { x: 4, y: -4 } : { x: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight size={16} />
            </motion.span>
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[#D4D3CF]"
          animate={{
            opacity: isNavigating ? 0.55 : 1,
            y: isNavigating ? 22 : 0,
            scale: isNavigating ? 0.99 : 1,
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {projects.map((p, i) => (
            <div
              key={p.num}
              className={`project-card bg-[#EDECE8] group animate-on-scroll delay-${i + 1} ${
                p.size === 'lg' ? 'lg:col-span-7' : 'lg:col-span-5'
              }`}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: p.size === 'lg' ? '16/10' : '4/3' }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-[#0D0D0D]/0 group-hover:bg-[#0D0D0D]/30 transition-colors duration-500" />

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title}`}
                  className="absolute top-6 right-6 w-12 h-12 bg-[#EDECE8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-4 group-hover:translate-y-0 z-10"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="p-8 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-medium tracking-widest uppercase"
                      style={{ color: p.accent }}
                    >
                      {p.category}
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-bold tracking-tight mb-2"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {p.title}
                  </h3>

                  <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs border border-[#D4D3CF] text-[#6B6B6B]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span
                  className="text-5xl font-bold opacity-10 shrink-0"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  {p.num}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
}