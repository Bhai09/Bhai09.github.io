import React, { useEffect, useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const BatmanRobinMessage: React.FC = () => {
  const scrollPosition = useScrollPosition();
  const [batmanVisible, setBatmanVisible] = useState(false);
  const [robinVisible, setRobinVisible] = useState(false);
  
  useEffect(() => {
    if (scrollPosition > 800 && !batmanVisible) {
      setBatmanVisible(true);
      setTimeout(() => {
        setRobinVisible(true);
      }, 1000);
    }
  }, [scrollPosition, batmanVisible]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-4 py-16">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-blue-500/20" />
      
      <div className="mb-12">
        <img 
          src="https://th.bing.com/th/id/OIP.s7zgMjZRhuWGUyZyxU2fRQAAAA?w=310&h=469&rs=1&pid=ImgDetMain"
          alt="Batman and Robin"
          className="w-64 mx-auto rounded-lg shadow-lg"
        />
      </div>
      
      <div className="max-w-3xl mx-auto z-10 flex flex-col md:flex-row gap-8 md:gap-16">
        <div 
          className={`flex-1 transition-all duration-1000 ${
            batmanVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <div className="bg-gray-900 border-l-4 border-yellow-400 p-6 rounded-lg shadow-lg">
            <div className="text-center mb-4">
              <h3 className="font-['Bangers'] text-3xl text-gray-200">From Captain America to Iron Man</h3>
            </div>
            <p className="text-xl text-gray-300 font-medium">
              "You gave me references - Captain America, Iron Man, Batman - everywhere you made me your mentor. Like each of their stories, we grew together."
            </p>
          </div>
        </div>
        
        <div 
          className={`flex-1 transition-all duration-1000 ${
            robinVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}
        >
          <div className="bg-red-600 border-r-4 border-green-500 p-6 rounded-lg shadow-lg">
            <div className="text-center mb-4">
              <h3 className="font-['Bangers'] text-3xl text-yellow-300">Like Batman & Robin</h3>
            </div>
            <p className="text-xl text-white font-medium">
              "Our bond grew stronger with each challenge, each conversation, making our mentor-mentee relationship truly special."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatmanRobinMessage