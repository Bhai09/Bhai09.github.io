import React, { useEffect, useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const FinalMessage: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  useEffect(() => {
    if (scrollPosition > 1400 && !isVisible) {
      setIsVisible(true);
      setTimeout(() => {
        setShowSparkles(true);
      }, 1000);
    }
  }, [scrollPosition, isVisible]);

  const handlePlayClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-16">
      <audio ref={audioRef} src="https://jmp.sh/s/PgjRj26xvzAeDgkxouPU" loop />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-red-600/60" />
      
      {showSparkles && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <Sparkles
              key={i}
              className={`absolute text-yellow-300 animate-pulse`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.6 + Math.random() * 0.4,
                width: `${20 + Math.random() * 20}px`,
                height: `${20 + Math.random() * 20}px`,
                animationDuration: `${1 + Math.random() * 2}s`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      )}
      
      <div 
        className={`max-w-4xl mx-auto z-10 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
      >
        <div className="inline-block px-8 py-2 bg-yellow-400 transform -rotate-2 mb-8">
          <h2 className="font-['Bangers'] text-6xl text-red-600 tracking-wide">BOOM!</h2>
        </div>
        
        <h1 className="font-['Bangers'] text-6xl md:text-7xl lg:text-8xl mb-8 text-white tracking-wide leading-tight">
          Happy Birthday
          <br />
          <span className="text-yellow-300">Umera!</span>
        </h1>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto mb-8">
          <p className="text-xl md:text-2xl text-gray-800 font-medium">
            Happy Birthday to the junior who made me smile more in my life. Let this birthday increase the depth and strength of the bond we have and make it more strong.
          </p>
        </div>
        
        <div className="mb-12">
          <img 
            src="https://i.postimg.cc/Y9qDmQxr/LIt.png"
            alt="Umera and Adithya"
            className="max-w-md mx-auto rounded-lg shadow-xl"
          />
        </div>
        
        <div className="mt-8">
          {!isPlaying ? (
            <div className="flex flex-col items-center cursor-pointer" onClick={handlePlayClick}>
              <div className="mb-2 px-4 py-2 bg-white bg-opacity-80 rounded-full shadow-lg text-black text-sm font-semibold select-none">
                Play to listen
              </div>
              <button className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-6.518-3.75A1 1 0 007 8.25v7.5a1 1 0 001.234.97l6.518-1.875a1 1 0 000-1.82z" />
                </svg>
              </button>
            </div>
          ) : (
            <button
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg focus:outline-none"
              onClick={() => {
                if (audioRef.current) {
                  audioRef.current.pause();
                }
                setIsPlaying(false);
              }}
            >
              Pause
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FinalMessage;
