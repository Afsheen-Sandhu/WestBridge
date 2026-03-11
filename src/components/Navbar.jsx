import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link, useLocation } from 'react-router-dom';


const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Works', path: '/works' },
    { label: 'Services', path: '/services' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Templates', path: '/templates' }
];

const Navbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('Home');
    const [connectHovered, setConnectHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 : false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();


    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile) setMenuOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Update active link based on pathname
        const currentLink = navLinks.find(link => link.path === location.pathname);
        if (currentLink) {
            setActiveLink(currentLink.label);
        }
    }, [location.pathname]);

    return (
        <nav
            role="navigation"
            aria-label="Main Navigation"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                paddingTop: isMobile ? 16 : 24,
                paddingBottom: isMobile ? 16 : 24,
                zIndex: 1000,
                animation: 'fadeInDown 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                background: theme === 'dark'
                    ? 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.7), transparent)'
                    : 'linear-gradient(to bottom, rgba(255,255,255,0.98), rgba(255,255,255,0.8), transparent)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                transition: 'background 0.4s ease',
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
                    <Link
                        to="/"
                        onClick={() => setActiveLink('Home')}
                        style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer', textDecoration: 'none' }}
                    >
                        <img
                            src={theme === 'dark' ? "/logo-white-removebg-preview.png" : "/logo-black-removebg-preview.png"}
                            alt="WestBridge"
                            width={isMobile ? 48 : (theme === 'dark' ? 85 : 64)}
                            height={isMobile ? 48 : (theme === 'dark' ? 85 : 64)}
                            loading="eager"
                            fetchPriority="high"
                            style={{
                                height: isMobile ? '48px' : (theme === 'dark' ? '85px' : '64px'),
                                width: 'auto',
                                objectFit: 'contain',
                                transition: 'height 0.4s ease'
                            }}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
                            <span
                                style={{
                                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                                    fontWeight: 800,
                                    fontSize: '20px',
                                    letterSpacing: '-0.03em',
                                    color: theme === 'dark' ? '#fff' : '#000',
                                    transition: 'color 0.4s ease',
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
                                    color: theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.5)',
                                    textTransform: 'uppercase',
                                    transition: 'color 0.4s ease',
                                }}
                            >
                                IT Solutions
                            </span>
                        </div>
                    </Link>

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
                                    <Link
                                        key={link.label}
                                        to={link.path}
                                        onClick={() => {
                                            setActiveLink(link.label);
                                            // Manual scroll for hash links if on Home page
                                            if (link.path.startsWith('/#')) {
                                                const id = link.path.substring(2);
                                                const element = document.getElementById(id);
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }
                                        }}
                                        style={{
                                            padding: '9px 20px',
                                            borderRadius: '100px',
                                            fontSize: '14px',
                                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                                            fontWeight: 500,
                                            color: activeLink === link.label
                                                ? (theme === 'dark' ? '#fff' : '#000')
                                                : (theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.65)'),
                                            background: activeLink === link.label
                                                ? (theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)')
                                                : 'transparent',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            whiteSpace: 'nowrap',
                                        }}
                                        onMouseEnter={e => { if (activeLink !== link.label) e.currentTarget.style.color = theme === 'dark' ? '#fff' : '#000'; }}
                                        onMouseLeave={e => { if (activeLink !== link.label) e.currentTarget.style.color = theme === 'dark' ? 'rgba(255,255,255,0.55)' : 'rgba(0,0,0,0.5)'; }}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>

                            {/* ── Right Actions ── */}
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                {/* Theme toggle */}
                                <button
                                    onClick={toggleTheme}
                                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                                    style={{
                                        width: '52px',
                                        height: '28px',
                                        borderRadius: '100px',
                                        background: theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.08)',
                                        border: theme === 'dark' ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(0,0,0,0.15)',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        flexShrink: 0,
                                        transition: 'all 0.3s ease',
                                        outline: 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '20px',
                                            height: '20px',
                                            borderRadius: '50%',
                                            background: theme === 'dark' ? '#fff' : '#000',
                                            position: 'absolute',
                                            top: '50%',
                                            left: theme === 'dark' ? 'auto' : '4px',
                                            right: theme === 'dark' ? '4px' : 'auto',
                                            transform: 'translateY(-50%)',
                                            boxShadow: theme === 'dark' ? '0 0 8px rgba(255,255,255,0.5)' : '0 0 8px rgba(0,0,0,0.2)',
                                            transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                                        }}
                                    />
                                </button>

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
                                        background: connectHovered ? (theme === 'dark' ? '#fff' : '#000') : 'transparent',
                                        color: connectHovered ? (theme === 'dark' ? '#000' : '#fff') : (theme === 'dark' ? '#fff' : '#000'),
                                        border: theme === 'dark' ? '1.5px solid rgba(255,255,255,0.4)' : '1.5px solid rgba(0,0,0,0.3)',
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
                            aria-expanded={menuOpen}
                            aria-label="Toggle Mobile Menu"
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
                        background: theme === 'dark' ? 'rgba(5,5,5,0.96)' : 'rgba(255,255,255,0.98)',
                        borderBottom: theme === 'dark' ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.1)',
                        backdropFilter: 'blur(18px)',
                        WebkitBackdropFilter: 'blur(18px)',
                        transition: 'background 0.4s ease',
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
                                <Link
                                    key={link.label}
                                    to={link.path}
                                    onClick={() => {
                                        setActiveLink(link.label);
                                        setMenuOpen(false);
                                        if (link.path.startsWith('/#')) {
                                            const id = link.path.substring(2);
                                            const element = document.getElementById(id);
                                            if (element) {
                                                element.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }
                                    }}
                                    style={{
                                        padding: '8px 10px',
                                        borderRadius: 10,
                                        fontSize: 13,
                                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                                        fontWeight: 500,
                                        color: activeLink === link.label
                                            ? (theme === 'dark' ? '#000' : '#fff')
                                            : (theme === 'dark' ? 'rgba(255,255,255,0.86)' : 'rgba(0,0,0,0.7)'),
                                        background: activeLink === link.label
                                            ? (theme === 'dark' ? '#fff' : '#000')
                                            : 'transparent',
                                        textDecoration: 'none',
                                        transition: 'all 0.25s ease',
                                    }}
                                >
                                    {link.label}
                                </Link>
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
                                onClick={toggleTheme}
                                style={{
                                    width: '48px',
                                    height: '26px',
                                    borderRadius: '100px',
                                    background: theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)',
                                    border: theme === 'dark' ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.12)',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    flexShrink: 0,
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <div
                                    style={{
                                        width: '18px',
                                        height: '18px',
                                        borderRadius: '50%',
                                        background: theme === 'dark' ? '#fff' : '#000',
                                        position: 'absolute',
                                        top: '50%',
                                        left: theme === 'dark' ? 'auto' : '4px',
                                        right: theme === 'dark' ? '4px' : 'auto',
                                        transform: 'translateY(-50%)',
                                        transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                                        boxShadow: theme === 'dark' ? '0 0 8px rgba(255,255,255,0.5)' : 'none',
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
