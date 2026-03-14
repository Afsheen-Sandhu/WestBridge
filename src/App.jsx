import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import SmoothScroll from './components/SmoothScroll';

// Lazy-load all pages — only the current route's JS is downloaded
const Home       = lazy(() => import('./pages/Home'));
const About      = lazy(() => import('./pages/About'));
const Works      = lazy(() => import('./pages/Works'));
const Services   = lazy(() => import('./pages/Services'));
const Blogs      = lazy(() => import('./pages/Blogs'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const WorkDetail = lazy(() => import('./pages/WorkDetail'));
const Templates  = lazy(() => import('./pages/Templates'));
const Approach   = lazy(() => import('./pages/Approach'));
const Careers    = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.Careers })));
const Studio     = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.Studio })));

// Minimal fallback — invisible div keeps layout stable during chunk load
const PageLoader = () => (
  <div style={{ minHeight: '100vh' }} aria-hidden="true" />
);

function App() {
  return (
    <Router>
      <SmoothScroll>
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"            element={<Home />} />
              <Route path="/about-us"    element={<About />} />
              <Route path="/works"       element={<Works />} />
              <Route path="/works/:slug" element={<WorkDetail />} />
              <Route path="/services"    element={<Services />} />
              <Route path="/blogs"       element={<Blogs />} />
              <Route path="/blogs/:slug" element={<BlogDetail />} />
              <Route path="/templates"   element={<Templates />} />
              <Route path="/approach"    element={<Approach />} />
              <Route path="/careers"     element={<Careers />} />
              <Route path="/studio"      element={<Studio />} />
            </Routes>
          </Suspense>
        </Layout>
      </SmoothScroll>
    </Router>
  );
}

export default App;
