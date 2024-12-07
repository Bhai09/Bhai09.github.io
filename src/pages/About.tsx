import React from 'react';
import HeroSection from '../components/about/HeroSection';
import Vision from '../components/about/Vision';
import Timeline from '../components/about/Timeline';
import HistorySection from '../components/about/HistorySection';
import PageTurn from '../components/shared/PageTurn';

const About = () => {
  return (
    <div className="font-literary">
      <HeroSection />
      
      <PageTurn>
        <Vision />
      </PageTurn>
      
      <Timeline />
      
      <PageTurn>
        <HistorySection />
      </PageTurn>
    </div>
  );
};

export default About;