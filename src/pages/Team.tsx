import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import TeamSection from '../components/team/TeamSection';
import DepartmentSection from '../components/team/DepartmentSection';
import { coreTeam } from '../data/teamMembers';
import { departmentTeams } from '../data/departmentTeams';

const TeamLayout = () => {
  const location = useLocation();
  const isCorePath = location.pathname.includes('/core');

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Our Team</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet the passionate individuals who make Literati a beacon of literary excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8">
            <Link
              to="/team/core"
              className={`px-3 py-4 text-sm font-medium border-b-2 transition-colors ${
                isCorePath
                  ? 'text-indigo-600 border-indigo-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Core Team
            </Link>
            <Link
              to="/team/department"
              className={`px-3 py-4 text-sm font-medium border-b-2 transition-colors ${
                !isCorePath
                  ? 'text-indigo-600 border-indigo-600'
                  : 'text-gray-500 border-transparent hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Department Teams
            </Link>
          </nav>
        </div>
      </div>

      {/* Team Content */}
      <Routes>
        <Route path="/" element={<TeamSection title="Core Team" members={coreTeam} />} />
        <Route path="/core" element={<TeamSection title="Core Team" members={coreTeam} />} />
        <Route
          path="/department"
          element={<DepartmentSection departments={departmentTeams} />}
        />
      </Routes>
    </div>
  );
};

export default TeamLayout;