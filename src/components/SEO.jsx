import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
    title = 'WestBridge IT Solutions | Custom Web Design & Development Agency', 
    description = "Surrey's premier web design & development agency. We create custom websites, mobile apps, and software solutions that grow your business. Get a free quote today!", 
    robots = 'index, follow',
    keywords = 'web design, development agency, software solutions, IT services'
}) => {
    const location = useLocation();
    const baseUrl = 'https://www.westbridgeitsolutions.com';
    const currentPath = location.pathname === '/' ? '' : location.pathname;
    const canonicalUrl = `${baseUrl}${currentPath}`;

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content={robots} />
            <link rel="canonical" href={canonicalUrl} />
            
            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonicalUrl} />
            
            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
};

export default SEO;
