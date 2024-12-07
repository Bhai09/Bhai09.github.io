import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import FloatingQuotes from '../shared/FloatingQuotes';
import BookSpine from '../shared/BookSpine';

const CollaborationHero = () => {
  return (
    <section className="relative bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-20 overflow-hidden">
      <FloatingQuotes />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 font-literary">Our Collaborations</h1>
          <p className="text-xl max-w-3xl mx-auto font-prose">
            Discover our partnerships with literary organizations worldwide, creating
            meaningful experiences and fostering creative connections.
          </p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 flex space-x-2 p-4">
        <BookSpine title="Partners" color="bg-emerald-800" height="h-32" />
        <BookSpine title="Global" color="bg-teal-800" height="h-28" />
        <BookSpine title="Network" color="bg-green-800" height="h-36" />
      </div>
    </section>
  );
};

export default CollaborationHero;