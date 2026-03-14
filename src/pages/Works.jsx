import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import GlowBadge from '../components/GlowBadge';
import Breadcrumbs from '../components/Breadcrumbs';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

import { projectsData as projects } from '../data/projectsData';

const categories = ["All", "Food & Restaurant", "Agency", "Creative", "Fitness", "Ecommerce", "SaaS", "Lifestyle", "Portfolio", "Healthcare"];

const Works = () => {
    const { theme } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1400);
    const isDark = theme === 'dark';

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClick = (e) => {
            if (!e.target.closest('.filter-wrapper')) setIsFilterOpen(false);
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

    const isMobile = windowWidth <= 768;
    const isSmallMobile = windowWidth <= 480;
    const isTablet = windowWidth <= 1024 && windowWidth > 768;

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            background: isDark ? '#080808' : '#f8f8f6',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            transition: 'background 0.4s ease',
        }}>
            <section style={{
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: isMobile ? '0 20px' : '0 clamp(40px, 5vw, 64px)',
            }}>

                {/* ── Hero Header ── */}
                <div style={{
                    paddingTop: isMobile ? '120px' : 'clamp(140px, 16vw, 200px)',
                    paddingBottom: isMobile ? '48px' : 'clamp(64px, 10vw, 120px)',
                    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}>
                    <div style={{ marginBottom: '28px' }}>
                        <Breadcrumbs 
                            items={[
                                { label: 'Home', path: '/' },
                                { label: 'Works', path: '/works' }
                            ]} 
                        />
                        <GlowBadge>Selected Portfolio</GlowBadge>
                    </div>

                    <div style={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
                        gap: isMobile ? '32px' : '48px',
                        alignItems: 'flex-end',
                    }}>
                        <h1 style={{
                            fontSize: isSmallMobile ? '34px' : (isMobile ? '42px' : 'clamp(52px, 8.5vw, 120px)'),
                            fontWeight: 800,
                            lineHeight: isSmallMobile ? 1 : 0.9,
                            letterSpacing: '-0.05em',
                            color: isDark ? '#fff' : '#0a0a0a',
                            margin: 0,
                        }}>
                            Extraordinary <br />
                            <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '12px' : '24px', flexWrap: 'nowrap' }}>
                                <em style={{
                                    fontFamily: "'Instrument Serif', serif",
                                    fontStyle: 'italic',
                                    fontWeight: 400,
                                    opacity: 0.85,
                                }}>Solutions</em>
                                <div style={{
                                    width: isMobile ? '50px' : 'calc(30px + 6vw)',
                                    aspectRatio: '1',
                                    borderRadius: '50% 50% 50% 50%',
                                    overflow: 'hidden',
                                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                                    flexShrink: 0,
                                    background: isDark ? '#111' : '#eee',
                                    boxShadow: isDark ? '0 10px 30px rgba(0,0,0,0.5)' : '0 10px 30px rgba(0,0,0,0.05)',
                                }}>
                                    <img
                                        src="/work.webp"
                                        alt="Creative Digital Solutions Showcase - WestBridge Portfolio"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                .
                            </div>
                        </h1>

                            <div style={{ paddingBottom: isMobile ? '0' : '10px' }}>
                            <p style={{
                                fontSize: isSmallMobile ? '14px' : (isMobile ? '15px' : '16px'),
                                lineHeight: 1.7,
                                color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)',
                                margin: '0 0 32px 0',
                                maxWidth: '420px',
                            }}>
                                We partner with visionary brands to create highly performant, accessible, and emotionally resonant digital products.
                            </p>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                            }}>
                                <span style={{
                                    fontSize: '11px',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)',
                                    fontWeight: 700,
                                }}>
                                    {filteredProjects.length} Projects
                                </span>
                                <div style={{
                                    width: '32px', height: '1px',
                                    background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
                                }} />
                                <span style={{
                                    fontSize: '11px',
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)',
                                    fontWeight: 700,
                                }}>
                                    {selectedCategory}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Filter Bar ── */}
                <div
                    className="filter-wrapper"
                    style={{
                        padding: '24px 0',
                        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                        marginBottom: isMobile ? '40px' : '72px',
                    }}
                >
                    <div style={{
                        display: isSmallMobile ? 'flex' : 'grid',
                        gridTemplateColumns: !isSmallMobile && (isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)'),
                        flexWrap: isSmallMobile ? 'wrap' : 'nowrap',
                        gap: isSmallMobile ? '8px' : '12px',
                        width: '100%'
                    }}>
                        {categories.map(cat => {
                            const active = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    style={{
                                        padding: isSmallMobile ? '10px 14px' : '12px 20px',
                                        fontSize: isSmallMobile ? '10px' : '11px',
                                        fontWeight: 700,
                                        letterSpacing: isSmallMobile ? '0.1em' : '0.12em',
                                        textTransform: 'uppercase',
                                        border: `1px solid ${active
                                            ? (isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)')
                                            : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)')}`,
                                        borderRadius: '999px',
                                        background: active
                                            ? (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)')
                                            : 'transparent',
                                        color: active
                                            ? (isDark ? '#fff' : '#000')
                                            : (isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)'),
                                        cursor: 'pointer',
                                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                        whiteSpace: isSmallMobile ? 'normal' : 'nowrap',
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        textAlign: 'center',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '40px',
                                        minWidth: isSmallMobile ? 'auto' : 'unset',
                                    }}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* ── Projects Grid ── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'),
                    gap: isMobile ? '20px' : '32px',
                    marginBottom: '140px',
                }}>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} theme={theme} isMobile={isMobile} />
                    ))}
                </div>

            </section>
        </div>
    );
};

const ProjectCard = ({ project, theme, isMobile }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isDark = theme === 'dark';

    return (
        <div
            onClick={() => window.location.href = `/works/${project.slug}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                background: isDark ? '#0d0d0d' : '#fff',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                borderRadius: isMobile ? '12px' : '16px',
                transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                boxShadow: isHovered ? (isDark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.05)') : 'none',
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
            }}
        >
            {/* Image */}
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                    src={project.image}
                    alt={`${project.name} - ${project.category} Web Design Project`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                        filter: isHovered ? 'brightness(0.4) saturate(1.2)' : 'brightness(0.95)',
                        transition: 'transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1), filter 0.8s ease',
                    }}
                />

                {/* Hover: View Project Link Indicator (Centered) */}
                <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    pointerEvents: 'none',
                }}>
                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff',
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateY(0)' : 'translateY(10px)',
                        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        fontWeight: 500,
                        fontFamily: "'Playfair Display', serif",
                        fontStyle: 'italic',
                        fontSize: 'clamp(18px, 2vw, 24px)',
                        letterSpacing: '0.02em',
                    }}>
                        View project
                    </div>
                </div>

                {/* Category Badge - Small & Elegant */}
                <div style={{
                    position: 'absolute', top: '24px', left: '24px',
                    padding: '6px 14px',
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '2px',
                    opacity: isHovered ? 0 : 1,
                    transition: 'opacity 0.4s ease',
                }}>
                    <span style={{
                        fontSize: '9px',
                        fontWeight: 800,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: '#000',
                    }}>
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content Details */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: isMobile ? '16px 20px' : '20px 24px',
                borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
            }}>
                <div style={{ minWidth: 0 }}>
                    <h3 style={{
                        fontSize: isMobile ? '20px' : '24px',
                        fontWeight: 700,
                        letterSpacing: '-0.025em',
                        color: isDark ? '#fff' : '#0a0a0a',
                        margin: '0 0 6px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        {project.name}
                    </h3>
                    <p style={{
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.4)',
                        margin: 0
                    }}>
                        {project.category}
                    </p>
                </div>

                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
                        color: isHovered ? '#000' : (isDark ? '#fff' : '#000'),
                        background: isHovered ? '#fff' : 'transparent',
                        textDecoration: 'none',
                        transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                        flexShrink: 0,
                        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                    }}
                >
                    <ArrowUpRight size={20} />
                </a>
            </div>
        </div>
    );
};

export default Works;