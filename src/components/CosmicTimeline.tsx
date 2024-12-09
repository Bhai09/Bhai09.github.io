import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Milestone } from 'lucide-react';

const timelineEvents = [
  { year: '1980', title: 'A Hero is Born', description: 'The beginning of an amazing journey' },
  { year: '2000', title: 'Found True Love', description: 'Meeting mom and starting our family' },
  { year: '2005', title: 'Became a Father', description: 'The most important role of his life' },
  { year: '2024', title: 'Today', description: 'Still being our everyday superhero' },
];

const CosmicTimeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 py-20">
      <div className="max-w-6xl mx-auto px-4" ref={ref}>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500" />

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center justify-center mb-20 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className="w-1/2 px-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-3xl font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-purple-200">{event.description}</p>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center"
                >
                  <Milestone className="text-white" />
                </motion.div>
                <div className="mt-2 text-white font-bold">{event.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CosmicTimeline;