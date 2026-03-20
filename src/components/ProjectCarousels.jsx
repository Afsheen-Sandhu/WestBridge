import React, { useRef, useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';


// Replace these with your actual project image paths under /public
const PROJECT_IMAGES = [
  { src: '/img11.webp', alt: 'Tranquil SaaS Marketing Platform - High-speed web application with smooth interactions', title: 'Tranquil SaaS Web Platform' },
  { src: '/img1.webp', alt: 'Murakami City Fine Dining Experience - Elegant restaurant website with reservation system', title: 'Murakami City Restaurant Website' },
  { src: '/img5.webp', alt: 'Ochi Design Agency Portfolio - Interactive 3D web showcase with advanced motion', title: 'Ochi Design Portfolio' },
  { src: '/img17.webp', alt: 'Doze Studio Creative Portal - Experimental WebGL 3D storytelling experience', title: 'Doze Studio Creative Website' },
  { src: '/img24.webp', alt: 'Well Designed eCommerce Lifestyle Store - Premium Grecian lifestyle online shop', title: 'Well Designed eCommerce Platform' },
  { src: '/img8.webp', alt: 'Kinective Fitness Community Platform - Custom fitness booking and scheduling site', title: 'Kinective Fitness Web App' },
  { src: '/img2.webp', alt: 'JF Vegan Cafe Organic UI - Sustainable food brand website with fluid design', title: 'JF Vegan Cafe Website' },
  { src: '/img13.webp', alt: 'Solstice Interior Design Showcase - High-resolution interior design portfolio', title: 'Solstice Design Portfolio' },
  { src: '/img9.webp', alt: 'Stampede Auto Performance Dealership - Automotive inventory and filtering platform', title: 'Stampede Auto Website' },
  { src: '/img14.webp', alt: 'FMIG Healthcare Corporate Portal - Multi-lingual medical group infrastructure', title: 'FMIG Corporate Website' },
  { src: '/img23.webp', alt: 'Uptura Digital Agency Hub - Modern agency portfolio with glassmorphism', title: 'Uptura Agency Website' },
  { src: '/img12.webp', alt: 'Eclectic Lifestyle Co Digital Magazine - Editorial-style lifestyle publication', title: 'Eclectic Lifestyle Magazine' },
  { src: '/img3.webp', alt: 'Nidaba Spirit Artisanal eCommerce - Luxury Italian craft spirit storefront', title: 'Nidaba Spirit Online Shop' },
  { src: '/img18.webp', alt: 'Brewitty Creative Narrative Website - Conversational B2B marketing platform', title: 'Brewitty Creative Portfolio' },
  { src: '/img20.webp', alt: 'Solidroad AI Training SaaS - Interactive SaaS platform for AI development', title: 'Solidroad AI Platform' },
  { src: '/img4.webp', alt: 'Restaurant Gem Polished Dining UI - Fass facelift for modern dining', title: 'Restaurant Gem Facelift' },
  { src: '/img16.webp', alt: 'Bartosz Kolenda Developer Hub - Ultra-fast minimalist developer portfolio', title: 'Bartosz Kolenda Portfolio' },
  { src: '/img6.webp', alt: 'Lento Agency Typography Portfolio - Strategic design agency web infrastructure', title: 'Lento Agency Website' },
  { src: '/img10.webp', alt: 'Masons Italian Fashion Store - International luxury fashion eCommerce platform', title: 'Masons Luxury Fashion Shop' },
  { src: '/img15.webp', alt: 'Austo Entertainment Live Portal - Media-rich event production website', title: 'Austo Entertainment Website' },
  { src: '/img7.webp', alt: 'Bajgart Office Brutalist UI - Architectural firm digital translation', title: 'Bajgart Office Website' },
  { src: '/img19.webp', alt: 'Jamm Modern Food Brand UI - Fast and loud food franchise application', title: 'Jamm Food Brand Website' },
  { src: '/img21.webp', alt: 'General Intelligence Co Think Tank - Stark brutalist digital infrastructure', title: 'GIC Think Tank Website' },
  { src: '/img22.webp', alt: 'Epiminds Agency Insights Hub - Interconnected CMS and case study platform', title: 'Epiminds Agency Website' },
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
      {[...images, ...images].map((img, i) => (
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
            src={img.src}
            alt={img.alt}
            title={img.title}
            width={CARD_WIDTH}
            height={rowHeight}
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
              <Link
                to="/about-us"
                className="font-semibold rounded-full transition-all duration-300 active:scale-95 flex-1 sm:flex-none justify-center"
                aria-label="Learn more about WestBridge"
                style={{
                  padding: '12px 24px',
                  fontSize: '14px',
                  background: theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)',
                  color: theme === 'dark' ? '#fff' : '#000',
                  border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'}`,
                  minWidth: '160px',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme === 'dark' ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)';
                }}
              >
                About us
              </Link>
              <Link
                to="/works"
                className="font-semibold rounded-full transition-all duration-300 active:scale-95 flex-1 sm:flex-none justify-center"
                aria-label="View our work portfolio"
                style={{
                  padding: '12px 24px',
                  fontSize: '14px',
                  background: theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                  color: theme === 'dark' ? '#fff' : '#000',
                  border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
                  minWidth: '160px',
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)';
                }}
              >
                See our work
              </Link>
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
            {renderRow(row3Images, `translateX(calc(-400px + ${scrollProgress * SCROLL_OFFSET}px))`)}
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
