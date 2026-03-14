import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Breadcrumbs = ({ items }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <nav aria-label="Breadcrumb" style={{ marginBottom: '48px' }}>
            <ol style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                fontSize: '12px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: isDark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.5)',
            }}>
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;
                    return (
                        <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {isLast ? (
                                <span style={{ color: isDark ? '#fff' : '#000' }} aria-current="page">
                                    {item.label}
                                </span>
                            ) : (
                                <>
                                    <Link 
                                        to={item.path}
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s ease'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = isDark ? '#fff' : '#000'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}
                                    >
                                        {item.label}
                                    </Link>
                                    <ChevronRight size={14} style={{ opacity: 0.5 }} />
                                </>
                            )}
                        </li>
                    );
                })}
            </ol>
            
            {/* JSON-LD Schema markup for SEO Breadcrumbs */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    "itemListElement": items.map((item, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "name": item.label,
                        "item": `https://www.westbridgeitsolutions.com${item.path || ''}`
                    }))
                })
            }} />
        </nav>
    );
};

export default Breadcrumbs;
