import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import SEO from '../components/SEO';
import { Send, MapPin, Mail, ArrowRight, Instagram, Linkedin, Twitter, ChevronDown } from 'lucide-react';

const Contact = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectType: 'Web Design',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // idle, sending, success
    const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1100 : false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://formspree.io/f/your_formspree_id', { // ← REPLACE THIS ID
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New WestBridge Inquiry from ${formData.name}`,
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', company: '', projectType: 'Web Design', message: '' });
            } else {
                throw new Error('Failed to send');
            }
        } catch (error) {
            console.error("Formspree Error:", error);
            setStatus('error');
            alert("Something went wrong. Please try emailing us directly at contact@westbridgeitsolutions.com");
            setStatus('idle');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Shared styles
    const inputStyle = {
        width: '100%',
        padding: isMobile ? (window.innerWidth < 480 ? '14px 16px' : '16px 20px') : '16px 20px',
        background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
        border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
        borderRadius: '12px',
        color: isDark ? '#fff' : '#000',
        fontSize: '15px',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        outline: 'none',
        transition: 'all 0.3s ease',
    };

    const labelStyle = {
        display: 'block',
        fontSize: '11px',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: isDark ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)',
        marginBottom: '10px'
    };

    return (
        <div className="contact-container" style={{
            width: '100%',
            minHeight: '100vh',
            background: isDark ? '#000' : '#fff',
            color: isDark ? '#fff' : '#000',
            transition: 'background 0.4s ease',
            paddingTop: isMobile ? '120px' : 'clamp(140px, 15vw, 180px)',
            paddingBottom: isMobile ? '80px' : '100px',
            overflowX: 'hidden'
        }}>
            <SEO 
                title="Let's Connect | WestBridge IT Solutions"
                description="Ready to start your next premium digital project? Get in touch with our expert team today."
            />

            <div className="layout-inner" style={{ margin: '0 auto' }}>
                <div className="contact-grid" style={{ 
                    display: 'grid', 
                    gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', 
                    gap: isMobile ? '48px' : '80px' 
                }}>
                    
                    {/* Left: Form */}
                    <div className="contact-form-section" style={{ order: isMobile ? 1 : 1 }}>
                        <div style={{ marginBottom: isMobile ? '40px' : '64px' }}>
                            <h1 className="contact-title" style={{
                                fontSize: isMobile ? 'clamp(32px, 8vw, 56px)' : 'clamp(56px, 6vw, 84px)',
                                fontWeight: 800,
                                letterSpacing: '-0.04em',
                                lineHeight: 1.05,
                                marginBottom: isMobile ? '20px' : '24px',
                                wordBreak: 'break-word',
                                overflowWrap: 'anywhere'
                            }}>
                                Scale your <br />
                                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>digital legacy.</span>
                            </h1>
                            <p className="contact-description" style={{
                                fontSize: 'clamp(16px, 1.5vw, 19px)',
                                color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                                maxWidth: '500px',
                                lineHeight: 1.6
                            }}>
                                Have a project in mind? Fill out the form below and we'll get back to you within 24 hours.
                            </p>
                        </div>

                        {status === 'success' ? (
                            <div style={{
                                padding: isMobile ? '32px 24px' : '48px',
                                background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                                borderRadius: '24px',
                                textAlign: 'center'
                            }}>
                                <div style={{ 
                                    width: '64px', height: '64px', borderRadius: '50%', background: '#fff', 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px',
                                    color: '#000'
                                }}>
                                    <Send size={28} />
                                </div>
                                <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>Message Received!</h2>
                                <p style={{ color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)', maxWidth: '320px', margin: '0 auto' }}>
                                    Thank you for reaching out. Our team will review your project details and connect with you shortly.
                                </p>
                                <button 
                                    onClick={() => setStatus('idle')}
                                    style={{
                                        marginTop: '32px',
                                        padding: '14px 28px',
                                        background: isDark ? '#fff' : '#000',
                                        border: 'none',
                                        borderRadius: '100px',
                                        color: isDark ? '#000' : '#fff',
                                        cursor: 'pointer',
                                        fontWeight: 700,
                                        fontSize: '14px'
                                    }}
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                <div style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: (isMobile && window.innerWidth < 768) ? '1fr' : '1fr 1fr', 
                                    gap: isMobile ? '16px' : '24px' 
                                }}>
                                    <div>
                                        <label style={labelStyle}>Full Name</label>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            value={formData.name} 
                                            onChange={handleChange} 
                                            required 
                                            placeholder="John Doe"
                                            style={inputStyle}
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Email Address</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            value={formData.email} 
                                            onChange={handleChange} 
                                            required 
                                            placeholder="john@example.com"
                                            style={inputStyle}
                                        />
                                    </div>
                                </div>

                                <div style={{ 
                                    display: 'grid', 
                                    gridTemplateColumns: (isMobile && window.innerWidth < 768) ? '1fr' : '1fr 1fr', 
                                    gap: isMobile ? '16px' : '24px' 
                                }}>
                                    <div>
                                        <label style={labelStyle}>Company (Optional)</label>
                                        <input 
                                            type="text" 
                                            name="company" 
                                            value={formData.company} 
                                            onChange={handleChange} 
                                            placeholder="Acme Corp"
                                            style={inputStyle}
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Project Type</label>
                                        <div style={{ position: 'relative' }}>
                                            <select 
                                                name="projectType" 
                                                value={formData.projectType} 
                                                onChange={handleChange} 
                                                style={{ 
                                                    ...inputStyle, 
                                                    appearance: 'none',
                                                    cursor: 'pointer',
                                                    paddingRight: '45px' // Space for icon
                                                }}
                                            >
                                                <option style={{ background: isDark ? '#111' : '#fff', color: isDark ? '#fff' : '#000' }}>Web Design</option>
                                                <option style={{ background: isDark ? '#111' : '#fff', color: isDark ? '#fff' : '#000' }}>E-commerce</option>
                                                <option style={{ background: isDark ? '#111' : '#fff', color: isDark ? '#fff' : '#000' }}>SaaS Platform</option>
                                                <option style={{ background: isDark ? '#111' : '#fff', color: isDark ? '#fff' : '#000' }}>Mobile App</option>
                                                <option style={{ background: isDark ? '#111' : '#fff', color: isDark ? '#fff' : '#000' }}>Other</option>
                                            </select>
                                            <div style={{
                                                position: 'absolute',
                                                right: '16px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                pointerEvents: 'none',
                                                color: isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
                                            }}>
                                                <ChevronDown size={18} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <label style={labelStyle}>How can we help?</label>
                                    <textarea 
                                        name="message" 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        required 
                                        rows="5"
                                        placeholder="Tell us about your project..."
                                        style={{ ...inputStyle, resize: 'none' }}
                                    />
                                </div>

                                <button 
                                    className="contact-submit-btn"
                                    type="submit" 
                                    disabled={status === 'sending'}
                                    style={{
                                        width: '100%',
                                        padding: '20px',
                                        background: isDark ? '#fff' : '#000',
                                        color: isDark ? '#000' : '#fff',
                                        border: 'none',
                                        borderRadius: '12px',
                                        fontSize: '16px',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '12px',
                                        transition: 'all 0.3s cubic-bezier(0.23, 1, 0.32, 1)',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                        e.currentTarget.style.boxShadow = isDark ? '0 10px 30px rgba(255,255,255,0.1)' : '0 10px 30px rgba(0,0,0,0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {status === 'sending' ? 'Sending...' : (
                                        <>
                                            Submit Inquiry <ArrowRight size={20} />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Right: Info */}
                    <div style={{ order: isMobile ? 2 : 2 }}>
                        <div className="contact-info-card" style={{
                            padding: isMobile ? (window.innerWidth < 480 ? '24px 20px' : '32px 24px') : 'clamp(32px, 5vw, 48px)',
                            background: isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.02)',
                            borderRadius: '32px',
                            border: `1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}`,
                            position: isMobile ? 'relative' : 'sticky',
                            top: isMobile ? '0' : '140px'
                        }}>
                            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '40px', letterSpacing: '-0.02em' }}>Contact Details</h3>
                            
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ 
                                        width: '44px', height: '44px', borderRadius: '12px', 
                                        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                    }}>
                                        <Mail size={18} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        <p style={labelStyle}>Write to us</p>
                                        <a href="mailto:support@westbridgeitsolutions.com" style={{ 
                                            fontSize: '17px', 
                                            fontWeight: 600, 
                                            color: 'inherit', 
                                            textDecoration: 'none', 
                                            transition: 'opacity 0.2s',
                                            wordBreak: 'break-all'
                                        }}
                                           onMouseEnter={(e) => e.target.style.opacity = 0.7}
                                           onMouseLeave={(e) => e.target.style.opacity = 1}
                                        >
                                            support@westbridgeitsolutions.com
                                        </a>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <div style={{ 
                                        width: '44px', height: '44px', borderRadius: '12px', 
                                        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                    }}>
                                        <MapPin size={18} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                        <p style={labelStyle}>Our Headquarters</p>
                                        <p style={{ fontSize: '17px', fontWeight: 600, margin: 0, lineHeight: 1.5 }}>
                                            Surrey, British Columbia <br />
                                            Canada
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '64px', borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`, paddingTop: '40px' }}>
                                <p style={labelStyle}>Connect with us</p>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                                        <a 
                                            key={i} 
                                            href="#" 
                                            style={{ 
                                                width: '40px', height: '40px', borderRadius: '10px',
                                                border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                color: 'inherit', transition: 'all 0.3s ease'
                                            }}
                                            onMouseEnter={(e) => { e.currentTarget.style.background = isDark ? '#fff' : '#000'; e.currentTarget.style.color = isDark ? '#000' : '#fff'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'inherit'; }}
                                        >
                                            <Icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
