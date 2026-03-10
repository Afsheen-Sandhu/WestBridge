import React from 'react';
import Layout from './Layout';
import Hero from './components/Hero';
import ProjectCarousels from './components/ProjectCarousels';
import OurWorksSlides from './components/OurWorksSlides';
import FeaturesGrid from './components/FeaturesGrid';
import ServicesGrid from './components/ServicesGrid';
import PlatformFlexSection from './components/PlatformFlexSection';
import ServiceTicker from './components/ServiceTicker';


function App() {
  return (
    <Layout>
      <Hero />

      <ProjectCarousels />
      <OurWorksSlides />
      <FeaturesGrid />
      <ServicesGrid />
      <PlatformFlexSection />
      <ServiceTicker />
    </Layout>
  );
}

export default App;
