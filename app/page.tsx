import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageCurtain from './components/PageCurtain';
import HeroCanvas from './components/HeroCanvas';
import ScrollReveal from './components/ScrollReveal';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kapadoccia Lagos — Lagos' First Cave Restaurant",
  description: "Turkish-Nigerian fusion cuisine in an underground world of stone, fire, and flavour. Visit us at 16 Idowu Taylor Street, Victoria Island, Lagos.",
};

const reviews = [
  {
    text: "The most extraordinary dining experience I've ever had in Lagos. Walking through a waterfall into a cave — I still can't believe this exists.",
    reviewer: "Adaeze O.",
    initials: "AO",
  },
  {
    text: "The lamb shank melted off the bone. The cave ambience is absolutely stunning. Brought my girlfriend here for her birthday — she cried happy tears.",
    reviewer: "Chukwuemeka N.",
    initials: "CN",
  },
  {
    text: "Took international clients here, they were speechless. The Turkish-Nigerian fusion concept is genius. The cocktails are works of art.",
    reviewer: "Funmi A.",
    initials: "FA",
  },
];

const featuredDishes = [
  {
    name: 'Slow-Roasted Lamb Shank',
    price: '₦38,000',
    desc: 'Tender, fall-off-the-bone lamb braised in Turkish spices and red wine reduction.',
    gradient: 'linear-gradient(160deg, #3D1F0A 0%, #1A0D05 40%, #2C1810 70%, #4A2810 100%)',
  },
  {
    name: 'Mixed Kebab Plate',
    price: '₦28,500',
    desc: 'An assortment of charcoal-grilled lamb, chicken, and kofta with saffron rice.',
    gradient: 'linear-gradient(145deg, #2A1A08 0%, #1C120A 35%, #3A2415 65%, #1A1008 100%)',
  },
  {
    name: 'Kapadoccia Jollof',
    price: '₦18,000',
    desc: 'Our signature party jollof, slow-cooked on stone over open flame with sumac butter.',
    gradient: 'linear-gradient(155deg, #3D1208 0%, #1A0804 40%, #4A1A10 70%, #2C1008 100%)',
  },
  {
    name: 'Cappadocia Sunset',
    price: '₦8,500',
    desc: 'Passion fruit, hibiscus, champagne, and rose water — served in cave crystal glass.',
    gradient: 'linear-gradient(150deg, #2A1520 0%, #1A0C14 35%, #38202A 65%, #250F18 100%)',
  },
];

export default function HomePage() {
  return (
    <>
      <PageCurtain />
      <Navbar />

      {/* ===== HERO ===== */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 30% 60%, #2C1A08 0%, #0F0C09 50%, #080706 100%)',
      }}>
        <HeroCanvas />

        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 24px',
          maxWidth: 900,
        }}>
          {/* Label */}
          <div className="hero-label" style={{
            justifyContent: 'center',
            marginBottom: 32,
            animation: 'fadeUp 0.7s ease 0.2s both',
          }}>
            Victoria Island · Lagos
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontWeight: 300,
            lineHeight: 0.92,
            color: 'var(--parchment)',
            margin: '0 0 28px',
          }}>
            <span style={{
              display: 'block',
              fontSize: 'clamp(52px, 9vw, 96px)',
              animation: 'fadeUp 0.7s ease 0.4s both',
            }}>
              Lagos&apos; First &amp;
            </span>
            <span style={{
              display: 'block',
              fontSize: 'clamp(52px, 9vw, 96px)',
              fontStyle: 'italic',
              color: 'var(--gold)',
              animation: 'fadeUp 0.7s ease 0.55s both',
            }}>
              Only Cave
            </span>
            <span style={{
              display: 'block',
              fontSize: 'clamp(52px, 9vw, 96px)',
              animation: 'fadeUp 0.7s ease 0.7s both',
            }}>
              Restaurant
            </span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: 16,
            color: 'var(--parchment-dim)',
            maxWidth: 460,
            margin: '0 auto 40px',
            lineHeight: 1.7,
            animation: 'fadeUp 0.7s ease 0.9s both',
          }}>
            Turkish-Nigerian fusion cuisine in an underground world of stone, fire, and flavour.
          </p>

          {/* CTAs — CSS hover classes, no event handlers */}
          <div style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
            animation: 'fadeUp 0.7s ease 1.1s both',
          }}>
            <Link href="/reservations" className="btn-gold">
              Reserve a Table
            </Link>
            <Link href="/menu" className="btn-outline">
              View Menu
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          animation: 'fadeIn 1s ease 1.5s both',
        }}>
          <div style={{
            width: 1,
            height: 40,
            background: 'var(--gold-dim)',
            animation: 'pulse 2s ease-in-out infinite',
          }} />
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
            <path d="M1 1L6 6L11 1" stroke="var(--gold-dim)" strokeWidth="1.5" />
          </svg>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section style={{
        background: 'var(--cave-2)',
        borderTop: '1px solid rgba(191,160,106,0.1)',
        borderBottom: '1px solid rgba(191,160,106,0.1)',
        padding: '48px 48px',
      }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 32,
        }}>
          {[
            { value: '4.4★', label: 'Google Rating' },
            { value: '744+', label: 'Reviews' },
            { value: '84K', label: 'Instagram Followers' },
            { value: '11AM–11PM', label: 'Open Daily' },
          ].map((stat, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ textAlign: 'center', padding: '0 48px' }}>
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: 42,
                  color: 'var(--gold)',
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: 11,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--parchment-ghost)',
                }}>
                  {stat.label}
                </div>
              </div>
              {i < 3 && <div className="stat-divider" />}
            </div>
          ))}
        </div>
      </section>

      {/* ===== OCCASIONS ===== */}
      <section style={{ background: 'var(--cave-1)', padding: '120px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label">Perfect For</div>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(40px, 5vw, 64px)',
              fontWeight: 400,
              color: 'var(--parchment)',
              margin: 0,
              lineHeight: 1.1,
            }}>
              Every <em style={{ color: 'var(--gold)' }}>Occasion</em>
            </h2>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }} className="occasions-grid">
            {[
              {
                title: 'Date Nights',
                desc: "Candlelit stone arches, the sound of a waterfall at the entrance, and an atmosphere unlike anywhere else in Lagos. Kapadoccia sets the scene for romance you'll both remember forever.",
              },
              {
                title: 'Birthdays & Proposals',
                desc: "We've hosted unforgettable proposals and spectacular birthday dinners. Let our team prepare a bespoke table setup — flowers, candles, and a personalised experience from start to finish.",
              },
              {
                title: 'Group Dining',
                desc: 'From intimate dinner parties to corporate events for 50+, our cave dining rooms offer complete privacy and full AV support. Every group event is handled by a dedicated host.',
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="occasion-card">
                  <div style={{ width: 40, height: 1, background: 'var(--gold)', marginBottom: 28 }} />
                  <h3 style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: 26,
                    color: 'var(--parchment)',
                    marginBottom: 16,
                    fontWeight: 400,
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: 14,
                    color: 'var(--parchment-dim)',
                    lineHeight: 1.8,
                    marginBottom: 28,
                  }}>
                    {card.desc}
                  </p>
                  <Link href="/reservations" className="link-gold">
                    Make a reservation →
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.occasions-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ===== FEATURED MENU ===== */}
      <section style={{ background: 'var(--cave-2)', padding: '120px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: 64,
              flexWrap: 'wrap',
              gap: 20,
            }}>
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  color: 'var(--gold-dim)',
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: 11,
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                }}>
                  <span style={{ width: 40, height: 1, background: 'var(--gold-dim)', display: 'inline-block' }} />
                  Signature Dishes
                </div>
                <h2 style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: 'clamp(36px, 4vw, 56px)',
                  fontWeight: 400,
                  color: 'var(--parchment)',
                  margin: 0,
                  lineHeight: 1.1,
                }}>
                  A Taste of the <em style={{ color: 'var(--gold)' }}>Cave</em>
                </h2>
              </div>
              <Link href="/menu" className="link-gold" style={{ paddingBottom: 8 }}>
                View Full Menu →
              </Link>
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
          }} className="dish-grid">
            {featuredDishes.map((dish, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="dish-card">
                  <div className="dish-gradient" style={{ height: 150, background: dish.gradient }} />
                  <div style={{ padding: '24px 20px' }}>
                    <h3 style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: 20,
                      color: 'var(--parchment)',
                      marginBottom: 4,
                      fontWeight: 400,
                      lineHeight: 1.2,
                    }}>
                      {dish.name}
                    </h3>
                    <div style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: 18,
                      color: 'var(--gold)',
                      marginBottom: 12,
                    }}>
                      {dish.price}
                    </div>
                    <p style={{
                      fontFamily: '"DM Sans", system-ui, sans-serif',
                      fontSize: 13,
                      color: 'var(--parchment-dim)',
                      lineHeight: 1.7,
                      margin: 0,
                    }}>
                      {dish.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`
          @media(max-width:900px){.dish-grid{grid-template-columns:repeat(2,1fr)!important}}
          @media(max-width:540px){.dish-grid{grid-template-columns:1fr!important}}
        `}</style>
      </section>

      {/* ===== REVIEWS ===== */}
      <section style={{ background: 'var(--cave-1)', padding: '120px 48px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: 72 }}>
              <div style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: 80,
                color: 'var(--gold)',
                lineHeight: 1,
                marginBottom: 8,
              }}>
                4.4
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 12 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: 'var(--gold)', fontSize: 18 }}>★</span>
                ))}
              </div>
              <p style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: 13,
                color: 'var(--parchment-ghost)',
              }}>
                from 744 verified Google reviews
              </p>
            </div>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
          }} className="reviews-grid">
            {reviews.map((review, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="review-card">
                  <div style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: 80,
                    color: 'rgba(191,160,106,0.2)',
                    lineHeight: 0.6,
                    marginBottom: 16,
                    userSelect: 'none',
                  }}>
                    &ldquo;
                  </div>
                  <p style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: 18,
                    fontStyle: 'italic',
                    color: 'var(--parchment-dim)',
                    lineHeight: 1.7,
                    marginBottom: 24,
                  }}>
                    {review.text}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: 'var(--cave-4)',
                      border: '1px solid rgba(191,160,106,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: 14,
                      color: 'var(--gold)',
                      fontWeight: 500,
                    }}>
                      {review.initials}
                    </div>
                    <div style={{
                      fontFamily: '"DM Sans", system-ui, sans-serif',
                      fontSize: 13,
                      color: 'var(--parchment)',
                    }}>
                      {review.reviewer}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.reviews-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-pattern" style={{
        background: 'var(--cave-3)',
        padding: '120px 48px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 700, margin: '0 auto' }}>
          <ScrollReveal>
            <h2 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400,
              color: 'var(--parchment)',
              marginBottom: 20,
              lineHeight: 1.1,
            }}>
              Reserve Your Cave Experience
            </h2>
            <p style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: 14,
              color: 'var(--parchment-dim)',
              marginBottom: 48,
              letterSpacing: '0.05em',
            }}>
              Open daily 11AM to 11PM · Victoria Island, Lagos
            </p>
            <Link href="/reservations" className="btn-gold-lg">
              Book a Table
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
