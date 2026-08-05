import { useState, useRef, useEffect } from 'react';
import {
  Truck, FileText, TrendingDown, Clock, Users, DollarSign,
  ArrowUpRight, Check, BarChart3, Shield, Zap, Target,
  ChevronRight, Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'logiq',
    name: 'LogiQ',
    tagline: 'Reverse Auction Logistics Platform',
    description: 'Transform your logistics procurement with competitive bidding. LogiQ leverages reverse auction dynamics to drive down costs while ensuring quality service providers compete for your business.',
    color: '#0060FF',
    features: [
      { icon: <TrendingDown size={20} />, text: 'Real-time reverse auction bidding' },
      { icon: <Shield size={20} />, text: 'Verified carrier network' },
      { icon: <Clock size={20} />, text: 'Automated dispatch & tracking' },
      { icon: <BarChart3 size={20} />, text: 'Cost analytics dashboard' },
    ],
    stats: [
      { value: '22%', label: 'Cost Reduction', icon: <DollarSign size={18} /> },
      { value: '45%', label: 'Faster Procurement', icon: <Clock size={18} /> },
      { value: '89%', label: 'On-Time Delivery', icon: <Truck size={18} /> },
      { value: '3.2x', label: 'Carrier Competition', icon: <Users size={18} /> },
    ],
    problems: [
      'Eliminates manual rate negotiations',
      'Removes intermediaries and hidden margins',
      'Solves route optimization inefficiencies',
      'Addresses capacity utilization gaps',
    ],
  },
  {
    id: 'procq',
    name: 'ProcQ',
    tagline: 'Intelligent Procurement Suite',
    description: 'Streamline your entire procurement lifecycle. From indent creation to vendor quotations, comparative statements to finalization - ProcQ brings transparency and efficiency to every step.',
    color: '#FF4F17',
    features: [
      { icon: <FileText size={20} />, text: 'Digital indent management' },
      { icon: <Users size={20} />, text: 'Multi-vendor quotation collection' },
      { icon: <BarChart3 size={20} />, text: 'Comparative statement generation' },
      { icon: <Target size={20} />, text: 'Automated vendor scoring' },
    ],
    stats: [
      { value: '36%', label: 'Procurement Cycle Reduced', icon: <Clock size={18} /> },
      { value: '42%', label: 'Better Negotiation Power', icon: <TrendingDown size={18} /> },
      { value: '94%', label: 'Process Transparency', icon: <Shield size={18} /> },
      { value: '100%', label: 'Audit Trail Coverage', icon: <FileText size={18} /> },
    ],
    problems: [
      'Eliminates paper-based indent tracking',
      'Solves vendor communication chaos',
      'Removes manual quotation comparison',
      'Addresses approval bottlenecks',
    ],
  },
];

function ProductCard({ product, isActive, onClick }: { product: typeof products[0]; isActive: boolean; onClick: () => void }) {
  return (
    <button
      className={`product-selector ${isActive ? 'active' : ''}`}
      onClick={onClick}
      style={{ '--product-color': product.color } as React.CSSProperties}
    >
      <div className="product-selector-icon" style={{ background: `${product.color}12`, color: product.color }}>
        {product.id === 'logiq' ? <Truck size={24} /> : <FileText size={24} />}
      </div>
      <div className="product-selector-content">
        <span className="product-selector-name">{product.name}</span>
        <span className="product-selector-tagline">{product.tagline}</span>
      </div>
      <ChevronRight
        size={20}
        className="product-selector-arrow"
        style={{
          color: product.color,
          transform: isActive ? 'translateX(4px)' : 'translateX(0)',
          opacity: isActive ? 1 : 0.4,
        }}
      />
    </button>
  );
}

function ProductDetail({ product }: { product: typeof products[0] }) {
  const [activeStat, setActiveStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % product.stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [product.stats.length]);

  return (
    <div className="product-detail" style={{ '--product-color': product.color } as React.CSSProperties}>
      {/* Main info section */}
      <div className="product-detail-header">
        <div className="product-detail-icon-lg" style={{ background: `${product.color}12`, color: product.color }}>
          {product.id === 'logiq' ? <Truck size={40} strokeWidth={1.5} /> : <FileText size={40} strokeWidth={1.5} />}
        </div>
        <div>
          <h2 className="product-detail-name" style={{ fontFamily: 'Syne, sans-serif' }}>{product.name}</h2>
          <p className="product-detail-tagline">{product.tagline}</p>
        </div>
      </div>

      <p className="product-detail-desc">{product.description}</p>

      {/* Rotating stat highlight */}
      <div className="product-stat-highlight" style={{ background: `${product.color}08`, borderColor: `${product.color}20` }}>
        <div className="product-stat-highlight-inner">
          <div className="product-stat-highlight-icon" style={{ color: product.color }}>
            {product.stats[activeStat].icon}
          </div>
          <div className="product-stat-highlight-value" style={{ fontFamily: 'Syne, sans-serif', color: product.color }}>
            {product.stats[activeStat].value}
          </div>
          <div className="product-stat-highlight-label">{product.stats[activeStat].label}</div>
        </div>
        <div className="product-stat-dots">
          {product.stats.map((_, i) => (
            <span
              key={i}
              className={`product-stat-dot ${i === activeStat ? 'active' : ''}`}
              style={{ background: i === activeStat ? product.color : '#D4D3CF' }}
            />
          ))}
        </div>
      </div>

      {/* All stats grid */}
      <div className="product-stats-grid">
        {product.stats.map((stat, i) => (
          <div
            key={i}
            className={`product-stat-item ${i === activeStat ? 'active' : ''}`}
            onClick={() => setActiveStat(i)}
            style={{ borderColor: i === activeStat ? product.color : '#E5E5E3' }}
          >
            <div className="product-stat-value" style={{ fontFamily: 'Syne, sans-serif', color: product.color }}>
              {stat.value}
            </div>
            <div className="product-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="product-features-section">
        <h3 className="product-features-title">Key Features</h3>
        <div className="product-features-grid">
          {product.features.map((feature, i) => (
            <div key={i} className="product-feature-item">
              <div className="product-feature-icon" style={{ color: product.color }}>
                {feature.icon}
              </div>
              <span className="product-feature-text">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Problems solved */}
      <div className="product-problems-section">
        <h3 className="product-problems-title">Problems Solved</h3>
        <div className="product-problems-list">
          {product.problems.map((problem, i) => (
            <div key={i} className="product-problem-item">
              <Check size={16} className="product-problem-check" style={{ color: product.color }} />
              <span>{problem}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="product-cta-section">
        <Link to="/contact" className="product-cta-btn" style={{ background: product.color }}>
          <span>Request Demo</span>
          <ArrowUpRight size={18} />
        </Link>
        {/* <button className="product-cta-secondary">
          <Play size={16} />
          <span>Watch Video</span>
        </button> */}
      </div>
    </div>
  );
}

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProduct, setActiveProduct] = useState(0);
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

  return (
    <section
      ref={sectionRef}
      id="products"
      className={`products-section ${isVisible ? 'visible' : ''}`}
    >
      {/* Background elements */}
      <div className="products-bg-pattern" />
      <div className="products-bg-glow products-bg-glow-1" />
      <div className="products-bg-glow products-bg-glow-2" />

      <div className="products-container">
        {/* Header */}
        <div className="products-header">
          <span className="label-tag mb-4 inline-flex">
            <span className="label-dot" />
            Our Products
          </span>
          <h2 className="products-main-title" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="block text-[#0D0D0D]">Enterprise Solutions</span>
            <span className="block text-[#BDBBB6]">That Deliver Results</span>
          </h2>
          <p className="products-intro">
            Purpose-built software tackling the toughest procurement and logistics challenges with measurable impact.
          </p>
        </div>

        {/* Product selector */}
        <div className="products-selector-wrap">
          {products.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              isActive={activeProduct === i}
              onClick={() => setActiveProduct(i)}
            />
          ))}
        </div>

        {/* Product detail */}
        <div className="products-detail-wrap">
          <ProductDetail product={products[activeProduct]} />
        </div>

        {/* Bottom impact statement */}
        <div className="products-impact">
          <div className="products-impact-content">
            <Zap size={24} className="products-impact-icon" />
            <div>
              <p className="products-impact-text" style={{ fontFamily: 'Syne, sans-serif' }}>
                Proven to reduce operational overhead by <strong>67%</strong> across 50+ enterprise deployments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
