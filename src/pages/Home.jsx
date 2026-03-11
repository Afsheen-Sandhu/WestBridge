import { Suspense, lazy, useEffect } from 'react';
import Hero from '../components/Hero';
import ProjectCarousels from '../components/ProjectCarousels';
import OurWorksSlides from '../components/OurWorksSlides';

const FeaturesGrid = lazy(() => import('../components/FeaturesGrid'));
const ServicesGrid = lazy(() => import('../components/ServicesGrid'));
const PlatformFlexSection = lazy(() => import('../components/PlatformFlexSection'));
const ServiceTicker = lazy(() => import('../components/ServiceTicker'));

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
            <Suspense fallback={<div className="h-40" />}>
                <FeaturesGrid />
                <ServicesGrid />
                <PlatformFlexSection />
                <ServiceTicker />
            </Suspense>
        </>
    );
};

export default Home;
