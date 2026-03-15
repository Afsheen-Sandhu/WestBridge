import { Suspense, lazy, useEffect } from 'react';
import Hero from '../components/Hero';
import ProjectCarousels from '../components/ProjectCarousels';
import OurWorksSlides from '../components/OurWorksSlides';
import SEO from '../components/SEO';

const FeaturesGrid = lazy(() => import('../components/FeaturesGrid'));
const ServicesGrid = lazy(() => import('../components/ServicesGrid'));
const PlatformFlexSection = lazy(() => import('../components/PlatformFlexSection'));
const ServiceTicker = lazy(() => import('../components/ServiceTicker'));
const FAQ = lazy(() => import('../components/FAQ'));
const DetailedProcess = lazy(() => import('../components/DetailedProcess'));
const Testimonials = lazy(() => import('../components/Testimonials'));

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
            <SEO 
                title="Web Design Agency Surrey, BC | WestBridge IT Solutions"
                description="Web design & development agency in Surrey, BC. We create custom websites, mobile apps, and software for Surrey, Vancouver & Canada. Get a free quote today."
            />
            <Hero />
            <ProjectCarousels />
            <OurWorksSlides />
            <Suspense fallback={<div className="h-40" />}>
                <FeaturesGrid />
                <Testimonials />
                <DetailedProcess />
                <ServicesGrid />
                <PlatformFlexSection />
                <FAQ />
                <ServiceTicker />
            </Suspense>
        </>
    );
};

export default Home;
