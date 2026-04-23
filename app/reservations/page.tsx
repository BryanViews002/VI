'use client';

import { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageCurtain from '../components/PageCurtain';
import Link from 'next/link';

type Step = 1 | 2 | 3;

interface FormData {
  date: string;
  time: string;
  partySize: string;
  name: string;
  phone: string;
  occasion: string;
  requests: string;
}

const timeSlots = [
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
  '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM',
  '9:00 PM', '10:00 PM',
];

const partySizes = ['1–2 guests', '3–4 guests', '5–8 guests', '9–15 guests', '16+ guests'];

const occasions = [
  'Birthday', 'Anniversary', 'Proposal', 'Date Night',
  'Corporate', 'Casual Dining', 'Other',
];

function CheckmarkSVG() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: '0 auto 32px', display: 'block' }}
    >
      <circle
        cx="40"
        cy="40"
        r="35"
        stroke="var(--gold)"
        strokeWidth="1.5"
        className="check-circle"
      />
      <path
        d="M24 40L35 51L56 29"
        stroke="var(--gold)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="check-path"
      />
    </svg>
  );
}

function ProgressBar({ step }: { step: Step }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      marginBottom: 48,
    }}>
      {[1, 2, 3].map((s) => (
        <div
          key={s}
          className={`progress-step ${step === s ? 'active' : step > s ? 'done' : ''}`}
        />
      ))}
      <div style={{
        marginLeft: 16,
        fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
        fontSize: 12,
        color: 'var(--parchment-ghost)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
      }}>
        Step {step} of 3
      </div>
    </div>
  );
}

function InputLabel({ children }: { children: React.ReactNode }) {
  return (
    <label style={{
      display: 'block',
      fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
      fontSize: 11,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--gold-dim)',
      marginBottom: 8,
    }}>
      {children}
    </label>
  );
}

export default function ReservationsPage() {
  const [step, setStep] = useState<Step>(1);
  const [animating, setAnimating] = useState(false);
  const [form, setForm] = useState<FormData>({
    date: '',
    time: '',
    partySize: '',
    name: '',
    phone: '',
    occasion: '',
    requests: '',
  });

  const stepRef = useRef<HTMLDivElement>(null);

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const goTo = (next: Step) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setStep(next);
      setAnimating(false);
    }, 380);
  };

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(191,160,106,0.2)',
    color: 'var(--parchment)',
    fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
    fontSize: 14,
    padding: '14px 18px',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s',
    appearance: 'none',
    WebkitAppearance: 'none',
  };

  return (
    <>
      <PageCurtain />
      <Navbar />

      <main style={{ minHeight: '100vh', background: 'var(--cave-1)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '45fr 55fr',
          minHeight: '100vh',
        }} className="reserve-grid">

          {/* ===== LEFT INFO PANEL ===== */}
          <div style={{
            background: 'var(--cave-2)',
            padding: '120px 64px 80px',
            borderRight: '1px solid rgba(191,160,106,0.1)',
            position: 'sticky',
            top: 0,
            height: '100vh',
            overflowY: 'auto',
          }} className="info-panel">
            <div style={{
              fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
              fontSize: 11,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--gold-dim)',
              marginBottom: 24,
            }}>
              Victoria Island · Lagos
            </div>

            <h1 style={{
              fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
              fontSize: 'clamp(36px, 4vw, 56px)',
              fontWeight: 300,
              color: 'var(--parchment)',
              lineHeight: 1.05,
              marginBottom: 24,
            }}>
              Reserve Your <em style={{ color: 'var(--gold)' }}>Table</em>
            </h1>

            <p style={{
              fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
              fontSize: 14,
              color: 'var(--parchment-dim)',
              lineHeight: 1.8,
              marginBottom: 48,
              maxWidth: 380,
            }}>
              Secure your place in Lagos&apos; most unforgettable dining experience.
              For same-day bookings, call us directly.
            </p>

            {/* Contact block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 48 }}>
              {[
                { label: 'Phone', lines: ['0908 845 1901', '0810 375 5674'] },
                { label: 'Address', lines: ['16 Idowu Taylor Street', 'Victoria Island, Lagos'] },
                { label: 'Hours', lines: ['11:00 AM – 11:00 PM', 'Open Daily'] },
              ].map((contact, i) => (
                <div key={i} style={{
                  borderLeft: '2px solid var(--gold-dim)',
                  paddingLeft: 20,
                }}>
                  <div style={{
                    fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                    fontSize: 10,
                    letterSpacing: '0.25em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-dim)',
                    marginBottom: 6,
                  }}>
                    {contact.label}
                  </div>
                  {contact.lines.map((line, j) => (
                    <div key={j} style={{
                      fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                      fontSize: 14,
                      color: 'var(--parchment-dim)',
                      lineHeight: 1.6,
                    }}>
                      {line}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Google Maps */}
            <div style={{
              border: '1px solid rgba(191,160,106,0.2)',
              overflow: 'hidden',
            }}>
              <iframe
                src="https://www.google.com/maps?q=16+Idowu+Taylor+Street+Victoria+Island+Lagos&output=embed"
                width="100%"
                height="220"
                style={{
                  border: 'none',
                  display: 'block',
                  filter: 'grayscale(0.5) sepia(0.2) brightness(0.8)',
                }}
                loading="lazy"
                title="Kapadoccia Lagos Location"
              />
            </div>
          </div>

          {/* ===== RIGHT FORM PANEL ===== */}
          <div style={{
            background: 'var(--cave-1)',
            padding: '120px 64px 80px',
          }} className="form-panel">
            <ProgressBar step={step} />

            <div
              ref={stepRef}
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateX(-40px)' : 'translateX(0)',
                transition: 'all 0.35s ease',
              }}
            >
              {/* ===== STEP 1 ===== */}
              {step === 1 && (
                <div>
                  <div style={{
                    fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                    fontSize: 11,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-dim)',
                    marginBottom: 12,
                  }}>
                    Step 1
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                    fontSize: 40,
                    fontWeight: 300,
                    color: 'var(--parchment)',
                    marginBottom: 40,
                    lineHeight: 1,
                  }}>
                    Pick Your <em style={{ color: 'var(--gold)' }}>Date</em>
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div>
                      <InputLabel>Date</InputLabel>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => update('date', e.target.value)}
                        style={{
                          ...inputStyle,
                          colorScheme: 'dark',
                        }}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div>
                      <InputLabel>Time</InputLabel>
                      <div style={{ position: 'relative' }}>
                        <select
                          value={form.time}
                          onChange={(e) => update('time', e.target.value)}
                          style={inputStyle}
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <div style={{
                          position: 'absolute',
                          right: 18,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none',
                          color: 'var(--gold-dim)',
                          fontSize: 10,
                        }}>▼</div>
                      </div>
                    </div>

                    <div>
                      <InputLabel>Party Size</InputLabel>
                      <div style={{ position: 'relative' }}>
                        <select
                          value={form.partySize}
                          onChange={(e) => update('partySize', e.target.value)}
                          style={inputStyle}
                        >
                          <option value="">Number of guests</option>
                          {partySizes.map((p) => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                        <div style={{
                          position: 'absolute',
                          right: 18,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none',
                          color: 'var(--gold-dim)',
                          fontSize: 10,
                        }}>▼</div>
                      </div>
                    </div>

                    <button
                      onClick={() => form.date && form.time && form.partySize && goTo(2)}
                      style={{
                        marginTop: 16,
                        background: form.date && form.time && form.partySize ? 'var(--gold)' : 'rgba(191,160,106,0.2)',
                        color: form.date && form.time && form.partySize ? 'var(--obsidian)' : 'var(--parchment-ghost)',
                        border: 'none',
                        fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        padding: '18px 40px',
                        cursor: form.date && form.time && form.partySize ? 'pointer' : 'not-allowed',
                        transition: 'all 0.3s',
                        alignSelf: 'flex-start',
                        width: '100%',
                      }}
                    >
                      Continue →
                    </button>
                  </div>
                </div>
              )}

              {/* ===== STEP 2 ===== */}
              {step === 2 && (
                <div>
                  <div style={{
                    fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                    fontSize: 11,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-dim)',
                    marginBottom: 12,
                  }}>
                    Step 2
                  </div>
                  <h2 style={{
                    fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                    fontSize: 40,
                    fontWeight: 300,
                    color: 'var(--parchment)',
                    marginBottom: 40,
                    lineHeight: 1,
                  }}>
                    Your <em style={{ color: 'var(--gold)' }}>Details</em>
                  </h2>

                  {/* Summary pill */}
                  <div style={{
                    background: 'rgba(191,160,106,0.06)',
                    border: '1px solid rgba(191,160,106,0.15)',
                    padding: '12px 20px',
                    marginBottom: 32,
                    display: 'flex',
                    gap: 24,
                    flexWrap: 'wrap',
                  }}>
                    {[form.date, form.time, form.partySize].map((val, i) => (
                      <div key={i} style={{
                        fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                        fontSize: 13,
                        color: 'var(--gold)',
                      }}>
                        {val}
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                    <div>
                      <InputLabel>Full Name</InputLabel>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <InputLabel>Phone Number</InputLabel>
                      <input
                        type="tel"
                        placeholder="e.g. 0801 234 5678"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <InputLabel>Occasion</InputLabel>
                      <div style={{ position: 'relative' }}>
                        <select
                          value={form.occasion}
                          onChange={(e) => update('occasion', e.target.value)}
                          style={inputStyle}
                        >
                          <option value="">Select occasion</option>
                          {occasions.map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </select>
                        <div style={{
                          position: 'absolute',
                          right: 18,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          pointerEvents: 'none',
                          color: 'var(--gold-dim)',
                          fontSize: 10,
                        }}>▼</div>
                      </div>
                    </div>

                    <div>
                      <InputLabel>Special Requests (optional)</InputLabel>
                      <textarea
                        placeholder="Dietary requirements, special decorations, accessibility needs..."
                        value={form.requests}
                        onChange={(e) => update('requests', e.target.value)}
                        rows={4}
                        style={{
                          ...inputStyle,
                          resize: 'vertical',
                          lineHeight: 1.6,
                        }}
                      />
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginTop: 8 }}>
                      <button
                        onClick={() => goTo(1)}
                        style={{
                          background: 'none',
                          border: 'none',
                          fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                          fontSize: 13,
                          color: 'var(--parchment-dim)',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          padding: 0,
                          textDecorationColor: 'rgba(156,142,120,0.4)',
                        }}
                      >
                        ← Back
                      </button>
                      <button
                        onClick={() => form.name && form.phone && goTo(3)}
                        style={{
                          flex: 1,
                          background: form.name && form.phone ? 'var(--gold)' : 'rgba(191,160,106,0.2)',
                          color: form.name && form.phone ? 'var(--obsidian)' : 'var(--parchment-ghost)',
                          border: 'none',
                          fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          padding: '18px 32px',
                          cursor: form.name && form.phone ? 'pointer' : 'not-allowed',
                          transition: 'all 0.3s',
                        }}
                      >
                        Confirm Reservation →
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* ===== STEP 3 CONFIRMATION ===== */}
              {step === 3 && (
                <div style={{ textAlign: 'center', paddingTop: 24 }}>
                  <CheckmarkSVG />

                  <h2 style={{
                    fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                    fontSize: 48,
                    fontWeight: 300,
                    color: 'var(--gold)',
                    marginBottom: 20,
                    lineHeight: 1,
                    animation: 'fadeUp 0.6s ease 0.4s both',
                    opacity: 0,
                  }}>
                    You&apos;re Reserved
                  </h2>

                  <p style={{
                    fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                    fontSize: 15,
                    color: 'var(--parchment-dim)',
                    lineHeight: 1.8,
                    maxWidth: 420,
                    margin: '0 auto 40px',
                    animation: 'fadeUp 0.6s ease 0.6s both',
                    opacity: 0,
                  }}>
                    Thank you <strong style={{ color: 'var(--parchment)' }}>{form.name}</strong>.
                    We&apos;ll call you within 30 minutes to confirm. We can&apos;t wait to host you.
                  </p>

                  {/* Booking details */}
                  <div style={{
                    background: 'rgba(191,160,106,0.05)',
                    border: '1px solid rgba(191,160,106,0.15)',
                    padding: '28px 32px',
                    marginBottom: 40,
                    display: 'inline-flex',
                    gap: 40,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    animation: 'fadeUp 0.6s ease 0.8s both',
                    opacity: 0,
                  }}>
                    {[
                      { label: 'Date', value: form.date },
                      { label: 'Time', value: form.time },
                      { label: 'Guests', value: form.partySize },
                      ...(form.occasion ? [{ label: 'Occasion', value: form.occasion }] : []),
                    ].map((item, i) => (
                      <div key={i} style={{ textAlign: 'left' }}>
                        <div style={{
                          fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                          fontSize: 10,
                          letterSpacing: '0.2em',
                          textTransform: 'uppercase',
                          color: 'var(--gold-dim)',
                          marginBottom: 4,
                        }}>
                          {item.label}
                        </div>
                        <div style={{
                          fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                          fontSize: 18,
                          color: 'var(--parchment)',
                        }}>
                          {item.value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    gap: 16,
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    animation: 'fadeUp 0.6s ease 1s both',
                    opacity: 0,
                  }}>
                    <Link
                      href="/menu"
                      style={{
                        background: 'var(--gold)',
                        color: 'var(--obsidian)',
                        fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        padding: '16px 40px',
                        textDecoration: 'none',
                        display: 'inline-block',
                        transition: 'background 0.3s',
                      }}
                    >
                      View Menu
                    </Link>
                    <button
                      onClick={() => {
                        setStep(1);
                        setForm({ date: '', time: '', partySize: '', name: '', phone: '', occasion: '', requests: '' });
                      }}
                      style={{
                        background: 'transparent',
                        color: 'var(--parchment-dim)',
                        border: '1px solid rgba(191,160,106,0.3)',
                        fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                        fontSize: 12,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        padding: '16px 32px',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                      }}
                    >
                      New Booking
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .reserve-grid { grid-template-columns: 1fr !important; }
          .info-panel { position: static !important; height: auto !important; padding: 80px 32px 48px !important; }
          .form-panel { padding: 48px 32px 80px !important; }
        }
      `}</style>
    </>
  );
}
