import React, { useMemo, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

import {
  Globe,
  PenTool,
  ShoppingCart,
  LayoutGrid,
  PanelTop,
  Fingerprint,
  Wand2,
  Send,
  Gauge,
  Wrench,
} from 'lucide-react';

const ServicesGrid = () => {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(null);


  const services = useMemo(
    () => [
      { title: 'Crafted\nWebsites', Icon: Globe },
      { title: 'Website\nRedesign', Icon: PenTool },
      { title: 'eCommerce\nWebsite Design', Icon: ShoppingCart },
      { title: 'CMS &\nDynamic Websites', Icon: LayoutGrid },
      { title: 'Landing Pages\n& Microsites', Icon: PanelTop },
      { title: 'Consistent\nIdentity', Icon: Fingerprint },
      { title: 'Motion &\nInteraction Design', Icon: Wand2 },
      { title: 'UX Centric\nStrategy', Icon: Send },
      { title: 'Performance\nOptimization', Icon: Gauge },
      { title: 'Maintenance &\nOngoing Support', Icon: Wrench },
    ],
    []
  );

  return (
    <section
      id="services"
      className="w-full relative transition-colors duration-400"
      style={{
        background: theme === 'dark' ? '#000' : '#fff',
        padding: 'clamp(60px, 8vw, 120px) 0 clamp(80px, 12vw, 160px)',
        overflowX: 'clip'
      }}
    >
      <div
        className="w-full flex flex-col lg:flex-row lg:items-center items-start justify-between gap-6 lg:gap-10"
        style={{ paddingBottom: '32px' }}
      >
        <h2
          className="font-body leading-tight"
          style={{
            color: theme === 'dark' ? '#fff' : '#000',
            fontSize: 'clamp(30px, 3.6vw, 52px)',
            letterSpacing: '-0.03em',
            fontWeight: 600,
          }}
        >
          Elevate your
          <br />
          digital footprint.
        </h2>

        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto"
          style={{ paddingBottom: 8 }}
        >
          <button
            type="button"
            className="rounded-full font-semibold transition-all duration-300 active:scale-95 flex-1 sm:flex-none justify-center"
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: theme === 'dark' ? '#fff' : '#000',
              color: theme === 'dark' ? '#000' : '#fff',
              border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
              minWidth: '160px',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 16px 36px rgba(255,255,255,0.18)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Start a project
          </button>
          <button
            type="button"
            className="rounded-full font-semibold transition-all duration-300 active:scale-95 flex-1 sm:flex-none justify-center"
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)',
              color: theme === 'dark' ? '#fff' : '#000',
              border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              minWidth: '160px',
              display: 'flex',
              alignItems: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.14)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            }}
          >
            See our work
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 w-full">
        {services.map(({ title, Icon }, idx) => {
          const isHovered = hovered === idx;
          return (
            <div
              key={`${title}-${idx}`}
              className="flex justify-center"
            >
              <div
                className="relative overflow-hidden"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  height: 168,
                  width: '100%',
                  maxWidth: 260,
                  borderRadius: 18,
                  border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                  background: theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)',
                  boxShadow: isHovered
                    ? (theme === 'dark' ? '0 40px 80px -40px rgba(255,255,255,0.18)' : '0 40px 80px -40px rgba(0,0,0,0.1)')
                    : 'none',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease, background 260ms ease',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 260ms ease',
                    background: theme === 'dark'
                      ? 'radial-gradient(60% 65% at 50% 35%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 28%, rgba(255,255,255,0) 70%)'
                      : 'radial-gradient(60% 65% at 50% 35%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 28%, rgba(0,0,0,0) 70%)',
                  }}
                />

                <div className="relative h-full w-full flex flex-col items-center justify-center gap-5 px-6 text-center">
                  <Icon
                    size={26}
                    color={theme === 'dark' ? 'rgba(255,255,255,0.92)' : 'rgba(0,0,0,0.8)'}
                    strokeWidth={1.8}
                  />
                  <div
                    className="font-body"
                    style={{
                      color: theme === 'dark' ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.6)',
                      fontSize: 13,
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {title}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesGrid;

