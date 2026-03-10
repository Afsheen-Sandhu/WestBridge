import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: '#030303',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)' }}>

        {/* ── CTA Section ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 380px',
          gap: '80px',
          alignItems: 'center',
          padding: '80px 0 72px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>

          {/* Left: All text content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
              <img src="/logo-white-removebg-preview.png" alt="WB" style={{ height: '24px' }} />
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '16px', letterSpacing: '-0.02em' }}>WestBridge</span>
            </div>

            {/* Headline */}
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#fff',
              margin: '0 0 32px 0',
            }}>
              Let's make something{' '}
              <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>
                extraordinary
              </em>.
            </h2>

            {/* Email CTA */}
            <a
              href="mailto:contact@westbridgeit.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                fontWeight: 500,
                marginBottom: '56px',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            >
              contact@westbridgeit.com
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>

            {/* Bottom meta row */}
            <div style={{ display: 'flex', gap: '64px', alignItems: 'flex-start' }}>

              {/* Location */}
              <div>
                <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', margin: '0 0 12px', fontWeight: 600 }}>
                  Location
                </p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', margin: '0 0 4px', fontWeight: 500 }}>
                  HQ: Ahmedabad, India
                </p>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.6 }}>
                  Working globally across<br />multiple timezones.
                </p>
              </div>

              {/* Socials */}
              <div>
                <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', margin: '0 0 12px', fontWeight: 600 }}>
                  Follow
                </p>
                <div style={{ display: 'flex', gap: '20px', marginTop: '4px' }}>
                  {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                    <button
                      key={i}
                      style={{
                        background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                        color: 'rgba(255,255,255,0.3)',
                        display: 'flex', alignItems: 'center',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Illustration — fixed height, cropped from top */}
          <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
            {/* Left fade */}
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, width: '40%',
              background: 'linear-gradient(to right, #030303 0%, transparent 100%)',
              zIndex: 2, pointerEvents: 'none',
            }} />
            {/* Top fade */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: '30%',
              background: 'linear-gradient(to bottom, #030303 0%, transparent 100%)',
              zIndex: 2, pointerEvents: 'none',
            }} />
            {/* Bottom fade */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%',
              background: 'linear-gradient(to top, #030303 0%, transparent 100%)',
              zIndex: 2, pointerEvents: 'none',
            }} />
            <img
              src="/city2.png"
              alt="City Illustration"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                opacity: 0.45,
                filter: 'grayscale(100%) contrast(1.1)',
              }}
            />
          </div>
        </div>

        {/* ── Nav Links Row ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '48px',
          padding: '56px 0',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          {/* Brand blurb */}
          <div>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '13px', lineHeight: 1.75, maxWidth: '260px', margin: 0 }}>
              Crafting luxury digital experiences for brands that value details and lasting impact.
            </p>
          </div>

          {['Explore', 'Resources'].map((section, si) => (
            <div key={section}>
              <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', margin: '0 0 18px', fontWeight: 600 }}>
                {section}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {(si === 0
                  ? ['Works', 'About', 'Services', 'Approach']
                  : ['Templates', 'Blog', 'Careers', 'Studio']
                ).map(item => (
                  <li key={item}>
                    <a href="#" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.25s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                    >{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Spacer column or extra links */}
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', margin: '0 0 18px', fontWeight: 600 }}>
              Legal
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Privacy Policy', 'Terms of Service'].map(item => (
                <li key={item}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.25s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Wordmark ── */}
        <div style={{ textAlign: 'center', padding: '40px 0 0', overflow: 'hidden' }}>
          <span style={{
            display: 'block',
            fontWeight: 800,
            fontSize: 'clamp(48px, 13vw, 200px)',
            letterSpacing: '-0.04em',
            color: 'rgba(255,255,255,0.03)',
            userSelect: 'none',
            pointerEvents: 'none',
            lineHeight: 0.88,
          }}>
            WESTBRIDGE
          </span>
        </div>

        {/* ── Legal Bar ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '16px 0 40px',
          gap: '16px',
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.18)' }}>
            © 2026 WestBridge · All Rights Reserved
          </span>
          <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.1)' }}>
            India — Global
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;