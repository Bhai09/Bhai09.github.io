import React from 'react';
import { motion } from 'framer-motion';
import RotatingLogo from './RotatingLogo';

const PageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-indigo-950/90 flex items-center justify-center z-50"
    >
      <div className="text-center">
        <RotatingLogo size="sm" className="mb-4" />
        <p className="text-white font-literary animate-pulse">Loading...</p>
      </div>
    </motion.div>
  );
};

export default PageLoader;