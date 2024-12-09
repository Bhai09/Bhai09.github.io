import React from 'react';
import FireBackground from './components/FireBackground';
import FloatingQuotes from './components/FloatingQuotes';
import HeroSection from './components/HeroSection';
import MemoryGrid from './components/MemoryGrid';
import LoveBubbles from './components/LoveBubbles';
import MemoryCarousel from './components/MemoryCarousel';

function App() {
  return (
    <div className="relative">
      {/* Background Fire Animation */}
      <FireBackground />

      {/* Floating Quotes */}
      <FloatingQuotes />

      {/* Hero Section */}
      <HeroSection />

      {/* Memory Carousel */}
      <MemoryCarousel />

      {/* Memory Grid */}
      <MemoryGrid />

      {/* Love Bubbles Animation */}
      <LoveBubbles />
    </div>
  );
}

export default App;
