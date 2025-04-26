import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const FinalMessage: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  
  useEffect(() => {
    if (scrollPosition > 1400 && !isVisible) {
      setIsVisible(true);
      setTimeout(() => {
        setShowSparkles(true);
      }, 1000);
    }
  }, [scrollPosition, isVisible]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-16">
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
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 focus:outline-none"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to Top
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalMessage