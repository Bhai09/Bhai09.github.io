import React from 'react';
import { motion } from 'framer-motion';
import FloatingQuotes from '../shared/FloatingQuotes';
import BookSpine from '../shared/BookSpine';
import ResponsiveContainer from '../shared/ResponsiveContainer';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-12 sm:py-16 md:py-20 overflow-hidden min-h-[60vh] flex items-center">
      <FloatingQuotes />
      <ResponsiveContainer className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 font-literary">
            About Literati
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-prose px-4">
            For 25 years, Literati has been at the forefront of nurturing literary talent
            and creating spaces for creative expression. Our journey is a testament to the
            power of words and the community they build.
          </p>
        </motion.div>
      </ResponsiveContainer>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 flex space-x-1 sm:space-x-2 p-2 sm:p-4 overflow-x-auto">
        <BookSpine 
          title="Classics" 
          color="bg-purple-800" 
          height="h-20 sm:h-24 md:h-32" 
        />
        <BookSpine 
          title="Poetry" 
          color="bg-indigo-800" 
          height="h-16 sm:h-20 md:h-28" 
        />
        <BookSpine 
          title="Drama" 
          color="bg-violet-800" 
          height="h-24 sm:h-28 md:h-36" 
        />
      </div>
    </section>
  );
};

export default HeroSection;