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
        },
        {
            title: "Partnership",
            description: "We see every engagement as a long-term collaboration—communicating openly, sharing context, and making decisions together so the work continues to deliver value well beyond launch.",
            align: "right"
        }
    ];

    return (
        <div
            className="w-full transition-colors duration-400"
            style={{ background: theme === 'dark' ? '#000' : '#fff' }}
        >
            <section
                className="w-full"
                style={{
                    paddingTop: 180,
                    paddingBottom: 96,
                }}
            >
                <div className="layout-outer">
                    <div className="layout-inner">
                        {/* Top story block – center aligned, clear of navbar */}
                        <div
                            style={{
                                maxWidth: 960,
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                textAlign: 'center',
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
                                <GlowBadge>Our Story</GlowBadge>
                            </div>

                            <h1
                                style={{
                                    fontSize: 'clamp(40px, 5.4vw, 70px)',
                                    fontWeight: 800,
                                    color: theme === 'dark' ? '#fff' : '#000',
                                    letterSpacing: '-0.04em',
                                    lineHeight: 1.08,
                                    marginTop: 24,
                                    marginBottom: 40,
                                }}
                            >
                                About Our <br />
                                <span className="font-accent italic font-normal opacity-90">
                                    Journey
                                </span>
                            </h1>

                            <p
                                style={{
                                    fontSize: 'clamp(1.125rem, 2vw, 1.5rem)',
                                    lineHeight: 1.6,
                                    fontWeight: 500,
                                    color: theme === 'dark'
                                        ? 'rgba(255,255,255,0.95)'
                                        : 'rgba(0,0,0,0.9)',
                                    letterSpacing: '-0.02em',
                                    maxWidth: 820,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    textAlign: 'center',
                                }}
                            >
                                We are a Canada-based digital solutions company dedicated to
                                building modern, high-performing websites and digital experiences
                                for businesses around the world. Our team specializes in both
                                creative design and functional development, ensuring every project
                                is visually engaging, technically robust, and optimized for growth.
                            </p>

                            <div
                                style={{
                                    marginTop: 48,
                                    maxWidth: 840,
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    textAlign: 'center',
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                                        lineHeight: 1.7,
                                        color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                                        marginBottom: 40,
                                    }}
                                >
                                    From custom web development to powerful no-code and CMS
                                    platforms, we provide tailored solutions using technologies like
                                    WordPress, Webflow, and Shopify. Whether it's a business
                                    website, an e-commerce store, or a scalable web platform, we
                                    focus on delivering solutions that are fast, secure, and
                                    user-friendly.
                                </p>

                                <p
                                    style={{
                                        fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                                        lineHeight: 1.7,
                                        fontWeight: 500,
                                        color: theme === 'dark'
                                            ? 'rgba(255,255,255,0.8)'
                                            : 'rgba(0,0,0,0.7)',
                                        textAlign: 'center',
                                    }}
                                >
                                    <span className="inline align-middle">
                                        Founded by{' '}
                                        <span
                                            className="inline-flex items-center justify-center p-[2px] rounded-full border border-dashed mx-3 align-middle"
                                            style={{
                                                borderColor: theme === 'dark'
                                                    ? 'rgba(255,255,255,0.25)'
                                                    : 'rgba(0,0,0,0.2)',
                                                background: theme === 'dark'
                                                    ? 'rgba(255,255,255,0.06)'
                                                    : 'rgba(0,0,0,0.04)',
                                            }}
                                        >
                                            <img
                                                src="/junaid.webp"
                                                alt="Junaid Khan - Founder of WestBridge IT Solutions"
                                                width={32}
                                                height={32}
                                                className="w-8 h-8 rounded-full object-cover"
                                                loading="lazy"
                                            />
                                        </span>
                                        <a
                                            href="https://www.linkedin.com/in/asgharjunaid/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Connect with Junaid Khan on LinkedIn"
                                            className="hover:opacity-75 transition-all duration-300 align-middle"
                                            style={{
                                                color: theme === 'dark' ? '#fff' : '#000',
                                                fontWeight: 500,
                                                fontFamily: "'Instrument Serif', serif",
                                                fontStyle: 'italic',
                                                fontSize: '1.25em',
                                                textDecoration: 'none',
                                            }}
                                        >
                                            Junaid
                                        </a>
                                        , WestBridge was created from a passion for visual
                                        innovation and a belief in designing with detail. Every
                                        project reflects a commitment to clarity, purpose, and
                                        precision, values that define both the work and the process
                                        behind it.
                                    </span>
                                </p>
                            </div>
                        </div>

                        {/* Wide image block */}
                        <div className="mt-20 md:mt-24">
                            <div className="relative w-full overflow-hidden border border-white/10">
                                <img
                                    src="/about2.webp"
                                    alt="Modern Creative Studio Workspace - WestBridge IT Solutions team environment"
                                    width={1200}
                                    height={520}
                                    className="w-full h-full object-cover"
                                    style={{
                                        maxHeight: '520px',
                                        opacity: theme === 'dark'
                                            ? (imgHover ? 0.9 : 0.6)
                                            : (imgHover ? 0.95 : 0.8),
                                        filter: theme === 'dark'
                                            ? (imgHover
                                                ? 'grayscale(0%) contrast(1.15) brightness(1.1)'
                                                : 'grayscale(100%) contrast(1.05)')
                                            : (imgHover
                                                ? 'grayscale(0%) contrast(1.05) brightness(1.05)'
                                                : 'grayscale(90%) contrast(0.95)'),
                                        transition:
                                            'all 0.7s cubic-bezier(0.23, 1, 0.32, 1)',
                                    }}
                                    onMouseEnter={() => setImgHover(true)}
                                    onMouseLeave={() => setImgHover(false)}
                                />
                                <div
                                    className="absolute inset-0 pointer-events-none"
                                    style={{
                                        background: theme === 'dark'
                                            ? 'radial-gradient(circle at top, rgba(255,255,255,0.06), transparent 55%)'
                                            : 'radial-gradient(circle at top, rgba(0,0,0,0.06), transparent 55%)',
                                        opacity: imgHover ? 0.2 : 0.6,
                                        transition: 'opacity 0.7s ease',
                                    }}
                                />
                            </div>
                        </div>

                        {/* Our Values – new design */}
                        <div className="mt-32 md:mt-48 px-6 md:px-10">
                            <div className="flex flex-col items-center text-center">
                                <GlowBadge>What guides our work</GlowBadge>
                                <h2
                                    className="mt-6 text-3xl md:text-4xl font-bold tracking-tight"
                                    style={{ color: theme === 'dark' ? '#fff' : '#000' }}
                                >
                                    Our Values
                                </h2>
                                <p
                                    className="mt-4 text-sm md:text-base max-w-[560px] mx-auto px-4 md:px-0"
                                    style={{
                                        color: theme === 'dark'
                                            ? 'rgba(255,255,255,0.6)'
                                            : 'rgba(0,0,0,0.6)',
                                        paddingTop: 8,
                                        paddingBottom: 8,
                                        lineHeight: 1.6
                                    }}
                                >
                                    The principles we return to on every project—from first
                                    strategy call to final handoff.
                                </p>
                            </div>

                            <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                                {values.map((v, index) => (
                                    <div key={index}>
                                        <h3
                                            style={{
                                                fontSize: '1.15rem',
                                                fontWeight: 600,
                                                letterSpacing: '-0.02em',
                                                marginBottom: 8,
                                                color:
                                                    theme === 'dark'
                                                        ? '#fff'
                                                        : '#0a0a0a',
                                            }}
                                        >
                                            {v.title}
                                        </h3>
                                        <p
                                            style={{
                                                fontSize: '0.95rem',
                                                lineHeight: 1.7,
                                                color:
                                                    theme === 'dark'
                                                        ? 'rgba(255,255,255,0.7)'
                                                        : 'rgba(0,0,0,0.7)',
                                            }}
                                        >
                                            {v.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
