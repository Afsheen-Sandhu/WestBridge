import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import ProjectCarousels from '../components/ProjectCarousels';
import OurWorksSlides from '../components/OurWorksSlides';
import FeaturesGrid from '../components/FeaturesGrid';
import ServicesGrid from '../components/ServicesGrid';
import PlatformFlexSection from '../components/PlatformFlexSection';
import ServiceTicker from '../components/ServiceTicker';

const Home = () => {
    useEffect(() => {
        // Scroll to section if there's a hash in the URL
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    return (
        <>
            <Hero />
            <ProjectCarousels />
            <OurWorksSlides />
            <FeaturesGrid />
            <ServicesGrid />
            <PlatformFlexSection />
            <ServiceTicker />
        </>
    );
};

export default Home;
