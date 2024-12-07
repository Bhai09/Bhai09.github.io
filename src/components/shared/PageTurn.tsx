import React from 'react';
import { motion } from 'framer-motion';

interface PageTurnProps {
  children: React.ReactNode;
}

const PageTurn: React.FC<PageTurnProps> = ({ children }) => {
  return (
    <motion.div
      initial={{ rotateY: 90, opacity: 0 }}
      animate={{ rotateY: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="perspective-1000"
    >
      {children}
    </motion.div>
  );
};

export default PageTurn;