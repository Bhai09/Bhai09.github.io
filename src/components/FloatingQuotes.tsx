import React from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

// List of quotes to display
const quotes = [
  "A father's love is eternal",
  "You're my superhero, Dad",
  "Thank you for being my guiding light",
  "Your wisdom shapes our world",
  "Forever grateful for your love",
  "The best father in the universe",
  "Your strength inspires us daily",
  "Our rock, our hero, our dad"
];

const FloatingQuotes = () => {
  const [playHover] = useSound('/hover.mp3', { volume: 0.5 });  // Sound effect for hover

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]"> {/* z-[9999] for high z-index */}
      {quotes.map((quote, index) => {
        // Random x and y positions
        const x = Math.random() * (window.innerWidth - 200); // Avoid quotes overflowing on the right side
        const y = Math.random() * (window.innerHeight - 100); // Avoid quotes overflowing on the bottom

        return (
          <motion.div
            key={index}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1, 0.8],
              x: [x, x + 50, x], // Move in x-axis randomly
              y: [y, y - 50, y], // Move in y-axis randomly
            }}
            transition={{
              duration: 8 + Math.random() * 4,  // Random animation duration
              repeat: Infinity,                 // Infinite loop of animation
              delay: index * 0.5,               // Staggered delay
              ease: "easeInOut",                // Smooth easing for animations
            }}
            onHoverStart={playHover}            // Play sound on hover
          >
            <div className="text-red-300/60 text-lg font-serif italic transform rotate-3">
              {quote}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingQuotes;
