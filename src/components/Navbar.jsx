import React, { useState } from 'react';

const navLinks = ['Home', 'About Us', 'Works', 'Services', 'Blogs', 'Templates'];

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [connectHovered, setConnectHovered] = useState(false);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '24px 48px',
                zIndex: 1000,
                animation: 'fadeInDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
            }}
        >
            <div
                style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {/* ── Logo ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}>
                    <img
                        src="/logo-white-removebg-preview.png"
                        alt="WestBridge"
                        style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                        <span
                            style={{
                                fontFamily: "'Inter', sans-serif",
                                fontWeight: 800,
                                fontSize: '20px',
                                letterSpacing: '-0.03em',
                                color: '#fff',
                            }}
                        >
                            WestBridge
                        </span>
                        <span
                            style={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 400,
                                fontSize: '10px',
                                letterSpacing: '0.15em',
                                color: 'rgba(255,255,255,0.4)',
                                textTransform: 'uppercase',
                            }}
                        >
                            IT Solutions
                        </span>
                    </div>
                </div>

                {/* ── Nav Links Pill ── */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px',
                        borderRadius: '100px',
                        border: '1px solid rgba(255,255,255,0.12)',
                        background: 'rgba(255,255,255,0.06)',
                        backdropFilter: 'blur(24px)',
                        WebkitBackdropFilter: 'blur(24px)',
                    }}
                >
                    {navLinks.map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase().replace(' ', '-')}`}
                            onClick={() => setActiveLink(link)}
                            style={{
                                padding: '9px 20px',
                                borderRadius: '100px',
                                fontSize: '14px',
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 500,
                                color: activeLink === link ? '#fff' : 'rgba(255,255,255,0.55)',
                                background: activeLink === link ? 'rgba(255,255,255,0.1)' : 'transparent',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease',
                                whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={e => { if (activeLink !== link) e.currentTarget.style.color = '#fff'; }}
                            onMouseLeave={e => { if (activeLink !== link) e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* ── Right Actions ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    {/* Theme toggle */}
                    <div
                        style={{
                            width: '52px',
                            height: '28px',
                            borderRadius: '100px',
                            background: 'rgba(255,255,255,0.08)',
                            border: '1px solid rgba(255,255,255,0.15)',
                            position: 'relative',
                            cursor: 'pointer',
                            flexShrink: 0,
                        }}
                    >
                        <div
                            style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                background: '#fff',
                                position: 'absolute',
                                top: '50%',
                                right: '4px',
                                transform: 'translateY(-50%)',
                                boxShadow: '0 0 8px rgba(255,255,255,0.5)',
                            }}
                        />
                    </div>

                    {/* Connect Button */}
                    <button
                        onMouseEnter={() => setConnectHovered(true)}
                        onMouseLeave={() => setConnectHovered(false)}
                        style={{
                            padding: '12px 28px',
                            borderRadius: '100px',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: '15px',
                            cursor: 'pointer',
                            transition: 'all 0.4s ease',
                            background: connectHovered ? '#fff' : 'transparent',
                            color: connectHovered ? '#000' : '#fff',
                            border: '1.5px solid rgba(255,255,255,0.4)',
                            transform: connectHovered ? 'scale(1.04)' : 'scale(1)',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Let's Connect
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
