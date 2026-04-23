'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageCurtain from '../components/PageCurtain';
import ScrollReveal from '../components/ScrollReveal';

const menuData = {
  starters: [
    { name: 'Mezze Platter', price: '₦9,500', desc: 'Hummus, muhammara, baba ghanoush, warm pita, olive oil.' },
    { name: 'Calamari Fritti', price: '₦11,000', desc: 'Flash-fried calamari rings, sumac aioli, lemon.' },
    { name: 'Turkish Lentil Soup', price: '₦8,500', desc: 'Red lentil bisque, smoked paprika butter, crusty sourdough.' },
    { name: 'Cave Bruschetta', price: '₦9,000', desc: 'Stone-toasted bread, heirloom tomato, basil oil, aged balsamic.' },
    { name: 'Spiced Chicken Wings', price: '₦12,500', desc: 'Sumac & harissa glazed wings, labneh dip, fresh herbs.' },
    { name: 'Puff Puff & Dip', price: '₦7,000', desc: 'Nigerian puff puff with spiced sobolo dipping sauce.' },
  ],
  mains: [
    { name: 'Slow-Roasted Lamb Shank', price: '₦38,000', desc: 'Braised in Turkish spices, red wine, saffron rice, gremolata.' },
    { name: 'Mixed Kebab Plate', price: '₦28,500', desc: 'Lamb kofta, chicken shish, adana kebab, grilled vegetables, rice.' },
    { name: 'Kapadoccia Signature Jollof', price: '₦18,000', desc: 'Slow-cooked party jollof over open flame, sumac butter, fried plantain.' },
    { name: 'Chicken Shawarma Plate', price: '₦22,000', desc: 'Marinated rotisserie chicken, tahini, pickles, garlic sauce, rice.' },
    { name: 'Penne Arrabbiata', price: '₦16,500', desc: 'San Marzano tomato, calabrian chili, olive oil, parmesan, fresh basil.' },
    { name: 'Grilled Ribeye Steak', price: '₦40,000', desc: '300g USDA Prime ribeye, chimichurri, cave-salted fries, roasted bone marrow.' },
  ],
  seafood: [
    { name: 'Seafood Stew', price: '₦32,000', desc: 'Lagos-style pepper base with prawns, squid, clams, sea bass fillet.' },
    { name: 'Grilled Sea Bass', price: '₦28,000', desc: 'Whole sea bass, chermoula marinade, roasted vegetables, lemon butter.' },
    { name: 'Prawn Linguine', price: '₦24,500', desc: 'Tiger prawns, white wine, garlic, chili, cherry tomatoes, fresh pasta.' },
    { name: 'Lobster Bisque', price: '₦22,000', desc: 'Velvety bisque, cognac, creme fraiche, lobster medallion floated.' },
  ],
  cocktails: [
    { name: 'Chapman', price: '₦4,300', desc: 'West African classic · Fanta, Sprite, grenadine, cucumber, ice.' },
    { name: 'Blue Mojito', price: '₦6,700', desc: 'Blue curacao, fresh mint, lime, rum, soda.' },
    { name: 'Cappadocia Sunset', price: '₦8,500', desc: 'Passion fruit, hibiscus, champagne, rose water, crystal ice sphere.' },
    { name: 'Turkish Delight', price: '₦7,800', desc: 'Rosewater, raspberry, vodka, elderflower tonic, dehydrated rose.' },
    { name: 'Lagos Mule', price: '₦7,200', desc: 'Ginger beer, zobo, vodka, fresh lime, candied ginger.' },
    { name: 'Fresh Juices', price: '₦3,500', desc: 'Watermelon · Pineapple · Zobo · Cucumber Mint · Orange.' },
  ],
};

const TABS = [
  { key: 'starters', label: 'Starters' },
  { key: 'mains', label: 'Mains' },
  { key: 'seafood', label: 'Seafood' },
  { key: 'cocktails', label: 'Cocktails' },
] as const;

type TabKey = keyof typeof menuData;

const STALACTITES = Array.from({ length: 28 }, (_, i) => ({
  left: `${(i / 27) * 100}%`,
  height: Math.floor(Math.random() * 60 + 30),
  width: Math.floor(Math.random() * 18 + 8),
  delay: `${(Math.random() * 2).toFixed(2)}s`,
  duration: `${(Math.random() * 2 + 2.5).toFixed(2)}s`,
}));

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('starters');

  return (
    <>
      <PageCurtain />
      <Navbar />

      {/* ===== HERO ===== */}
      <section style={{
        height: '50vh',
        minHeight: 360,
        background: 'var(--cave-1)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Stalactites at top */}
        <div className="stalactite-container">
          {STALACTITES.map((s, i) => (
            <div
              key={i}
              className="stalactite"
              style={{
                position: 'absolute',
                left: s.left,
                top: 0,
                width: s.width,
                height: s.height,
                background: `linear-gradient(to bottom, var(--cave-4), var(--stone))`,
                clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
                animationDelay: s.delay,
                animationDuration: s.duration,
              }}
            />
          ))}
        </div>

        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '80px 24px 0',
        }}>
          <h1 style={{
            fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
            fontSize: 'clamp(48px, 8vw, 80px)',
            fontWeight: 300,
            color: 'var(--parchment)',
            margin: '0 0 16px',
            lineHeight: 1,
          }}>
            The <em style={{ color: 'var(--gold)' }}>Menu</em>
          </h1>
          <p style={{
            fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
            fontSize: 13,
            letterSpacing: '0.3em',
            color: 'var(--parchment-ghost)',
            textTransform: 'uppercase',
          }}>
            Turkish · Nigerian · Fusion
          </p>
        </div>
      </section>

      {/* ===== STICKY TAB NAV ===== */}
      <div style={{
        position: 'sticky',
        top: 64,
        zIndex: 100,
        background: 'var(--cave-2)',
        borderBottom: '1px solid rgba(191,160,106,0.15)',
        overflowX: 'auto',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`menu-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ===== MENU PANELS ===== */}
      <section style={{
        background: 'var(--cave-1)',
        padding: '80px 48px 120px',
        minHeight: '50vh',
      }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '0 60px',
        }} className="menu-grid">
          {menuData[activeTab].map((item, i) => (
            <ScrollReveal key={`${activeTab}-${i}`} delay={i * 60}>
              <div className="menu-item">
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                    fontSize: 18,
                    color: 'var(--parchment)',
                    marginBottom: 6,
                    fontWeight: 400,
                  }}>
                    {item.name}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-dm-sans, "DM Sans", sans-serif)',
                    fontSize: 13,
                    color: 'var(--parchment-ghost)',
                    lineHeight: 1.7,
                  }}>
                    {item.desc}
                  </div>
                </div>
                <div style={{
                  fontFamily: 'var(--font-cormorant, "Cormorant Garamond", serif)',
                  fontSize: 18,
                  color: 'var(--gold)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  paddingTop: 2,
                }}>
                  {item.price}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .menu-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
