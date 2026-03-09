import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen flex flex-col bg-black">
      <Navbar />

      <main className="flex-1 w-full layout-outer">
        <div className="layout-inner">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Layout;

