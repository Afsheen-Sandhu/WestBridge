import React from 'react';

// Project images: each is a single image (e.g. laptop on desk with project on screen). Replace with your own.
const PROJECT_SLIDES = [
  { image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80', alt: 'Project 1' },
  { image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80', alt: 'Project 2' },
  { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'Project 3' },
  { image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80', alt: 'Project 4' },
];

const ProjectSlide = ({ project }) => {
  return (
    <div className="w-full flex justify-center px-4 sm:px-6">
      <div className="w-full max-w-6xl">
        <div
          className="relative overflow-hidden bg-neutral-900/50"
          style={{
            borderRadius: '20px',
            boxShadow: '0 32px 64px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
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
          </div>
        </div>
      </div>
    </div>
  );
};

const OurWorksSlides = () => {
  return (
    <section className="relative bg-black pt-6 pb-[96px] md:pt-8 md:pb-[160px] lg:pb-[240px]">
      <div className="flex flex-col items-center w-full gap-y-12 sm:gap-y-32">
        {PROJECT_SLIDES.map((project, index) => (
          <ProjectSlide key={index} project={project} />
        ))}
      </div>

      <div className="flex justify-center" style={{ paddingTop: '80px', marginTop: '20px' }}>
        <button
          type="button"
          className="font-semibold rounded-full transition-all duration-300 active:scale-95"
          style={{
            padding: '12px 24px',
            fontSize: '14px',
            background: 'rgba(255,255,255,0.06)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(12px)',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
        >
          View all projects
        </button>
      </div>
    </section>
  );
};

export default OurWorksSlides;
