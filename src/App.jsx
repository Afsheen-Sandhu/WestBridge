import React from 'react';
import Layout from './Layout';
import Hero from './components/Hero';
import ProjectCarousels from './components/ProjectCarousels';
import OurWorksSlides from './components/OurWorksSlides';
import ServicesGrid from './components/ServicesGrid';
import PlatformFlexSection from './components/PlatformFlexSection';
import ServiceTicker from './components/ServiceTicker';
import Brands from './components/Brands';

function App() {
  return (
    <Layout>
      <Hero />
      <Brands />
      <ProjectCarousels />
      <OurWorksSlides />
      <ServicesGrid />
      <PlatformFlexSection />
      <ServiceTicker />
    </Layout>
  );
}

export default App;
