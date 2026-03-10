import React, { useState, useEffect } from 'react';

const navLinks = ['Home', 'About Us', 'Works', 'Services', 'Blogs', 'Templates'];

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [connectHovered, setConnectHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                paddingTop: isMobile ? 16 : 24,
                paddingBottom: isMobile ? 16 : 24,
                zIndex: 1000,
                animation: 'fadeInDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.92), rgba(0,0,0,0.6), transparent)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
            }}
        >
            <div className="layout-outer">
                <div
                    className="layout-inner"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '18px',
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
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
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

                    {/* Desktop nav */}
                    {!isMobile && (
                        <>
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
                                    maxWidth: '100%',
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
                                        padding: '12px 24px',
                                        borderRadius: '100px',
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        fontWeight: 600,
                                        fontSize: '14px',
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
                        </>
                    )}

                    {/* Mobile hamburger */}
                    {isMobile && (
                        <button
                            onClick={() => setMenuOpen(open => !open)}
                            style={{
                                width: 36,
                                height: 36,
                                borderRadius: 999,
                                border: '1px solid rgba(255,255,255,0.35)',
                                background: 'rgba(0,0,0,0.6)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <span
                                style={{
                                    width: 16,
                                    height: 2,
                                    borderRadius: 999,
                                    background: '#fff',
                                    position: 'relative',
                                    transition: 'transform 0.25s ease, background 0.25s ease',
                                }}
                            >
                                <span
                                    style={{
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        top: -5,
                                        height: 2,
                                        borderRadius: 999,
                                        background: '#fff',
                                    }}
                                />
                                <span
                                    style={{
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        right: 0,
                                        bottom: -5,
                                        height: 2,
                                        borderRadius: 999,
                                        background: '#fff',
                                    }}
                                />
                            </span>
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile menu panel */}
            {isMobile && menuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 70,
                        left: 0,
                        right: 0,
                        paddingTop: 16,
                        paddingBottom: 24,
                        paddingLeft: 16,
                        paddingRight: 24,
                        background: 'rgba(5,5,5,0.96)',
                        borderBottom: '1px solid rgba(255,255,255,0.12)',
                        backdropFilter: 'blur(18px)',
                        WebkitBackdropFilter: 'blur(18px)',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 12,
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'stretch',
                                padding: 6,
                                borderRadius: 16,
                                border: '1px solid rgba(255,255,255,0.12)',
                                background: 'rgba(255,255,255,0.04)',
                                gap: 4,
                            }}
                        >
                            {navLinks.map(link => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                                    onClick={() => {
                                        setActiveLink(link);
                                        setMenuOpen(false);
                                    }}
                                    style={{
                                        padding: '8px 10px',
                                        borderRadius: 10,
                                        fontSize: 13,
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        fontWeight: 500,
                                        color: activeLink === link ? '#000' : 'rgba(255,255,255,0.86)',
                                        background: activeLink === link ? '#fff' : 'transparent',
                                        textDecoration: 'none',
                                        transition: 'all 0.25s ease',
                                    }}
                                >
                                    {link}
                                </a>
                            ))}
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 16,
                            }}
                        >
                            {/* Theme toggle (same visual) */}
                            <div
                                style={{
                                    width: '48px',
                                    height: '26px',
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
                                        width: '18px',
                                        height: '18px',
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

                            <button
                                onMouseEnter={() => setConnectHovered(true)}
                                onMouseLeave={() => setConnectHovered(false)}
                                style={{
                                    flex: 1,
                                    padding: '12px 24px',
                                    borderRadius: 999,
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontWeight: 600,
                                    fontSize: 14,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    background: connectHovered ? '#fff' : 'transparent',
                                    color: connectHovered ? '#000' : '#fff',
                                    border: '1.3px solid rgba(255,255,255,0.4)',
                                }}
                            >
                                Let's Connect
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
