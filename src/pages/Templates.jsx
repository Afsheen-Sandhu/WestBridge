import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import GlowBadge from '../components/GlowBadge';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';

const Templates = () => {
    const { theme } = useTheme();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full transition-colors duration-400" style={{ background: theme === 'dark' ? '#000' : '#fff' }}>
            <SEO 
                title="Premium Templates | WestBridge IT Solutions | High-End Web Shells"
                description="Browse our collection of premium, high-performance web templates designed for modern businesses and agencies."
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
                                { label: 'Templates', path: '/templates' }
                            ]} 
                        />
                        <GlowBadge>Store</GlowBadge>
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
                        Premium <br />
                        <span className="font-accent italic font-normal opacity-90">Templates</span>
                    </h1>

                    <p
                        className="text-lg md:text-2xl leading-relaxed font-medium text-center"
                        style={{
                            color: theme === 'dark' ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.9)',
                            letterSpacing: '-0.02em',
                            maxWidth: '850px'
                        }}
                    >
                        Accelerate your launch with our collection of high-performance, design-first templates for modern businesses.
                    </p>

                    <div className="mt-20 w-full flex justify-center py-20 border-t border-dashed border-white/10">
                        <span className="text-sm uppercase tracking-[0.4em] opacity-40">Template store coming soon</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Templates;
