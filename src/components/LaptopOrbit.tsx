import type { CSSProperties } from 'react';

const ORBIT_RADIUS = 205;
const DURATION = 14;
const NUM_ICONS = 6;
const LOGO_SRC = '/yuvaQ-01.png';

function ReactIcon() {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
      <ellipse cx="16" cy="16" rx="14" ry="5.5" stroke="#61DAFB" strokeWidth="2" />
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="5.5"
        stroke="#61DAFB"
        strokeWidth="2"
        transform="rotate(60 16 16)"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="14"
        ry="5.5"
        stroke="#61DAFB"
        strokeWidth="2"
        transform="rotate(120 16 16)"
      />
      <circle cx="16" cy="16" r="2.5" fill="#61DAFB" />
    </svg>
  );
}

function FigmaIcon() {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
      <rect x="8" y="4" width="8" height="8" rx="4" fill="#FF7262" />
      <rect x="16" y="4" width="8" height="8" rx="4" fill="#1ABCFE" />
      <rect x="8" y="12" width="8" height="8" rx="2" fill="#A259FF" />
      <rect x="8" y="20" width="8" height="8" rx="4" fill="#0ACF83" />
      <circle cx="20" cy="16" r="4" fill="#FF9940" />
    </svg>
  );
}

function NodeIcon() {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
      <path d="M16 3L28 10V22L16 29L4 22V10L16 3Z" fill="#339933" />
      <path
        d="M16 3L28 10V22L16 29L4 22V10L16 3Z"
        fill="none"
        stroke="#339933"
        strokeWidth="1.5"
      />
      <text
        x="10"
        y="20"
        fontSize="9"
        fill="white"
        fontFamily="monospace"
        fontWeight="bold"
      >
        JS
      </text>
    </svg>
  );
}

function TailwindIcon() {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
      <path
        d="M9 13c1-4 3.5-6 7-6 5.5 0 6 3.5 8.5 4.5-2.5.5-4.5-.5-7.5-.5-3.5 0-6 2-8 2z"
        fill="#06B6D4"
      />
      <path
        d="M5 19c1-4 3.5-6 7-6 5.5 0 6 3.5 8.5 4.5-2.5.5-4.5-.5-7.5-.5-3.5 0-6 2-8 2z"
        fill="#06B6D4"
        opacity="0.7"
      />
    </svg>
  );
}

function TSIcon() {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
      <rect x="3" y="3" width="26" height="26" rx="3" fill="#3178C6" />
      <text
        x="5.5"
        y="22"
        fontSize="12"
        fill="white"
        fontFamily="monospace"
        fontWeight="bold"
      >
        TS
      </text>
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 32 32" width="22" height="22" fill="none">
      <circle cx="16" cy="16" r="13" fill="#000" />
      <path d="M11 22V10l14 14H11z" fill="white" />
      <path d="M11 10h3v7l-3-3V10z" fill="white" />
    </svg>
  );
}

const ICONS = [
  { label: 'React', bg: '#0D0D0D', Icon: ReactIcon },
  { label: 'Figma', bg: '#fff', Icon: FigmaIcon },
  { label: 'Node.js', bg: '#fff', Icon: NodeIcon },
  { label: 'Tailwind', bg: '#0D0D0D', Icon: TailwindIcon },
  { label: 'TypeScript', bg: '#fff', Icon: TSIcon },
  { label: 'Next.js', bg: '#fff', Icon: NextIcon },
];

function Laptop3D() {
  return (
    <div style={{ perspective: '1200px', perspectiveOrigin: '50% 35%' }}>
      <div
        className="laptop-float"
        style={{
          position: 'relative',
          width: '380px',
          transform: 'rotateX(10deg) rotateY(-14deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Screen / lid */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '255px',
            borderRadius: '22px',
            background: 'linear-gradient(180deg, #2f2f31 0%, #151517 100%)',
            padding: '12px',
            boxShadow:
              '0 20px 35px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.18)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '54px',
              height: '4px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.18)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: '14px',
              borderRadius: '10px',
              overflow: 'hidden',
              background: '#050505',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow:
                'inset 0 0 24px rgba(255,255,255,0.06), 0 0 28px rgba(80,140,255,0.10)',
            }}
          >
            <video
              src='./HeroVideo.mp4'
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(1.03) contrast(1.05) saturate(1.02)',
              }}
            />

            {/* soft center light */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'radial-gradient(circle at 50% 45%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.06) 22%, rgba(255,255,255,0.00) 60%)',
                pointerEvents: 'none',
                mixBlendMode: 'screen',
              }}
            />

            {/* subtle screen shine */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(120deg, transparent 0%, transparent 38%, rgba(255,255,255,0.12) 52%, transparent 66%, transparent 100%)',
                pointerEvents: 'none',
              }}
            />

            {/* slight dark edge for premium look */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.02) 25%, rgba(0,0,0,0.08) 100%)',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* glossy diagonal strips like reference */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '54%',
              width: '34px',
              height: '100%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))',
              transform: 'skewX(-38deg)',
              opacity: 0.28,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '80%',
              width: '26px',
              height: '100%',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))',
              transform: 'skewX(-38deg)',
              opacity: 0.2,
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* hinge */}
        <div
          style={{
            height: '8px',
            width: '100%',
            marginTop: '2px',
            borderRadius: '0 0 10px 10px',
            background: 'linear-gradient(180deg, #58585a 0%, #29292b 100%)',
            boxShadow: '0 3px 8px rgba(0,0,0,0.25)',
          }}
        />

        {/* base */}
        {/* <div
          style={{
            position: 'relative',
            width: '440px',
            marginLeft: '-30px',
            marginTop: '4px',
            height: '122px',
            borderRadius: '0 0 18px 18px',
            background: 'linear-gradient(180deg, #b7b7b9 0%, #8f8f91 100%)',
            boxShadow:
              '0 20px 35px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.55)',
            overflow: 'hidden',
          }}
        > */}
        {/* top deck */}
        {/* <div
            style={{
              position: 'absolute',
              inset: '0 0 22px 0',
              background: 'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(0,0,0,0.04))',
            }}
          /> */}

        {/* keyboard area */}
        {/* <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '38px',
              right: '38px',
              height: '52px',
              borderRadius: '4px',
              display: 'grid',
              gridTemplateColumns: 'repeat(14, 1fr)',
              gap: '3px',
              opacity: 0.85,
            }}
          >
            {Array.from({ length: 70 }).map((_, i) => (
              <div
                key={i}
                style={{
                  height: '10px',
                  borderRadius: '1px',
                  background: 'rgba(58,58,60,0.6)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                }}
              />
            ))}
          </div> */}

        {/* trackpad */}
        {/* <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '26px',
              width: '128px',
              height: '26px',
              borderRadius: '2px',
              background: 'rgba(90,90,92,0.22)',
              boxShadow: 'inset 0 1px 1px rgba(0,0,0,0.18)',
            }}
          /> */}

        {/* front notch */}
        {/* <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '12px',
              width: '104px',
              height: '9px',
              borderRadius: '0 0 8px 8px',
              background: 'rgba(70,70,72,0.55)',
            }}
          /> */}

        {/* side speaker hint */}
        {/* <div
            style={{
              position: 'absolute',
              left: '14px',
              bottom: '18px',
              width: '22px',
              height: '16px',
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '2px',
              opacity: 0.55,
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                style={{
                  width: '2px',
                  height: '6px',
                  borderRadius: '1px',
                  background: 'rgba(35,35,37,0.5)',
                }}
              />
            ))}
          </div> */}

        {/* front lower shadow */}
        {/* <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              height: '20px',
              background: 'linear-gradient(180deg, rgba(0,0,0,0), rgba(0,0,0,0.18))',
            }}
          /> */}
        {/* </div> */}

        {/* floor shadow */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%) translateZ(-1px)',
            bottom: '-16px',
            width: '430px',
            height: '22px',
            borderRadius: '50%',
            background: 'rgba(0,0,0,0.16)',
            filter: 'blur(10px)',
          }}
        />
      </div>
    </div>
  );
}

export default function LaptopOrbit() {
  const SIZE = 560;
  const CENTER = SIZE / 2;

  return (
    <div style={{ width: `${SIZE}px`, height: `${SIZE}px`, position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          inset: '30px',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, transparent 55%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      <svg
        className="orbit-ring-spin"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        fill="none"
      >
        <circle
          cx={CENTER}
          cy={CENTER}
          r={ORBIT_RADIUS}
          stroke="rgba(100,100,100,0.35)"
          strokeWidth="1.5"
          strokeDasharray="4 10"
          strokeLinecap="round"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r={ORBIT_RADIUS - 28}
          stroke="rgba(0,96,255,0.08)"
          strokeWidth="1"
          strokeDasharray="2 14"
        />
      </svg>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -44%)',
        }}
      >
        <Laptop3D />
      </div>

      {ICONS.map((icon, i) => {
        const delay = -((i / NUM_ICONS) * DURATION);

        return (
          <div
            key={icon.label}
            className="orbit-icon"
            style={
              {
                position: 'absolute',
                top: '50%',
                left: '50%',
                marginTop: '-20px',
                marginLeft: '-20px',
                animationDelay: `${delay}s`,
                '--orbit-radius': `${ORBIT_RADIUS}px`,
              } as CSSProperties
            }
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: icon.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow:
                  '0 4px 16px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.08)',
                backdropFilter: 'blur(4px)',
              }}
            >
              <icon.Icon />
            </div>
          </div>
        );
      })}
    </div>
  );
}