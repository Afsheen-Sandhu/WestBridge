import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ShieldCheck, Zap, Heart, Sparkles } from 'lucide-react';

const DetailedProcess = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

    React.useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 768;

    return (
        <section 
            style={{ 
                padding: isMobile ? '60px 0' : '100px 0',
                background: isDark ? '#080808' : '#fafafa',
                borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}`
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0 24px' : '0 40px' }}>
                <div style={{ textAlign: isMobile ? 'left' : 'center', marginBottom: isMobile ? '48px' : '80px' }}>
                    <h2 style={{ 
                        fontSize: isMobile ? '36px' : 'clamp(32px, 4vw, 52px)', 
                        fontWeight: 800, 
                        color: isDark ? '#fff' : '#000',
                        letterSpacing: '-0.03em',
                        marginBottom: '24px',
                        lineHeight: 1.1
                    }}>
                        Why Businesses Choose <br />
                        <span style={{ color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)' }}>WestBridge in Surrey</span>
                    </h2>
                    <p style={{ 
                        fontSize: isMobile ? '16px' : '18px', 
                        lineHeight: 1.6, 
                        color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                        maxWidth: '800px',
                        margin: isMobile ? '0' : '0 auto'
                    }}>
                        As a premier web design and development agency based in Surrey, we don't just build websites; we craft digital legacies. Our approach combines rigorous technical standards with avant-garde design principles to deliver results that outperform the competition.
                    </p>
                </div>

                <div style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', 
                    gap: isMobile ? '24px' : '40px' 
                }}>
                    <div style={{ padding: '32px', background: isDark ? 'rgba(255,255,255,0.02)' : '#fff', borderRadius: '24px', border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
                        <div style={{ color: '#fff', background: '#000', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <Zap size={24} />
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: isDark ? '#fff' : '#000', marginBottom: '16px' }}>Performance-First Engineering</h3>
                        <p style={{ fontSize: '15px', lineHeight: 1.7, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)' }}>
                            We build for speed. Using React and Next.js, we ensure sub-second load times that keep users engaged and search engines happy.
                        </p>
                    </div>

                    <div style={{ padding: '32px', background: isDark ? 'rgba(255,255,255,0.02)' : '#fff', borderRadius: '24px', border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
                        <div style={{ color: '#fff', background: '#000', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <Sparkles size={24} />
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: isDark ? '#fff' : '#000', marginBottom: '16px' }}>Avant-Garde Design Aesthetics</h3>
                        <p style={{ fontSize: '15px', lineHeight: 1.7, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)' }}>
                            Visual integrity meets fluid motion. We craft premium, minimalist digital experiences that tell your brand's unique story through every pixel.
                        </p>
                    </div>

                    <div style={{ padding: '32px', background: isDark ? 'rgba(255,255,255,0.02)' : '#fff', borderRadius: '24px', border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` }}>
                        <div style={{ color: '#fff', background: '#000', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                            <ShieldCheck size={24} />
                        </div>
                        <h3 style={{ fontSize: '20px', fontWeight: 700, color: isDark ? '#fff' : '#000', marginBottom: '16px' }}>Strategic SEO Domination</h3>
                        <p style={{ fontSize: '15px', lineHeight: 1.7, color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)' }}>
                            Rank where your customers are. We integrate semantic HTML and schema markup into every build to ensure long-term organic growth and local dominance.
                        </p>
                    </div>
                </div>

                <div style={{ 
                    marginTop: isMobile ? '40px' : '80px', 
                    padding: isMobile ? '32px 24px' : '60px', 
                    borderRadius: '32px', 
                    background: isDark ? 'rgba(255,255,255,0.03)' : '#f0f0f0', 
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}` 
                }}>
                    <h3 style={{ fontSize: isMobile ? '22px' : '24px', fontWeight: 800, color: isDark ? '#fff' : '#000', marginBottom: '24px', letterSpacing: '-0.02em' }}>Our Commitment to Surrey and Beyond</h3>
                    <p style={{ fontSize: '16px', lineHeight: 1.8, color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.7)', margin: 0 }}>
                        At WestBridge, we believe that local expertise matters. Based in Surrey, we have spent years helping local businesses transition into digital powerhouses. Our process is collaborative and transparent, ensuring that you are involved at every stage of the journey—from initial wireframing and mood-boarding to the final deployment and post-launch maintenance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DetailedProcess;
