import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';


// Real project slides
const PROJECT_SLIDES = [
  { image: '/work1.png', alt: 'Akaneya — Japanese sumibiyaki', link: 'https://akaneyajapan.com/en/' },
  { image: '/work2.png', alt: 'CHANI Shop — astrology workshops & ritual tools', link: 'https://chanishop.com/' },
  { image: '/work4.png', alt: 'Burger & Sauce — tasty burgers, fresh everyday', link: 'https://www.burgerandsauce.com/' },
  { image: '/work6.png', alt: 'Frequency Breathwork — healing begins with the breath', link: 'https://frequencybreathwork.com/' },
];

const ProjectSlide = ({ project }) => {
  const { theme } = useTheme();
  const card = (
    <div
      className="relative overflow-hidden transition-all duration-400"
      style={{
        borderRadius: '20px',
        background: theme === 'dark' ? 'rgba(23, 23, 23, 0.5)' : 'rgba(245, 245, 245, 0.8)',
        boxShadow: theme === 'dark'
          ? '0 32px 64px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)'
          : '0 32px 64px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.06)',
      }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: '16 / 10', borderRadius: 'inherit' }}
      >
        <img
          src={project.image}
          alt={project.alt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {project.link && (
          <div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: theme === 'dark' ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.35)',
              borderRadius: 'inherit',
            }}
          >
            <span
              className="text-white"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 'clamp(14px, 1.5vw, 18px)',
                letterSpacing: '0.02em',
              }}
            >
              View project
            </span>
          </div>
        )}
      </div>
    </div>
  );

  if (!project.link) {
    return card;
  }

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-[20px]"
    >
      {card}
    </a>
  );
};

const OurWorksSlides = () => {
  const { theme } = useTheme();
  return (
    <section
      id="works"
      className="relative pt-6 pb-[96px] md:pt-8 md:pb-[160px] lg:pb-[240px] transition-colors duration-400"
      style={{ background: theme === 'dark' ? '#000' : '#fff' }}
    >
      <div className="w-full px-4 sm:px-6 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full max-w-[1100px]">
          {PROJECT_SLIDES.map((project, index) => (
            <div key={index} className="w-full flex justify-center">
              <div className="w-full max-w-[520px]">
                <ProjectSlide project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center" style={{ paddingTop: '80px', marginTop: '20px' }}>
        <Link
          to="/works"
          className="font-semibold rounded-full transition-all duration-300 active:scale-95 inline-block"
          style={{
            padding: '12px 24px',
            fontSize: '14px',
            background: theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)',
            color: theme === 'dark' ? '#fff' : '#000',
            border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
            backdropFilter: 'blur(12px)',
            textDecoration: 'none',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'; }}
        >
          View all projects
        </Link>
      </div>
    </section>
  );
};

export default OurWorksSlides;
