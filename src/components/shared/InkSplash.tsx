import React from 'react';
import { motion } from 'framer-motion';

interface InkSplashProps {
  className?: string;
}

const InkSplash: React.FC<InkSplashProps> = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: 0 }}
      animate={{ scale: 1, rotate: 360 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`absolute w-32 h-32 bg-indigo-900/10 rounded-full blur-xl ${className}`}
    />
  );
};

export default InkSplash;