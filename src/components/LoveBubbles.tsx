import React from 'react';
import { motion } from 'framer-motion';

const messages = [
  "You're our hero, Appa!",
  "Your love lights up our world",
  "Thank you for everything",
  "We love you infinitely with love JAFR"
];

const LoveBubbles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 to-red-900 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                type: "spring"
              }}
              whileHover={{ scale: 1.05 }}
              className="perspective-1000"
            >
              {/* Wavy Cloud Container */}
              <div className="relative p-6 max-w-md mx-auto transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl blur-md opacity-50"></div>
                
                <div className="relative z-10 bg-gradient-to-br from-red-800/80 to-red-900/80 backdrop-blur-sm p-8 shadow-xl border border-red-500/20">
                  {/* Alternating Cloud with Protrusions */}
                  <div className={`relative w-full p-8 rounded-3xl transform transition-all duration-300 ${index % 2 === 0 ? 'protrude-left' : 'protrude-right'}`}>
                    <p className="text-2xl md:text-3xl text-white text-center font-medium relative z-20">
                      {message}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoveBubbles;
