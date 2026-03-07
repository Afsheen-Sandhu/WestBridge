import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Brands from './components/Brands';

function App() {
  return (
    <div className="relative min-h-screen flex flex-col bg-black">
      <Navbar />
      <Hero />
      <Brands />

      <footer className="w-full text-center text-white/30 text-xs font-medium tracking-widest pointer-events-none z-10 py-10 pb-12 mt-auto">
        <span>© 2026 WestBridge IT Solutions. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App;
