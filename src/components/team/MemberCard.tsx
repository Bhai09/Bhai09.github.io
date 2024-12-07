import React from 'react';
import { motion } from 'framer-motion';
import { TeamMember } from '../../types';

interface MemberCardProps {
  member: TeamMember;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-sm opacity-90">{member.position}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MemberCard;