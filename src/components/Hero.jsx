import GlowBadge from './GlowBadge';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';


const BRANDS = ["OASIS", "VERTEX", "NEXUS", "QUANTA", "EQUINOX", "AETHER", "LUMINA", "VANGUARD"];

const Hero = () => {
  const { theme } = useTheme();
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center overflow-hidden transition-colors duration-400"
      style={{ background: theme === 'dark' ? '#000' : '#fff' }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        fetchPriority="high"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.55,
        }}
      >
        <source src="/canvas-animation.webm" type="video/webm" />
      </video>

      {/* Theme-aware overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: theme === 'dark'
            ? 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.65) 100%)'
            : 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.8) 100%)',
          zIndex: 1,
          transition: 'background 0.4s ease',
        }}
      />

      {/* Main hero content */}
      <div className="relative w-full flex flex-col items-center text-center z-10 flex-1 pb-12 md:pb-20" style={{ paddingTop: 'clamp(200px, 28vh, 320px)' }}>
        {/* Glow Badge */}
        <div className="mb-20 md:mb-14 animate-fade-in-down">
          <GlowBadge>Design In Details</GlowBadge>
        </div>

        <h1 className="sr-only" style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: '0',
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: '0',
        }}>
            Web Design Agency Surrey, BC — Custom Website Development &amp; IT Solutions for Small Businesses Across Surrey &amp; Canada
        </h1>

        {/* Hero Heading (Visible Layout) */}
        <div
          className="mb-10 sm:mb-12 flex flex-col gap-2"
          style={{ fontSize: 'clamp(34px, 9vw, 120px)', lineHeight: 0.95, letterSpacing: '-0.04em' }}
        >
          <div className="flex items-baseline justify-center flex-wrap gap-x-[0.25em]">
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: theme === 'dark' ? '#fff' : '#000' }}>
              Luxury
            </span>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400, color: theme === 'dark' ? '#fff' : '#000' }}>
              Aesthetics
            </span>
          </div>
          <div className="flex items-baseline justify-center flex-wrap gap-x-[0.25em]">
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400, color: theme === 'dark' ? '#fff' : '#000' }}>
              Lasting
            </span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: theme === 'dark' ? '#fff' : '#000' }}>
              Impact
            </span>
          </div>
        </div>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up max-w-[700px] leading-relaxed"
          style={{
            fontSize: 'clamp(14px, 2.2vw, 22px)',
            color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
            animationDelay: '400ms',
            fontWeight: 400,
            marginTop: '28px',
            marginBottom: '8px',
          }}
        >
          Custom websites & IT solutions for bold brands.
        </p>
        <p
          className="animate-fade-in-up"
          style={{
            fontSize: 'clamp(13px, 1.5vw, 16px)',
            color: theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
            animationDelay: '450ms',
            fontWeight: 500,
            marginBottom: '40px',
          }}
        >
          Web design agency in Surrey, BC &mdash; serving small businesses across Vancouver &amp; Canada.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up w-full sm:w-auto"
          style={{ animationDelay: '600ms', maxWidth: '400px', margin: '0 auto' }}
        >
          <Link
            to="/contact"
            className="font-semibold rounded-full transition-all duration-500 active:scale-95 flex-1 sm:flex-none justify-center"
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: theme === 'dark' ? '#fff' : '#000',
              color: theme === 'dark' ? '#000' : '#fff',
              border: 'none',
              minWidth: '160px',
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,255,255,0.18)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Get in touch
          </Link>

          <button
            className="font-semibold rounded-full transition-all duration-500 active:scale-95 flex-1 sm:flex-none justify-center"
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)',
              color: theme === 'dark' ? '#fff' : '#000',
              border: theme === 'dark' ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(0,0,0,0.15)',
              backdropFilter: 'blur(12px)',
              minWidth: '160px',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
          >
            See our work
          </button>
        </div>
      </div>

      {/* Brands carousel — anchored to the bottom of the hero */}
      <div className="relative z-10 w-full" style={{ marginTop: '24px', paddingBottom: '32px' }}>
        <p
          className="text-center mb-3"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: theme === 'dark' ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.35)',
          }}
        >
          They trusted us
        </p>

        <div
          className="w-full relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >
          <div className="flex w-max animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8 md:gap-20 px-4 md:px-12 items-center justify-center pointer-events-none">
                {BRANDS.map((brand, j) => (
                  <span
                    key={`${i}-${j}`}
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: 'clamp(18px, 4vw, 26px)',
                      letterSpacing: '-0.04em',
                      color: theme === 'dark' ? '#ffffff' : '#000000',
                    }}
                  >
                    {brand}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
