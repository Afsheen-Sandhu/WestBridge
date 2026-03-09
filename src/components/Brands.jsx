import React from 'react';

const Brands = () => {
    return (
        <section className="w-full py-24 bg-black flex flex-col items-center justify-center relative z-10">
            <div
                className="w-full max-w-[1200px] flex flex-col items-center animate-fade-in-up"
            >
                <p style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: '13px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: 'rgba(255,255,255,0.3)',
                    marginBottom: '50px'
                }}>
                    They trusted us
                </p>

                <div
                    className="w-full relative overflow-hidden"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                    }}
                >
                    <div className="flex w-max animate-marquee">
                        {/* Duplicate the list to create a seamless infinite scroll loop */}
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="flex gap-24 px-12 items-center justify-center pointer-events-none">
                                {[
                                    "OASIS", "VERTEX", "NEXUS", "QUANTA", "EQUINOX", "AETHER", "LUMINA", "VANGUARD"
                                ].map((brand, j) => (
                                    <span
                                        key={`${i}-${j}`}
                                        style={{
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                            fontWeight: 800,
                                            fontSize: '36px',
                                            letterSpacing: '-0.04em',
                                            color: '#ffffff',
                                        }}
                                    >
                                        {brand}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;
