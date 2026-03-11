import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import Templates from './pages/Templates';
import Approach from './pages/Approach';
import { Careers, Studio } from './pages/OtherPages';

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/works" element={<Works />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/studio" element={<Studio />} />
          </Routes>
        </Layout>
      </SmoothScroll>
    </Router>
  );
}

export default App;
