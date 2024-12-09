import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const memories = [
  {
    id: 1,
    video: "APPA2.mp4", // The video file to use
    title: "Glimpses I",
    description: "Teaching me to walk, holding my hand every step of the way"
  },
  {
    id: 2,
    video: "appa.mp4", // The video file to use
    title: "Glimpses II",
    description: "Exploring the world, creating unforgettable memories"
  },
 
];

const MemoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <div className="relative h-screen bg-gradient-to-b from-red-900 to-red-950 flex items-center justify-center">
      <div className="max-w-4xl w-full px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl"
          >
            {/* Video with HTML5 controls */}
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <video
                src={memories[currentIndex].video}
                autoPlay
                muted={false} // Ensure audio is on
                loop
                controls // Enable the default HTML5 video controls
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">
                {memories[currentIndex].title}
              </h3>
              <p className="text-xl text-red-200">
                {memories[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute inset-x-0 top-1/2 flex justify-between transform -translate-y-1/2">
          <button
            onClick={handlePrevious}
            className="bg-red-500 p-2 rounded-full text-white hover:bg-red-600 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="bg-red-500 p-2 rounded-full text-white hover:bg-red-600 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemoryCarousel;
