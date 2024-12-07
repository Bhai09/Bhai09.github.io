import React from 'react';
import { motion } from 'framer-motion';
import literatiLogo from '../../literati.png';
interface RotatingLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const RotatingLogo: React.FC<RotatingLogoProps> = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48'
  };

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
        className={`${sizes[size]} relative preserve-3d`}
      >
        {/* Front face */}
        <div className="absolute w-full h-full backface-hidden">
          <img
          src={literatiLogo} alt="Literati Logo Front" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Back face */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <img
          src={literatiLogo} alt="Literati Logo Back" 
            className="w-full h-full object-contain transform scale-x-[-1]"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default RotatingLogo;