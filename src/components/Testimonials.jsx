import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Quote } from 'lucide-react';

const testimonialsData = [
  {
    quote: "WestBridge delivered our new site on time and exceeded expectations. They really understand how to represent a brand online. Highly recommend for any Surrey business looking for premium web design.",
    author: "Sarah M.",
    role: "Marketing Director",
    company: "Surrey-based retail brand",
  },
  {
    quote: "Professional, responsive, and creative. Our Vancouver-based company needed a full rebrand and new website—WestBridge made the process smooth and the result is outstanding.",
    author: "James K.",
    role: "Founder",
    company: "Vancouver",
  },
  {
    quote: "Best web design agency we've worked with in BC. They understood our goals from day one and delivered a site that has genuinely increased our leads. Worth every penny.",
    author: "Priya L.",
    role: "Operations Lead",
    company: "British Columbia",
  },
  {
    quote: "From discovery to launch, the team was transparent and on point. We're in Surrey and they made it easy to collaborate. Our new site ranks well locally and converts.",
    author: "Michael T.",
    role: "Business Owner",
    company: "Surrey, BC",
  },
];

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      id="testimonials"
      style={{
        width: '100%',
        padding: 'clamp(80px, 10vw, 140px) 24px',
        background: isDark ? '#0a0a0a' : '#f5f5f5',
        transition: 'background 0.4s ease',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(40px, 6vw, 64px)',
            fontWeight: 700,
            textAlign: 'center',
            letterSpacing: '-0.04em',
            color: isDark ? '#fff' : '#000',
            marginBottom: '16px',
          }}
        >
          What clients in Surrey &amp; BC <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>say</span>
        </h2>
        <p
          style={{
            textAlign: 'center',
            fontSize: 'clamp(16px, 1.5vw, 18px)',
            color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
            maxWidth: '520px',
            margin: '0 auto 56px',
            lineHeight: 1.6,
          }}
        >
          Trusted by businesses across Surrey, Vancouver, and Canada.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '28px',
          }}
        >
          {testimonialsData.map((t, i) => (
            <blockquote
              key={i}
              style={{
                margin: 0,
                padding: '32px 28px',
                background: isDark ? 'rgba(255,255,255,0.03)' : '#fff',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'}`,
                borderRadius: '20px',
                position: 'relative',
                transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <Quote
                size={28}
                style={{
                  color: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)',
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                }}
              />
              <p
                style={{
                  fontSize: '16px',
                  lineHeight: 1.7,
                  color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.85)',
                  margin: '0 0 24px 0',
                  fontStyle: 'italic',
                }}
              >
                "{t.quote}"
              </p>
              <footer style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <cite style={{ fontStyle: 'normal', fontWeight: 700, fontSize: '15px', color: isDark ? '#fff' : '#000' }}>
                  {t.author}
                </cite>
                <span style={{ fontSize: '13px', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>
                  {t.role} · {t.company}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
