import { useEffect, useState } from 'react';
import { ArrowUpRight, Filter, Grid3x3, List } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const allProjects = [
  {
    num: '01',
    title: 'Middletown Pharmacy',
    category: 'Healthcare',
    desc: 'Digital pharmacy platform simplifying medicine discovery, secure ordering, prescription management, and doorstep healthcare access.',
    image: 'https://i.postimg.cc/8CDQZXLM/middletown.png',
    tags: ['Next.js', 'Node.js', 'PostgreSQL'],
    accent: '#00E87A',
    link: 'https://middlestown-pharmacy.co.uk/',
    year: '2024',
  },
  {
    num: '02',
    title: 'Kalpavraksh',
    category: 'Healthcare',
    desc: 'Psychology and counseling practice empowering individuals through 25+ years of expert guidance in mental wellness and personal growth.',
    image: 'https://i.postimg.cc/qvkzzj61/Kalpavraksh.png',
    tags: ['React.js', 'MongoDB', 'Express'],
    accent: '#0060FF',
    link: 'https://kalpavraksh.com',
    year: '2023',
  },
  {
    num: '03',
    title: 'LogiQ',
    category: 'Logistics',
    desc: 'Procurement management platform ensuring efficient logistics operations with transparency and informed decision-making.',
    image: 'https://i.postimg.cc/28Kb14mP/Logi-QImage.png',
    tags: ['React.js', 'MongoDB', 'Node.js'],
    accent: '#FF4F17',
    link: 'https://logiq.yuvaq.com',
    year: '2024',
  },
  {
    num: '04',
    title: 'See Change',
    category: 'Learning Management',
    desc: 'Knowledge management partner for enterprises delivering proof-of-concept solutions through expert-driven implementations.',
    image: 'https://i.postimg.cc/nzdsJ7LJ/Seechange.png',
    tags: ['Next.js', 'Razorpay', 'AWS'],
    accent: '#00E87A',
    link: 'https://app.seechangeonline.com',
    year: '2023',
  },
  {
    num: '05',
    title: 'TechFlow Dashboard',
    category: 'Analytics',
    desc: 'Real-time analytics dashboard for tracking business metrics with interactive visualizations and custom reporting.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg',
    tags: ['React', 'TypeScript', 'D3.js'],
    accent: '#0060FF',
    link: '#',
    year: '2024',
  },
  {
    num: '06',
    title: 'HealthSync',
    category: 'Healthcare',
    desc: 'Patient management system adopted by 300+ clinics across multiple countries for streamlined healthcare delivery.',
    image: 'https://images.pexels.com/photos/4386476/pexels-photo-4386476.jpeg',
    tags: ['React Native', 'GraphQL', 'Firebase'],
    accent: '#FF4F17',
    link: '#',
    year: '2023',
  },
  {
    num: '07',
    title: 'E-Commerce Pro',
    category: 'E-Commerce',
    desc: 'Global marketplace connecting 50K+ sellers with buyers in 80 countries featuring advanced search and recommendations.',
    image: 'https://images.pexels.com/photos/5632380/pexels-photo-5632380.jpeg',
    tags: ['Next.js', 'Stripe', 'AWS'],
    accent: '#00E87A',
    link: '#',
    year: '2024',
  },
  {
    num: '08',
    title: 'Supply Chain Hub',
    category: 'Logistics',
    desc: 'Enterprise ERP system reducing operational costs by 34% with end-to-end supply chain visibility and automation.',
    image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg',
    tags: ['Python', 'PostgreSQL', 'Docker'],
    accent: '#0060FF',
    link: '#',
    year: '2023',
  },
  {
    num: '09',
    title: 'Cloud Security Suite',
    category: 'Cybersecurity',
    desc: 'Comprehensive security platform providing threat detection, vulnerability management, and compliance monitoring.',
    image: 'https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg',
    tags: ['Go', 'Kubernetes', 'AWS'],
    accent: '#FF4F17',
    link: '#',
    year: '2024',
  },
  {
    num: '10',
    title: 'AI Content Studio',
    category: 'AI & Automation',
    desc: 'AI-powered content generation platform helping creators produce high-quality content 10x faster with customization.',
    image: 'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg',
    tags: ['Next.js', 'OpenAI', 'Node.js'],
    accent: '#00E87A',
    link: '#',
    year: '2024',
  },
];

const categories = [
  'All',
  'Healthcare',
  'Logistics',
  'E-Commerce',
  'Learning Management',
  'Analytics',
  'Cybersecurity',
  'AI & Automation',
];

export default function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const filteredProjects =
    selectedCategory === 'All'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    if (!link || link === '#') {
      e.preventDefault();
    }
  };

  return (
    <div className="min-h-screen bg-[#EDECE8]">
      <section className="py-32 max-w-[1440px] mx-auto px-8 lg:px-16">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-num block mb-6">Portfolio</span>
          <h1
            className="mb-8"
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(48px, 8vw, 120px)',
              lineHeight: '0.95',
              letterSpacing: '-0.04em',
            }}
          >
            Our Finest
            <br />
            <span style={{ color: '#A8A8A0' }}>Work</span>
          </h1>
          <p className="text-[#6B6B6B] text-base leading-relaxed max-w-2xl">
            Explore our portfolio of 200+ delivered projects spanning diverse industries. Each project represents our commitment to excellence, innovation, and client success.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-16 pb-8 border-b border-[#D4D3CF]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3">
            <Filter size={18} className="text-[#6B6B6B]" />
            <span className="text-xs font-medium tracking-widest uppercase text-[#6B6B6B]">
              Filter
            </span>
          </div>

          <div className="flex flex-wrap gap-2 lg:gap-3 flex-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium tracking-wide transition-all duration-300 cursor-none border ${
                  selectedCategory === cat
                    ? 'border-[#0D0D0D] bg-[#0D0D0D] text-white'
                    : 'border-[#D4D3CF] text-[#6B6B6B] hover:border-[#0D0D0D]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 lg:ml-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`w-10 h-10 flex items-center justify-center border transition-all duration-300 cursor-none ${
                viewMode === 'grid'
                  ? 'border-[#0D0D0D] bg-[#0D0D0D] text-white'
                  : 'border-[#D4D3CF] text-[#6B6B6B] hover:border-[#0D0D0D]'
              }`}
            >
              <Grid3x3 size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`w-10 h-10 flex items-center justify-center border transition-all duration-300 cursor-none ${
                viewMode === 'list'
                  ? 'border-[#0D0D0D] bg-[#0D0D0D] text-white'
                  : 'border-[#D4D3CF] text-[#6B6B6B] hover:border-[#0D0D0D]'
              }`}
            >
              <List size={16} />
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + viewMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={
              viewMode === 'grid'
                ? 'grid gap-px bg-[#D4D3CF] grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'space-y-px bg-[#D4D3CF]'
            }
          >
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                {viewMode === 'grid' ? (
                  <div className="bg-[#EDECE8] group h-full flex flex-col hover:shadow-lg transition-all duration-500">
                    <div className="relative overflow-hidden flex-1" style={{ minHeight: '320px' }}>
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-[#0D0D0D]/0 group-hover:bg-[#0D0D0D]/30 transition-colors duration-500" />
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => handleNavigation(e, p.link)}
                        aria-label={`Open ${p.title}`}
                        className="absolute top-4 right-4 w-10 h-10 bg-[#EDECE8] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0 z-10 cursor-none"
                        style={{ color: p.accent }}
                      >
                        <ArrowUpRight size={16} />
                      </a>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full" style={{ background: p.accent }} />
                        <span
                          className="text-xs font-medium tracking-widest uppercase"
                          style={{ color: p.accent }}
                        >
                          {p.category}
                        </span>
                      </div>

                      <h3
                        className="text-lg font-bold mb-2 tracking-tight"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {p.title}
                      </h3>

                      <p className="text-[#6B6B6B] text-sm leading-relaxed mb-4 flex-1">
                        {p.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#D4D3CF]">
                        {p.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs border border-[#D4D3CF] text-[#6B6B6B] rounded"
                          >
                            {tag}
                          </span>
                        ))}
                        {p.tags.length > 2 && (
                          <span className="px-2 py-1 text-xs border border-[#D4D3CF] text-[#6B6B6B] rounded">
                            +{p.tags.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-[#EDECE8] p-6 lg:p-8 group flex gap-8 items-center hover:bg-[#F5F4F0] transition-colors duration-300">
                    <div className="w-32 h-32 lg:w-40 lg:h-40 shrink-0 overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className="text-xs font-medium tracking-widest uppercase"
                          style={{ color: p.accent }}
                        >
                          {p.category}
                        </span>
                        <span className="text-xs text-[#A8A8A0]">• {p.year}</span>
                      </div>

                      <h3
                        className="text-2xl font-bold mb-2 tracking-tight"
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

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => handleNavigation(e, p.link)}
                      aria-label={`Open ${p.title}`}
                      className="w-12 h-12 shrink-0 border border-[#D4D3CF] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-[#0D0D0D] cursor-none"
                      style={{ color: p.accent }}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="mt-16 pt-8 border-t border-[#D4D3CF] text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-[#6B6B6B] text-sm">
            Showing{' '}
            <span style={{ color: '#0D0D0D', fontWeight: 600 }}>
              {filteredProjects.length}
            </span>{' '}
            project{filteredProjects.length !== 1 ? 's' : ''}
          </p>
        </motion.div>
      </section>

      <section className="py-32 bg-[#0D0D0D] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
          <motion.h2
            className="text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(40px, 6vw, 80px)',
              lineHeight: '0.95',
            }}
          >
            Inspired by Our Work?
          </motion.h2>

          <motion.p
            className="text-[#4A4A4A] text-base leading-relaxed max-w-xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let&apos;s discuss how we can build your next project. Get in touch to explore opportunities.
          </motion.p>

          <motion.a
            href="/#contact"
            className="btn-dark cursor-none inline-flex"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span>Start Your Project</span>
            <ArrowUpRight size={16} className="relative z-10" />
          </motion.a>
        </div>
      </section>
    </div>
  );
}