import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';

// A list of one-liners based on the qualities of a loving, selfless father
const qualities = {
  A: "Always there to support and guide.",
  P1: "Patient beyond measure, always listening.",
  P2: "Protective and caring, ensuring our safety.",
  A2: "A heart full of unconditional love."
};

const Interactive3DCard = ({ letter, quality }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [playHover] = useSound('/hover.mp3', { volume: 0.5 });

  // Handle hover state and trigger sound
  const handleHover = () => {
    setIsHovered(true);
    playHover();
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group cursor-pointer"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      {/* Background gradient effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300" />

      {/* Card container with 3D movement effect */}
      <motion.div
        className="relative w-64 h-96 bg-red-950 rounded-xl overflow-hidden"
        style={{
          transform: isHovered
            ? 'translate3d(10px, -10px, 10px) rotateX(5deg) rotateY(5deg)'
            : 'translate3d(0, 0, 0)',
          transition: 'transform 0.4s ease-in-out',
        }}
      >
        {/* Front side of the card (Shows letter) */}
        <div
          className="absolute inset-0 bg-red-950 rounded-xl flex items-center justify-center"
          style={{
            backfaceVisibility: 'hidden', // Ensures that front side is hidden when flipped
            zIndex: isHovered ? 0 : 1, // Makes sure the front side is on top when hovered
          }}
        >
          <h1 className="text-6xl font-extrabold text-white">{letter}                   
          </h1>
          <hr/>
          <br/>
          <h3 className="text-2xl font-extrabold text-white">{quality}</h3>
        </div>

        {/* Back side of the card (Shows quality description) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-red-800 to-red-900 rounded-xl p-6 flex items-center justify-center text-center"
          style={{
            transform: 'rotateY(180deg)', // This rotates the back side of the card
            backfaceVisibility: 'hidden', // Makes the back side invisible when flipped away
            zIndex: isHovered ? 1 : 0, // Ensures back side is visible when hovered
            transition: 'transform 0.1s ease-in-out', // Smooth transition on flip
          }}
        >
          <p className="text-white text-lg">{quality}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Interactive3DCard;
