import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

const HeroHeader: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-16">
      <div 
        className={`transition-all duration-1000 ease-out transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="mb-8">
          <Zap className="w-16 h-16 text-yellow-400 mx-auto animate-pulse" />
        </div>
        
        <div className="mb-8">
          <img 
            src="https://freepngimg.com/thumb/spiderman/75444-spiderman-spider-man-amazing-ultimate-iron-the.png" 
            alt="Spider-Man"
            className="w-32 h-32 object-contain mx-auto"
          />
        </div>
        
        <h1 className="font-['Bangers'] text-6xl md:text-8xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 tracking-wider">
          Happy Birthday Umera!
        </h1>
        
        <div className="inline-block bg-white p-5 rounded-lg transform rotate-2 shadow-lg mb-8">
          <p className="font-['Bangers'] text-2xl md:text-3xl text-gray-800">
            From your mentor, who's fashionably late! 🎉
          </p>
        </div>
        
        <div className="mt-12">
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroHeader