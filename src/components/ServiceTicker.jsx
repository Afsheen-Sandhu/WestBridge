import React from 'react';

const items = [
  'Code Customization',
  'Website Design & Development',
  'UI/UX Design',
  'Brand Identity',
  'Design Systems',
  'Interaction Design',
];

const ServiceTicker = () => {
  return (
    <section
      className="w-full bg-black relative"
      style={{ padding: '24px 0 32px', overflowX: 'clip' }}
    >
      <div
          className="w-full relative overflow-hidden"
          style={{
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.10)',
            background: 'rgba(10,10,10,0.95)',
          }}
        >
          <div
            className="flex w-max animate-marquee"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: 12,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
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

