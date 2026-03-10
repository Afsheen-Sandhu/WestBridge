import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import GlowBadge from '../components/GlowBadge';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const projects = [
    { id: 1, name: "Photofolio", category: "Creative", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 2, name: "4Dolfins", category: "Agency", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 3, name: "Avara", category: "Fitness", image: "https://images.unsplash.com/photo-1545208393-2160281bd89f?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 4, name: "Nova Lux", category: "Ecommerce", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 5, name: "Sentience", category: "SaaS", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 6, name: "Veloci", category: "Automotive", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 7, name: "Elysian", category: "Lifestyle", image: "https://images.unsplash.com/photo-1511317551221-995a5ea516f8?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 8, name: "Kinetix", category: "Fitness", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 9, name: "Zenith", category: "Agency", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 10, name: "Lumina", category: "Creative", image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 11, name: "Peak", category: "Fitness", image: "https://images.unsplash.com/photo-1541534741688-6078c65b5a33?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 12, name: "Vantage", category: "Ecommerce", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 13, name: "Flow", category: "SaaS", image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 14, name: "Orbit", category: "Agency", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 15, name: "Prism", category: "Creative", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 16, name: "Stride", category: "Fitness", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 17, name: "Echo", category: "SaaS", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 18, name: "Nexus", category: "Ecommerce", image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 19, name: "Aria", category: "Lifestyle", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 20, name: "Flux", category: "Creative", image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 21, name: "Crest", category: "Agency", image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&q=80&w=800", link: "#" },
    { id: 22, name: "Unity", category: "SaaS", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", link: "#" }
];

const categories = ["All", "Creative", "Agency", "Fitness", "Ecommerce", "SaaS", "Lifestyle", "Automotive"];

const Works = () => {
    const { theme } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const isDark = theme === 'dark';

    useEffect(() => {
        window.scrollTo(0, 0);
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

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            background: isDark ? '#080808' : '#f8f8f6',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
            <section style={{
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: '0 clamp(20px, 5vw, 64px)',
            }}>

                {/* ── Hero Header ── */}
                <div style={{
                    paddingTop: 'clamp(120px, 14vw, 180px)',
                    paddingBottom: 'clamp(64px, 8vw, 100px)',
                    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}>
                    <div style={{ marginBottom: '28px' }}>
                        <GlowBadge>Portfolio</GlowBadge>
                    </div>

                    {/* Header row: title left, description right */}
                    <div style={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '48px',
                        alignItems: 'flex-end',
                    }}>
                        <h1 style={{
                            fontSize: 'clamp(52px, 7vw, 100px)',
                            fontWeight: 800,
                            lineHeight: 1.0,
                            letterSpacing: '-0.04em',
                            color: isDark ? '#fff' : '#0a0a0a',
                            margin: 0,
                        }}>
                            Selected{' '}
                            <em style={{
                                fontFamily: "'Instrument Serif', serif",
                                fontStyle: 'italic',
                                fontWeight: 400,
                                opacity: 0.85,
                            }}>Works</em>.
                        </h1>

                        <div style={{ paddingBottom: '8px' }}>
                            <p style={{
                                fontSize: '15px',
                                lineHeight: 1.75,
                                color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.5)',
                                margin: '0 0 28px 0',
                                maxWidth: '400px',
                            }}>
                                A curated collection of digital experiences built with precision, performance, and a focus on lasting brand impact.
                            </p>

                            {/* Count */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}>
                                <span style={{
                                    fontSize: '11px',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.3)',
                                    fontWeight: 600,
                                }}>
                                    {filteredProjects.length} Projects
                                </span>
                                <span style={{
                                    width: '32px', height: '1px',
                                    background: isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)',
                                }} />
                                <span style={{
                                    fontSize: '11px',
                                    letterSpacing: '0.18em',
                                    textTransform: 'uppercase',
                                    color: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.3)',
                                    fontWeight: 600,
                                }}>
                                    {selectedCategory}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Filter Bar ── */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '28px 0',
                    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.07)'}`,
                    marginBottom: '56px',
                }}>
                    {/* Category pills — inline on desktop */}
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {categories.map(cat => {
                            const active = selectedCategory === cat;
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    style={{
                                        padding: '7px 18px',
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        border: `1px solid ${active
                                            ? (isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)')
                                            : (isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)')}`,
                                        borderRadius: '2px',
                                        background: active
                                            ? (isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)')
                                            : 'transparent',
                                        color: active
                                            ? (isDark ? '#fff' : '#000')
                                            : (isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.4)'),
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    }}
                                    onMouseEnter={e => {
                                        if (!active) {
                                            e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.8)';
                                            e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)';
                                        }
                                    }}
                                    onMouseLeave={e => {
                                        if (!active) {
                                            e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.35)' : 'rgba(0,0,0,0.4)';
                                            e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)';
                                        }
                                    }}
                                >
                                    {cat}
                                </button>
                            );
                        })}
                    </div>

                    <span style={{
                        fontSize: '11px',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.25)',
                        fontWeight: 600,
                        flexShrink: 0,
                        marginLeft: '24px',
                    }}>
                        {filteredProjects.length} shown
                    </span>
                </div>

                {/* ── Projects Grid ── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2px',
                    marginBottom: '120px',
                }}>
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} theme={theme} />
                    ))}
                </div>

            </section>
        </div>
    );
};

const ProjectCard = ({ project, theme }) => {
    const [isHovered, setIsHovered] = useState(false);
    const isDark = theme === 'dark';

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                background: isDark ? '#111' : '#e8e8e4',
            }}
        >
            {/* Image */}
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
                <img
                    src={project.image}
                    alt={project.name}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transform: isHovered ? 'scale(1.07)' : 'scale(1)',
                        filter: isHovered ? 'brightness(0.35)' : 'brightness(0.85)',
                        transition: 'transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.6s ease',
                    }}
                />

                {/* Hover: View Project */}
                <div style={{
                    position: 'absolute', inset: 0,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    pointerEvents: 'none',
                }}>
                    <span style={{
                        fontFamily: "'Instrument Serif', serif",
                        fontStyle: 'italic',
                        fontSize: 'clamp(28px, 3vw, 42px)',
                        color: '#fff',
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.4s ease, transform 0.4s ease',
                        letterSpacing: '-0.01em',
                    }}>
                        View Project
                    </span>
                </div>

                {/* Category tag — top left */}
                <div style={{
                    position: 'absolute', top: '18px', left: '18px',
                    padding: '5px 12px',
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    opacity: isHovered ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                }}>
                    <span style={{
                        fontSize: '9px',
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.7)',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Details bar */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 24px',
                borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.06)'}`,
            }}>
                <div>
                    <h3 style={{
                        fontSize: 'clamp(16px, 1.8vw, 22px)',
                        fontWeight: 700,
                        letterSpacing: '-0.025em',
                        color: isDark ? '#fff' : '#0a0a0a',
                        margin: '0 0 3px',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                        {project.name}
                    </h3>
                    <span style={{
                        fontSize: '10px',
                        fontWeight: 600,
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: isDark ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.35)',
                    }}>
                        {project.category}
                    </span>
                </div>

                <a
                    href={project.link}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '38px',
                        height: '38px',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)'}`,
                        color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                        textDecoration: 'none',
                        transition: 'all 0.25s ease',
                        flexShrink: 0,
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.background = isDark ? '#fff' : '#000';
                        e.currentTarget.style.color = isDark ? '#000' : '#fff';
                        e.currentTarget.style.borderColor = isDark ? '#fff' : '#000';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)';
                        e.currentTarget.style.borderColor = isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)';
                    }}
                >
                    <ArrowUpRight size={15} strokeWidth={2} />
                </a>
            </div>
        </div>
    );
};

export default Works;