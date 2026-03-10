import React from 'react';
import { useTheme } from '../context/ThemeContext';


const items = [
  'Code Customization',
  'Website Design & Development',
  'UI/UX Design',
  'Brand Identity',
  'Design Systems',
  'Interaction Design',
];

const ServiceTicker = () => {
  const { theme } = useTheme();
  return (
    <section
      className="w-full relative transition-colors duration-400"
      style={{
        background: theme === 'dark' ? '#000' : '#fff',
        padding: 'clamp(24px, 4vw, 48px) 0 clamp(32px, 5vw, 64px)',
        overflowX: 'clip'
      }}
    >
      <div
        className="w-full relative overflow-hidden"
        style={{
          borderRadius: 999,
          border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
          background: theme === 'dark' ? 'rgba(10,10,10,0.95)' : 'rgba(245,245,245,0.95)',
        }}
      >
        <div
          className="flex w-max animate-marquee"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 12,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: theme === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
            whiteSpace: 'nowrap',
            paddingLeft: 32,
          }}
        >
          {[...Array(3)].map((_, loopIndex) => (
            <div
              key={loopIndex}
              className="flex items-center gap-8 px-12"
              style={{ paddingTop: 10, paddingBottom: 10 }}
            >
              {items.map((label, idx) => (
                <React.Fragment key={`${loopIndex}-${idx}`}>
                  <span>{label}</span>
                  {idx !== items.length - 1 && <span>•</span>}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceTicker;

