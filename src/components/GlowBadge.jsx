import React, { useRef, useState } from 'react';

const GlowBadge = ({ children }) => {
    const badgeRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e) => {
        if (!badgeRef.current) return;
        const rect = badgeRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={badgeRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            style={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 18px',
                borderRadius: '999px',
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'transform 0.2s ease',
                '--mouse-x': `${mousePos.x}px`,
                '--mouse-y': `${mousePos.y}px`,
            }}
        >
            {/* Dynamic Glow Border */}
            <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-full ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    background: `radial-gradient(120px circle at var(--mouse-x) var(--mouse-y), rgba(0, 102, 255, 0.5), transparent 80%)`,
                    padding: '1.5px',
                    mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    maskComposite: 'exclude',
                    WebkitMaskComposite: 'xor',
                }}
            />

            {/* Inner Glow Shadow */}
            <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${isHovered ? 'opacity-20' : 'opacity-0'}`}
                style={{
                    background: `radial-gradient(100px circle at var(--mouse-x) var(--mouse-y), rgba(0, 102, 255, 0.8), transparent 80%)`,
                }}
            />

            <span style={{
                position: 'relative',
                zIndex: 10,
                fontSize: '11px',
                fontWeight: 500,
                color: '#fff',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                whiteSpace: 'nowrap',
            }}>
                {children}
            </span>
        </div>
    );
};

export default GlowBadge;
