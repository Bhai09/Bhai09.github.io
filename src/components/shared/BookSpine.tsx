import React from 'react';
import { motion } from 'framer-motion';

interface BookSpineProps {
  title: string;
  color: string;
  height?: string;
}

const BookSpine: React.FC<BookSpineProps> = ({ title, color, height = "h-40" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`${height} w-4 sm:w-6 md:w-8 ${color} rounded-sm shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300`}
    >
      <span className="writing-mode-vertical text-white text-xs sm:text-sm font-serif whitespace-nowrap">
        {title}
      </span>
    </motion.div>
  );
};

export default BookSpine;