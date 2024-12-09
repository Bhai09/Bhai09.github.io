import React from 'react';
import { motion } from 'framer-motion';
import { Flame } from 'lucide-react';

const FireBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ opacity: 0, y: '100%' }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            y: [0, -1000],
            x: Math.sin(i) * 200,
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        >
          <Flame 
            className="text-orange-500/30" 
            size={40 + Math.random() * 40} 
          />
        </motion.div>
      ))}
    </div>
  );
};

export default FireBackground;