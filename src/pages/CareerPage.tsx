import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseIcon,
  Code2,
  Coffee,
  HeartHandshake,
  Lightbulb,
  Rocket,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Think Beyond Tasks",
    description:
      "We value people who understand the problem before jumping into implementation.",
    accent: "#F59E0B",
  },
  {
    icon: Code2,
    title: "Build With Quality",
    description:
      "Clean code, thoughtful interfaces, scalable systems, and attention to detail matter to us.",
    accent: "#0060FF",
  },
  {
    icon: Users,
    title: "Work Together",
    description:
      "Good products come from clear communication, shared ownership, and collaborative problem solving.",
    accent: "#00E87A",
  },
  {
    icon: Rocket,
    title: "Keep Growing",
    description:
      "Technology changes quickly. We encourage experimentation, learning, and continuous improvement.",
    accent: "#FF4F17",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Real Projects",
    description:
      "Work on actual business problems across websites, software platforms, dashboards, mobile apps, and automation.",
  },
  {
    icon: Sparkles,
    title: "Creative Freedom",
    description:
      "We appreciate better ideas. If you see a smarter way to build something, we want to hear it.",
  },
  {
    icon: HeartHandshake,
    title: "Ownership",
    description:
      "You are encouraged to understand the product, contribute ideas, and take responsibility for your work.",
  },
  {
    icon: Coffee,
    title: "Human Work Culture",
    description:
      "We believe productive teams need communication, flexibility, respect, and enough room to think.",
  },
];

const areas = [
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Mobile App Development",
  "UI/UX Design",
  "DevOps & Cloud",
  "Quality Assurance",
  "Product Management",
  "Digital Marketing",
  "Business Development",
];

export default function CareerPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, []);

  return (
    <main className="overflow-hidden bg-[#EDECE8] text-[#0D0D0D]">
      {/* Hero */}
      <section className="relative min-h-[90vh] overflow-hidden border-b border-[#D4D3CF] pt-28">
        <div className="absolute inset-0 grid-bg opacity-60" />

        <div className="absolute -right-32 top-20 h-[420px] w-[420px] rounded-full bg-[#00E87A]/20 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[#0060FF]/15 blur-[120px]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(90vh-7rem)] max-w-[1440px] items-center px-6 py-20 sm:px-8 lg:px-16">
          <div className="grid w-full gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4D3CF] bg-white/30 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B6B6B]">
                <span className="h-2 w-2 rounded-full bg-[#00E87A]" />
                Careers at YuvaQ
              </div>

              <h1
                className="mt-8 max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.07em]"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Build.
                <span className="block text-[#AAA9A4]">Learn.</span>
                <span className="block">Grow with us.</span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-[#666] sm:text-lg">
                We are building digital products for real businesses and real
                users. YuvaQ is a place for people who enjoy solving problems,
                experimenting with technology, and turning ideas into useful
                products.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center justify-center gap-3 bg-[#0D0D0D] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#00E87A] hover:text-black"
                >
                  Introduce Yourself
                  <ArrowRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/all-projects")}
                  className="inline-flex items-center justify-center gap-3 border border-[#C9C8C3] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white/50"
                >
                  See Our Work
                </button>
              </div>
            </div>

            {/* Right status card */}
            <div className="relative">
              <div className="absolute -right-8 -top-8 hidden h-24 w-24 rounded-full bg-[#FF4F17] sm:block" />
              <div className="absolute -bottom-8 -left-8 hidden h-28 w-28 bg-[#00E87A] sm:block" />

              <div className="relative border border-[#D4D3CF] bg-white/40 p-7 backdrop-blur-md sm:p-10 lg:p-12">
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00E87A]/15 text-[#00A959]">
                    <BriefcaseIcon size={25} />
                  </div>

                  <span className="rounded-full border border-[#D4D3CF] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#777]">
                    Hiring Status
                  </span>
                </div>

                <div className="mt-14">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#999]">
                    Current openings
                  </span>

                  <h2
                    className="mt-4 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    No open
                    <span className="block text-[#AAA9A4]">positions.</span>
                  </h2>

                  <p className="mt-6 leading-7 text-[#666]">
                    We do not have any active vacancies at the moment. But good
                    people are always worth knowing.
                  </p>

                  <div className="mt-8 border-t border-[#D4D3CF] pt-7">
                    <p className="text-sm leading-7 text-[#666]">
                      If you believe your skills can contribute to YuvaQ, send
                      us your introduction, portfolio, GitHub profile, or
                      resume. We can keep the conversation open for future
                      opportunities.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => navigate("/contact")}
                    className="mt-8 flex items-center gap-3 text-sm font-semibold"
                  >
                    Connect with YuvaQ
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#999]">
                WORK WITH US / 01
              </span>

              <h2
                className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                We care about how you think.
              </h2>
            </div>

            <div>
              <p className="text-lg leading-9 text-[#666]">
                Job titles tell only part of the story. We are interested in
                people who ask good questions, understand users, care about
                their craft, and can work through imperfect information.
              </p>

              <p className="mt-7 text-lg leading-9 text-[#666]">
                Whether you are an engineer, designer, product thinker, or
                someone working closer to customers, we value curiosity,
                ownership, and practical problem-solving.
              </p>

              <div className="mt-10 h-[3px] w-full bg-gradient-to-r from-[#00E87A] via-[#0060FF] to-[#FF4F17]" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
          <div className="grid border-l border-t border-[#D4D3CF] sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description, accent }) => (
              <article
                key={title}
                className="group min-h-[360px] border-b border-r border-[#D4D3CF] p-7 transition-colors duration-300 hover:bg-white/40 lg:p-8"
              >
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `${accent}15`,
                    color: accent,
                  }}
                >
                  <Icon size={23} />
                </div>

                <h3
                  className="mt-12 text-2xl font-bold tracking-[-0.04em]"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#6B6B6B]">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Dark section */}
      <section className="relative overflow-hidden bg-[#0D0D0D] py-24 text-white lg:py-32">
        <div className="absolute inset-0 grid-bg opacity-[0.07]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
          <div className="mb-14 max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
              THE EXPERIENCE / 02
            </span>

            <h2
              className="mt-5 text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              More than just completing tickets.
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="min-h-[290px] bg-[#0D0D0D] p-7 transition-colors hover:bg-white/[0.04] lg:p-8"
              >
                <Icon size={24} className="text-[#00E87A]" />

                <h3
                  className="mt-10 text-xl font-bold"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/50">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of interest */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#999]">
                FUTURE OPPORTUNITIES / 03
              </span>

              <h2
                className="mt-5 text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-5xl"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Skills we are interested in.
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-[#666]">
                These are not active vacancies. They represent areas in which
                YuvaQ may hire as the team and our projects grow.
              </p>
            </div>

            <div className="flex flex-wrap content-start gap-3">
              {areas.map((area, index) => (
                <div
                  key={area}
                  className="group flex items-center gap-4 border border-[#D4D3CF] bg-white/25 px-5 py-4 transition-all duration-300 hover:border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white"
                >
                  <span className="text-[10px] font-semibold text-[#AAA9A4]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* No openings */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16">
          <div className="relative overflow-hidden border border-[#D4D3CF] bg-[#00E87A] p-8 sm:p-12 lg:p-16">
            <div
              className="pointer-events-none absolute -bottom-20 right-0 text-[10rem] font-extrabold leading-none text-black/[0.05] sm:text-[15rem]"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              YQ
            </div>

            <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_0.6fr] lg:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                  No vacancy right now
                </span>

                <h2
                  className="mt-5 max-w-4xl text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-6xl"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  The right conversation does not need to wait for a job post.
                </h2>
              </div>

              <div>
                <p className="mb-7 leading-7 text-black/60">
                  Share what you do, what you have built, and why you would like
                  to work with YuvaQ. When a suitable opportunity comes up, we
                  would already know who you are.
                </p>

                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="inline-flex items-center gap-3 bg-[#0D0D0D] px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-transform duration-300 hover:-translate-y-1"
                >
                  Introduce Yourself
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