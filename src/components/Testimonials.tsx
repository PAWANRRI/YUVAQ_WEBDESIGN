const companyStickers = [
  { name: 'Sunil Industries', logo: './sunil_logo.png' },
  { name: 'RR ISPAT', logo: './rrispat_Logo.jpg' },
  { name: 'Bhawani', logo: './Bhawani_logo.jpg' },
  { name: 'Shubham Steels', logo: './shubham_logo.png' },
  { name: 'See Change', logo: './Seechange_logo.png' },
  { name: 'kalpavraksh', logo: './Kalpa_logo.png' },
  { name: 'Hira', logo: './hira-logo.png' },
  { name: 'dani', logo: './dani.jpg' },
  // { name: 'Utkarsh', logo: '/company-logos/utkarsh.png' },
  // { name: 'Dukes', logo: '/company-logos/dukes.png' },
  // { name: 'Eat Better', logo: '/company-logos/eat-better.png' },
  // { name: 'Featherlite', logo: '/company-logos/featherlite.png' },
  // { name: 'Futuristic', logo: '/company-logos/futuristic.png' },
  // { name: 'GIVA', logo: '/company-logos/giva.png' },
  // { name: 'Signode', logo: '/company-logos/signode.png' },
  // { name: 'Swani Spice', logo: '/company-logos/swani-spice.png' },
  // { name: 'Synergy', logo: '/company-logos/synergy.png' },
  // { name: 'Tirupati', logo: '/company-logos/tirupati.png' },
];

export default function Testimonials() {
  return (
    <section className="py-24 max-w-[1440px] mx-auto px-8 lg:px-16">
      <div className="mb-20">
        <span className="section-num block mb-4">07 / Testimonials</span>
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
          Clients Who<br />
          <span style={{ color: '#A8A8A0' }}>Trust Our Work</span>
        </h2>
      </div>

      <div className="bg-[#D4D3CF]">
        <div className="relative bg-[#EDECE8] py-10 overflow-hidden animate-on-scroll">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#EDECE8] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#EDECE8] to-transparent" />

          <div className="flex w-max gap-6 marquee-left">
            {[...companyStickers, ...companyStickers].map((company, i) => (
              <div
                key={`${company.name}-${i}`}
                className="h-[118px] w-[220px] shrink-0 rounded-2xl bg-white px-8 flex items-center justify-center shadow-sm border border-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="max-h-[70px] max-w-[160px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
       <div className="mt-px bg-[#D4D3CF]">
        <div className="bg-[#EDECE8] py-8 overflow-hidden">
          <div className="flex whitespace-nowrap marquee-reverse">
            {['Trusted by 12+ Companies', 'Rated 5 Stars on Clutch', '15+ Projects Delivered', 'Trusted by 15+ Companies', 'Rated 5 Stars on Clutch', '15+ Projects Delivered'].map((text, i) => (
              <span key={i} className="inline-flex items-center gap-6 px-10 text-sm font-medium tracking-widest uppercase text-[#6B6B6B]">
                {text}
                <span style={{ color: '#00E87A' }}>★</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}