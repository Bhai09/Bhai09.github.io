import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import TimelineEvent from './TimelineEvent';
import ResponsiveContainer from '../shared/ResponsiveContainer';
import SectionHeading from '../shared/SectionHeading';

const timelineEvents = [
  {
    year: '1999',
    title: 'Foundation',
    description: 'Literati was established with a vision to promote literary arts.'
  },
  {
    year: '2004',
    title: 'First Literary Festival',
    description: 'Successfully organized our first major literary festival.'
  },
  {
    year: '2009',
    title: 'National Recognition',
    description: 'Received national award for promoting literature among youth.'
  },
  {
    year: '2014',
    title: 'International Collaboration',
    description: 'Started international literary exchange programs.'
  },
  {
    year: '2019',
    title: '20th Anniversary',
    description: 'Celebrated two decades of literary excellence.'
  },
  {
    year: '2024',
    title: 'Silver Jubilee',
    description: 'Celebrating 25 years of nurturing literary talent.'
  }
];

const Timeline = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <ResponsiveContainer>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center mb-12"
        >
          <Clock className="w-6 h-6 md:w-8 md:h-8 mr-3 text-indigo-600" />
          <SectionHeading 
            title="Our Journey"
            subtitle="A timeline of our milestones and achievements over the past 25 years"
          />
        </motion.div>
        
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              {...event}
              index={index}
            />
          ))}
        </div>
      </ResponsiveContainer>
    </section>
  );
};

export default Timeline;