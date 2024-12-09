import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const HeroWelcome = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Star className="text-yellow-200 w-2 h-2" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8"
        >
          <img
            src="https://images.unsplash.com/photo-1612837017391-4b6b7b0e2b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJoZXJvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Hero Silhouette"
            className="w-48 h-48 rounded-full mx-auto border-4 border-purple-500 shadow-lg shadow-purple-500/50"
          />
        </motion.div>

        <motion.h1
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
          className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
        >
          To the Hero of Our Universe
        </motion.h1>

        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, delay: 1.5 }}
          className="text-4xl font-light text-white"
        >
          Happy Birthday!
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroWelcome;