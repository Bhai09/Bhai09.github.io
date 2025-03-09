import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Portfolio } from './components/Portfolio';
import { Technologies } from './components/Technologies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Projects } from './pages/Projects';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <Team />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;