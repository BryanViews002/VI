'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '80px 48px 40px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 48,
          paddingBottom: 48,
          borderBottom: '1px solid rgba(191,160,106,0.15)',
        }} className="footer-grid">
          {/* Col 1 */}
          <div>
            <div style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '24px',
              fontWeight: 500,
              letterSpacing: '0.2em',
              color: 'var(--gold)',
              marginBottom: 4,
            }}>
              KAPADOCCIA
            </div>
            <div style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '9px',
              letterSpacing: '0.4em',
              color: 'var(--parchment-dim)',
              marginBottom: 20,
            }}>
              LAGOS
            </div>
            <p style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '18px',
              fontStyle: 'italic',
              color: 'var(--parchment-dim)',
              marginBottom: 12,
              lineHeight: 1.4,
            }}>
              Where Lagos Meets the Cave
            </p>
            <p style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '13px',
              color: 'var(--parchment-ghost)',
              lineHeight: 1.8,
            }}>
              Lagos&apos; first and only cave restaurant — a Turkish-Nigerian fusion
              dining experience carved from stone, fire, and imagination.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--gold-dim)',
              marginBottom: 24,
            }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'Our Story' },
                { href: '/menu', label: 'The Menu' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/reservations', label: 'Reserve a Table' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3 */}
          <div>
            <h4 style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '11px',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: 'var(--gold-dim)',
              marginBottom: 24,
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Phone', value: '0908 845 1901' },
                { label: '', value: '0810 375 5674' },
                { label: 'Address', value: '16 Idowu Taylor Street, Victoria Island, Lagos' },
                { label: 'Hours', value: '11:00 AM – 11:00 PM, Daily' },
              ].map((item, i) => (
                <div key={i}>
                  {item.label && (
                    <div style={{
                      fontFamily: '"DM Sans", system-ui, sans-serif',
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-dim)',
                      marginBottom: 4,
                    }}>{item.label}</div>
                  )}
                  <div style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '13px',
                    color: 'var(--parchment-dim)',
                    lineHeight: 1.6,
                  }}>{item.value}</div>
                </div>
              ))}
              <a
                href="https://instagram.com/kapadoccia_lagos"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
                style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: 8 }}
              >
                <span>@kapadoccia_lagos</span>
                <span style={{ fontSize: 11, opacity: 0.7 }}>↗</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 24,
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <span style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '11px',
            color: 'var(--parchment-ghost)',
          }}>
            © {new Date().getFullYear()} Kapadoccia Lagos. All rights reserved.
          </span>
          <span style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '11px',
            color: 'var(--parchment-ghost)',
          }}>
            Designed with intention.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </footer>
  );
}
