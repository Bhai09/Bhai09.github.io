import React, { useEffect, useState } from 'react';
import HeroHeader from './components/HeroHeader';
import IronManMessage from './components/IronManMessage';
import BatmanRobinMessage from './components/BatmanRobinMessage';
import FinalMessage from './components/FinalMessage';
import Confetti from './components/Confetti';
import { useScrollPosition } from './hooks/useScrollPosition';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const scrollPosition = useScrollPosition();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 overflow-hidden">
      <audio src="https://jmp.sh/s/PgjRj26xvzAeDgkxouPU" autoPlay loop muted />
      <div 
        className="absolute inset-0 w-full h-full bg-no-repeat bg-bottom opacity-20"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          transform: `translateY(${scrollPosition * 0.2}px)`,
        }}
      />
      
      <div className="relative z-10">
        <HeroHeader />
        <IronManMessage />
        <BatmanRobinMessage />
        <FinalMessage />
      </div>
      
      {showConfetti && <Confetti />}
    </div>
}

export default App;