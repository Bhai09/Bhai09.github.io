import React, { useEffect, useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const IronManMessage: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (scrollPosition > 200 && !isVisible) {
      setIsVisible(true);
    }
  }, [scrollPosition, isVisible]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-yellow-500/20" />
      
      <div className="absolute right-0 bottom-0 w-1/3 h-2/3 opacity-20 bg-contain bg-no-repeat bg-bottom"
        style={{
          backgroundImage: 'url("https://thumbnail.imgbin.com/14/8/25/imgbin-spider-man-iron-man-hulk-thanos-black-widow-avengers-drawing-marvel-iron-spider-CbKgdyURfZ7TB3SgEaQQ0myDe_t.jpg")',
        }}
      />
      
      <div className={`max-w-3xl mx-auto z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600 px-6 py-3 rounded-full transform -rotate-2">
            <h2 className="font-['Bangers'] text-4xl md:text-5xl text-yellow-300 tracking-wide">
              A Message from Your Mentor
            </h2>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-1">
            <p className="text-xl text-gray-800 font-semibold">
              "Your being part of my life was unexpected. Someone wishing me and admiring my smile was new. The way we interacted was different, the way you do things are different, but as mentioned earlier, we both are really same in lots of aspects."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg transform -rotate-1">
            <p className="text-xl text-gray-800 font-semibold">
              "You have always motivated me and gave me lots of realizations. Stood by me when I was low. Encouraged me, stood for me. At some point, I felt that you have become more than just a junior."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg transform rotate-1">
            <p className="text-xl text-gray-800 font-semibold">
              "Like each superhero's story where they grew with their partners, I grew with you. I learned a lot. I understood the need to take stand and express."
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-white text-center">
          <p className="text-lg font-semibold">- Adithya</p>
        </div>
      </div>
    </section>
  );
};

export default IronManMessage