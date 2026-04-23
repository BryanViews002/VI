import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageCurtain from '../components/PageCurtain';
import ScrollReveal from '../components/ScrollReveal';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Story — Kapadoccia Lagos",
  description: "Learn how Kapadoccia Lagos was born — inspired by the ancient cave cities of Cappadocia, Turkey, built into the heart of Victoria Island.",
};

const STALACTITES_BOTTOM = Array.from({ length: 24 }, (_, i) => ({
  left: `${(i / 23) * 100}%`,
  height: Math.floor(Math.random() * 55 + 25),
  width: Math.floor(Math.random() * 16 + 8),
  delay: `${(Math.random() * 2).toFixed(2)}s`,
}));

const timeline = [
  {
    year: '2018',
    title: 'The Cappadocia Revelation',
    desc: 'Founder Karim Salami travels to Göreme, Turkey. Dining inside a cave carved into volcanic rock changes his understanding of what a restaurant can be. He photographs every detail.',
  },
  {
    year: '2020',
    title: 'The Victoria Island Discovery',
    desc: 'After two years of scouting Lagos, a 3,000 sq ft underground space on Idowu Taylor Street is found. The walls have natural stone — almost as if they were waiting.',
  },
  {
    year: '2022',
    title: 'The Build Begins',
    desc: 'A team of Turkish artisans fly to Lagos. Fourteen months of hand-carving stalactites, installing the waterfall arch, laying candlelit stone pathways. Every element is genuine.',
  },
  {
    year: '2023',
    title: 'Opening Night',
    desc: 'Kapadoccia opens to 200 guests on a Thursday evening in March. Within 72 hours, every table for the next month is reserved. A legend is born.',
  },
];

const pillars = [
  {
    num: '01',
    title: 'Ambience',
    desc: 'Realistic stalactites carved by hand. A live waterfall at the entrance. Candlelit stone archways. The cave is not a set — it is a world.',
  },
  {
    num: '02',
    title: 'Cuisine',
    desc: 'Turkish technique meets Nigerian soul. Every dish is a conversation between two culinary traditions, refined over years of testing and tasting.',
  },
  {
    num: '03',
    title: 'Service',
    desc: 'Hospitality trained at Istanbul\'s finest establishments. Your host knows the menu intimately and anticipates your needs before you voice them.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageCurtain />
      <Navbar />

      {/* ===== HERO ===== */}
      <section style={{
        height: '60vh',
        minHeight: 400,
        background: 'radial-gradient(ellipse at 50% 80%, #2C1A08 0%, #0F0C09 55%, #080706 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Stalactites at BOTTOM (floor of cave) */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
        }}>
          {STALACTITES_BOTTOM.map((s, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: s.left,
                bottom: 0,
                width: s.width,
                height: s.height,
                background: `linear-gradient(to top, var(--cave-4), var(--stone))`,
                clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)',
                animationDelay: s.delay,
              }}
            />
          ))}
        </div>

        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '80px 24px 80px',
        }}>
          <div style={{
            fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
            fontSize: 11,
            letterSpacing: '0.35em',
            textTransform: 'uppercase',
            color: 'var(--gold-dim)',
            marginBottom: 24,
            animation: 'fadeUp 0.7s ease 0.3s both',
          }}>
            Our Story
          </div>
          <h1 style={{
            fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
            fontSize: 'clamp(48px, 8vw, 80px)',
            fontWeight: 300,
            color: 'var(--parchment)',
            margin: 0,
            lineHeight: 1.05,
            animation: 'fadeUp 0.7s ease 0.5s both',
          }}>
            Born in the <em style={{ color: 'var(--gold)' }}>Stone</em>
          </h1>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section style={{
        background: 'var(--cave-1)',
        padding: '120px 48px',
      }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '55fr 45fr',
          gap: 80,
          alignItems: 'start',
        }} className="story-grid">
          {/* Left: Story Text */}
          <div>
            <ScrollReveal>
              <p style={{
                fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                fontSize: 22,
                fontStyle: 'italic',
                color: 'var(--gold)',
                lineHeight: 1.6,
                marginBottom: 32,
                borderLeft: '2px solid rgba(191,160,106,0.3)',
                paddingLeft: 24,
              }}>
                &ldquo;I stood inside a cave carved into volcanic rock in Göreme, eating lamb slow-roasted
                over an open fire, and I thought — Lagos deserves this.&rdquo;
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p style={{
                fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                fontSize: 15,
                color: 'var(--parchment-dim)',
                lineHeight: 1.9,
                marginBottom: 24,
              }}>
                Kapadoccia was born in the volcanic valleys of central Turkey, where
                ancient civilisations carved entire cities into soft tuff rock. The region — known
                to the world as Cappadocia — gave us cave hotels, underground churches, and some
                of the earth&apos;s most extraordinary spaces. For our founder, it was a revelation.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p style={{
                fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                fontSize: 15,
                color: 'var(--parchment-dim)',
                lineHeight: 1.9,
                marginBottom: 24,
              }}>
                Two years of searching Lagos led to a 3,000 square-foot underground space on
                Idowu Taylor Street, Victoria Island — a site with natural stone walls and
                cathedral ceilings that almost seemed destined. Turkish artisans flew in to hand-carve
                the stalactites, the stone archways, and the waterfall feature that now greets every guest
                at the entrance. Fourteen months of craft, and the cave came alive.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p style={{
                fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                fontSize: 15,
                color: 'var(--parchment-dim)',
                lineHeight: 1.9,
              }}>
                The cuisine reflects the same spirit of fusion. Turkish technique — the slow braise,
                the charcoal grill, the spice poetry of Anatolia — married to Nigerian flavour DNA.
                Jollof cooked over open flame. Lamb shank braised in zobo reduction. Puff puff elevated
                with Turkish molasses. It is the food of two cultures in conversation, served inside
                a space unlike anything Lagos has seen.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Stats */}
          <ScrollReveal delay={150}>
            <div className="shimmer-block" style={{
              background: 'var(--cave-3)',
              border: '1px solid rgba(191,160,106,0.15)',
              padding: 48,
            }}>
              {[
                { value: '4.4★', label: 'Google Rating', sublabel: 'from 744 reviews' },
                { value: '84K', label: 'Instagram Followers', sublabel: '@kapadoccia_lagos' },
                { value: '3,000', label: 'Square Feet', sublabel: 'of cave dining space' },
                { value: '14', label: 'Months', sublabel: 'to build the cave' },
              ].map((stat, i) => (
                <div key={i} style={{
                  paddingBottom: i < 3 ? 32 : 0,
                  marginBottom: i < 3 ? 32 : 0,
                  borderBottom: i < 3 ? '1px solid rgba(191,160,106,0.08)' : 'none',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                    fontSize: 48,
                    color: 'var(--gold)',
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>{stat.value}</div>
                  <div style={{
                    fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                    fontSize: 12,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--parchment-dim)',
                    marginBottom: 4,
                  }}>{stat.label}</div>
                  <div style={{
                    fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                    fontSize: 12,
                    color: 'var(--parchment-ghost)',
                  }}>{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .story-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* ===== TIMELINE ===== */}
      <section style={{
        background: 'var(--cave-2)',
        padding: '120px 48px',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <div className="section-label">The Journey</div>
              <h2 style={{
                fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontWeight: 400,
                color: 'var(--parchment)',
                margin: 0,
              }}>
                How We Got <em style={{ color: 'var(--gold)' }}>Here</em>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 1,
              background: 'linear-gradient(to bottom, transparent, var(--gold-dim) 20%, var(--gold-dim) 80%, transparent)',
              transform: 'translateX(-50%)',
            }} className="timeline-center-line" />

            {timeline.map((item, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div style={{
                  display: 'flex',
                  justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                  marginBottom: 64,
                  position: 'relative',
                }}>
                  {/* Timeline dot */}
                  <div style={{
                    position: 'absolute',
                    left: '50%',
                    top: 20,
                    transform: 'translateX(-50%)',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    border: '3px solid var(--cave-2)',
                    zIndex: 2,
                  }} />

                  <div style={{
                    width: '44%',
                    textAlign: i % 2 === 0 ? 'right' : 'left',
                    paddingRight: i % 2 === 0 ? 48 : 0,
                    paddingLeft: i % 2 === 0 ? 0 : 48,
                  }} className="timeline-item-content">
                    <div style={{
                      fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                      fontSize: 36,
                      color: 'var(--gold-dim)',
                      fontWeight: 300,
                      lineHeight: 1,
                      marginBottom: 8,
                    }}>{item.year}</div>
                    <div style={{
                      fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                      fontSize: 22,
                      color: 'var(--parchment)',
                      fontWeight: 400,
                      marginBottom: 12,
                    }}>{item.title}</div>
                    <p style={{
                      fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                      fontSize: 14,
                      color: 'var(--parchment-dim)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .timeline-center-line { display: none !important; }
            .timeline-item-content { width: 100% !important; text-align: left !important; padding: 0 !important; }
          }
        `}</style>
      </section>

      {/* ===== PILLARS ===== */}
      <section style={{
        background: 'var(--cave-1)',
        padding: '120px 48px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 64 }}>
              <div className="section-label">What We Stand For</div>
              <h2 style={{
                fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                fontSize: 'clamp(36px, 4vw, 56px)',
                fontWeight: 400,
                color: 'var(--parchment)',
                margin: 0,
              }}>
                Our Three <em style={{ color: 'var(--gold)' }}>Pillars</em>
              </h2>
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }} className="pillars-grid">
            {pillars.map((p, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div style={{
                  background: 'var(--cave-3)',
                  border: '1px solid rgba(191,160,106,0.1)',
                  padding: '40px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Watermark number */}
                  <div style={{
                    position: 'absolute',
                    top: -10,
                    right: 16,
                    fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                    fontSize: 80,
                    color: 'rgba(191,160,106,0.1)',
                    fontWeight: 700,
                    lineHeight: 1,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}>
                    {p.num}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                    fontSize: 28,
                    color: 'var(--parchment)',
                    fontWeight: 400,
                    marginBottom: 16,
                    position: 'relative',
                  }}>
                    {p.title}
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                    fontSize: 14,
                    color: 'var(--parchment-dim)',
                    lineHeight: 1.8,
                    margin: 0,
                    position: 'relative',
                  }}>
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .pillars-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <Footer />
    </>
  );
}
