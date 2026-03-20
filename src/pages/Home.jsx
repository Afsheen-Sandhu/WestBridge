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
                description="Top-rated web design agency in Surrey, BC. We build custom websites & IT solutions for small businesses, restaurants, gyms, healthcare, ecommerce & SaaS across Surrey & Canada."
                keywords="web design agency Surrey BC, website development Surrey BC, custom website Surrey British Columbia, affordable web design Surrey Canada, web designer near me Surrey BC, IT solutions Surrey BC, small business website Surrey, web development company Surrey BC, professional web design Surrey Canada, website builder Surrey BC, custom website development Canada, affordable web design Canada, small business web design Canada, Canadian web design agency, restaurant website design Canada, ecommerce website development Canada, gym website design Canada, healthcare website design Canada, SaaS website design Canada, portfolio website design Canada, Shopify developer Surrey BC, WooCommerce developer Canada, how much does a website cost in Surrey BC, best web design agency for restaurants in Canada"
            />
            <Hero />
            <ProjectCarousels />
            <OurWorksSlides />
            <Suspense fallback={<div className="h-40" />}>
                <FeaturesGrid />
                <Testimonials />
                <ServicesGrid />
                <PlatformFlexSection />
                <FAQ />
                <ServiceTicker />
            </Suspense>
        </>
    );
};

export default Home;
