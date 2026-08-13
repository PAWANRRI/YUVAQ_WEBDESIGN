import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Services: [
    { label: "Website Designing", to: "/services" },
    { label: "Website Development", to: "/services" },
    { label: "E-Commerce Solutions", to: "/services" },
    { label: "Mobile App Development", to: "/services" },
    { label: "UI/UX Design", to: "/services" },
    { label: "SEO & Digital Growth", to: "/services" },
  ],

  Company: [
    { label: "About YuvaQ", to: "/about" },
    { label: "Our Work", to: "/all-projects" },
    // { label: "Industries", to: "/industries" },
    { label: "Process", to: "/process" },
    { label: "Careers", to: "/careers" },
    { label: "Contact Us", to: "/contact" },
  ],

  Support: [
    { label: "Project Consultation", to: "/contact" },
    { label: "Maintenance & Support", to: "/contact" },
    // { label: "FAQ", to: "/faq" },
    // { label: "Privacy Policy", to: "/privacy-policy" },
    // { label: "Terms of Service", to: "/terms-of-service" },
    { label: "Get a Quote", to: "/contact" },
  ],
};

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/",
    label: "GitHub",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden border-t border-white/10 bg-[#050505]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">

        {/* Top content */}
        <div className="grid grid-cols-1 gap-14 py-4 sm:py-8 lg:grid-cols-[1.45fr_0.8fr_0.8fr_0.8fr] lg:gap-16">

          {/* Company Info */}
          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
              <span className="h-2 w-2 rounded-full bg-[#00E87A]" />
              YuvaQ Software Solutions
            </div>

            <h2
              className="max-w-lg text-3xl leading-tight text-white sm:text-4xl lg:text-[46px]"
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 700,
              }}
            >
              We build what you like
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/55 sm:text-[15px]">
              We build premium websites, scalable software, and digital
              experiences that help brands grow faster and look stronger online.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-white/55 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          {Object.entries(footerLinks).map(([group, items]) => (
            <div key={group}>
              <div className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
                {group}
              </div>

              <ul className="space-y-3.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logo Strip */}
        <div className="relative h-[170px] overflow-hidden sm:h-[220px] lg:h-[300px]">
          <img
            src="/yuvaQ-02.png"
            alt="YuvaQ logo"
            className="pointer-events-none absolute left-1/2 top-1/2 w-[520px] max-w-none -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.08] sm:w-[820px] lg:w-[1250px] xl:w-[1500px]"
          />

          {/* Bottom Bar */}
          <div className="absolute inset-x-0 bottom-0">
            <div className="flex flex-col gap-4 border-t border-white/10 bg-gradient-to-t from-[#050505]/95 via-[#050505]/80 to-transparent py-6 backdrop-blur-[2px] sm:flex-row sm:items-center sm:justify-between">

              <p className="text-xs text-white/35">
                © {new Date().getFullYear()} YuvaQ. All rights reserved.
              </p>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#00E87A]" />

                <span className="text-xs text-white/45">
                  Available for website and software projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}