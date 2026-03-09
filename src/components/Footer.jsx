import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const linkStyle = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 13,
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.7,
  };

  const headingStyle = {
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: '0.16em',
    color: 'rgba(255,255,255,0.45)',
    marginBottom: 10,
  };

  return (
    <footer className="w-full bg-black border-t border-white/10">
      <div className="layout-outer">
        <div className="layout-inner pt-10 pb-8">
        {/* Social strip (desktop only to reduce crowding on small screens) */}
        <div className="hidden md:grid grid-cols-4 border-b border-white/10">
          {[
            { label: 'Instagram', Icon: Instagram },
            { label: 'Facebook', Icon: Facebook },
            { label: 'Twitter', Icon: Twitter },
            { label: 'LinkedIn', Icon: Linkedin },
          ].map(({ label, Icon }, idx) => (
            <div
              key={label}
              className="flex items-center justify-between gap-3"
              style={{
                padding: '14px 18px',
                borderRight: idx !== 3 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                borderTop: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <div className="flex items-center gap-2">
                <Icon size={16} color="rgba(255,255,255,0.78)" strokeWidth={1.6} />
                <span
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.78)',
                  }}
                >
                  {label}
                </span>
              </div>
              <ArrowUpRight size={14} color="rgba(255,255,255,0.65)" strokeWidth={1.6} />
            </div>
          ))}
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-10 pt-10 pb-8">
          <div>
            <div style={headingStyle}>Company</div>
            <ul style={linkStyle}>
              <li>About</li>
              <li>Approach</li>
              <li>Work</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <div style={headingStyle}>Services</div>
            <ul style={linkStyle}>
              <li>Crafted Websites</li>
              <li>Website Redesign</li>
              <li>eCommerce Design</li>
              <li>CMS &amp; Dynamic Sites</li>
            </ul>
          </div>

          <div>
            <div style={headingStyle}>Resources</div>
            <ul style={linkStyle}>
              <li>Blog</li>
              <li>Templates</li>
              <li>Process</li>
              <li>FAQs</li>
            </ul>
          </div>

          <div>
            <div style={headingStyle}>Contact</div>
            <ul style={linkStyle}>
              <li>Email: contact@westbridgeit.com</li>
              <li>Phone: +91 91273 88849</li>
              <li>WhatsApp: +91 91273 88849</li>
              <li>India – Working globally</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-white/40 pt-3 border-t border-white/10">
          <span>© 2026 WestBridge IT Solutions. All rights reserved.</span>
          <span>Designed &amp; built by WestBridge</span>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

