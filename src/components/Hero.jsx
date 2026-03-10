import React from 'react';
import GlowBadge from './GlowBadge';

const BRANDS = ["OASIS", "VERTEX", "NEXUS", "QUANTA", "EQUINOX", "AETHER", "LUMINA", "VANGUARD"];

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
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

      {/* Dark overlay to keep text readable */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.65) 100%)',
          zIndex: 1,
        }}
      />

      {/* Main hero content */}
      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center text-center z-10 flex-1 justify-center pt-[120px] pb-12 md:pt-[160px] md:pb-20">
        {/* Glow Badge */}
        <div className="mb-20 md:mb-14 animate-fade-in-down">
          <GlowBadge>Design In Details</GlowBadge>
        </div>

        {/* Hero Heading */}
        <h1
          className="mb-10 sm:mb-12 flex flex-col gap-2"
          style={{ fontSize: 'clamp(34px, 9vw, 120px)', lineHeight: 0.95, letterSpacing: '-0.04em' }}
        >
          <div className="flex items-baseline justify-center flex-wrap gap-x-[0.25em]">
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: '#fff' }}>
              Luxury
            </span>
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400, color: '#fff' }}>
              Aesthetics
            </span>
          </div>
          <div className="flex items-baseline justify-center flex-wrap gap-x-[0.25em]">
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400, color: '#fff' }}>
              Lasting
            </span>
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: '#fff' }}>
              Impact
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up max-w-[700px] leading-relaxed"
          style={{
            fontSize: 'clamp(14px, 2.2vw, 22px)',
            color: 'rgba(255,255,255,0.55)',
            animationDelay: '400ms',
            fontWeight: 400,
            marginTop: '28px',
            marginBottom: '40px',
          }}
        >
          Premium websites crafted for bold brands.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up w-full sm:w-auto"
          style={{ animationDelay: '600ms', maxWidth: '400px', margin: '0 auto' }}
        >
          <button
            className="font-semibold rounded-full transition-all duration-500 active:scale-95 flex-1 sm:flex-none justify-center"
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: '#fff',
              color: '#000',
              border: 'none',
              minWidth: '160px',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,255,255,0.18)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Get in touch
          </button>

          <button
            className="font-semibold rounded-full transition-all duration-500 active:scale-95 flex-1 sm:flex-none justify-center"
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.15)',
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
            color: 'rgba(255,255,255,0.3)',
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
                      color: '#ffffff',
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
