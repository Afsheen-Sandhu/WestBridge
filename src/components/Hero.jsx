import React, { useRef, useState } from 'react';
import GlowBadge from './GlowBadge';

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-10"
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

      <div className="relative flex flex-col items-center text-center z-10 max-w-[1400px]">
        {/* Glow Badge */}
        <div className="mb-14 animate-fade-in-down">
          <GlowBadge>Design In Details</GlowBadge>
        </div>

        {/* Hero Heading */}
        <h1
          className="mb-12 flex flex-col gap-2"
          style={{ fontSize: 'clamp(56px, 12vw, 150px)', lineHeight: 0.92, letterSpacing: '-0.04em' }}
        >
          <div className="flex items-baseline justify-center flex-wrap gap-x-[0.25em]">
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: '#fff' }}>
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
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, color: '#fff' }}>
              Impact
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up max-w-[700px] leading-relaxed"
          style={{
            fontSize: 'clamp(18px, 2.5vw, 28px)',
            color: 'rgba(255,255,255,0.55)',
            animationDelay: '400ms',
            fontWeight: 400,
            marginTop: '40px',
            marginBottom: '60px',
          }}
        >
          Premium websites crafted for bold brands.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex gap-5 animate-fade-in-up"
          style={{ animationDelay: '600ms' }}
        >
          <button
            className="font-semibold rounded-full transition-all duration-500 active:scale-95"
            style={{
              padding: '18px 48px',
              fontSize: '17px',
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
              padding: '18px 48px',
              fontSize: '17px',
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
