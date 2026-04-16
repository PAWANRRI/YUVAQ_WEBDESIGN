import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, Mail, MapPin } from 'lucide-react';

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    budget: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const budgets = ['< ₹10K', '₹10K–₹50K', '₹50K–₹100K', '₹100K+'];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!form.budget) {
      setError('Please select a project budget.');
      return;
    }

    if (
      EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      setError('Please add your EmailJS credentials first.');
      return;
    }

    try {
      setSending(true);

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          budget: form.budget,
          message: form.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setSent(true);
      setForm({
        name: '',
        email: '',
        budget: '',
        message: '',
      });
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#0D0D0D] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="section-num block mb-6" style={{ color: '#4A4A4A' }}>
              08 / Contact
            </span>

            <h2
              className="animate-on-scroll text-white mb-8"
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(40px, 4.5vw, 72px)',
                lineHeight: '0.95',
                letterSpacing: '-0.03em',
              }}
            >
              Let's Build
              <br />
              <span style={{ color: '#4A4A4A' }}>Something</span>
              <br />
              Remarkable
            </h2>

            <p className="animate-on-scroll delay-2 text-[#4A4A4A] text-base leading-relaxed mb-16">
              Whether you have a full spec or just an idea — we'd love to hear it.
              Our team will get back to you within 24 hours.
            </p>

            <div className="space-y-8 animate-on-scroll delay-3">
              {[
                { icon: Mail, label: 'Email', value: 'connect@yuvaq.com' },
                { icon: MapPin, label: 'Office', value: 'Nagpur · Maharashtra, India' },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-12 h-12 border border-[#1A1A1A] flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-[#4A4A4A]" />
                    </div>
                    <div>
                      <div className="text-xs text-[#4A4A4A] uppercase tracking-widest mb-1">
                        {item.label}
                      </div>
                      <div className="text-white text-sm">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="animate-scale delay-2">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-[#00E87A] flex items-center justify-center mb-8">
                  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="#0D0D0D"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3
                  className="text-white text-3xl font-bold mb-4"
                  style={{ fontFamily: 'Syne, sans-serif' }}
                >
                  Message Sent!
                </h3>

                <p className="text-[#4A4A4A] text-sm leading-relaxed">
                  We'll review your project details and reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-[#4A4A4A] mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="John Doe"
                    className="w-full bg-transparent border border-[#1A1A1A] text-white placeholder-[#2A2A2A] px-5 py-4 text-sm focus:outline-none focus:border-[#00E87A] transition-colors duration-300 cursor-none"
                    style={{ cursor: 'none' }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-[#4A4A4A] mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="john@company.com"
                    className="w-full bg-transparent border border-[#1A1A1A] text-white placeholder-[#2A2A2A] px-5 py-4 text-sm focus:outline-none focus:border-[#00E87A] transition-colors duration-300 cursor-none"
                    style={{ cursor: 'none' }}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-[#4A4A4A] mb-3">
                    Project Budget
                  </label>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                        className={`py-3 px-2 text-xs font-medium tracking-wide border transition-colors duration-300 cursor-none ${
                          form.budget === b
                            ? 'border-[#00E87A] text-[#00E87A] bg-[#00E87A]/10'
                            : 'border-[#1A1A1A] text-[#4A4A4A] hover:border-[#2A2A2A]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-widest uppercase text-[#4A4A4A] mb-3">
                    Project Brief
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, message: e.target.value }))
                    }
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full bg-transparent border border-[#1A1A1A] text-white placeholder-[#2A2A2A] px-5 py-4 text-sm focus:outline-none focus:border-[#00E87A] transition-colors duration-300 resize-none cursor-none"
                    style={{ cursor: 'none' }}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-400 leading-relaxed">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-dark w-full justify-center cursor-none disabled:opacity-60 disabled:pointer-events-none"
                >
                  <span>{sending ? 'Sending...' : 'Send Project Brief'}</span>
                  {!sending && <ArrowRight size={16} className="relative z-10" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}