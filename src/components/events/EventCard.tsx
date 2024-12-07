import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
  featured?: boolean;
  onRegister?: (eventId: string) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, featured = false, onRegister }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${
        featured ? 'md:flex md:h-96' : ''
      }`}
    >
      <div className={`relative ${featured ? 'md:w-1/2' : ''}`}>
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 md:h-full object-cover"
        />
        {event.isUpcoming && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
            Upcoming
          </div>
        )}
      </div>
      <div className={`p-6 ${featured ? 'md:w-1/2 md:flex md:flex-col md:justify-between' : ''}`}>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 line-clamp-2">{event.title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm">{event.date}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
              <span className="text-sm">Main Auditorium</span>
            </div>
          </div>
          <p className="text-gray-600 mb-6 line-clamp-3">{event.description}</p>
        </div>
        {event.isUpcoming && onRegister && (
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onRegister(event.id)}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors text-sm sm:text-base"
          >
            Register Now
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default EventCard;