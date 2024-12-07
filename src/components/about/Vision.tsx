import React from 'react';
import { motion } from 'framer-motion';
import { Book, Users, Globe } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      icon: <Book className="w-8 h-8" />,
      title: 'Literary Excellence',
      description: 'Fostering creativity and promoting literary arts through various initiatives.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community Building',
      description: 'Creating a vibrant community of writers, readers, and literary enthusiasts.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Connecting literary minds across borders through cultural exchange.'
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empowering voices through literature and creating a platform for creative expression.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="inline-block p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;