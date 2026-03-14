import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Per-card background image variants: position (object-position), scale, rotate (deg)
const CARD_BG_VARIANTS = [
    { position: '30% 20%', scale: 1.25, rotate: -2 },
    { position: '70% 60%', scale: 1.4, rotate: 1.5 },
    { position: '50% 80%', scale: 1.3, rotate: 2 },
    { position: '20% 50%', scale: 1.35, rotate: -1.5 },
    { position: '80% 30%', scale: 1.2, rotate: 3 },
    { position: '40% 70%', scale: 1.45, rotate: -2.5 },
];

const FeatureCard = ({ title, description, children, className = '', cardIndex = 0 }) => {
    const { theme } = useTheme();
    const variant = CARD_BG_VARIANTS[cardIndex % CARD_BG_VARIANTS.length];
    return (
        <div className={`group relative border rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col transition-all duration-400 ${className}`}
            style={{
                background: theme === 'dark' ? '#0A0A0A' : '#f9f9f9',
                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
            }}
        >
            {/* Background image - unique position, zoom & angle per card */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
                <img
                    src="/VisuvateBG2.webp"
                    alt=""
                    width={800}
                    height={600}
                    decoding="async"
                    aria-hidden="true"
                    className="absolute w-full h-full object-cover"
                    style={{
                        objectPosition: variant.position,
                        transform: `scale(${variant.scale}) rotate(${variant.rotate}deg)`,
                        opacity: theme === 'dark' ? 0.35 : 0.2,
                    }}
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background: theme === 'dark' ? 'rgba(0,0,0,0.55)' : 'rgba(255,255,255,0.7)',
                    }}
                />
            </div>
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
                    style={{ color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)' }}>
                    {description}
                </p>
            </div>

            {/* Visual Content Area */}
            <div className="relative flex-1 min-h-[220px] md:min-h-[280px] w-full mt-4 overflow-hidden">
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
                        description="Defining clear goals and audience insights to set a strong foundation."
                        className="lg:col-span-7"
                        cardIndex={0}
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 rounded-t-xl md:rounded-t-2xl border-x border-t transition-all duration-400 overflow-hidden"
                            style={{
                                background: theme === 'dark' ? '#111' : '#eee',
                                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                            }}>
                            <img src="/srv1.webp" alt="WestBridge Discovery and Strategy Phase - defining clear digital goals" width={800} height={450} decoding="async" className="w-full h-full object-cover object-center"
                                style={{ opacity: theme === 'dark' ? 0.8 : 1 }} />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Mobile-First Design"
                        description="Seamless experiences prioritized for mobile users across all devices."
                        className="lg:col-span-5"
                        cardIndex={1}
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 rounded-t-xl md:rounded-t-2xl border-x border-t transition-all duration-400 overflow-hidden"
                            style={{
                                background: theme === 'dark' ? '#111' : '#eee',
                                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                            }}>
                            <img src="/feature2.webp" alt="Mobile-First Web Design for Seamless User Experience across devices" width={550} height={450} decoding="async" className="w-full h-full object-cover object-center"
                                style={{ opacity: theme === 'dark' ? 0.8 : 1 }} />
                        </div>
                    </FeatureCard>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    <FeatureCard
                        title="Conversion-Driven"
                        description="Strategic user journeys designed to turn visitors into customers."
                        className="lg:col-span-5"
                        cardIndex={2}
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 rounded-t-xl md:rounded-t-2xl border-x border-t relative overflow-hidden transition-all duration-400"
                            style={{
                                background: theme === 'dark' ? '#111' : '#eee',
                                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                            }}>
                            <img src="/srv3.webp" alt="Conversion-Driven Web Development and Strategic User Journeys" width={550} height={450} decoding="async" className="w-full h-full object-cover object-center"
                                style={{ opacity: theme === 'dark' ? 0.8 : 1 }} />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Pixel-Perfect Development"
                        description="Precision engineering for high performance and easy scalability."
                        className="lg:col-span-7"
                        cardIndex={3}
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 rounded-t-xl md:rounded-t-2xl border-x border-t relative overflow-hidden transition-all duration-400"
                            style={{
                                background: theme === 'dark' ? '#111' : '#eee',
                                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                            }}>
                            <img src="/srv4.webp" alt="Pixel-Perfect Web Development and UI Precision by WestBridge Team" width={800} height={450} decoding="async" className="w-full h-full object-cover object-center"
                                style={{ opacity: theme === 'dark' ? 0.8 : 1 }} />
                        </div>
                    </FeatureCard>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    <FeatureCard
                        title="Seamless CMS Launch"
                        description="Manage your content effortlessly with our powerful, intuitive dashboards."
                        className="lg:col-span-7"
                        cardIndex={4}
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 rounded-t-xl md:rounded-t-2xl border-x border-t relative overflow-hidden transition-all duration-400"
                            style={{
                                background: 'transparent',
                                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                            }}>
                            <img src="/srv5.webp" alt="Seamless CMS Launch and Powerful Content Management Dashboard" width={800} height={450} decoding="async" className="w-full h-full object-cover object-center"
                                style={{ opacity: theme === 'dark' ? 0.8 : 1 }} />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Future-Ready"
                        description="Scalable architectures that adapt as your business and tech evolve."
                        className="lg:col-span-5"
                        cardIndex={5}
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 rounded-t-xl md:rounded-t-2xl border-x border-t relative overflow-hidden transition-all duration-400"
                            style={{
                                background: theme === 'dark' ? '#111' : '#eee',
                                borderColor: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
                            }}>
                            <img
                                src="/srv6.webp"
                                alt="Future-Ready Scalable Web Architecture - Case Study"
                                width={550}
                                height={450}
                                decoding="async"
                                className="w-full h-full object-cover object-center grayscale opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </div>
                    </FeatureCard>
                </div>

            </div>
        </section>
    );
};

export default FeaturesGrid;
