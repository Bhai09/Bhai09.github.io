import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  index: number;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ year, title, description, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`relative flex items-center ${
        isEven ? 'md:justify-start' : 'md:justify-end'
      } mb-8 px-4 md:px-0`}
    >
      {/* Mobile Timeline */}
      <div className="absolute left-0 md:hidden w-0.5 h-full bg-indigo-200 -z-10" />
      
      {/* Desktop Timeline */}
      <div className="hidden md:block absolute left-1/2 w-0.5 h-full bg-indigo-200 transform -translate-x-1/2 -z-10" />

      <div className={`w-full md:w-5/12 ${
        isEven ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'
      }`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-4 md:p-6 rounded-lg shadow-lg paper-texture relative"
        >
          <span className="text-indigo-600 font-bold text-lg md:text-xl font-literary">{year}</span>
          <h3 className="text-lg md:text-xl font-semibold mt-2 font-literary">{title}</h3>
          <p className="text-gray-600 mt-2 text-sm md:text-base font-prose">{description}</p>
        </motion.div>
      </div>
      
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.4 }}
        className={`absolute w-3 h-3 md:w-4 md:h-4 bg-indigo-600 rounded-full ${
          isEven ? 'left-0 md:left-1/2' : 'left-0 md:left-1/2'
        } top-8 md:top-1/2 transform md:-translate-x-1/2 md:-translate-y-1/2`}
      />
    </motion.div>
  );
};

export default TimelineEvent;