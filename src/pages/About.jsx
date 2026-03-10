import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import GlowBadge from '../components/GlowBadge';

const About = () => {
    const { theme } = useTheme();
    const [imgHover, setImgHover] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const values = [
        {
            title: "Clarity",
            description: "We believe in the power of simplicity. Our design process is centered on bringing absolute focus and clarity to every digital experience.",
            align: "left"
        },
        {
            title: "Precision",
            description: "Detail is our signature. From pixel-perfect layouts to fluid motion, precision dictates every element we craft.",
            align: "right"
        },
        {
            title: "Purpose",
            description: "Innovation starts with deep understanding. We design with intentionality, ensuring every creative choice serves a meaningful goal.",
            align: "left"
        },
        {
            title: "Consistency",
            description: "Seamless experiences are built on systems. We create cohesive digital identities that feel dependable across every interaction.",
            align: "right"
        },
        {
            title: "Performance",
            description: "True beauty lies in excellence. A project is only complete when it operates as flawlessly as it looks—fast, secure, and reliable.",
            align: "left"
        }
    ];

    return (
        <div className="w-full transition-colors duration-400" style={{ background: theme === 'dark' ? '#000' : '#fff' }}>
            <section
                className="w-full flex flex-col items-center"
                style={{
                    padding: 'clamp(140px, 15vw, 180px) 0 clamp(80px, 10vw, 120px)',
                }}
            >
                {/* Text Content Container */}
                <div className="w-full max-w-[1000px] px-8 flex flex-col items-center text-center">

                    <div className="flex justify-center w-full mb-8">
                        <GlowBadge>Our Story</GlowBadge>
                    </div>

                    <h1
                        className="mb-12 leading-[1.1] text-center"
                        style={{
                            fontSize: 'clamp(40px, 6vw, 72px)',
                            fontWeight: 800,
                            color: theme === 'dark' ? '#fff' : '#000',
                            letterSpacing: '-0.04em'
                        }}
                    >
                        About Our <br />
                        <span className="font-accent italic font-normal opacity-90">Journey</span>
                    </h1>

                    <div className="flex flex-col gap-14 items-center w-full mb-32">
                        {/* Lead Text */}
                        <p
                            className="text-lg md:text-2xl leading-relaxed font-medium text-center"
                            style={{
                                color: theme === 'dark' ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.9)',
                                letterSpacing: '-0.02em',
                                maxWidth: '850px'
                            }}
                        >
                            We are a Canada-based digital solutions company dedicated to building modern, high-performing websites and digital experiences for businesses around the world. Our team specializes in both creative design and functional development, ensuring every project is visually engaging, technically robust, and optimized for growth.
                        </p>

                        {/* Founder/Secondary Text */}
                        <div className="flex flex-col gap-10 items-center max-w-[850px]">
                            <p
                                className="text-base md:text-lg leading-relaxed opacity-60 text-center"
                                style={{ color: theme === 'dark' ? '#fff' : '#000' }}
                            >
                                From custom web development to powerful no-code and CMS platforms, we provide tailored solutions using technologies like WordPress, Webflow, and Shopify. Whether it's a business website, an e-commerce store, or a scalable web platform, we focus on delivering solutions that are fast, secure, and user-friendly.
                            </p>

                            <div className="flex flex-col items-center">
                                <p
                                    className="text-base md:text-lg leading-relaxed font-medium text-center"
                                    style={{
                                        color: theme === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.7)',
                                    }}
                                >
                                    <span className="inline align-middle">
                                        Founded by
                                        {' '}
                                        <span
                                            className="inline-flex items-center justify-center p-[2px] rounded-full border border-dashed mx-3 align-middle"
                                            style={{
                                                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.2)',
                                                background: theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.04)'
                                            }}
                                        >
                                            <img
                                                src="/junaid.jpeg"
                                                alt="Junaid"
                                                className="w-8 h-8 rounded-full object-cover"
                                            />
                                        </span>
                                        {' '}
                                        <a
                                            href="https://www.linkedin.com/in/asgharjunaid/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:opacity-75 transition-all duration-300 align-middle"
                                            style={{
                                                color: theme === 'dark' ? '#fff' : '#000',
                                                fontWeight: 500,
                                                fontFamily: "'Instrument Serif', serif",
                                                fontStyle: 'italic',
                                                fontSize: '1.25em',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            Junaid
                                        </a>,
                                        {' '}WestBridge was created from a passion for visual innovation and a belief in designing with detail. Every project reflects a commitment to clarity, purpose, and precision, values that define both the work and the process behind it.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Our Values Section */}
                    <div className="w-full max-w-[900px] flex flex-col items-center mt-60 pt-20 border-t border-white/[0.05]">
                        <h2
                            className="mb-24 text-4xl font-bold tracking-tight text-center"
                            style={{ color: theme === 'dark' ? '#fff' : '#000' }}
                        >
                            Our Values
                        </h2>

                        <div className="relative w-full">
                            {/* Central Vertical Line */}
                            <div
                                className="absolute top-0 bottom-0 w-[1px]"
                                style={{
                                    background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                                    left: 'var(--line-pos, 50%)'
                                }}
                            />

                            <style>
                                {`
                                    @media (max-width: 768px) {
                                        :root { --line-pos: 20px; }
                                    }
                                    @media (min-width: 769px) {
                                        :root { --line-pos: 50%; }
                                    }
                                `}
                            </style>

                            <div className="relative w-full flex flex-col items-center">
                                {values.map((v, i) => (
                                    <div
                                        key={i}
                                        className={`relative w-full flex mb-28 last:mb-0 
                                            flex-col md:flex-row
                                            ${v.align === 'left' ? 'md:justify-start' : 'md:justify-end'}
                                        `}
                                    >
                                        {/* Tick Point Line */}
                                        <div
                                            className={`absolute h-[1px] w-6 
                                                top-[14px] md:top-[18px]
                                                ${v.align === 'left' ? 'md:-translate-x-full' : 'translate-x-0'}
                                                left-[var(--line-pos)]
                                            `}
                                            style={{
                                                background: theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.35)',
                                            }}
                                        />

                                        <div className={`
                                            w-full md:w-[42%] 
                                            pl-12 md:pl-0
                                            ${v.align === 'left' ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}
                                            text-left
                                        `}>
                                            <h3
                                                className="text-2xl md:text-3xl font-bold mb-4 leading-none"
                                                style={{ color: theme === 'dark' ? '#fff' : '#000' }}
                                            >
                                                {v.title}
                                            </h3>
                                            <p
                                                className="text-sm md:text-base leading-relaxed opacity-60"
                                                style={{ color: theme === 'dark' ? '#fff' : '#000' }}
                                            >
                                                {v.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Landscape Image - Full Width, Sharp Corners with Glow Effect */}
                <div
                    className="relative w-full aspect-[21/8] md:aspect-[21/6] overflow-hidden cursor-pointer mt-60"
                    onMouseEnter={() => setImgHover(true)}
                    onMouseLeave={() => setImgHover(false)}
                >
                    <img
                        src="/about2.png"
                        alt="WestBridge Full Width"
                        className="w-full h-full object-cover"
                        style={{
                            opacity: theme === 'dark' ? (imgHover ? 0.85 : 0.5) : (imgHover ? 0.95 : 0.8),
                            filter: theme === 'dark'
                                ? (imgHover ? 'grayscale(0%) contrast(1.2) brightness(1.2) drop-shadow(0 0 30px rgba(255,255,255,0.25))' : 'grayscale(100%) contrast(1.1)')
                                : (imgHover ? 'grayscale(0%) contrast(1.1) brightness(1.1)' : 'grayscale(100%) contrast(0.9)'),
                            transition: 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
                        }}
                    />
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: theme === 'dark'
                                ? 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
                                : 'linear-gradient(to top, rgba(0,0,0,0.05), transparent)',
                            opacity: imgHover ? 0.2 : 1,
                            transition: 'opacity 0.8s ease'
                        }}
                    />
                </div>
            </section>
        </div>
    );
};

export default About;
