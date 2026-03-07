import React, { useRef, useState, useEffect } from 'react';

// Project images: each is a single image (e.g. laptop on desk with project on screen). Replace with your own.
const PROJECT_SLIDES = [
  { image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&q=80', alt: 'Project 1' },
  { image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80', alt: 'Project 2' },
  { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80', alt: 'Project 3' },
  { image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80', alt: 'Project 4' },
];

const ProjectSlide = ({ project, progress }) => {
  const enterOffset = 100;
  const blurAmount = 14;
  const bottomCurve = Math.round((1 - progress) * 200);

  const translateY = (1 - progress) * enterOffset;
  const blur = (1 - progress) * blurAmount;
  const opacity = Math.min(1, progress * 1.12);

  return (
    <div
      className="w-full flex justify-center px-4 sm:px-6"
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <div className="w-full max-w-6xl">
        <div
          className="relative overflow-hidden bg-neutral-900/50"
          style={{
            borderRadius: bottomCurve > 0 ? `20px 20px ${bottomCurve}px ${bottomCurve}px` : '20px',
            boxShadow: '0 32px 64px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
            transition: 'border-radius 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <div
            className="relative w-full overflow-hidden"
            style={{
              aspectRatio: '16 / 10',
              borderRadius: 'inherit',
            }}
          >
            <img
              src={project.image}
              alt={project.alt}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: `blur(${blur}px)`,
                transition: 'filter 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const OurWorksSlides = () => {
  const sectionRef = useRef(null);
  const slideRefs = useRef([]);
  const [progresses, setProgresses] = useState(PROJECT_SLIDES.map(() => 0));

  useEffect(() => {
    const updateProgresses = () => {
      const vh = window.innerHeight;
      const newProgresses = slideRefs.current.map((el) => {
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const slideTop = rect.top;
        const triggerStart = vh * 0.85;
        const triggerEnd = vh * 0.35;
        if (slideTop > triggerStart) return 0;
        if (slideTop < triggerEnd) return 1;
        const range = triggerStart - triggerEnd;
        return 1 - (slideTop - triggerEnd) / range;
      });
      setProgresses(newProgresses);
    };

    updateProgresses();
    window.addEventListener('scroll', updateProgresses, { passive: true });
    return () => window.removeEventListener('scroll', updateProgresses);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black pt-6 pb-32 md:pt-8 md:pb-40"
    >
      <div className="flex flex-col items-center w-full gap-y-24 sm:gap-y-32">
        {PROJECT_SLIDES.map((project, index) => (
          <div
            key={index}
            ref={(el) => { slideRefs.current[index] = el; }}
            className="w-full flex justify-center"
          >
            <ProjectSlide project={project} progress={progresses[index] ?? 0} />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16 md:mt-20">
        <button
          type="button"
          className="text-white/90 hover:text-white text-2xl md:text-3xl tracking-wide transition-colors duration-200"
          style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}
        >
          View all
        </button>
      </div>
    </section>
  );
};

export default OurWorksSlides;
