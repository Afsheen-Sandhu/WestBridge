import React from 'react';

const FeatureCard = ({ title, description, children, className = '' }) => (
    <div className={`group relative bg-[#0A0A0A] border border-white/5 rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col ${className}`}>
        {/* Text Content */}
        <div
            className="relative z-10 pr-6 md:pr-10"
            style={{
                paddingTop: 'clamp(32px, 6vw, 56px)',
                paddingLeft: '6%',
            }}
        >
            <h3 className="text-white text-2xl md:text-3xl font-bold mb-3 tracking-tight leading-tight">
                {title}
            </h3>
            <p className="text-white/50 text-sm md:text-base leading-relaxed max-w-[480px]">
                {description}
            </p>
        </div>

        {/* Visual Content Area */}
        <div className="relative flex-1 min-h-[300px] md:min-h-[360px] w-full mt-4 overflow-hidden">
            {children}
        </div>

        {/* Subtle Inner Glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
    </div>
);

const FeaturesGrid = () => {
    return (
        <section className="bg-black w-full" style={{ padding: 'clamp(60px, 8vw, 120px) 0 clamp(80px, 12vw, 160px)' }}>
            <div className="w-full flex flex-col gap-6 lg:gap-8">

                {/* Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                    <FeatureCard
                        title="Discovery First"
                        description="We begin by defining clear goals, understanding your audience, and aligning with your brand voice to set a strong foundation."
                        className="lg:col-span-7"
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 bg-neutral-900 rounded-t-xl md:rounded-t-2xl border-x border-t border-white/10 overflow-hidden">
                            <img src="/discovery.png" alt="Discovery" className="w-full h-full object-cover opacity-80" />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Mobile-First Design"
                        description="Every layout is designed for seamless mobile-first experiences, ensuring performance across all devices."
                        className="lg:col-span-5"
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 flex items-end justify-center gap-3 md:gap-4">
                            <div className="flex-1 max-w-[180px] h-full bg-neutral-900 rounded-t-[30px] md:rounded-t-[40px] border-x border-t border-white/10 relative overflow-hidden">
                                <img src="/mobile.png" alt="Mobile" className="w-full h-full object-cover opacity-80" />
                            </div>
                            <div className="flex-1 max-w-[180px] h-[85%] bg-neutral-900 rounded-t-[30px] md:rounded-t-[40px] border-x border-t border-white/10 relative overflow-hidden hidden sm:block">
                                <img src="/mobile.png" alt="Mobile" className="w-full h-full object-cover opacity-60" />
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
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 bg-neutral-900 rounded-t-xl border-x border-t border-white/10 overflow-hidden">
                            <img src="/conversion.png" alt="Conversion" className="w-full h-full object-cover opacity-80" />
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Pixel-Perfect Development"
                        description="Designed and developed with pixel-perfect precision, delivering high performance and easy updates."
                        className="lg:col-span-7"
                    >
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 bg-[#1B1B1B] rounded-t-xl md:rounded-t-2xl border-x border-t border-white/10 overflow-hidden">
                            <img src="/pixel-perfect.png" alt="Pixel Perfect" className="w-full h-full object-cover opacity-80" />
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
                        <div className="absolute inset-x-[6%] bottom-0 top-4 md:top-8 bg-neutral-900 rounded-t-xl border-x border-t border-white/10 overflow-hidden">
                            <img src="/cms.png" alt="CMS Dashboard" className="w-full h-full object-cover opacity-80" />
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
