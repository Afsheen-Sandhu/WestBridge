import React, { useState, useEffect, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Quote } from 'lucide-react';

const testimonialsData = [
  {
    quote: "WestBridge delivered our new site on time and exceeded expectations. They really understand how to represent a brand online. Highly recommend for any Surrey business looking for premium web design.",
    author: "Sarah M.",
    role: "Marketing Director",
    company: "Surrey-based retail brand",
    initials: "SM",
  },
  {
    quote: "Professional, responsive, and creative. Our Vancouver-based company needed a full rebrand and new website—WestBridge made the process smooth and the result is outstanding.",
    author: "James K.",
    role: "Founder",
    company: "Vancouver",
    initials: "JK",
  },
  {
    quote: "Best web design agency we've worked with in BC. They understood our goals from day one and delivered a site that has genuinely increased our leads. Worth every penny.",
    author: "Priya L.",
    role: "Operations Lead",
    company: "British Columbia",
    initials: "PL",
  },
  {
    quote: "From discovery to launch, the team was transparent and on point. We're in Surrey and they made it easy to collaborate. Our new site ranks well locally and converts.",
    author: "Michael T.",
    role: "Business Owner",
    company: "Surrey, BC",
    initials: "MT",
  },
];

const AVATAR_COLORS = [
  'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
  'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
];

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isSm, setIsSm] = useState(typeof window !== 'undefined' && window.innerWidth < 640);

  useEffect(() => {
    const onResize = () => setIsSm(window.innerWidth < 640);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const goTo = useCallback((i) => {
    setIndex((prev) => {
      if (i < 0) return testimonialsData.length - 1;
      if (i >= testimonialsData.length) return 0;
      return i;
    });
  }, []);

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused]);

  const slidePercent = (100 / testimonialsData.length) * index;

  return (
    <section
      id="testimonials"
      style={{
        width: '100%',
        padding: isSm ? 'clamp(48px, 10vw, 80px) 16px' : 'clamp(80px, 10vw, 140px) 24px',
        background: isDark ? '#0a0a0a' : '#f5f5f5',
        transition: 'background 0.4s ease',
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div style={{ maxWidth: isSm ? '100%' : '900px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: isSm ? 'clamp(24px, 7vw, 32px)' : 'clamp(40px, 6vw, 64px)',
            fontWeight: 700,
            textAlign: 'center',
            letterSpacing: '-0.04em',
            color: isDark ? '#fff' : '#000',
            marginBottom: '12px',
          }}
        >
          What clients in Surrey &amp; BC <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>say</span>
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontSize: isSm ? '14px' : 'clamp(16px, 1.5vw, 18px)',
            color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
            maxWidth: '520px',
            margin: '0 auto 40px',
            lineHeight: 1.6,
          }}
        >
          Trusted by businesses across Surrey, Vancouver, and Canada.
        </p>

        {/* Carousel with smooth slide (plain CSS transform) */}
        <div style={{ position: 'relative' }}>
          <div style={{ overflow: 'hidden', borderRadius: isSm ? '16px' : '20px' }}>
            <div
              style={{
                display: 'flex',
                width: `${testimonialsData.length * 100}%`,
                transform: `translateX(-${slidePercent}%)`,
                transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {testimonialsData.map((t, i) => (
                <blockquote
                  key={i}
                  style={{
                    margin: 0,
                    flex: `0 0 ${100 / testimonialsData.length}%`,
                    width: `${100 / testimonialsData.length}%`,
                    padding: isSm ? '20px 14px 20px 14px' : '32px 20px 32px 20px',
                    background: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                    borderRadius: isSm ? '16px' : '20px',
                    position: 'relative',
                    boxSizing: 'border-box',
                    boxShadow: isDark ? '0 12px 40px rgba(0,0,0,0.15)' : '0 12px 40px rgba(0,0,0,0.05)',
                  }}
                >
                  <Quote
                    size={isSm ? 20 : 26}
                    style={{
                      color: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)',
                      position: 'absolute',
                      top: isSm ? '12px' : '20px',
                      right: isSm ? '12px' : '20px',
                    }}
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <div
                      style={{
                        width: isSm ? '44px' : '64px',
                        height: isSm ? '44px' : '64px',
                        borderRadius: '50%',
                        background: AVATAR_COLORS[i % AVATAR_COLORS.length],
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: isSm ? '12px' : '18px',
                        flexShrink: 0,
                        color: '#fff',
                        fontSize: isSm ? '14px' : '20px',
                        fontWeight: 700,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      {t.initials}
                    </div>
                    <p
                      style={{
                        fontSize: isSm ? '13px' : '15px',
                        lineHeight: 1.65,
                        color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.85)',
                        margin: '0 0 14px 0',
                        fontStyle: 'italic',
                        maxWidth: '520px',
                      }}
                    >
                      "{t.quote}"
                    </p>
                    <footer style={{ display: 'flex', flexDirection: 'column', gap: '1px', alignItems: 'center' }}>
                      <cite style={{ fontStyle: 'normal', fontWeight: 700, fontSize: isSm ? '13px' : '15px', color: isDark ? '#fff' : '#000' }}>
                        {t.author}
                      </cite>
                      <span style={{ fontSize: isSm ? '11px' : '13px', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                        {t.role} · {t.company}
                      </span>
                    </footer>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Dots only */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: isSm ? '6px' : '8px',
              marginTop: isSm ? '20px' : '28px',
            }}
          >
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: i === index ? (isSm ? '18px' : '22px') : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background: i === index
                    ? (isDark ? '#fff' : '#000')
                    : (isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)'),
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
