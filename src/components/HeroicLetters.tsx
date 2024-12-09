import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const letters = [
  { letter: 'H', meaning: 'Heart of Gold', description: 'Your endless love and compassion guide us.' },
  { letter: 'E', meaning: 'Eternal Strength', description: 'Standing tall through every storm.' },
  { letter: 'R', meaning: 'Remarkable Spirit', description: 'Inspiring us with your courage.' },
  { letter: 'O', meaning: 'Outstanding Father', description: 'The greatest role model we could ask for.' },
];

const HeroicLetters = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900 py-20">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {letters.map((item, index) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                  className="text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 mb-4"
                >
                  {item.letter}
                </motion.div>
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.meaning}</h3>
                  <p className="text-purple-200">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroicLetters;