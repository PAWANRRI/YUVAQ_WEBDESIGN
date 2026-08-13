import { useEffect, useState} from 'react';
import type { FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  // Sparkles,
} from 'lucide-react';


// const projectTypes = [
//   'Website',
//   'Web App',
//   'Mobile App',
//   'Dashboard',
//   'Marketplace',
//   'Custom Software',
// ];

// const budgetOptions = [
//   'Below ₹50,000',
//   '₹50,000 - ₹1,00,000',
//   '₹1,00,000 - ₹3,00,000',
//   '₹3,00,000+',
// ];

const contactMethods = [
  {
    label: 'Email',
    value: 'connect@yuvaq.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '+91 87700 47163',
    icon: Phone,
  },
  {
    label: 'Location',
    value: 'Nagpur, Maharashtra (Remote globally)',
    icon: MapPin,
  },
  {
    label: 'Reply Time',
    value: 'Within 24 hours',
    icon: Clock,
  },
];

const delayClasses = ['delay-1', 'delay-2', 'delay-3', 'delay-4'];

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function useRevealAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      '.animate-on-scroll, .animate-slide-left, .animate-scale'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState('');


  useRevealAnimation();

   useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(false);
    setSubmitError('');

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setSubmitError('EmailJS configuration missing. Please check your .env file.');
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = String(formData.get('firstName') || '').trim();
    const lastName = String(formData.get('lastName') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const message = String(formData.get('message') || '').trim();

    const fullName = `${firstName} ${lastName}`.trim();

    const date = new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    }).format(new Date());

    const templateParams = {
      first_name: firstName,
      last_name: lastName,
      name: fullName,
      email,
      phone: phone || 'Not provided',
      project_details: message,
      message,
      date,
    };

    try {
      setSending(true);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setSubmitted(true);
      form.reset();

      window.setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('EmailJS send failed:', error);
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="bg-[#EDECE8] text-[#0D0D0D] overflow-hidden">
      {/* Contact Hero - Different from Services/About */}
      <section className="relative pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-70" />
        <div className="absolute right-[-100px] top-20 w-80 h-80 rounded-full bg-[#00E87A]/25 blur-3xl" />
        <div className="absolute left-[-120px] bottom-0 w-80 h-80 rounded-full bg-[#FF4F17]/15 blur-3xl" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-20 items-end">
            <div className="animate-slide-left">
              <span className="label-tag">
                <span className="label-dot" />
                Contact Yuvaq
              </span>

              <h1 className="font-display mt-8 text-[clamp(3.4rem,8vw,8.8rem)] leading-[0.88] tracking-[-0.07em] font-extrabold">
                Let’s make
                <span className="block text-[#A8A8A0]">something</span>
                <span className="block">useful.</span>
              </h1>
            </div>

            <div className="animate-on-scroll delay-2">
              <div className="border border-[#D4D3CF] bg-white/35 backdrop-blur-sm p-6 sm:p-8">
                <MessageCircle size={28} className="text-[#00E87A] mb-8" />

                <p className="text-[#6B6B6B] text-base sm:text-lg leading-8">
                  Share your idea, problem, or requirement. We will help you
                  understand what to build, how to build it, and what the first
                  version should include.
                </p>

                <div className="mt-8 rule-accent w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Area */}
      <section className="py-20 lg:py-28 border-t border-[#D4D3CF]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            {/* Left Panel */}
            <aside className="lg:sticky lg:top-28 animate-slide-left">
              <div className="border border-[#D4D3CF] bg-[#0D0D0D] text-white p-8 lg:p-10 overflow-hidden relative">
                <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-[#00E87A]/20 blur-3xl" />

                <div className="relative z-10">
                  <span className="label-tag text-white/60">
                    <span className="label-dot" />
                    Start Here
                  </span>

                  <h2 className="font-display mt-8 text-4xl lg:text-5xl font-extrabold tracking-[-0.06em] leading-[0.95]">
                    Tell us what you want to build.
                  </h2>

                  <p className="mt-6 text-white/60 leading-8">
                    You do not need a perfect document. Send a rough idea,
                    feature list, reference, or business problem.
                  </p>

                  <div className="mt-10 space-y-4">
                    {contactMethods.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="border border-white/10 bg-white/[0.04] p-4 flex items-center gap-4"
                        >
                          <div className="w-10 h-10 rounded-full bg-[#00E87A]/10 flex items-center justify-center">
                            <Icon size={17} className="text-[#00E87A]" />
                          </div>

                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm text-white/85">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* <div className="mt-6 border border-[#D4D3CF] bg-white/30 p-6">
                <div className="flex items-start gap-4">
                  <Sparkles size={22} className="text-[#FF4F17] shrink-0" />
                  <p className="text-sm leading-7 text-[#6B6B6B]">
                    Best way to start: tell us your goal, required features,
                    expected timeline, and any reference website/app you like.
                  </p>
                </div>
              </div> */}
            </aside>

            {/* Form Panel */}
            <div className="animate-on-scroll">
              <form
                onSubmit={handleSubmit}
                className="border border-[#D4D3CF] bg-white/35 backdrop-blur-sm p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-start justify-between gap-6 mb-10">
                  <div>
                    <span className="section-num">PROJECT FORM / 01</span>

                    <h2 className="font-display mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.06em] leading-[0.95]">
                      Send your project details.
                    </h2>
                  </div>

                  <div className="hidden sm:flex w-16 h-16 rounded-full bg-[#00E87A] items-center justify-center">
                    <Send size={24} />
                  </div>
                </div>

                {submitted && (
                  <div className="mb-8 border border-[#00E87A]/40 bg-[#00E87A]/10 p-4 flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-[#00E87A] shrink-0 mt-0.5"
                    />
                    <div>
                      <h3 className="font-display font-bold text-lg">
                        Message sent successfully
                      </h3>
                      <p className="text-sm text-[#6B6B6B] mt-1">
                        Thank you for contacting Yuvaq. We will get back to you
                        soon.
                      </p>
                    </div>
                  </div>
                )}

                {submitError && (
                  <div className="mb-8 border border-red-500/30 bg-red-500/10 p-4">
                    <p className="text-sm text-red-700">{submitError}</p>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#6B6B6B] mb-3">
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      required
                      placeholder="First name"
                      className="w-full h-14 bg-[#EDECE8] border border-[#D4D3CF] px-4 text-sm outline-none transition-colors duration-300 focus:border-[#0D0D0D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#6B6B6B] mb-3">
                      Last Name
                    </label>
                    <input
                      name="lastName"
                      type="text"
                      required
                      placeholder="Last name"
                      className="w-full h-14 bg-[#EDECE8] border border-[#D4D3CF] px-4 text-sm outline-none transition-colors duration-300 focus:border-[#0D0D0D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#6B6B6B] my-4">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    className="w-full h-14 bg-[#EDECE8] border border-[#D4D3CF] px-4 text-sm outline-none transition-colors duration-300 focus:border-[#0D0D0D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#6B6B6B] my-4">
                    Phone
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full h-14 bg-[#EDECE8] border border-[#D4D3CF] px-4 text-sm outline-none transition-colors duration-300 focus:border-[#0D0D0D]"
                  />
                </div>

                {/* <div>
                  <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#6B6B6B] mb-3">
                    Budget
                  </label>
                  <select
                    name="budget"
                    className="w-full h-14 bg-[#EDECE8] border border-[#D4D3CF] px-4 text-sm outline-none transition-colors duration-300 focus:border-[#0D0D0D]"
                  >
                    <option value="">Select budget</option>
                    {budgetOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div> */}

                {/* <div className="mt-8">
                  <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#6B6B6B] mb-4">
                    Project Type
                  </label>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {projectTypes.map((item, index) => (
                      <label
                        key={item}
                        className={`group relative border border-[#D4D3CF] bg-[#EDECE8] px-4 py-4 cursor-none transition-all duration-300 hover:border-[#0D0D0D] animate-on-scroll ${
                          delayClasses[index % delayClasses.length]
                        }`}
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={item}
                          required
                          className="peer sr-only"
                        />

                        <span className="text-sm font-medium text-[#0D0D0D] peer-checked:text-[#0D0D0D]">
                          {item}
                        </span>

                        <span className="absolute inset-0 border-2 border-transparent peer-checked:border-[#00E87A]" />
                      </label>
                    ))}
                  </div>
                </div> */}

                <div className="mt-8">
                  <label className="block text-xs font-semibold tracking-[0.18em] uppercase text-[#6B6B6B] mb-3">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={2}
                    placeholder="Tell us about your idea, features, timeline, target users, or problem..."
                    className="w-full resize-none bg-[#EDECE8] border border-[#D4D3CF] p-3 text-sm outline-none transition-colors duration-300 focus:border-[#0D0D0D]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-dark cursor-none mt-6 disabled:opacity-60 disabled:pointer-events-none"
                >
                  <span>{sending ? 'Sending...' : 'Send Message'}</span>
                  <ArrowRight size={16} className="relative z-10" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Strip */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-16">
          <div className="grid md:grid-cols-3 border-l border-t border-[#D4D3CF]">
            {[
              {
                title: 'Plan',
                text: 'We help define features, flow, scope, and the first version of your product.',
              },
              {
                title: 'Build',
                text: 'We develop frontend, backend, dashboards, APIs, and integrations.',
              },
              {
                title: 'Launch',
                text: 'We test, deploy, optimize, and help your product go live smoothly.',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`min-h-[260px] border-r border-b border-[#D4D3CF] p-8 lg:p-10 flex flex-col justify-between bg-[#EDECE8] hover:bg-white/35 transition-all duration-500 animate-on-scroll ${delayClasses[index]
                  }`}
              >
                <span className="font-display text-sm font-bold tracking-[0.22em] text-[#6B6B6B]">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="font-display text-3xl font-extrabold tracking-[-0.05em] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#6B6B6B] leading-7">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}