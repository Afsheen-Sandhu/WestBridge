import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
    title = 'WestBridge IT Solutions | Custom Web Design & Development Agency', 
    description = "Surrey's premier web design & development agency. We build custom websites, mobile apps, and software that grow your business. Get a free quote today!", 
    robots = 'index, follow',
    keywords = 'web design, development agency, software solutions, IT services'
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
            <link rel="canonical" href={canonicalUrl} />
            <link rel="publisher" href={baseUrl} />
            
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
