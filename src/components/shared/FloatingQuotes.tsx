import React from 'react';
import { motion } from 'framer-motion';

const quotes = [
  '"The only truth is art." - Oscar Wilde',
  '"Words are life." - The Book Thief',
  '"Stories are light." - Kate DiCamillo',
  '"Write to live." - Elizabeth George',
];

const FloatingQuotes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {quotes.map((quote, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [-50, -100, -150, -200],
            x: Math.sin(index) * 50,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            delay: index * 3,
          }}
          className="absolute text-gray-200/20 text-sm sm:text-base md:text-xl font-serif hidden sm:block"
          style={{
            left: `${(index * 25) % 100}%`,
            top: '100%',
          }}
        >
          {quote}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingQuotes;