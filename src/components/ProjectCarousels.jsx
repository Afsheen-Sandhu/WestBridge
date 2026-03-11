import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';


// Replace these with your actual project image paths under /public
const PROJECT_IMAGES = [
  '/img1.webp',
  '/work3.png',
  '/img17.webp',
  '/img24.webp',
  '/img8.webp',
  '/img2.webp',
  '/img13.webp',
  '/img9.webp',
  '/img14.webp',
  '/img23.webp',
  '/img12.webp',
  '/img3.webp',
  '/img18.webp',
  '/img20.webp',
  '/img4.webp',
];

const CARD_WIDTH = 380;
const GAP = 24;
const SCROLL_OFFSET = 220; // how far row 2/3 move at full scroll

const ProjectCarousels = () => {
  const { theme } = useTheme();
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);


  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      // Progress 0 when section top is at bottom of viewport, 1 when section bottom is at top
      const start = viewportHeight;
      const end = -rect.height;
      const range = start - end;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / range));
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const rowHeight = Math.round((CARD_WIDTH * 10) / 16);

  const renderRow = (images, extraTransform = 'translateX(0)') => (
    <div
      className="flex w-max items-center gap-6"
      style={{
        transform: extraTransform,
        willChange: 'transform',
        transition: 'transform 0.1s ease-out',
        height: rowHeight,
      }}
    >
      {[...images, ...images].map((src, i) => (
        <div
          key={i}
          className="shrink-0 overflow-hidden rounded-xl transition-all duration-400"
          style={{
            width: CARD_WIDTH,
            height: rowHeight,
            background: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
            border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
          }}
        >
          <img
            src={src}
            alt={`Project ${i + 1}`}
            className="w-full h-full object-cover"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'https://picsum.photos/420/280';
            }}
          />
        </div>
      ))}
    </div>
  );

  const row1Images = PROJECT_IMAGES.slice(0, 6);
  const row2Images = PROJECT_IMAGES.slice(2, 8);
  const row3Images = PROJECT_IMAGES.slice(4, 10);

  return (
    <section
      ref={sectionRef}
      className="relative pt-[180px] md:pt-[240px] lg:pt-[300px] pb-24 overflow-hidden transition-colors duration-400"
      style={{ minHeight: '100vh', marginTop: '120px', background: theme === 'dark' ? '#000' : '#fff' }}
    >
      <div className="sticky top-0 w-full flex flex-col pt-24 lg:pt-12 pb-16">
        {/* Top row: text + first two carousels */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-6" style={{ paddingTop: '5px', paddingBottom: '5px' }}>
          {/* Left: heading, description, CTAs */}
          <div
            className="w-full lg:w-[36%] lg:max-w-[480px] shrink-0 px-6 md:px-12 lg:px-0 lg:pl-[48px] lg:pr-[24px]"
          >
            <h2
              className="font-primary font-bold leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(22px, 2.8vw, 36px)', color: theme === 'dark' ? '#fff' : '#000' }}
            >
              <span className="block">Design that connects.</span>
              <span className="block">Results that last.</span>
            </h2>
            <p
              className="font-body text-base lg:text-lg leading-relaxed mb-14"
              style={{ maxWidth: '42ch', paddingTop: '10px', paddingBottom: '10px', color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}
            >
              We build digital experiences that hold attention and move the needle. Strong visuals and clear strategy help your brand stand out and turn visitors into customers—without the friction.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-stretch sm:items-center">
              <button
                type="button"
                className="font-semibold rounded-full transition-all duration-300 active:scale-95 flex-1 sm:flex-none justify-center"
                style={{
                  padding: '12px 24px',
                  fontSize: '14px',
                  background: theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
                  color: theme === 'dark' ? '#fff' : '#000',
                  border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`,
                  minWidth: '160px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                }}
              >
                About us
              </button>
              <button
                type="button"
                className="font-semibold rounded-full transition-all duration-300 active:scale-95 flex-1 sm:flex-none justify-center"
                style={{
                  padding: '12px 24px',
                  fontSize: '14px',
                  background: theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                  color: theme === 'dark' ? '#fff' : '#000',
                  border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
                  minWidth: '160px',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                }}
              >
                See our work
              </button>
            </div>
          </div>

          {/* Right: first two carousel rows only */}
          <div className="w-full lg:flex-1 flex flex-col gap-8 min-w-0 items-stretch">
            <div className="overflow-hidden" style={{ height: rowHeight, maskImage: 'linear-gradient(to right, transparent, black 8%, black 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 100%)' }}>
              {renderRow(row1Images)}
            </div>
            <div className="overflow-hidden" style={{ height: rowHeight, maskImage: 'linear-gradient(to right, transparent, black 8%, black 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 100%)' }}>
              {renderRow(row2Images, `translateX(-${scrollProgress * SCROLL_OFFSET}px)`)}
            </div>
          </div>
        </div>

        {/* Last carousel: full width from left edge of page, more space above */}
        <div
          className="w-full overflow-hidden"
          style={{
            marginTop: '40px',
          }}
        >
          <div className="overflow-hidden" style={{ height: rowHeight, maskImage: 'linear-gradient(to right, black 0%, black 100%)', WebkitMaskImage: 'linear-gradient(to right, black 0%, black 100%)' }}>
            {renderRow(row3Images, `translateX(${scrollProgress * SCROLL_OFFSET}px)`)}
          </div>
        </div>
      </div>

      {/* "Our Works" heading in scroll flow – sits behind the sticky block and is revealed as you scroll */}
      <div
        className="flex items-center justify-center w-full pointer-events-none"
        style={{
          minHeight: '18vh',
          paddingBottom: '1rem',
        }}
      >
        <h2
          className="font-primary font-bold select-none"
          style={{
            fontSize: 'clamp(48px, 12vw, 160px)',
            letterSpacing: '-0.02em',
            color: theme === 'dark' ? '#fff' : '#000',
            opacity: Math.min(1, Math.max(0, (scrollProgress - 0.35) / 0.45)),
            transform: `translateY(${scrollProgress < 0.5 ? 40 : 0}px)`,
            transition: 'opacity 0.2s ease-out, transform 0.35s ease-out',
          }}
        >
          Our <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>Works</span>
        </h2>
      </div>
    </section>
  );
};

export default ProjectCarousels;
