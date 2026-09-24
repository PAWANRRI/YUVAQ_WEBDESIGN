import { useState, useRef, useEffect, type CSSProperties } from 'react';
import {
  Truck,
  FileText,
  TrendingDown,
  Clock,
  Users,
  DollarSign,
  ArrowUpRight,
  Check,
  BarChart3,
  Shield,
  Target,
  ChevronRight,
  ArrowDownRight,
  Database,
  Gauge,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 'logiq',
    name: 'LogiQ',
    tagline: 'Reverse Auction Logistics Platform',
    description:
      'Transform your logistics procurement with competitive bidding. LogiQ leverages reverse auction dynamics to drive down costs while ensuring quality service providers compete for your business.',
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
    description:
      'Streamline your entire procurement lifecycle. From indent creation to vendor quotations, comparative statements to finalization - ProcQ brings transparency and efficiency to every step.',
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

const logiqRateComparison = [
  {
    id: 1,
    legacy: '₹2,900 / MT',
    legacyDate: 'Nov 2024',
    logiq: '₹2,550 / MT',
    logiqDate: 'May 2025',
    result: '₹350 / MT saved',
    detail: '12.07% reduction',
    positive: true,
  },
  {
    id: 2,
    legacy: '₹3,900 / MT',
    legacyDate: 'Nov 2024',
    logiq: '₹3,800 / MT',
    logiqDate: 'Jun 2026',
    result: 'Further optimized',
    detail: '₹3,850 in Mar 2026 → ₹3,800 after updated app version',
    positive: true,
  },
  {
    id: 3,
    legacy: '₹65,000',
    legacyDate: 'Nov 2024',
    logiq: '₹70,000',
    logiqDate: 'Feb 2026',
    result: 'Market-driven variation',
    detail: 'Rate movement reflected prevailing market conditions',
    positive: false,
  },
  {
    id: 4,
    legacy: '₹4,200 / MT',
    legacyDate: 'Nov 2024',
    logiq: '₹3,350 / MT',
    logiqDate: 'May 2026',
    result: '₹850 / MT saved',
    detail: '20.24% reduction',
    positive: true,
  },
  {
    id: 5,
    legacy: '₹3,700 / MT',
    legacyDate: 'Nov 2024',
    logiq: '₹3,900 / MT',
    logiqDate: 'May 2026',
    result: 'Market benchmark',
    detail: 'Rate stabilized near prevailing market level',
    positive: false,
  },
];

const logiqBusinessImpact = [
  { label: 'Rate Transparency', before: 'Low', after: 'High' },
  { label: 'Transporter Participation', before: 'Limited', after: 'Multiple vendors' },
  { label: 'Negotiation Effort', before: 'Manual', after: 'Digital competitive bidding' },
  { label: 'Decision Making', before: 'Experience based', after: 'Data driven' },
  { label: 'Historical Analytics', before: 'Limited', after: 'Available' },
  { label: 'Procurement Speed', before: 'Slow', after: 'Faster' },
];

function ProductCard({
  product,
  isActive,
  onClick,
}: {
  product: (typeof products)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`product-selector ${isActive ? 'active' : ''}`}
      onClick={onClick}
      style={{ '--product-color': product.color } as CSSProperties}
    >
      <div
        className="product-selector-icon"
        style={{ background: `${product.color}12`, color: product.color }}
      >
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

function LogiQCaseStudy() {
  return (
    <section
      id="logiq-case-study"
      className="mt-10 overflow-hidden rounded-[28px] border border-[#E7E9EE] bg-white shadow-[0_24px_80px_rgba(13,13,13,0.06)]"
    >
      <div className="relative overflow-hidden border-b border-[#E7E9EE] bg-[#F7FAFF] px-5 py-8 sm:px-7 lg:px-10 lg:py-10">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#0060FF]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-[#0060FF]/5 blur-3xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0060FF]/15 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0060FF]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0060FF]" />
              Customer Case Study
            </div>

            <p className="mb-2 text-sm font-medium text-[#6B7280]">Freight Cost Optimization</p>
            <h3
              className="max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#0D0D0D] sm:text-4xl lg:text-[46px]"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              From manual freight negotiation to transparent reverse auctions.
            </h3>
            <p className="mt-5 max-w-2xl text-[15px] leading-7 text-[#666A73]">
              A manufacturing client moved from a conventional freight procurement process to LogiQ,
              creating a more transparent, competitive and data-driven way to discover freight rates.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0060FF]/15 bg-white p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0060FF]/10 text-[#0060FF]">
                <TrendingDown size={20} />
              </div>
              <span className="text-xs font-medium text-[#8A8F98]">Selected freight lane</span>
            </div>
            <div
              className="text-4xl font-semibold tracking-[-0.04em] text-[#0060FF] sm:text-5xl"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              20.24%
            </div>
            <p className="mt-2 text-sm font-semibold text-[#171717]">freight rate reduction</p>
            <p className="mt-1 text-sm leading-6 text-[#777B84]">₹4,200 / MT → ₹3,350 / MT</p>
          </div>
        </div>
      </div>

      <div className="px-5 py-8 sm:px-7 lg:px-10 lg:py-10">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-[#ECEDEF] bg-[#FAFAFA] p-5 sm:p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0D0D0D] shadow-sm">
              <Target size={19} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8A8F98]">The Challenge</p>
            <h4 className="mt-2 text-xl font-semibold text-[#151515]" style={{ fontFamily: 'Syne, sans-serif' }}>
              Inconsistent rates. Manual negotiation. Limited market visibility.
            </h4>
            <p className="mt-3 text-sm leading-6 text-[#6F737B]">
              Freight procurement depended heavily on manual negotiation and experience, making rate
              discovery slower and reducing visibility into prevailing market prices.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0060FF]/15 bg-[#F7FAFF] p-5 sm:p-6">
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0060FF] shadow-sm">
              <Truck size={19} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0060FF]">The LogiQ Solution</p>
            <h4 className="mt-2 text-xl font-semibold text-[#151515]" style={{ fontFamily: 'Syne, sans-serif' }}>
              Competitive transporter bidding with digital freight-rate history.
            </h4>
            <p className="mt-3 text-sm leading-6 text-[#6F737B]">
              LogiQ enables multiple transporters to compete for the same requirement, improving pricing
              transparency, vendor participation and procurement speed while retaining historical rate data.
            </p>
          </div>
        </div>

        <div className="mt-9">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0060FF]">Observed Rate Movement</p>
              <h4 className="mt-1 text-2xl font-semibold text-[#151515]" style={{ fontFamily: 'Syne, sans-serif' }}>
                Legacy process vs. LogiQ
              </h4>
            </div>
            <p className="max-w-md text-xs leading-5 text-[#8A8F98]">
              Actual selected shipment observations. Market-driven increases are shown alongside savings for a balanced view.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#E7E9EE]">
            <div className="min-w-[820px]">
              <div className="grid grid-cols-[64px_1fr_48px_1fr_1.25fr] border-b border-[#E7E9EE] bg-[#F7F7F8] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A8F98]">
                <div>#</div>
                <div>Legacy Process</div>
                <div />
                <div>LogiQ</div>
                <div>Business Observation</div>
              </div>

              {logiqRateComparison.map((row) => (
                <div
                  key={row.id}
                  className="grid grid-cols-[64px_1fr_48px_1fr_1.25fr] items-center border-b border-[#ECEDEF] px-5 py-4 text-sm last:border-b-0"
                >
                  <div className="font-semibold text-[#9A9DA4]">0{row.id}</div>
                  <div>
                    <div className="font-semibold text-[#242424]">{row.legacy}</div>
                    <div className="mt-1 text-xs text-[#9A9DA4]">{row.legacyDate}</div>
                  </div>
                  <div className="flex justify-center text-[#A8ABB1]">
                    <ArrowUpRight size={17} />
                  </div>
                  <div>
                    <div className="font-semibold text-[#0060FF]">{row.logiq}</div>
                    <div className="mt-1 text-xs text-[#9A9DA4]">{row.logiqDate}</div>
                  </div>
                  <div>
                    <div className={`flex items-center gap-2 font-semibold ${row.positive ? 'text-[#107C41]' : 'text-[#45484F]'}`}>
                      {row.positive && <ArrowDownRight size={16} />}
                      {row.result}
                    </div>
                    <div className="mt-1 text-xs leading-5 text-[#80848C]">{row.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-[#E7E9EE] p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0060FF]/10 text-[#0060FF]">
              <TrendingDown size={18} />
            </div>
            <div className="mt-5 text-2xl font-semibold text-[#111]" style={{ fontFamily: 'Syne, sans-serif' }}>
              Up to ~20%
            </div>
            <p className="mt-1 text-sm text-[#777B84]">freight cost reduction on selected shipments</p>
          </div>

          <div className="rounded-2xl border border-[#E7E9EE] p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0060FF]/10 text-[#0060FF]">
              <Users size={18} />
            </div>
            <div className="mt-5 text-lg font-semibold text-[#111]" style={{ fontFamily: 'Syne, sans-serif' }}>
              More vendors
            </div>
            <p className="mt-1 text-sm text-[#777B84]">increased transporter participation and competition</p>
          </div>

          <div className="rounded-2xl border border-[#E7E9EE] p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0060FF]/10 text-[#0060FF]">
              <Gauge size={18} />
            </div>
            <div className="mt-5 text-lg font-semibold text-[#111]" style={{ fontFamily: 'Syne, sans-serif' }}>
              Faster sourcing
            </div>
            <p className="mt-1 text-sm text-[#777B84]">less manual negotiation and quicker procurement</p>
          </div>

          <div className="rounded-2xl border border-[#E7E9EE] p-5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0060FF]/10 text-[#0060FF]">
              <Database size={18} />
            </div>
            <div className="mt-5 text-lg font-semibold text-[#111]" style={{ fontFamily: 'Syne, sans-serif' }}>
              Rate history
            </div>
            <p className="mt-1 text-sm text-[#777B84]">historical freight data available for decisions</p>
          </div>
        </div>

        <div className="mt-9 rounded-2xl border border-[#E7E9EE] bg-[#0D0D0D] p-5 text-white sm:p-7">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/45">Business Impact</p>
              <h4 className="mt-1 text-2xl font-semibold" style={{ fontFamily: 'Syne, sans-serif' }}>
                Procurement before and after LogiQ
              </h4>
            </div>
            <div className="hidden items-center gap-2 text-xs text-white/45 sm:flex">
              <span>Before</span>
              <ChevronRight size={14} />
              <span className="text-[#71A4FF]">After LogiQ</span>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {logiqBusinessImpact.map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                <p className="text-xs font-medium text-white/45">{item.label}</p>
                <div className="mt-3 grid grid-cols-[1fr_24px_1fr] items-center gap-2 text-sm">
                  <span className="text-white/65">{item.before}</span>
                  <ChevronRight size={15} className="text-white/25" />
                  <span className="font-medium text-[#8DB5FF]">{item.after}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-[#0060FF]/15 bg-[#F7FAFF] p-5 sm:p-6">
          <div className="flex gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#0060FF] shadow-sm">
              <Shield size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#232323]">Case study note</p>
              <p className="mt-1 text-xs leading-5 text-[#777B84]">
                Results are based on actual procurement observations from selected shipments. Freight savings can vary by route,
                season, market conditions, fuel prices and transporter availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductDetail({ product }: { product: (typeof products)[0] }) {
  const [activeStat, setActiveStat] = useState(0);

  useEffect(() => {
    setActiveStat(0);
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % product.stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [product.id, product.stats.length]);

  return (
    <div
      className="product-detail"
      style={{ '--product-color': product.color } as CSSProperties}
    >
      <div className="product-detail-header">
        <div
          className="product-detail-icon-lg"
          style={{ background: `${product.color}12`, color: product.color }}
        >
          {product.id === 'logiq' ? (
            <Truck size={40} strokeWidth={1.5} />
          ) : (
            <FileText size={40} strokeWidth={1.5} />
          )}
        </div>
        <div>
          <h2
            className="product-detail-name"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {product.name}
          </h2>
          <p className="product-detail-tagline">{product.tagline}</p>
        </div>
      </div>

      <p className="product-detail-desc">{product.description}</p>

      <div
        className="product-stat-highlight"
        style={{
          background: `${product.color}08`,
          borderColor: `${product.color}20`,
        }}
      >
        <div className="product-stat-highlight-inner">
          <div className="product-stat-highlight-icon" style={{ color: product.color }}>
            {product.stats[activeStat].icon}
          </div>
          <div
            className="product-stat-highlight-value"
            style={{ fontFamily: 'Syne, sans-serif', color: product.color }}
          >
            {product.stats[activeStat].value}
          </div>
          <div className="product-stat-highlight-label">
            {product.stats[activeStat].label}
          </div>
        </div>

        <div className="product-stat-dots">
          {product.stats.map((_, i) => (
            <span
              key={i}
              className={`product-stat-dot ${i === activeStat ? 'active' : ''}`}
              style={{
                background: i === activeStat ? product.color : '#D4D3CF',
              }}
            />
          ))}
        </div>
      </div>

      <div className="product-stats-grid">
        {product.stats.map((stat, i) => (
          <div
            key={i}
            className={`product-stat-item ${i === activeStat ? 'active' : ''}`}
            onClick={() => setActiveStat(i)}
            style={{
              borderColor: i === activeStat ? product.color : '#E5E5E3',
            }}
          >
            <div
              className="product-stat-value"
              style={{ fontFamily: 'Syne, sans-serif', color: product.color }}
            >
              {stat.value}
            </div>
            <div className="product-stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

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

      <div className="product-problems-section">
        <h3 className="product-problems-title">Problems Solved</h3>
        <div className="product-problems-list">
          {product.problems.map((problem, i) => (
            <div key={i} className="product-problem-item">
              <Check
                size={16}
                className="product-problem-check"
                style={{ color: product.color }}
              />
              <span>{problem}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="product-cta-section">
        <Link
          to="/contact"
          className="product-cta-btn"
          style={{ background: product.color }}
        >
          <span>Request Demo</span>
          <ArrowUpRight size={18} />
        </Link>

        {product.id === 'logiq' && (
          <a
            href="#logiq-case-study"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#0060FF]/20 bg-[#0060FF]/[0.06] px-5 py-3 text-sm font-semibold text-[#0060FF] transition hover:-translate-y-0.5 hover:bg-[#0060FF]/10"
          >
            <BarChart3 size={17} />
            <span>View Case Study</span>
          </a>
        )}
      </div>

      {product.id === 'logiq' && <LogiQCaseStudy />}
    </div>
  );
}

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProduct, setActiveProduct] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);

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
      <div className="products-bg-pattern" />
      <div className="products-bg-glow products-bg-glow-1" />
      <div className="products-bg-glow products-bg-glow-2" />

      <div className="products-container">
        <div className="products-header">
          <span className="label-tag mb-4 inline-flex">
            <span className="label-dot" />
            Our Products
          </span>
          <h2
            className="products-main-title"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            <span className="block text-[#0D0D0D]">Enterprise Solutions</span>
            <span className="block text-[#BDBBB6]">That Deliver Results</span>
          </h2>
          <p className="products-intro">
            Purpose-built software tackling the toughest procurement and logistics challenges with measurable impact.
          </p>
        </div>

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

        <div className="products-detail-wrap">
          <ProductDetail product={products[activeProduct]} />
        </div>
      </div>
    </section>
  );
}
