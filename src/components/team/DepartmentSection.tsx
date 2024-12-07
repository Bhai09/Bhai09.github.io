import React from 'react';
import { motion } from 'framer-motion';
import { DepartmentTeam } from '../../types';
import DepartmentTeamCard from './DepartmentTeamCard';

interface DepartmentSectionProps {
  departments: DepartmentTeam[];
}

const DepartmentSection: React.FC<DepartmentSectionProps> = ({ departments }) => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-16">
          {departments.map((department, index) => (
            <motion.div
              key={department.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <DepartmentTeamCard department={department} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentSection;