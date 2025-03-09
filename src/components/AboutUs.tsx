import { motion } from 'framer-motion';
import { Award, Users, CheckCircle, Trophy } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Happy Clients' },
  { icon: Trophy, value: '250+', label: 'Projects Completed' },
  { icon: Award, value: '8+', label: 'Years Experience' },
  { icon: CheckCircle, value: '98%', label: 'Client Satisfaction' },
];

export function AboutUs() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Crafting Digital Excellence with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              {" "}Passion & Precision
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            At NicheCreators, we blend creativity with technical expertise to deliver exceptional digital solutions. 
            Our commitment to innovation and attention to detail has made us a trusted partner for businesses worldwide.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 rounded-xl p-6 text-center backdrop-blur-sm border border-gray-700"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}