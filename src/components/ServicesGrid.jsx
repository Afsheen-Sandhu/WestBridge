import React, { useMemo, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

import {
  Globe,
  PenTool,
  ShoppingCart,
  LayoutGrid,
  PanelTop,
  Fingerprint,
  Wand2,
  Send,
  Gauge,
  Wrench,
  X
} from 'lucide-react';

const ServicesGrid = () => {
  const { theme } = useTheme();
  const [hovered, setHovered] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const services = useMemo(
    () => [
      { 
        title: 'Crafted\nWebsites', 
        Icon: Globe,
        detail: "Our custom web development services focus on building high-performance, scalable platforms tailored to your business needs. Using modern frameworks like React and Next.js, we ensure your digital home is not just beautiful but also technically superior, providing a seamless user experience across all devices. We handle everything from complex backend integrations to fluid frontend interactions, ensuring your site is a powerful tool for growth."
      },
      { 
        title: 'Website\nRedesign', 
        Icon: PenTool,
        detail: "A website redesign is more than just a fresh coat of paint. We perform deep UI/UX audits to identify friction points in your current user journey. By implementing modern design principles and optimizing conversion paths, we transform underperforming websites into high-conversion assets. Our approach balances brand evolution with technical improvements like faster load times and mobile responsiveness."
      },
      { 
        title: 'eCommerce\nWebsite Design', 
        Icon: ShoppingCart,
        detail: "In the world of online retail, performance is currency. We specialize in building robust eCommerce stores on platforms like Shopify and custom headless solutions. Our designs focus on minimizing checkout friction, improving product discoverability, and creating a secure environment that builds trust with your customers. We integrate inventory management, payment gateways, and CRM systems for a truly unified commerce experience."
      },
      { 
        title: 'CMS &\nDynamic Websites', 
        Icon: LayoutGrid,
        detail: "Empower your team to manage content effortlessly with our custom CMS solutions. Whether you prefer the flexibility of Webflow, the familiarity of WordPress, or the power of a Headless CMS like Sanity/Strapi, we build intuitive dashboards that don't require technical knowledge. We structure your data logically, ensuring that adding new blogs, products, or portfolios is a matter of clicks, not code."
      },
      { 
        title: 'Landing Pages\n& Microsites', 
        Icon: PanelTop,
        detail: "For high-impact marketing campaigns, you need landing pages that sell. Our microsites are engineered for speed and conversion. We utilize psychological design cues, strong call-to-actions, and A/B testing frameworks to ensure every visitor has the highest chance of converting. These pages are perfect for product launches, event registrations, or specialized lead generation campaigns."
      },
      { 
        title: 'Consistent\nIdentity', 
        Icon: Fingerprint,
        detail: "Brand consistency builds trust. We create comprehensive digital design systems that ensure your visual identity remains cohesive across every touchpoint. From typography and color palettes to custom iconography and UI component libraries, we provide the tools your brand needs to scale without losing its soul. This systematic approach speeds up future development and maintains a premium feel."
      },
      { 
        title: 'Motion &\nInteraction Design', 
        Icon: Wand2,
        detail: "Motion isn't just decoration; it's communication. We use advanced animation libraries like GSAP and Framer Motion to create micro-interactions that guide users and provide delightful feedback. High-quality motion design makes digital products feel 'alive' and premium, significantly increasing user engagement and brand perception. We carefully balance performance to ensure these animations are fluid and lightweight."
      },
      { 
        title: 'UX Centric\nStrategy', 
        Icon: Send,
        detail: "Great design starts with research. Our UX strategy involves competitive analysis, user testing, and journey mapping. We don't just build what looks good; we build what works for your specific audience. By understanding user behavior through data and empathy, we create strategic roadmaps that ensure your digital investment delivers real, measurable business value."
      },
      { 
        title: 'Performance\nOptimization', 
        Icon: Gauge,
        detail: "Speed is a feature. In an era where a 1-second delay can cost millions, we prioritize Core Web Vitals and technical SEO. We optimize images, implement lazy loading, utilize CDNs, and audit server response times to ensure your site is lightning fast. High performance not only improves user retention but is also a critical ranking factor for search engines like Google."
      },
      { 
        title: 'Maintenance &\nOngoing Support', 
        Icon: Wrench,
        detail: "The web is constantly evolving, and your site should too. We provide proactive maintenance that includes security patches, uptime monitoring, and regular content updates. Our ongoing support ensures your digital platform remains secure, high-performing, and up-to-date with the latest browser standards. We act as your technical partners, giving you peace of mind to focus on your business."
      },
    ],
    []
  );

  return (
    <section
      id="services"
      className="w-full relative transition-colors duration-400"
      style={{
        background: theme === 'dark' ? '#000' : '#fff',
        padding: 'clamp(60px, 8vw, 120px) 0 clamp(80px, 12vw, 160px)',
        overflowX: 'clip'
      }}
    >
      <div
        className="w-full flex flex-col lg:flex-row lg:items-center items-start justify-between gap-6 lg:gap-10"
        style={{ paddingBottom: '32px' }}
      >
        <h2
          className="font-body leading-tight"
          style={{
            color: theme === 'dark' ? '#fff' : '#000',
            fontSize: 'clamp(30px, 3.6vw, 52px)',
            letterSpacing: '-0.03em',
            fontWeight: 600,
          }}
        >
          Elevate your
          <br />
          digital footprint.
        </h2>

        <div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto"
          style={{ paddingBottom: 8 }}
        >
          <button
            type="button"
            className="rounded-full font-semibold transition-all duration-300 active:scale-95 flex-1 sm:flex-none justify-center cursor-pointer"
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: theme === 'dark' ? '#fff' : '#000',
              color: theme === 'dark' ? '#000' : '#fff',
              border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
              minWidth: '160px',
              display: 'flex',
              alignItems: 'center',
            }}
            onClick={() => window.location.href = '/contact'}
          >
            Start a project
          </button>
          <button
            type="button"
            className="rounded-full font-semibold transition-all duration-300 active:scale-95 flex-1 sm:flex-none justify-center cursor-pointer"
            style={{
              padding: '12px 24px',
              fontSize: '14px',
              background: theme === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.06)',
              color: theme === 'dark' ? '#fff' : '#000',
              border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'}`,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              minWidth: '160px',
              display: 'flex',
              alignItems: 'center',
            }}
            aria-label="See our portfolio works"
            onClick={() => window.location.href = '/works'}
          >
            See our work
          </button>
        </div>
      </div>

      <div className="grid gap-3 sm:gap-5 grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 w-full">
        {services.map((service, idx) => {
          const isHovered = hovered === idx;
          const { title, Icon } = service;
          return (
            <div
              key={`${title}-${idx}`}
              className="flex justify-center"
            >
              <div
                className="relative overflow-hidden cursor-pointer"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelectedService(service)}
                style={{
                  height: 168,
                  width: '100%',
                  maxWidth: 260,
                  borderRadius: 18,
                  border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                  background: theme === 'dark' ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.03)',
                  boxShadow: isHovered
                    ? (theme === 'dark' ? '0 40px 80px -40px rgba(255,255,255,0.18)' : '0 40px 80px -40px rgba(0,0,0,0.1)')
                    : 'none',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'transform 260ms ease, box-shadow 260ms ease, border-color 260ms ease, background 260ms ease',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transition: 'opacity 260ms ease',
                    background: theme === 'dark'
                      ? 'radial-gradient(60% 65% at 50% 35%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 28%, rgba(255,255,255,0) 70%)'
                      : 'radial-gradient(60% 65% at 50% 35%, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.02) 28%, rgba(0,0,0,0) 70%)',
                  }}
                />

                <div className="relative h-full w-full flex flex-col items-center justify-center gap-5 px-6 text-center">
                  <Icon
                    size={26}
                    color={theme === 'dark' ? 'rgba(255,255,255,0.92)' : 'rgba(0,0,0,0.8)'}
                    strokeWidth={1.8}
                  />
                  <div
                    className="font-body"
                    style={{
                      color: theme === 'dark' ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.75)',
                      fontSize: 13,
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {title}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Detail Modal ── */}
      {selectedService && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(10px)',
          }}
          onClick={() => setSelectedService(null)}
        >
          <div 
            style={{
              maxWidth: '600px',
              width: '100%',
              background: theme === 'dark' ? '#0a0a0a' : '#fff',
              border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
              borderRadius: '24px',
              padding: '40px',
              position: 'relative',
              boxShadow: '0 32px 64px rgba(0,0,0,0.5)',
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: theme === 'dark' ? '#fff' : '#000',
                opacity: 0.5,
              }}
            >
              <X size={24} />
            </button>

            <div style={{ marginBottom: '24px', color: theme === 'dark' ? '#fff' : '#000' }}>
              <selectedService.Icon size={40} strokeWidth={1.5} />
            </div>

            <h3 style={{
              fontSize: '28px',
              fontWeight: 800,
              color: theme === 'dark' ? '#fff' : '#000',
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              whiteSpace: 'pre-line'
            }}>
              {selectedService.title}
            </h3>

            <p style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: theme === 'dark' ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.7)',
              margin: 0
            }}>
              {selectedService.detail}
            </p>

            <div style={{ marginTop: '32px' }}>
                <button
                    onClick={() => window.location.href = '/contact'}
                    style={{
                        padding: '12px 28px',
                        background: theme === 'dark' ? '#fff' : '#000',
                        color: theme === 'dark' ? '#000' : '#fff',
                        border: 'none',
                        borderRadius: '500px',
                        fontWeight: 700,
                        fontSize: '14px',
                        cursor: 'pointer'
                    }}
                >
                    Discuss this service
                </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesGrid;

