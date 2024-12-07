import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ExternalLink } from 'lucide-react';
import { Collaboration } from '../../types';

interface CollaborationCardProps {
  collaboration: Collaboration;
  featured?: boolean;
}

const CollaborationCard: React.FC<CollaborationCardProps> = ({ collaboration, featured = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${
        featured ? 'md:flex' : ''
      }`}
    >
      <div className={`relative ${featured ? 'md:w-1/2' : ''}`}>
        <img
          src={collaboration.image}
          alt={collaboration.title}
          className="w-full h-48 sm:h-64 object-cover"
        />
      </div>
      <div className={`p-6 ${featured ? 'md:w-1/2' : ''}`}>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 line-clamp-2">{collaboration.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 sm:line-clamp-4">{collaboration.description}</p>
        {collaboration.instagramLink && (
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={collaboration.instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition-colors text-sm sm:text-base"
          >
            <Instagram className="w-5 h-5 mr-2" />
            <span>View on Instagram</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};

export default CollaborationCard;