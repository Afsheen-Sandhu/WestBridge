import React, { useRef, useState } from 'react';
import GlowBadge from './GlowBadge';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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

      <div className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center text-center z-10">
        {/* Glow Badge */}
        <div className="mb-14 animate-fade-in-down">
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
          className="flex flex-wrap justify-center gap-4 sm:gap-5 animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <button
            className="font-semibold rounded-full transition-all duration-500 active:scale-95"
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: '#fff',
              color: '#000',
              border: 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(255,255,255,0.18)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Get in touch
          </button>

          <button
            className="font-semibold rounded-full transition-all duration-500 active:scale-95"
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: 'rgba(255,255,255,0.08)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.15)',
              backdropFilter: 'blur(12px)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
          >
            See our work
          </button>
        </div>


      </div>
    </section>
  );
};

export default Hero;
