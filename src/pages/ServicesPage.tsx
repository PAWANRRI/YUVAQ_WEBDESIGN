import { Code2, Palette, Smartphone, Cloud, Database, Shield, ArrowUpRight, Sparkles } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  accent: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    icon: <Code2 size={32} strokeWidth={1.5} />,
    title: 'Web Development',
    description: 'High-performance web applications built with React, Next.js, and modern tooling. We focus on speed, accessibility, and developer experience.',
    features: ['React & Next.js', 'TypeScript', 'API Design', 'SSR/SSG'],
    accent: '#0060FF',
    featured: true,
  },
  {
    icon: <Palette size={28} strokeWidth={1.5} />,
    title: 'UI/UX Design',
    description: 'Crafted interfaces that convert. Research-driven design systems.',
    features: ['Figma', 'Prototyping', 'Design Systems'],
    accent: '#FF4F17',
  },
  {
    icon: <Smartphone size={28} strokeWidth={1.5} />,
    title: 'Mobile Apps',
    description: 'Cross-platform mobile experiences with native performance.',
    features: ['React Native', 'iOS', 'Android'],
    accent: '#00E87A',
  },
  {
    icon: <Cloud size={28} strokeWidth={1.5} />,
    title: 'Cloud Infrastructure',
    description: 'Scalable architecture on AWS and GCP. From serverless to k8s.',
    features: ['AWS', 'GCP', 'Serverless'],
    accent: '#8B5CF6',
  },
  {
    icon: <Database size={28} strokeWidth={1.5} />,
    title: 'Data & Analytics',
    description: 'Turn raw data into business decisions with real-time pipelines.',
    features: ['Data Pipelines', 'BI', 'ML'],
    accent: '#F59E0B',
  },
  {
    icon: <Shield size={32} strokeWidth={1.5} />,
    title: 'Security & Compliance',
    description: 'Comprehensive security hardening. OWASP top 10, GDPR, SOC 2 readiness. We protect your users and your reputation.',
    features: ['Security Audits', 'Pen Testing', 'GDPR', 'SOC 2'],
    accent: '#EC4899',
    featured: true,
  },
];

function FeaturedCard({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="featured-service-card group"
      style={{ '--accent': service.accent } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="featured-card-bg" style={{ background: `linear-gradient(135deg, ${service.accent}08, transparent)` }} />

      <div className="featured-card-content">
        {/* Top row */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="featured-icon"
            style={{ background: `${service.accent}15`, color: service.accent }}
          >
            {service.icon}
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={14} style={{ color: service.accent }} />
            <span className="featured-badge">Featured</span>
          </div>
        </div>

        {/* Title & description */}
        <h3 className="featured-title" style={{ fontFamily: 'Syne, sans-serif' }}>
          {service.title}
        </h3>
        <p className="featured-desc">{service.description}</p>

        {/* Features */}
        <div className="featured-features">
          {service.features.map((f, i) => (
            <span key={i} className="featured-tag" style={{ borderColor: `${service.accent}40` }}>
              {f}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="featured-cta" style={{ color: service.accent }}>
          <span>Explore service</span>
          <ArrowUpRight
            size={18}
            strokeWidth={2}
            style={{
              transform: isHovered ? 'translate(3px, -3px)' : 'translate(0, 0)',
              transition: 'transform 0.25s ease',
            }}
          />
        </div>
      </div>

      {/* Animated border */}
      <div
        className="featured-border"
        style={{
          background: `linear-gradient(90deg, ${service.accent}, transparent, ${service.accent})`,
          opacity: isHovered ? 1 : 0.3,
        }}
      />
    </div>
  );
}

function CompactCard({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="compact-service-card group"
      style={{ '--accent': service.accent } as React.CSSProperties}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="compact-top">
        <div
          className="compact-icon"
          style={{ background: `${service.accent}12`, color: service.accent }}
        >
          {service.icon}
        </div>
        <ArrowUpRight
          size={18}
          strokeWidth={2}
          className="compact-arrow"
          style={{
            color: service.accent,
            opacity: isHovered ? 1 : 0.3,
            transform: isHovered ? 'translate(2px, -2px)' : 'translate(0, 0)',
            transition: 'all 0.25s ease',
          }}
        />
      </div>

      <h3 className="compact-title" style={{ fontFamily: 'Syne, sans-serif' }}>
        {service.title}
      </h3>
      <p className="compact-desc">{service.description}</p>

      <div className="compact-features">
        {service.features.map((f, i) => (
          <span key={i} className="compact-tag">
            {f}
          </span>
        ))}
      </div>

      {/* Bottom accent */}
      <div
        className="compact-accent"
        style={{
          background: service.accent,
          transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
        }}
      />
    </div>
  );
}

export default function ServicesPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const featuredServices = services.filter(s => s.featured);
  const compactServices = services.filter(s => !s.featured);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="services-section"
    >
      {/* Diagonal stripe background */}
      <div className="services-stripes" />

      <div className="services-container">
        {/* Left column - Header */}
        <div className={`services-header ${isVisible ? 'visible' : ''}`}>
          <span className="label-tag mb-5 inline-flex">
            <span className="label-dot" />
            Services
          </span>
          <h2 className="services-main-title" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="block text-[#0D0D0D] text-5xl">Solutions</span>
            <span className="block text-[#BDBBB6]">That Scale</span>
          </h2>
          <p className="services-intro">
            From initial concept to global deployment. We build systems that handle millions of users and adapt to your growth.
          </p>

          <div className="services-stats">
            <div className="stat-item">
              <div className="stat-value" style={{ fontFamily: 'Syne, sans-serif' }}>15+</div>
              <div className="stat-label">Projects Shipped</div>
            </div>
            <div className="stat-divider" />
            <div className="stat-item">
              <div className="stat-value" style={{ fontFamily: 'Syne, sans-serif' }}>12+</div>
              <div className="stat-label">Team Experts</div>
            </div>
          </div>

          <Link to="/contact" className="services-cta-btn">
            <span>Get a quote</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Right column - Bento grid */}
        <div className={`services-bento ${isVisible ? 'visible' : ''}`}>
          {/* Featured cards (large) */}
          <div className="bento-featured">
            {featuredServices.map((service, i) => (
              <div key={service.title} className={`bento-featured-item bento-featured-${i + 1}`}>
                <FeaturedCard service={service} />
              </div>
            ))}
          </div>

          {/* Compact cards grid */}
          <div className="bento-compact">
            {compactServices.map((service, i) => (
              <div
                key={service.title}
                className="bento-compact-item"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.5s ease ${0.2 + i * 0.08}s`,
                }}
              >
                <CompactCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom marquee - service names */}
      <div className="services-marquee-wrap">
        <div className="services-marquee">
          {['Web Development', 'UI/UX Design', 'Mobile Apps', 'Cloud Solutions', 'Data Engineering', 'Security', 'Web Development', 'UI/UX Design', 'Mobile Apps', 'Cloud Solutions', 'Data Engineering', 'Security'].map((name, i) => (
            <span key={i} className="marquee-item">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
