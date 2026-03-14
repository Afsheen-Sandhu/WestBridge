import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import GlowBadge from '../components/GlowBadge';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import {
    Globe,
    PenTool,
    ShoppingCart,
    LayoutGrid,
    PanelTop,
    Fingerprint,
    Wand2,
    Send,
    Gauge,
    Wrench,
    ArrowUpRight
} from 'lucide-react';

const services = [
    {
        title: 'Crafted Websites',
        Icon: Globe,
        description: 'High-performance digital homes built with cutting-edge technologies and pixel-perfect precision.',
        features: ['React & Next.js', 'Responsive Design', 'SEO Optimized']
    },
    {
        title: 'Website Redesign',
        Icon: PenTool,
        description: 'Breathe new life into your existing platform with modern aesthetics and improved user flows.',
        features: ['UI/UX Audit', 'Modern Facelift', 'Conversion Focus']
    },
    {
        title: 'eCommerce Solutions',
        Icon: ShoppingCart,
        description: 'Seamless shopping experiences designed to convert visitors into loyal, repeat customers.',
        features: ['Shopify Experts', 'Secure Payments', 'Inventory Sync']
    },
    {
        title: 'CMS & Dynamic Sites',
        Icon: LayoutGrid,
        description: 'Empower your team with intuitive content management systems that scale with your growth.',
        features: ['Headless CMS', 'Custom Dashboards', 'Infinite Scale']
    },
    {
        title: 'Landing Pages',
        Icon: PanelTop,
        description: 'Conversion-centered microsites designed for high-impact marketing and lead generation.',
        features: ['A/B Testing', 'Copywriting', 'Lightning Fast']
    },
    {
        title: 'Consistent Identity',
        Icon: Fingerprint,
        description: 'Establishing a cohesive visual language across all digital touchpoints for your brand.',
        features: ['Style Guides', 'Design Systems', 'Logos & Icons']
    },
    {
        title: 'Motion Design',
        Icon: Wand2,
        description: 'Engaging animations and interactive elements that bring your digital products to life.',
        features: ['Lottie Files', 'GSAP Animation', 'Micro-interactions']
    },
    {
        title: 'UX Strategy',
        Icon: Send,
        description: 'Data-driven insights and user-centric planning that define the path to project success.',
        features: ['User Testing', 'Wireframing', 'Journey Mapping']
    },
    {
        title: 'Performance',
        Icon: Gauge,
        description: 'Optimizing load times and technical SEO to ensure your site outperforms the competition.',
        features: ['Core Web Vitals', 'Code Splitting', 'CDN Setup']
    },
    {
        title: 'Ongoing Support',
        Icon: Wrench,
        description: 'Proactive maintenance and security updates to keep your digital assets running smoothly.',
        features: ['Security Patches', 'Content Updates', '24/7 Monitoring']
    },
];

const Services = () => {
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
            <SEO 
                title="Our Services | WestBridge IT Solutions | Digital Product Agency"
                description="Explore our range of digital services including web design, eCommerce solutions, CMS integration, and technical SEO optimization."
            />
            <section style={{
                width: '100%',
                maxWidth: '1400px',
                margin: '0 auto',
                padding: isMobile ? '0 20px' : '0 clamp(40px, 5vw, 64px)',
            }}>

                {/* ── Hero Header ── */}
                <div style={{
                    paddingTop: isMobile ? '120px' : 'clamp(140px, 16vw, 200px)',
                    paddingBottom: isMobile ? '64px' : 'clamp(80px, 12vw, 140px)',
                    borderBottom: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}>
                    <div style={{ marginBottom: '28px' }}>
                        <Breadcrumbs 
                            items={[
                                { label: 'Home', path: '/' },
                                { label: 'Services', path: '/services' }
                            ]} 
                        />
                        <GlowBadge>Our Expertise</GlowBadge>
                    </div>

                    <div style={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1.3fr 0.7fr',
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
                            Infinite <br />
                            <em style={{
                                fontFamily: "'Instrument Serif', serif",
                                fontStyle: 'italic',
                                fontWeight: 400,
                                opacity: 0.85,
                            }}>Capabilities</em>.
                        </h1>

                        <div style={{ paddingBottom: isMobile ? '0' : '10px' }}>
                            <p style={{
                                fontSize: isMobile ? '15px' : '17px',
                                lineHeight: 1.7,
                                color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)',
                                margin: '0 0 32px 0',
                                maxWidth: '420px',
                            }}>
                                We offer a full spectrum of digital services designed to scale your business and elevate your brand through strategic design and high-performance engineering.
                            </p>
                        </div>
                    </div>
                </div>

                {/* ── Services Grid ── */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                    gap: isMobile ? '24px' : '48px',
                    padding: isMobile ? '48px 0' : '100px 0',
                }}>
                    {services.map((service, idx) => (
                        <ServiceCard key={idx} service={service} isDark={isDark} isMobile={isMobile} />
                    ))}
                </div>

                {/* ── Landscape Banner ── */}
                <div style={{
                    width: '100%',
                    paddingBottom: '48px',
                }}>
                    <div style={{
                        width: '100%',
                        aspectRatio: isMobile ? '16/9' : '21/6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <img
                            src="/services-removebg-preview.webp"
                            alt="WestBridge Digital Services Showcase - Web Design, Development and Branding"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                            }}
                        />
                    </div>
                </div>

                {/* ── Footer Bottom Section ── */}
                <div style={{
                    padding: '100px 0',
                    borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center'
                }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginBottom: '32px',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    }}>
                        <img
                            src="/work.webp"
                            alt="WestBridge Team Expertise and Creative Process"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <h2 style={{
                        fontSize: isMobile ? '32px' : '48px',
                        fontWeight: 800,
                        color: isDark ? '#fff' : '#0a0a0a',
                        letterSpacing: '-0.04em',
                        marginBottom: '24px'
                    }}>
                        Ready to build the <br />
                        <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>next big thing?</em>
                    </h2>
                    <a
                        href="/contact"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '16px 40px',
                            background: isDark ? '#fff' : '#000',
                            color: isDark ? '#000' : '#fff',
                            borderRadius: '500px',
                            fontSize: '14px',
                            fontWeight: 700,
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = isDark ? '0 10px 30px rgba(255,255,255,0.1)' : '0 10px 30px rgba(0,0,0,0.1)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        Start Your Project
                        <ArrowUpRight size={20} />
                    </a>
                </div>

            </section>
        </div>
    );
};

const ServiceCard = ({ service, isDark, isMobile }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { title, Icon, description, features } = service;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'relative',
                padding: isMobile ? '32px' : '48px',
                borderRadius: '32px',
                background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                transition: 'all 0.5s cubic-bezier(0.19, 1, 0.22, 1)',
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                boxShadow: isHovered ? (isDark ? '0 30px 60px rgba(0,0,0,0.5)' : '0 30px 60px rgba(0,0,0,0.05)') : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                overflow: 'hidden',
            }}
        >
            {/* Corner Glow Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '240px',
                height: '240px',
                background: isDark
                    ? 'radial-gradient(circle at top right, rgba(255,255,255,0.08) 0%, transparent 70%)'
                    : 'radial-gradient(circle at top right, rgba(0,0,0,0.03) 0%, transparent 70%)',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.7s ease',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            <div style={{
                position: 'relative',
                zIndex: 1,
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isDark ? '#fff' : '#000',
                transition: 'all 0.4s ease',
            }}>
                <Icon size={28} strokeWidth={1.5} />
            </div>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{
                    fontSize: '24px',
                    fontWeight: 800,
                    color: isDark ? '#fff' : '#0a0a0a',
                    letterSpacing: '-0.03em',
                    marginBottom: '12px'
                }}>
                    {title}
                </h3>
                <p style={{
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.5)',
                    marginBottom: '24px'
                }}>
                    {description}
                </p>
            </div>

            <div style={{
                position: 'relative',
                zIndex: 1,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginTop: 'auto'
            }}>
                {features.map((feature, i) => (
                    <span key={i} style={{
                        padding: '6px 14px',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.05em',
                        borderRadius: '500px',
                        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                        color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.7)',
                    }}>
                        {feature}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Services;
