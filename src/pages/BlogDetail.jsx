import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { ArrowLeft, Clock, User, Calendar, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';

const BlogDetail = () => {
    const { slug } = useParams();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Find the post by slug
    const post = blogPosts.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: isDark ? '#080808' : '#f8f8f6',
                color: isDark ? '#fff' : '#000',
                padding: '20px',
                textAlign: 'center'
            }}>
                <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>Post Not Found</h1>
                <Link to="/blogs" style={{
                    color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontWeight: 700,
                    fontSize: '14px'
                }}>
                    <ArrowLeft size={18} />
                    Back to all blogs
                </Link>
            </div>
        );
    }

    return (
        <div style={{
            width: '100%',
            minHeight: '100vh',
            background: isDark ? '#080808' : '#f8f8f6',
            color: isDark ? '#fff' : '#0a0a0a',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            transition: 'background 0.4s ease',
            paddingBottom: '120px',
        }}>
            <SEO 
                title={`${post.title} | WestBridge IT Solutions Tech Blog & Insights`}
                description={post.excerpt}
                keywords={`${post.category}, ${post.title}, WestBridge IT Solutions`}
            />
            {/* ── Progress Bar ── */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: 'rgba(255,255,255,0.05)',
                zIndex: 1000,
            }}>
                <div style={{
                    width: '30%', // Would need actual scroll logic for real progress
                    height: '100%',
                    background: isDark ? '#fff' : '#000',
                }} />
            </div>

            <article style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: 'clamp(120px, 15vw, 180px) 24px 0',
            }}>

                {/* ── Breadcrumbs ── */}
                <Breadcrumbs 
                    items={[
                        { label: 'Home', path: '/' },
                        { label: 'Journal', path: '/blogs' },
                        { label: post.title }
                    ]} 
                />

                {/* ── Category & Title ── */}
                <div style={{ marginBottom: '40px' }}>
                    <span style={{
                        display: 'inline-block',
                        padding: '6px 16px',
                        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                        borderRadius: '500px',
                        fontSize: '11px',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.15em',
                        color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                        marginBottom: '24px'
                    }}>
                        {post.category}
                    </span>
                    <h1 style={{
                        fontSize: 'clamp(32px, 5.5vw, 64px)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        letterSpacing: '-0.04em',
                        margin: '0 0 32px 0',
                    }}>
                        {post.title}
                    </h1>

                    {/* ── Meta Info ── */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '24px',
                        padding: '24px 0',
                        borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                        borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: isDark ? '#222' : '#ddd', overflow: 'hidden' }}>
                                <img 
                                    src="/work.webp" 
                                    alt={`Author ${post.author} - WestBridge Expert`} 
                                    title={`Author: ${post.author}`}
                                    width={32} 
                                    height={32} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                />
                            </div>
                            <span style={{ fontSize: '14px', fontWeight: 700 }}>{post.author}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)', fontSize: '14px' }}>
                            <Calendar size={16} aria-hidden="true" />
                            <span>{post.date}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: isDark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.6)', fontSize: '14px' }}>
                            <Clock size={16} aria-hidden="true" />
                            <span>6 min read</span>
                        </div>
                    </div>
                </div>

                {/* ── Hero Image ── */}
                <div style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    borderRadius: '40px',
                    overflow: 'hidden',
                    marginBottom: '64px',
                    background: isDark ? '#111' : '#eee',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                }}>
                    <img src={post.image} alt={post.title} title={post.title} width={900} height={506} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                {/* ── Content Body ── */}
                <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    style={{
                        fontSize: '18px',
                        lineHeight: 1.8,
                        color: isDark ? 'rgba(255,255,255,0.85)' : 'rgba(0,0,0,0.8)',
                    }}
                />

                {/* ── Social Share ── */}
                <div style={{
                    marginTop: '80px',
                    padding: '48px 0',
                    borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '24px'
                }}>
                    <span style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.5 }}>Share this insights</span>
                    <div style={{ display: 'flex', gap: '16px' }}>
                        {[
                            { Icon: Twitter, label: 'Twitter' },
                            { Icon: Linkedin, label: 'LinkedIn' },
                            { Icon: Facebook, label: 'Facebook' }
                        ].map(({ Icon, label }, i) => (
                            <button key={i} 
                                aria-label={`Share on ${label}`}
                                style={{
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                                background: 'transparent',
                                color: isDark ? '#fff' : '#000',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }} onMouseEnter={e => { e.currentTarget.style.background = isDark ? '#fff' : '#000'; e.currentTarget.style.color = isDark ? '#000' : '#fff'; }} onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = isDark ? '#fff' : '#000'; }}>
                                <Icon size={20} aria-hidden="true" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── Blog CTA Section ── */}
                <div style={{
                    marginTop: '80px',
                    padding: '80px 40px',
                    background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                    borderRadius: '32px',
                    textAlign: 'center',
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`
                }}>
                    <h2 style={{
                        fontSize: 'clamp(28px, 4vw, 36px)',
                        fontWeight: 800,
                        letterSpacing: '-0.02em',
                        marginBottom: '20px',
                        color: isDark ? '#fff' : '#000'
                    }}>
                        Ready to apply these <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>insights?</span>
                    </h2>
                    <p style={{
                        color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                        marginBottom: '32px',
                        fontSize: '17px',
                        maxWidth: '540px',
                        margin: '0 auto 32px'
                    }}>
                        Our team specializes in turning these strategic principles into high-performance digital realities for your brand.
                    </p>
                    <Link 
                        to="/contact"
                        style={{
                            display: 'inline-block',
                            padding: '16px 40px',
                            background: isDark ? '#fff' : '#000',
                            color: isDark ? '#000' : '#fff',
                            borderRadius: '100px',
                            fontWeight: 700,
                            textDecoration: 'none',
                            transition: 'all 0.3s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        Partner with us
                    </Link>
                </div>

            </article>

            <style>{`
                .blog-content h2, .blog-content h3 {
                    font-size: 28px;
                    font-weight: 800;
                    margin: 48px 0 24px;
                    letter-spacing: -0.02em;
                    color: ${isDark ? '#fff' : '#000'};
                }
                .blog-content p {
                    margin-bottom: 24px;
                }
                .blog-content ul, .blog-content ol {
                    margin-bottom: 32px;
                    padding-left: 20px;
                }
                .blog-content li {
                    margin-bottom: 12px;
                }
                .blog-content blockquote {
                    margin: 48px 0;
                    padding: 32px 40px;
                    background: ${isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.03)'};
                    border-radius: 24px;
                    font-family: 'Instrument Serif', serif;
                    font-style: italic;
                    font-size: 24px;
                    color: ${isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)'};
                    line-height: 1.4;
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default BlogDetail;
