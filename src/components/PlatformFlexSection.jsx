import React, { useMemo, useState } from 'react';

const PlatformFlexSection = () => {
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
      className="w-full bg-black relative"
      style={{ padding: 'clamp(60px, 8vw, 120px) 0 clamp(80px, 12vw, 160px)', overflowX: 'clip' }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
        {/* Left: video card */}
        <div
          className="relative overflow-hidden"
          style={{
            borderRadius: 18,
            border: '1px solid rgba(255,255,255,0.10)',
            background: 'rgba(255,255,255,0.02)',
            boxShadow: '0 32px 64px -36px rgba(0,0,0,0.7)',
            minHeight: 260,
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 1, filter: 'brightness(1.18) contrast(1.06) saturate(1.02)' }}
          >
            <source src="/file.mp4" type="video/mp4" />
          </video>

          {/* subtle overlay to match dark UI */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(90% 80% at 20% 20%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.62) 100%)',
            }}
          />

          <div className="absolute inset-0 z-10 flex items-center">
            <div
              className="w-full flex-1 flex flex-col items-start justify-center px-6 py-10 md:px-12 md:py-12"
            >
              <h3
                className="text-white font-body text-left"
                style={{
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1.05,
                  fontSize: 'clamp(28px, 2.5vw, 34px)',
                  marginBottom: 10,
                }}
              >
                Platform flexibility.
                <br />
                Design consistency.
              </h3>
              <p
                className="font-body text-left"
                style={{
                  maxWidth: 520,
                  color: 'rgba(255,255,255,0.55)',
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
                  padding: '11px 18px',
                  fontSize: '13px',
                  background: 'rgba(255,255,255,0.10)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.14)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.16)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.10)';
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
          className="relative overflow-hidden"
          style={{
            borderRadius: 18,
            border: '1px solid rgba(255,255,255,0.10)',
            background: 'rgba(255,255,255,0.02)',
            boxShadow: '0 32px 64px -36px rgba(0,0,0,0.7)',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4">
            {logos.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <div
                  key={item.label}
                  className="flex items-center justify-center border-white/10 border-b border-r [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 md:[&:nth-last-child(-n+4)]:border-b-0"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    height: 132,
                    background: isHovered ? 'rgba(255,255,255,0.03)' : 'transparent',
                    transition: 'background 200ms ease',
                  }}
                >
                  <div
                    className="font-body"
                    style={{
                      color: isHovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.65)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      fontSize: 16,
                      opacity: 0.95,
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

