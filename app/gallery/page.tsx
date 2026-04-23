'use client';

import { useState, useEffect, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageCurtain from '../components/PageCurtain';
import ScrollReveal from '../components/ScrollReveal';

const galleryItems = [
  {
    label: 'Cave Entrance',
    height: 320,
    gradient: 'linear-gradient(160deg, #1A0D05 0%, #0D0804 30%, #2C1810 60%, #1A1008 100%)',
  },
  {
    label: 'The Main Dining Hall',
    height: 240,
    gradient: 'linear-gradient(145deg, #2A1A08 0%, #1C120A 35%, #3A2415 65%, #140E08 100%)',
  },
  {
    label: 'Stalactite Ceiling',
    height: 380,
    gradient: 'linear-gradient(170deg, #0F0C09 0%, #201C16 40%, #2C271F 70%, #0F0C09 100%)',
  },
  {
    label: 'Waterfall Arch',
    height: 260,
    gradient: 'linear-gradient(150deg, #0A1520 0%, #0D1A28 35%, #152235 65%, #0A1020 100%)',
  },
  {
    label: 'Date Night Setup',
    height: 300,
    gradient: 'linear-gradient(155deg, #2A1208 0%, #1C0C06 35%, #3A1A10 65%, #1A0A06 100%)',
  },
  {
    label: 'The Bar',
    height: 220,
    gradient: 'linear-gradient(160deg, #201008 0%, #140C06 30%, #2C1A10 60%, #160E08 100%)',
  },
  {
    label: 'Mezze Spread',
    height: 280,
    gradient: 'linear-gradient(145deg, #2C1A06 0%, #1E1206 30%, #3A2408 60%, #1C1206 100%)',
  },
  {
    label: 'Lamb Shank',
    height: 360,
    gradient: 'linear-gradient(165deg, #2A1008 0%, #1A0806 30%, #3C1810 60%, #1A0C06 100%)',
  },
  {
    label: 'Birthday Setup',
    height: 230,
    gradient: 'linear-gradient(150deg, #1A1020 0%, #120C18 35%, #241828 65%, #0E0A14 100%)',
  },
  {
    label: 'Outdoor Terrace',
    height: 310,
    gradient: 'linear-gradient(155deg, #0A1808 0%, #0C1C0A 35%, #142410 65%, #081408 100%)',
  },
  {
    label: 'Cocktail Hour',
    height: 250,
    gradient: 'linear-gradient(160deg, #20100A 0%, #160C08 30%, #2C1810 60%, #100806 100%)',
  },
  {
    label: 'Private Dining',
    height: 340,
    gradient: 'linear-gradient(145deg, #2C1A10 0%, #1E1208 35%, #382214 65%, #180E08 100%)',
  },
];

interface LightboxItem {
  label: string;
  gradient: string;
  index: number;
}

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [closeLightbox]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <>
      <PageCurtain />
      <Navbar />

      {/* ===== HEADER ===== */}
      <section style={{
        background: 'var(--cave-1)',
        paddingTop: 140,
        paddingBottom: 64,
        textAlign: 'center',
      }}>
        <ScrollReveal>
          <div className="section-label" style={{ marginBottom: 20 }}>Visual Journey</div>
          <h1 style={{
            fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
            fontSize: 'clamp(40px, 6vw, 72px)',
            fontWeight: 300,
            color: 'var(--parchment)',
            margin: '0 0 16px',
            lineHeight: 1.05,
          }}>
            12 Moments Inside the <em style={{ color: 'var(--gold)' }}>Cave</em>
          </h1>
          <p style={{
            fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
            fontSize: 14,
            color: 'var(--parchment-ghost)',
            marginBottom: 8,
          }}>
            Follow{' '}
            <a
              href="https://instagram.com/kapadoccia_lagos"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--gold)',
                textDecoration: 'none',
              }}
            >
              @kapadoccia_lagos
            </a>{' '}
            for daily behind-the-scenes
          </p>
        </ScrollReveal>
      </section>

      {/* ===== MASONRY GALLERY ===== */}
      <section style={{
        background: 'var(--cave-1)',
        padding: '0 32px 120px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="masonry-grid">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="masonry-item"
                style={{ height: item.height }}
                onClick={() => setLightbox({ ...item, index: i })}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setLightbox({ ...item, index: i })}
                aria-label={`View ${item.label}`}
              >
                {/* Gradient background */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: item.gradient,
                  transition: 'filter 0.3s ease',
                }} />

                {/* Grain texture overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.08\'/%3E%3C/svg%3E")',
                  opacity: 0.4,
                }} />

                {/* Cave depth lines */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.5) 100%)',
                }} />

                {/* Label overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '32px 20px 16px',
                  background: 'linear-gradient(to top, rgba(8,7,6,0.85) 0%, transparent 100%)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                    fontSize: 11,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--parchment-dim)',
                  }}>
                    {item.label}
                  </div>
                </div>

                {/* Click icon */}
                <div style={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  width: 28,
                  height: 28,
                  borderRadius: '50%',
                  background: 'rgba(8,7,6,0.6)',
                  border: '1px solid rgba(191,160,106,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }} className="gallery-expand-icon">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H4M9 1V6" stroke="var(--gold)" strokeWidth="1.2" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM CTA ===== */}
      <section style={{
        background: 'var(--cave-2)',
        padding: '80px 48px',
        textAlign: 'center',
        borderTop: '1px solid rgba(191,160,106,0.08)',
      }}>
        <ScrollReveal>
          <div style={{
            fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            color: 'var(--parchment)',
            marginBottom: 16,
            fontWeight: 300,
          }}>
            Follow the Cave&apos;s Story
          </div>
          <p style={{
            fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
            fontSize: 14,
            color: 'var(--parchment-dim)',
            marginBottom: 32,
          }}>
            84,000 followers · Daily dining scenes, cocktail reels, and behind-the-scenes content
          </p>
          <a
            href="https://instagram.com/kapadoccia_lagos"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'transparent',
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
              fontSize: 12,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              padding: '14px 36px',
              textDecoration: 'none',
              borderRadius: 999,
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold)';
              e.currentTarget.style.color = 'var(--obsidian)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--gold)';
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @kapadoccia_lagos
          </a>
        </ScrollReveal>
      </section>

      <Footer />

      {/* ===== LIGHTBOX ===== */}
      {lightbox && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.92)',
            zIndex: 9000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24,
            animation: 'fadeIn 0.3s ease',
          }}
          onClick={closeLightbox}
        >
          <div
            style={{
              position: 'relative',
              maxWidth: 800,
              width: '100%',
              animation: 'scaleIn 0.3s ease',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              style={{
                position: 'absolute',
                top: -48,
                right: 0,
                background: 'none',
                border: 'none',
                color: 'var(--parchment-dim)',
                fontSize: 24,
                cursor: 'pointer',
                fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                letterSpacing: '0.1em',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{ fontSize: 14 }}>Close</span> ✕
            </button>

            {/* Image */}
            <div style={{
              width: '100%',
              height: 480,
              background: lightbox.gradient,
              position: 'relative',
              border: '1px solid rgba(191,160,106,0.2)',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)',
              }} />
            </div>

            {/* Caption */}
            <div style={{
              background: 'var(--cave-2)',
              padding: '20px 24px',
              borderTop: '1px solid rgba(191,160,106,0.15)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                  fontSize: 22,
                  color: 'var(--parchment)',
                  marginBottom: 4,
                }}>
                  {lightbox.label}
                </div>
                <div style={{
                  fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                  fontSize: 11,
                  color: 'var(--parchment-ghost)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}>
                  Kapadoccia Lagos
                </div>
              </div>
              <div style={{
                fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                fontSize: 14,
                color: 'var(--gold-dim)',
              }}>
                {lightbox.index + 1} / {galleryItems.length}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .masonry-item:hover .gallery-expand-icon {
          opacity: 1 !important;
        }
      `}</style>
    </>
  );
}
