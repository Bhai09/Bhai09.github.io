import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import FloatingQuotes from '../shared/FloatingQuotes';
import BookSpine from '../shared/BookSpine';

const EventHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-amber-900 to-rose-900 text-white py-20 overflow-hidden">
      <FloatingQuotes />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 font-literary">Literary Events</h1>
          <p className="text-xl max-w-3xl mx-auto font-prose">
            Join us for inspiring literary gatherings that celebrate the power of words
            and storytelling. From poetry slams to writing workshops, there's something
            for every literary enthusiast.
          </p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 flex space-x-2 p-4">
        <BookSpine title="Events" color="bg-amber-800" height="h-32" />
        <BookSpine title="2024" color="bg-rose-800" height="h-28" />
        <BookSpine title="Calendar" color="bg-red-800" height="h-36" />
      </div>
    </section>
  );
};

export default EventHero;