import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';


const Footer = () => {
  const { theme } = useTheme();
  const [imgHover, setImgHover] = React.useState(false);

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <footer style={{
      width: '100%',
      backgroundColor: theme === 'dark' ? '#030303' : '#fafafa',
      borderTop: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      overflow: 'hidden',
      transition: 'background-color 0.4s ease',
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)' }}>

        {/* ── CTA Section ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 380px',
          gap: isMobile ? '40px' : '80px',
          alignItems: 'center',
          padding: isMobile ? '60px 0 48px' : '80px 0 72px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>

          {/* Left: All text content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>

            {/* Logo */}
            <Link
              to="/"
              style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', textDecoration: 'none' }}
            >
              <img src={theme === 'dark' ? "/logo-white-removebg-preview.webp" : "/logo-black-removebg-preview.webp"} alt="WB" width={24} height={24} style={{ height: '24px', width: 'auto' }} />
              <span style={{ color: theme === 'dark' ? '#fff' : '#000', fontWeight: 700, fontSize: '16px', letterSpacing: '-0.02em' }}>WestBridge</span>
            </Link>

            {/* Headline */}
            <h2 style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: theme === 'dark' ? '#fff' : '#000',
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
                color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)',
                textDecoration: 'none',
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                fontWeight: 500,
                marginBottom: '56px',
                transition: 'color 0.3s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#000'}
              onMouseLeave={e => e.currentTarget.style.color = theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)'}
            >
              contact@westbridgeit.com
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </a>

            {/* Bottom meta row */}
            <div style={{
              display: 'flex',
              gap: isMobile ? '32px' : '64px',
              alignItems: 'flex-start',
              flexWrap: 'wrap'
            }}>

              {/* Location */}
              <div>
                <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: theme === 'dark' ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)', margin: '0 0 12px', fontWeight: 600 }}>
                  Location
                </p>
                <p style={{ fontSize: '13px', color: theme === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)', margin: '0 0 4px', fontWeight: 500 }}>
                  Surrey, Canada
                </p>
                <p style={{ fontSize: '13px', color: theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', margin: 0, lineHeight: 1.6 }}>
                  Working globally across<br />multiple timezones.
                </p>
              </div>

              {/* Socials */}
              <div>
                <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: theme === 'dark' ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.5)', margin: '0 0 12px', fontWeight: 600 }}>
                  Follow
                </p>
                <div style={{ display: 'flex', gap: '20px', marginTop: '4px' }}>
                  {[
                    { Icon: Instagram, label: 'Instagram' },
                    { Icon: Facebook, label: 'Facebook' },
                    { Icon: Twitter, label: 'Twitter' },
                    { Icon: Linkedin, label: 'LinkedIn' }
                  ].map(({ Icon, label }, i) => (
                    <button
                      key={i}
                      aria-label={label}
                      style={{
                        background: 'none', border: 'none', padding: 0, cursor: 'pointer',
                        color: theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
                        display: 'flex', alignItems: 'center',
                        transition: 'color 0.3s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#000'}
                      onMouseLeave={e => e.currentTarget.style.color = theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'}
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Illustration — fixed height, cropped from top */}
          {!isMobile && (
            <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
              {/* Left fade */}
              <div style={{
                position: 'absolute', top: 0, left: 0, bottom: 0, width: '40%',
                background: theme === 'dark' ? 'linear-gradient(to right, #030303 0%, transparent 100%)' : 'linear-gradient(to right, #fafafa 0%, transparent 100%)',
                zIndex: 2, pointerEvents: 'none',
              }} />
              {/* Top fade */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '30%',
                background: theme === 'dark' ? 'linear-gradient(to bottom, #030303 0%, transparent 100%)' : 'linear-gradient(to bottom, #fafafa 0%, transparent 100%)',
                zIndex: 2, pointerEvents: 'none',
              }} />
              {/* Bottom fade */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0, height: '25%',
                background: theme === 'dark' ? 'linear-gradient(to top, #030303 0%, transparent 100%)' : 'linear-gradient(to top, #fafafa 0%, transparent 100%)',
                zIndex: 2, pointerEvents: 'none',
              }} />
              <img
                src="/city2.webp"
                alt="City Illustration"
                width={380}
                height={420}
                onMouseEnter={() => setImgHover(true)}
                onMouseLeave={() => setImgHover(false)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  opacity: theme === 'dark' ? (imgHover ? 0.8 : 0.45) : (imgHover ? 0.95 : 0.75),
                  filter: theme === 'dark'
                    ? (imgHover ? 'grayscale(0%) contrast(1.2) brightness(1.2) drop-shadow(0 0 20px rgba(255,255,255,0.2))' : 'grayscale(100%) contrast(1.1)')
                    : (imgHover ? 'grayscale(0%) contrast(1.1) brightness(1.1)' : 'grayscale(100%) contrast(0.9)'),
                  transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  cursor: 'pointer',
                }}
              />
            </div>
          )}
        </div>

        {/* ── Nav Links Row ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '2fr 1fr 1fr 1fr',
          gap: isMobile ? '40px' : '48px',
          padding: '56px 0',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          {/* Brand blurb */}
          <div>
            <p style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.5)', fontSize: '13px', lineHeight: 1.75, maxWidth: '260px', margin: 0 }}>
              Crafting luxury digital experiences for brands that value details and lasting impact.
            </p>
          </div>

          {['Explore', 'Resources'].map((section, si) => (
            <div key={section}>
              <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: theme === 'dark' ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)', margin: '0 0 18px', fontWeight: 600 }}>
                {section}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {(si === 0
                  ? [
                    { label: 'Works', path: '/works' },
                    { label: 'About', path: '/about-us' },
                    { label: 'Services', path: '/services' },
                    { label: 'Approach', path: '/approach' }
                  ]
                  : [
                    { label: 'Templates', path: '/templates' },
                    { label: 'Blog', path: '/blogs' },
                    { label: 'Careers', path: '/careers' },
                    { label: 'Studio', path: '/studio' }
                  ]
                ).map(item => (
                  <li key={item.label}>
                    <Link to={item.path} style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.25s' }}
                      onMouseEnter={e => e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#000'}
                      onMouseLeave={e => e.currentTarget.style.color = theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)'}
                    >{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Spacer column or extra links */}
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: theme === 'dark' ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.3)', margin: '0 0 18px', fontWeight: 600 }}>
              Legal
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Privacy Policy', 'Terms of Service'].map(item => (
                <li key={item}>
                  <a href="#" style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.5)', textDecoration: 'none', fontSize: '13px', transition: 'color 0.25s' }}
                    onMouseEnter={e => e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#000'}
                    onMouseLeave={e => e.currentTarget.style.color = theme === 'dark' ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.5)'}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Wordmark ── */}
        <div style={{ textAlign: 'left', padding: '40px 0 0' }}>
          <span style={{
            display: 'block',
            fontWeight: 800,
            fontSize: 'clamp(48px, 13vw, 200px)',
            marginLeft: '-0.02em', // Reduced negative margin to prevent clipping while maintaining alignment
            letterSpacing: '-0.04em',
            color: theme === 'dark' ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.04)',

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
          <span style={{
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)',
            fontWeight: 500
          }}>
            © 2026 WestBridge · All Rights Reserved
          </span>
          <span style={{
            fontSize: '10px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: theme === 'dark' ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.3)',
            fontWeight: 500
          }}>
            Canada
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;