import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import GlowBadge from '../components/GlowBadge';
import { Calendar, User, ArrowUpRight, Search } from 'lucide-react';
import { blogPosts } from '../data/blogData';

const Blogs = () => {
    const { theme } = useTheme();
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1400);
    const isDark = theme === 'dark';
    const isMobile = windowWidth <= 768;

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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
                    paddingBottom: isMobile ? '64px' : 'clamp(80px, 10vw, 140px)',
                    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                }}>
                    <div style={{ marginBottom: '28px' }}>
                        <GlowBadge>Our Journal</GlowBadge>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr',
                        gap: isMobile ? '32px' : '64px',
                        alignItems: 'flex-end',
                    }}>
                        <h1 style={{
                            fontSize: isMobile ? '48px' : 'clamp(52px, 8.5vw, 120px)',
                            fontWeight: 800,
                            lineHeight: 0.9,
                            letterSpacing: '-0.05em',
                            color: isDark ? '#fff' : '#0a0a0a',
                            margin: 0,
                        }}>
                            Creative <br />
                            <em style={{
                                fontFamily: "'Instrument Serif', serif",
                                fontStyle: 'italic',
                                fontWeight: 400,
                                opacity: 0.85,
                            }}>Insights</em>.
                        </h1>

                        <div style={{ paddingBottom: isMobile ? '0' : '10px' }}>
                            <p style={{
                                fontSize: '16px',
                                lineHeight: 1.7,
                                color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                                margin: '0 0 32px 0',
                                maxWidth: '420px',
                            }}>
                                Exploring the intersection of design strategy, performance engineering, and the future of digital product experiences.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── Blog Grid ── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                    gap: isMobile ? '40px' : '32px',
                    padding: isMobile ? '60px 0' : '100px 0',
                }}>
                    {blogPosts.map((post) => (
                        <BlogCard key={post.id} post={post} isDark={isDark} isMobile={isMobile} />
                    ))}
                </div>

                {/* ── Featured Portrait CTA ── */}
                <div style={{
                    margin: '60px 0 120px',
                    padding: isMobile ? '48px 32px' : '80px',
                    background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                    borderRadius: '40px',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    gap: isMobile ? '48px' : '64px',
                }}>
                    <div style={{
                        width: isMobile ? '120px' : '200px',
                        height: isMobile ? '120px' : '200px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                        flexShrink: 0,
                    }}>
                        <img src="/work.png" alt="Author" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                        <h2 style={{
                            fontSize: isMobile ? '32px' : '48px',
                            fontWeight: 800,
                            color: isDark ? '#fff' : '#0a0a0a',
                            letterSpacing: '-0.04em',
                            margin: '0 0 20px',
                        }}>
                            Interested in a <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>deeper dive?</em>
                        </h2>
                        <p style={{
                            fontSize: '16px',
                            color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                            margin: '0 0 32px',
                            maxWidth: '560px',
                        }}>
                            Our strategy team helps businesses navigate the complex digital landscape with actionable insights and proven performance frameworks.
                        </p>
                        <a
                            href="/contact"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                padding: '16px 36px',
                                background: isDark ? '#fff' : '#000',
                                color: isDark ? '#000' : '#fff',
                                borderRadius: '500px',
                                fontSize: '14px',
                                fontWeight: 700,
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            Read More Insights
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>

            </section>
        </div>
    );
};

const BlogCard = ({ post, isDark, isMobile }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            to={`/blogs/${post.slug}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                textDecoration: 'none',
            }}
        >
            <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '5/4',
                borderRadius: '32px',
                overflow: 'hidden',
                background: isDark ? '#111' : '#eee',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
            }}>
                <img
                    src={post.image}
                    alt={post.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)',
                    }}
                />
                <div style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    padding: '6px 14px',
                    background: 'rgba(255,255,255,0.95)',
                    borderRadius: '500px',
                    fontSize: '10px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: '#000',
                }}>
                    {post.category}
                </div>
            </div>

            <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px', fontSize: '12px', color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.55)', fontWeight: 600, letterSpacing: '0.05em' }}>
                        <span>{post.date}</span>
                        <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'currentColor' }} />
                        <span>{post.author}</span>
                    </div>
                <h3 style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    color: isDark ? '#fff' : '#0a0a0a',
                    lineHeight: 1.3,
                    letterSpacing: '-0.02em',
                    marginBottom: '16px',
                    transition: 'color 0.3s ease',
                }}>
                    {post.title}
                </h3>
                <p style={{
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)',
                    margin: 0,
                }}>
                    {post.excerpt}
                </p>
            </div>
        </Link>
    );
};

export default Blogs;
