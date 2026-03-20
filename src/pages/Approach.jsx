import React, { useEffect, Suspense, lazy } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import GlowBadge from '../components/GlowBadge';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';

const DetailedProcess = lazy(() => import('../components/DetailedProcess'));

const Approach = () => {
    const { theme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full transition-colors duration-400" style={{ background: theme === 'dark' ? '#000' : '#fff' }}>
            <SEO 
                title="Our Web Design Process | Surrey, BC | WestBridge IT Solutions"
                description="Discover how our web design agency in Surrey, BC delivers custom websites for Canadian businesses. Our proven process ensures every project is on-time, on-budget & built to rank."
                keywords="web design process Surrey BC, custom website development Canada, how we build websites Surrey, web development company Surrey BC, professional web design Surrey Canada, website design methodology Canada, web design agency Surrey BC"
            />
            <section
                className="w-full flex flex-col items-center"
                style={{
                    padding: 'clamp(140px, 15vw, 180px) 0 clamp(80px, 10vw, 120px)',
                }}
            >
                <div className="w-full max-w-[1000px] px-8 flex flex-col items-center text-center">
                    <div className="flex flex-col items-center justify-center w-full mb-8">
                        <Breadcrumbs 
                            items={[
                                { label: 'Home', path: '/' },
                                { label: 'Approach', path: '/approach' }
                            ]} 
                        />
                        <GlowBadge>Methodology</GlowBadge>
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
                        Our Creative <br />
                        <span className="font-accent italic font-normal opacity-90">Approach</span>
                    </h1>

                    <p
                        className="text-lg md:text-2xl leading-relaxed font-medium text-center"
                        style={{
                            color: theme === 'dark' ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.9)',
                            letterSpacing: '-0.02em',
                            maxWidth: '850px'
                        }}
                    >
                        Our step-by-step process for delivering extraordinary digital results — built for small businesses, restaurants, healthcare clinics, and growing brands across Surrey, BC and Canada.
                    </p>

                    <Suspense fallback={<div className="h-40" />}>
                        <DetailedProcess />
                    </Suspense>

                    <div className="mt-20 w-full flex flex-col items-center py-20 border-t border-dashed border-white/10">
                        <p style={{
                            color: theme === 'dark' ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                            marginBottom: '32px',
                            fontSize: '18px'
                        }}>
                            Interested in our methodology? Let's talk about <strong>your</strong> project.
                        </p>
                        <Link 
                            to="/contact"
                            style={{
                                display: 'inline-block',
                                padding: '14px 32px',
                                background: theme === 'dark' ? '#fff' : '#000',
                                color: theme === 'dark' ? '#000' : '#fff',
                                borderRadius: '100px',
                                fontWeight: 700,
                                textDecoration: 'none',
                                transition: 'all 0.3s'
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            Let's Connect
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Approach;
