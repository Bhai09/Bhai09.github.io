import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950 to-red-900" />

      {/* Main content container */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', duration: 1 }}
        className="relative z-10 text-center px-4"
      >
        {/* Heart Container with Image */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="inline-block mb-8 relative"
        >
          <div className="relative w-48 h-48 overflow-hidden rounded-full">
            {/* Replace heart with image */}
            <img
              src="/appa1.png" // Your image path
              alt="Father's love"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-6xl font-bold text-white mb-4 drop-shadow-glow"
        >
          Happy Birthday, Appa
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl text-red-100"
        >
          Our burning love for you grows stronger each day
        </motion.p>
      </motion.div>

      {/* Floating Image Cards */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Image 1 (appa1.png) positioned top-left */}
        <motion.div
          className="absolute top-16 left-16"
          animate={{
            y: [0, -20, 0], // "jumping" effect (moving up and down)
            rotate: [0, 5, -5, 0], // Tilting effect
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <img
            src="/appaa1.jpeg"
            alt="appa1"
            className="w-32 h-32 object-cover rotate-[-10deg]"
          />
        </motion.div>

        {/* Image 2 (appa2.png) positioned top-right */}
        <motion.div
          className="absolute top-16 right-16"
          animate={{
            y: [0, -20, 0], // "jumping" effect (moving up and down)
            rotate: [0, 5, -5, 0], // Tilting effect
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <img
            src="/appaa2.jpeg"
            alt="appa2"
            className="w-32 h-32 object-cover rotate-[10deg]"
          />
        </motion.div>

        {/* Image 3 (appa3.png) positioned bottom-left */}
        <motion.div
          className="absolute bottom-16 left-16"
          animate={{
            scale: [1, 1.1, 1], // Slight scale effect
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <img
            src="/appaa3.jpeg"
            alt="appa3"
            className="w-32 h-32 object-cover rotate-[15deg]"
          />
        </motion.div>

        {/* Image 4 (appa4.png) positioned bottom-right */}
        <motion.div
          className="absolute bottom-16 right-16"
          animate={{
            scale: [1, 1.1, 1], // Slight scale effect
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        >
          <img
            src="/appaa 4.jpeg"
            alt="appa4"
            className="w-32 h-32 object-cover rotate-[-15deg]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
