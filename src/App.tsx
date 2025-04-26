import React, { useEffect, useState, useRef } from 'react';
import HeroHeader from './components/HeroHeader';
import IronManMessage from './components/IronManMessage';
import BatmanRobinMessage from './components/BatmanRobinMessage';
import FinalMessage from './components/FinalMessage';
import Confetti from './components/Confetti';
import { useScrollPosition } from './hooks/useScrollPosition';

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const scrollPosition = useScrollPosition();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  const handlePlayClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 overflow-hidden">
      <audio ref={audioRef} src="https://jmp.sh/s/PgjRj26xvzAeDgkxouPU" loop />
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

      {/* Play button fixed at bottom center */}
      {!isPlaying && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer" onClick={handlePlayClick}>
          {/* Hovering cloud */}
          <div className="mb-2 px-4 py-2 bg-white bg-opacity-80 rounded-full shadow-lg text-black text-sm font-semibold select-none">
            Play to listen
          </div>
          {/* Play button */}
          <button className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.75A1 1 0 007 8.25v7.5a1 1 0 001.234.97l6.518-1.875a1 1 0 000-1.82z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
