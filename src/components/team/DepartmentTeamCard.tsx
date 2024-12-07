import React from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { DepartmentTeam } from '../../types';
import MemberCard from './MemberCard';

interface DepartmentTeamCardProps {
  department: DepartmentTeam;
}

const DepartmentTeamCard: React.FC<DepartmentTeamCardProps> = ({ department }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Users className="w-6 h-6 text-indigo-600 mr-3" />
            <h3 className="text-2xl font-bold text-gray-900">{department.name}</h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Department Head */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Team Head</h4>
          <div className="grid grid-cols-1">
            <MemberCard member={department.head} isHead={true} />
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h4 className="text-lg font-semibold text-gray-700 mb-4">Team Members</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {department.members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentTeamCard;