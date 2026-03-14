import React, { useMemo, useState } from 'react';
import { useTheme } from '../context/ThemeContext';


const PlatformFlexSection = () => {
  const { theme } = useTheme();
  const [hoveredIdx, setHoveredIdx] = useState(null);


  const logos = useMemo(
    () => [
      { label: 'Webflow' },
      { label: 'WordPress' },
      { label: 'Wix' },
      { label: 'Framer' },
      { label: 'Shopify' },
      { label: 'Squarespace' },
      { label: 'Sanity' },
      { label: 'Figma' },
    ],
    []
  );

  return (
    <section
      id="platforms"
      className="w-full relative transition-colors duration-400"
      style={{
        background: theme === 'dark' ? '#000' : '#fff',
        padding: 'clamp(60px, 8vw, 120px) 0 clamp(80px, 12vw, 160px)',
        overflowX: 'clip'
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {/* Left: video card */}
        <div
          className="relative overflow-hidden transition-all duration-400"
          style={{
            borderRadius: 18,
            border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            background: theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
            boxShadow: theme === 'dark' ? '0 32px 64px -36px rgba(0,0,0,0.7)' : '0 32px 64px -36px rgba(0,0,0,0.15)',
            minHeight: 260,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 1, filter: 'brightness(1.18) contrast(1.06) saturate(1.02)' }}
          >
            <source src="/file.mp4" type="video/mp4" />
          </video>

          {/* subtle overlay to match UI */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(90% 80% at 20% 20%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.62) 100%)',
            }}
          />

          <div className="absolute inset-0 z-10 flex items-center">
            <div
              className="w-full flex-1 flex flex-col items-start justify-center"
              style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '36px', paddingBottom: '36px' }}
            >
              <h2
                className="font-body text-left"
                style={{
                  color: '#fff', // Always white as it sits on video/dark gradient overlay
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.08,
                  fontSize: 'clamp(18px, 1.8vw, 24px)',
                  marginBottom: 10,
                }}
              >
                Platform flexibility.
                <br />
                Design consistency.
              </h2>
              <p
                className="font-body text-left"
                style={{
                  width: '280px',
                  maxWidth: '100%',
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: 13,
                  lineHeight: 1.6,
                  marginBottom: 18,
                }}
              >
                No matter the platform, our design language stays consistent, refined, responsive, and built to perform.
              </p>

              <button
                type="button"
                className="rounded-full font-semibold transition-all duration-300 active:scale-95"
                style={{
                  padding: '12px 24px',
                  fontSize: '14px',
                  background: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.16)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                See our work
              </button>
            </div>
          </div>
        </div>

        {/* Right: logos grid card */}
        <div
          className="relative overflow-hidden transition-all duration-400"
          style={{
            borderRadius: 18,
            border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
            background: theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
            boxShadow: theme === 'dark' ? '0 32px 64px -36px rgba(0,0,0,0.7)' : '0 32px 64px -36px rgba(0,0,0,0.15)',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {logos.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-center transition-all duration-400"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    height: 132,
                    background: isHovered
                      ? (theme === 'dark' ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)')
                      : 'transparent',
                    borderRight: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                    borderBottom: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                    transition: 'background 200ms ease',
                    display: 'flex', // Ensure flex container
                    alignItems: 'center', // Center vertically
                    justifyContent: 'center', // Center horizontally
                  }}
                >
                  <div
                    className="font-body"
                    style={{
                      color: isHovered
                        ? (theme === 'dark' ? '#fff' : '#000')
                        : (theme === 'dark' ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)'),
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      fontSize: 16,
                      textAlign: 'center', // Center text
                      transition: 'color 200ms ease',
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFlexSection;

