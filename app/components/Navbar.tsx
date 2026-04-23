'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Our Story' },
  { href: '/menu', label: 'Menu' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reservations', label: 'Reserve' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '20px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(8,7,6,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
          borderBottom: scrolled ? '1px solid rgba(191,160,106,0.08)' : 'none',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', lineHeight: 1 }}>
          <div style={{
            fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
            fontSize: '22px',
            fontWeight: 500,
            letterSpacing: '0.2em',
            color: 'var(--gold)',
            lineHeight: 1,
          }}>
            KAPADOCCIA
          </div>
          <div style={{
            fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
            fontSize: '9px',
            letterSpacing: '0.4em',
            color: 'var(--parchment-dim)',
            fontVariant: 'small-caps',
            marginTop: '3px',
          }}>
            LAGOS
          </div>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/reservations" className="reserve-btn">
            Reserve a Table
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="show-mobile"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
          }}
          aria-label="Open menu"
        >
          <div style={{ width: 20, height: 2, background: 'var(--parchment)', marginBottom: 5 }} />
          <div style={{ width: 20, height: 2, background: 'var(--parchment)', marginBottom: 5 }} />
          <div style={{ width: 20, height: 2, background: 'var(--parchment)' }} />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${mobileOpen ? 'open' : ''}`}>
        <button
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'absolute',
            top: 24,
            right: 24,
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--parchment)',
            fontSize: 28,
            lineHeight: 1,
          }}
          aria-label="Close menu"
        >
          ✕
        </button>

        <Link href="/" style={{ animationDelay: '0.05s' }}>Home</Link>
        <Link href="/about" style={{ animationDelay: '0.1s' }}>Our Story</Link>
        <Link href="/menu" style={{ animationDelay: '0.15s' }}>Menu</Link>
        <Link href="/gallery" style={{ animationDelay: '0.2s' }}>Gallery</Link>
        <Link href="/reservations" style={{ animationDelay: '0.25s' }}>Reserve</Link>

        <Link
          href="/reservations"
          style={{
            marginTop: 32,
            fontSize: 14,
            fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            border: '1px solid var(--gold)',
            padding: '14px 32px',
            borderRadius: 999,
          }}
        >
          Reserve a Table
        </Link>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; flex-direction: column; }
          nav { padding: 16px 24px !important; }
        }
      `}</style>
    </>
  );
}
