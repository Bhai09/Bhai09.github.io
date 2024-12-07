import React from 'react';
import { motion } from 'framer-motion';
import CollaborationHero from '../components/collaborations/CollaborationHero';
import CollaborationCard from '../components/collaborations/CollaborationCard';
import { collaborations } from '../data/collaborations';
import PageTurn from '../components/shared/PageTurn';
import InkSplash from '../components/shared/InkSplash';

const Collaborations = () => {
  const recentCollaboration = collaborations[0];
  const pastCollaborations = collaborations.slice(1);

  return (
    <div className="font-literary">
      <CollaborationHero />

      {/* Recent Collaboration */}
      <section className="py-16 bg-emerald-50 relative overflow-hidden">
        <InkSplash className="top-0 right-0 opacity-10" />
        <PageTurn>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900">
              Recent Collaboration
            </h2>
            <CollaborationCard
              collaboration={recentCollaboration}
              featured={true}
            />
          </div>
        </PageTurn>
      </section>

      {/* Past Collaborations Grid */}
      <section className="py-16 paper-texture">
        <PageTurn>
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-emerald-900">
              Past Collaborations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastCollaborations.map((collaboration) => (
                <CollaborationCard
                  key={collaboration.id}
                  collaboration={collaboration}
                />
              ))}
            </div>
          </div>
        </PageTurn>
      </section>

      {/* Call to Collaborate */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-emerald-900">
              Interested in Collaborating?
            </h2>
            <p className="text-gray-600 mb-8 font-prose">
              We're always looking for new partnerships to create unique literary experiences.
              If you represent a literary organization and would like to collaborate,
              we'd love to hear from you.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:literaticlub@vcet.edu.in"
              className="inline-block bg-emerald-600 text-white py-3 px-8 rounded-md hover:bg-emerald-700 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Collaborations;