import React from 'react';
import { useTheme } from '../context/ThemeContext';

const FeatureCard = ({ title, description, children, className = '' }) => {
    const { theme } = useTheme();
    return (
        <div className={`group relative border rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col transition-all duration-400 ${className}`}
            style={{
                background: theme === 'dark' ? '#0A0A0A' : '#f9f9f9',
                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
            }}
        >
            {/* Text Content */}
            <div
                className="relative z-10 pr-6 md:pr-10"
                style={{
                    paddingTop: 'clamp(32px, 6vw, 56px)',
                    paddingLeft: '6%',
                }}
            >
                <h3 className="font-primary font-semibold mb-3 leading-tight transition-colors duration-400"
                    style={{
                        color: theme === 'dark' ? '#fff' : '#000',
                        fontSize: 'clamp(24px, 2.5vw, 30px)',
                        fontWeight: 600,
                        letterSpacing: '-0.03em'
                    }}>
                    {title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed max-w-[480px] transition-colors duration-400"
                    style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.55)' }}>
                    {description}
                </p>
            </div>

            {/* Visual Content Area */}
            <div className="relative flex-1 min-h-[300px] md:min-h-[360px] w-full mt-4 overflow-hidden">
                {children}
            </div>

            {/* Subtle Inner Glow - only in dark mode */}
            {theme === 'dark' && <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />}
        </div>
    );
};

const FeaturesGrid = () => {
    const { theme } = useTheme();
    return (
        <section className="w-full transition-colors duration-400"
            style={{
                background: theme === 'dark' ? '#000' : '#fff',
                padding: 'clamp(60px, 8vw, 120px) 0 clamp(80px, 12vw, 160px)'
            }}>
            <div className="w-full flex flex-col gap-6 lg:gap-8">

                {/* Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    <FeatureCard
                        title="Discovery First"
                        description="We begin by defining clear goals, understanding your audience, and aligning with your brand voice to set a strong foundation."
                        className="lg:col-span-7"
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 rounded-t-xl md:rounded-t-2xl border-x border-t transition-all duration-400 overflow-hidden"
                            style={{
                                background: theme === 'dark' ? '#111' : '#eee',
                                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                            }}>
                            <img src="/discovery.png" alt="Discovery" className="w-full h-full object-cover"
                                style={{ opacity: theme === 'dark' ? 0.8 : 1 }} />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Mobile-First Design"
                        description="Every layout is designed for seamless mobile-first experiences, ensuring performance across all devices."
                        className="lg:col-span-5"
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 flex items-end justify-center gap-3 md:gap-4">
                            <div className="flex-1 max-w-[180px] h-full rounded-t-[30px] md:rounded-t-[40px] border-x border-t relative overflow-hidden transition-all duration-400"
                                style={{
                                    background: theme === 'dark' ? '#111' : '#eee',
                                    borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                                }}>
                                <img src="/mobile.png" alt="Mobile" className="w-full h-full object-cover"
                                    style={{ opacity: theme === 'dark' ? 0.8 : 1 }} />
                            </div>
                            <div className="flex-1 max-w-[180px] h-[85%] rounded-t-[30px] md:rounded-t-[40px] border-x border-t relative overflow-hidden hidden sm:block transition-all duration-400"
                                style={{
                                    background: theme === 'dark' ? '#111' : '#eee',
                                    borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                                }}>
                                <img src="/mobile.png" alt="Mobile" className="w-full h-full object-cover"
                                    style={{ opacity: theme === 'dark' ? 0.6 : 0.8 }} />
                            </div>
                        </div>
                    </FeatureCard>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    <FeatureCard
                        title="Conversion-Driven"
                        description="Websites built with strategy, designed to engage audiences, and crafted to turn visitors into customers."
                        className="lg:col-span-5"
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 rounded-t-xl border-x border-t relative overflow-hidden transition-all duration-400"
                            style={{
                                background: theme === 'dark' ? '#111' : '#eee',
                                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                            }}>
                            <img src="/conversion.png" alt="Conversion" className="w-full h-full object-cover"
                                style={{ opacity: theme === 'dark' ? 0.8 : 1 }} />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Pixel-Perfect Development"
                        description="Designed and developed with pixel-perfect precision, delivering high performance and easy updates."
                        className="lg:col-span-7"
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 rounded-t-xl md:rounded-t-2xl border-x border-t relative overflow-hidden transition-all duration-400"
                            style={{
                                background: theme === 'dark' ? '#1B1B1B' : '#ddd',
                                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                            }}>
                            <img src="/pixel-perfect.png" alt="Pixel Perfect" className="w-full h-full object-cover"
                                style={{ opacity: theme === 'dark' ? 0.8 : 1 }} />
                        </div>
                    </FeatureCard>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    <FeatureCard
                        title="Seamless CMS Launch"
                        description="Launched seamlessly with a powerful CMS, allowing you to update and manage your website content effortlessly after going live."
                        className="lg:col-span-7"
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 rounded-t-xl border-x border-t relative overflow-hidden transition-all duration-400"
                            style={{
                                background: theme === 'dark' ? '#111' : '#eee',
                                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                            }}>
                            <img src="/cms.png" alt="CMS Dashboard" className="w-full h-full object-cover"
                                style={{ opacity: theme === 'dark' ? 0.8 : 1 }} />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Future-Ready"
                        description="Websites designed to be scalable and future-ready, adapting as your business grows."
                        className="lg:col-span-5"
                    >
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-8">
                            <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                                <img
                                    src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop"
                                    alt="Future Ready"
                                    className="w-full h-full object-cover grayscale opacity-90 scale-110 group-hover:scale-125 transition-transform duration-1000"
                                />
                                {/* Glass overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </FeatureCard>
                </div>

            </div>
        </section>
    );
};

export default FeaturesGrid;
