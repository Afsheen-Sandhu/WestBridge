import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
    title = 'Web Design Agency Surrey, BC | WestBridge IT Solutions', 
    description = "Web design & development agency in Surrey, BC. We build custom websites, mobile apps, and software for businesses across Surrey, Vancouver & Canada. Get a free quote.", 
    robots = 'index, follow',
    keywords = 'web design agency Surrey BC, website development Surrey BC, custom website Surrey British Columbia, affordable web design Surrey Canada, web designer near me Surrey BC, IT solutions Surrey BC, small business website Surrey, web development company Surrey BC, professional web design Surrey Canada, custom website development Canada, affordable web design Canada, small business web design Canada, Canadian web design agency, web development company Canada'
}) => {
    const location = useLocation();
    const baseUrl = 'https://www.westbridgeitsolutions.com';
    
    // Clean currentPath: Remove trailing slashes and handle root
    const normalizedPath = location.pathname.endsWith('/') && location.pathname !== '/' 
        ? location.pathname.slice(0, -1) 
        : location.pathname;
    
    const canonicalUrl = `${baseUrl}${normalizedPath}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description.slice(0, 155)} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content={robots} />
            <meta name="googlebot" content={robots} />
            <meta name="X-Robots-Tag" content={robots} />
            <link rel="canonical" href={canonicalUrl} />
            <link rel="publisher" href={baseUrl} />
            <meta name="publisher" content="WestBridge IT Solutions" />
            <meta name="author" content="WestBridge IT Solutions" />
            
            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description.slice(0, 155)} />
            <meta property="og:url" content={canonicalUrl} />
            
            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description.slice(0, 155)} />
        </Helmet>
    );
};

export default SEO;
