import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Event } from '../../types';
import PageTurn from '../shared/PageTurn';

interface FeaturedEventProps {
  event: Event;
  onRegister: (eventId: string) => void;
}

const FeaturedEvent: React.FC<FeaturedEventProps> = ({ event, onRegister }) => {
  return (
    <PageTurn>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-literary text-amber-900">
          Featured Event
        </h2>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white rounded-lg shadow-xl overflow-hidden md:flex paper-texture"
        >
          <div className="md:w-1/2">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4 font-literary">{event.title}</h3>
              <div className="space-y-3 mb-6 font-prose">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>6:00 PM onwards</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Main Auditorium</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6 font-prose">{event.description}</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onRegister(event.id)}
              className="w-full bg-amber-600 text-white py-3 px-6 rounded-md hover:bg-amber-700 transition-colors font-literary"
            >
              Register Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </PageTurn>
  );
};

export default FeaturedEvent;