import { Search, Lightbulb, PenTool, Code2, Rocket, ArrowUpRight, CheckCircle2, Circle } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const steps = [
  {
    id: 'discovery',
    icon: <Search size={24} strokeWidth={1.5} />,
    title: 'Discovery',
    duration: '1-2 weeks',
    description: 'We dive deep into your business, users, and goals. Understanding the problem space before proposing solutions.',
    deliverables: ['Stakeholder interviews', 'Competitive analysis', 'User personas', 'Requirements doc'],
    color: '#0060FF',
  },
  {
    id: 'strategy',
    icon: <Lightbulb size={24} strokeWidth={1.5} />,
    title: 'Strategy',
    duration: '1 week',
    description: 'Mapping the path forward. We define the tech stack, architecture, and phased roadmap for delivery.',
    deliverables: ['Technical architecture', 'Stack selection', 'MVP scope', 'Project roadmap'],
    color: '#FF4F17',
  },
  {
    id: 'design',
    icon: <PenTool size={24} strokeWidth={1.5} />,
    title: 'Design',
    duration: '2-3 weeks',
    description: 'Crafting the visual language. Iterative wireframes transform into polished, user-tested interfaces.',
    deliverables: ['Wireframes', 'Design system', 'Hi-fi mockups', 'Interactive prototype'],
    color: '#00E87A',
  },
  {
    id: 'development',
    icon: <Code2 size={24} strokeWidth={1.5} />,
    title: 'Build',
    duration: '4-8 weeks',
    description: 'Clean, tested code shipped in sprints. Continuous integration and weekly demos keep you in the loop.',
    deliverables: ['Sprint planning', 'Feature development', 'Code reviews', 'Automated tests'],
    color: '#8B5CF6',
  },
  {
    id: 'launch',
    icon: <Rocket size={24} strokeWidth={1.5} />,
    title: 'Launch',
    duration: '1-2 weeks',
    description: 'Staged deployment with monitoring. We train your team and provide ongoing support for scale.',
    deliverables: ['UAT testing', 'Performance tuning', 'Team training', 'Post-launch support'],
    color: '#F59E0B',
  },
];

function StepCard({ step, index, isActive, isCompleted, onClick }: {
  step: typeof steps[0];
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`flow-step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
      onClick={onClick}
      style={{ '--step-color': step.color } as React.CSSProperties}
    >
      {/* Step number */}
      <div className="flow-step-num-wrap">
        <span className="flow-step-num">{String(index + 1).padStart(2, '0')}</span>
      </div>

      {/* Icon container */}
      <div
        className="flow-step-icon"
        style={{
          background: isActive ? step.color : 'transparent',
          color: isActive ? '#fff' : step.color,
          borderColor: step.color,
        }}
      >
        {isCompleted ? <CheckCircle2 size={24} strokeWidth={2} /> : step.icon}
      </div>

      {/* Title */}
      <div className="flow-step-title">{step.title}</div>

      {/* Duration */}
      <div className="flow-step-duration" style={{ color: step.color }}>
        {step.duration}
      </div>

      {/* Connector line to next step */}
      {index < steps.length - 1 && (
        <div className="flow-step-connector">
          <div
            className="flow-step-connector-fill"
            style={{
              background: isCompleted ? step.color : 'transparent',
            }}
          />
        </div>
      )}

      {/* Active indicator dot */}
      {isActive && (
        <div className="flow-step-active-dot" style={{ background: step.color }} />
      )}
    </button>
  );
}

function StepDetail({ step }: { step: typeof steps[0] }) {
  return (
    <div className="step-detail">
      {/* Left side: info */}
      <div className="step-detail-info">
        <div className="step-detail-header">
          <div
            className="step-detail-icon"
            style={{ background: `${step.color}12`, color: step.color }}
          >
            {step.icon}
          </div>
          <div>
            <h3 className="step-detail-title" style={{ fontFamily: 'Syne, sans-serif' }}>
              {step.title}
            </h3>
            <span className="step-detail-duration">{step.duration}</span>
          </div>
        </div>

        <p className="step-detail-desc">{step.description}</p>

        <a href="#contact" className="step-detail-cta" style={{ color: step.color }}>
          <span>Start this phase</span>
          <ArrowUpRight size={16} strokeWidth={2} />
        </a>
      </div>

      {/* Right side: deliverables */}
      <div className="step-detail-deliverables">
        <h4 className="step-deliverables-title">Deliverables</h4>
        <div className="step-deliverables-list">
          {step.deliverables.map((item, i) => (
            <div
              key={i}
              className="step-deliverable-item"
              style={{ borderColor: `${step.color}25` }}
            >
              <Circle
                size={8}
                fill={step.color}
                strokeWidth={0}
                className="step-deliverable-dot"
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Accent line */}
      <div className="step-detail-accent" style={{ background: step.color }} />
    </div>
  );
}

export default function ProcessPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const activeStep = steps[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="process"
      className={`process-section ${isVisible ? 'visible' : ''}`}
    >
      {/* Decorative elements */}
      <div className="process-deco-1" />
      <div className="process-deco-2" />

      <div className="process-container">
        {/* Header */}
        <div className="process-header">
          <span className="label-tag mb-4 inline-flex">
            <span className="label-dot" />
            How We Work
          </span>
          <h2 className="process-main-title" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="block text-[#0D0D0D]">A Proven Path</span>
            <span className="block text-[#BDBBB6]">To Success</span>
          </h2>
        </div>

        {/* Horizontal flow steps */}
        <div className="process-flow">
          {steps.map((step, index) => (
            <StepCard
              key={step.id}
              step={step}
              index={index}
              isActive={activeIndex === index}
              isCompleted={false}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>

        {/* Active step detail */}
        <div className="process-detail-wrap">
          <StepDetail step={activeStep} />
        </div>

        {/* Bottom stats */}
        {/* <div className="process-bottom-stats">
          <div className="process-stat-item">
            <div className="process-stat-value" style={{ fontFamily: 'Syne, sans-serif' }}>5</div>
            <div className="process-stat-label">Defined Phases</div>
          </div>
          <div className="process-stat-divider" />
          <div className="process-stat-item">
            <div className="process-stat-value" style={{ fontFamily: 'Syne, sans-serif' }}>8-14</div>
            <div className="process-stat-label">Weeks Average</div>
          </div>
          <div className="process-stat-divider" />
          <div className="process-stat-item">
            <div className="process-stat-value" style={{ fontFamily: 'Syne, sans-serif' }}>200+</div>
            <div className="process-stat-label">Projects Delivered</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
