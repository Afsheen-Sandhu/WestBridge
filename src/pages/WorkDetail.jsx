import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Breadcrumbs from '../components/Breadcrumbs';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import SEO from '../components/SEO';

const WorkDetail = () => {
    const { slug } = useParams();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    // Find the project matching the route slug
    const project = projectsData.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div style={{
                minHeight: '100vh',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                background: isDark ? '#080808' : '#f8f8f6', color: isDark ? '#fff' : '#000',
            }}>
                <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '24px' }}>Project Not Found</h1>
                <Link to="/works" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'inherit', textDecoration: 'none' }}>
                    <ArrowLeft size={18} />
                    Back to Works
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
            {/* SEO Meta Tags via Helmet */}
            <SEO 
                title={`${project.name} Case Study | WestBridge IT Solutions Portfolio`}
                description={project.overview}
                keywords={`${project.name}, ${project.category}, web design case study, WestBridge IT Solutions`}
            />

            {/* JSON-LD Schema for SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CreativeWork",
                    "name": project.name,
                    "headline": project.tagline,
                    "creator": {
                        "@type": "Organization",
                        "name": "WestBridge IT Solutions"
                    },
                    "description": project.overview,
                    "dateCreated": project.year,
                    "image": `https://www.westbridgeitsolutions.com${project.image}`,
                    "url": `https://www.westbridgeitsolutions.com/works/${project.slug}`
                })
            }} />

            <article style={{ margin: '0 auto', padding: 'clamp(120px, 15vw, 180px) 0 0' }}>
                
                {/* ── Top Header Text ── */}
                <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)' }}>
                    <Breadcrumbs 
                        items={[
                            { label: 'Home', path: '/' },
                            { label: 'Works', path: '/works' },
                            { label: project.name }
                        ]} 
                    />
                    
                    <div style={{ marginBottom: '64px', maxWidth: '1000px' }}>
                        <span style={{
                            display: 'inline-block', padding: '6px 16px',
                            background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                            borderRadius: '500px', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em',
                            color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
                            marginBottom: '24px'
                        }}>
                            {project.category}
                        </span>
                        
                        <h1 style={{
                            fontSize: 'clamp(48px, 8vw, 100px)', fontWeight: 800,
                            lineHeight: 0.95, letterSpacing: '-0.04em',
                            margin: '0 0 24px 0',
                        }}>
                            {project.name}
                        </h1>
                        <p style={{
                            fontSize: 'clamp(20px, 3vw, 32px)', fontWeight: 500,
                            color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.6)',
                            fontFamily: "'Instrument Serif', serif", fontStyle: 'italic',
                            margin: 0
                        }}>
                            {project.tagline}
                        </p>
                    </div>
                </div>

                {/* ── Massive Hero Image ── */}
                <div style={{
                    width: '100%',
                    height: 'clamp(400px, 70vh, 800px)',
                    position: 'relative',
                    background: isDark ? '#111' : '#eee',
                }}>
                    <img 
                        src={project.image} 
                        alt={`${project.name} Desktop Responsive Mockup`} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                    {/* Live Site Link Floating Button */}
                    <a 
                        href={project.link} 
                        target="_blank" rel="noopener noreferrer"
                        style={{
                            position: 'absolute', bottom: '40px', right: 'clamp(24px, 5vw, 64px)',
                            display: 'flex', alignItems: 'center', gap: '12px',
                            padding: '16px 32px', background: '#fff', color: '#000',
                            borderRadius: '500px', fontSize: '14px', fontWeight: 700, textDecoration: 'none',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)', transition: 'transform 0.3s ease'
                        }}
                        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        Visit Live Site <ArrowUpRight size={18} />
                    </a>
                </div>

                {/* ── Data & Overview Grid ── */}
                <div style={{ 
                    maxWidth: '1400px', margin: '0 auto', 
                    padding: 'clamp(64px, 10vw, 120px) clamp(24px, 5vw, 64px)',
                    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px'
                }}>
                    
                    {/* Left Data Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
                        <div>
                            <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', marginBottom: '12px' }}>Client</h4>
                            <p style={{ fontSize: '20px', fontWeight: 600, margin: 0 }}>{project.client}</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', marginBottom: '12px' }}>Year</h4>
                            <p style={{ fontSize: '20px', fontWeight: 600, margin: 0 }}>{project.year}</p>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', marginBottom: '12px' }}>Services Provided</h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {project.services.map((service, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px' }}>
                                        <CheckCircle2 size={16} strokeWidth={2} style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }} /> 
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)', marginBottom: '12px' }}>Technology Stack</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {project.techStack.map((tech, i) => (
                                    <span key={i} style={{ padding: '6px 14px', borderRadius: '500px', fontSize: '12px', fontWeight: 700, border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Overview Column */}
                    <div>
                        <div style={{ marginBottom: '48px' }}>
                            <h2 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '24px' }}>The Challenge</h2>
                            <p style={{ fontSize: '18px', lineHeight: 1.8, color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'}}>
                                {project.challenge || project.overview}
                            </p>
                        </div>

                        <div style={{ marginBottom: '48px' }}>
                            <h2 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '24px' }}>The Solution</h2>
                            <p style={{ fontSize: '18px', lineHeight: 1.8, color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'}}>
                                {project.solution}
                            </p>
                        </div>

                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '24px' }}>The Results</h2>
                            <p style={{ fontSize: '18px', lineHeight: 1.8, color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)'}}>
                                {project.results}
                            </p>
                        </div>
                    </div>

                </div>

                {/* ── Continue Exploring Area ── */}
                <div style={{
                    marginTop: '40px',
                    borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`,
                    padding: '80px 24px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center'
                }}>
                    <span style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', opacity: 0.5, marginBottom: '24px' }}>
                        Ready for more?
                    </span>
                    <Link to="/works" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '12px',
                        padding: '24px 64px', background: 'transparent',
                        border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                        borderRadius: '500px', color: isDark ? '#fff' : '#000',
                        fontSize: '18px', fontWeight: 700, textDecoration: 'none', transition: 'all 0.3s ease'
                    }} 
                    onMouseEnter={e => { e.currentTarget.style.background = isDark ? '#fff' : '#000'; e.currentTarget.style.color = isDark ? '#000' : '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = isDark ? '#fff' : '#000'; }}
                    >
                        Index of Works
                    </Link>
                </div>

            </article>
        </div>
    );
};

export default WorkDetail;
