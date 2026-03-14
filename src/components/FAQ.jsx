import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "1. How do I get started with WestBridge?",
    answer: "Getting started is easy. Simply reach out to us via our contact form, and we'll schedule a discovery call to understand your project needs, goals, and timeline. From there, we'll provide a tailored proposal and strategic roadmap."
  },
  {
    question: "2. How involved do I need to be during the project?",
    answer: "We believe in collaborative partnerships. While we handle the heavy lifting of design and development, your feedback during key milestones (strategy, design approval, and final review) is crucial to ensuring the final product perfectly aligns with your vision."
  },
  {
    question: "3. How long does it take to build a website?",
    answer: "The timeline varies based on the complexity and scope of the project. A standard corporate website typically takes 4-8 weeks from discovery to launch, while more complex eCommerce or custom web applications may take 10-16 weeks."
  },
  {
    question: "4. Do you provide support after the website is launched?",
    answer: "Yes, absolutely! We offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performs optimally. We're here for you long after the initial launch."
  },
  {
    question: "5. Do you create responsive and eCommerce websites?",
    answer: "Yes, every website we build is fully responsive and optimized for all devices. We also specialize in creating high-converting eCommerce experiences using platforms like Shopify, WooCommerce, and custom headless solutions."
  }
];

const FAQ = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section 
      style={{ 
        width: '100%', 
        padding: 'clamp(80px, 10vw, 160px) 24px',
        background: isDark ? '#000' : '#fff',
        transition: 'background 0.4s ease'
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 
          style={{ 
            fontSize: 'clamp(40px, 6vw, 64px)', 
            fontWeight: 700, 
            textAlign: 'center', 
            letterSpacing: '-0.04em',
            color: isDark ? '#fff' : '#000',
            marginBottom: '64px'
          }}
        >
          Frequently Asked <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400 }}>Questions</span>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                style={{
                  border: `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}`,
                  borderRadius: '16px',
                  overflow: 'hidden',
                  background: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)',
                  transition: 'all 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '24px 32px',
                    background: 'transparent',
                    border: 'none',
                    color: isDark ? '#fff' : '#000',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    fontWeight: 600,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: '-0.01em',
                  }}
                >
                  {faq.question}
                  <ChevronDown 
                    size={20} 
                    style={{ 
                      flexShrink: 0, 
                      transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      opacity: 0.6
                    }} 
                  />
                </button>
                
                <div 
                  style={{
                    display: 'grid',
                    gridTemplateRows: isOpen ? '1fr' : '0fr',
                    transition: 'grid-template-rows 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
                  }}
                >
                  <div style={{ overflow: 'hidden' }}>
                    <div 
                      style={{ 
                        padding: '0 32px 32px', 
                        opacity: isOpen ? 1 : 0,
                        transition: 'opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)'
                      }}
                    >
                      <p 
                        style={{ 
                          margin: 0,
                          color: isDark ? 'rgba(255,255,255,0.6)' : 'rgba(0,0,0,0.6)',
                          lineHeight: 1.7,
                          fontSize: '16px'
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
