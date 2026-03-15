import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppIcon from './components/WhatsAppIcon';

const Layout = ({ children }) => {
  useEffect(() => {
    document.dispatchEvent(new Event('prerender-ready'));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col transition-colors duration-400">
      <Navbar />


      <main className="flex-1 w-full layout-outer">
        <div className="layout-inner">
          {children}
        </div>
      </main>

      <Footer />
      <WhatsAppIcon />
    </div>
  );
};

export default Layout;

