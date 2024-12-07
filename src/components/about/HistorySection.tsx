import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import InkSplash from '../shared/InkSplash';

const HistorySection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <InkSplash className="top-0 right-0 opacity-10" />
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="prose prose-lg mx-auto relative z-10"
        >
          <div className="flex items-center justify-center mb-8">
            <BookOpen className="w-8 h-8 mr-3 text-amber-800" />
            <h2 className="text-4xl font-bold text-amber-900 m-0">Our History</h2>
          </div>
          <div className="font-prose space-y-6 text-gray-700">
            <p>
              Founded in 1999, Literati began as a small group of literature enthusiasts
              gathering to share their love for words. What started as informal meetings
              in a university classroom has grown into one of the most prestigious literary
              clubs in the region.
            </p>
            <p>
              Over the years, we have organized numerous literary festivals, workshops,
              and competitions that have launched the careers of many successful writers
              and poets. Our commitment to fostering creativity and providing a platform
              for emerging voices has remained unwavering.
            </p>
            <p>
              Today, as we celebrate our 25th anniversary, Literati stands as a beacon
              of literary excellence, continuing to inspire and nurture the next generation
              of literary talents.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection;