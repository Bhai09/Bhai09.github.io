import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Kanishka Mohata',
    role: 'Senior Web Developer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    bio: 'Over 8 years of experience in UI/UX and brand design.',
    expertise: ['ReactJS', 'React Native','NextJS','Node.js','DevOps', 'Cloud Architecture','Blockchain'],
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Deepa Maurya',
    role: 'Senior Web Developer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    bio: 'Full-stack developer with expertise in React and Node.js.',
    expertise: ['ReactJS', 'React Native','NextJS','Node.js', 'Cloud Architecture', 'Flutter'],
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Jyoti Maurya',
    role: 'Mobile Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=80',
    bio: 'Specialized in Flutter and React Native development.',
    expertise: ['Flutter', 'ReactJS','React Native','Node.js', 'iOS/Android'],
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Adithya Parambil',
    role: 'Technical Lead',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80',
    bio: 'Architecture specialist with focus on scalable solutions.',
    expertise: ['System Design', 'DevOps', 'Team Leadership'],
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Advait Dongre',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    bio: 'Over 8 years of experience in UI/UX and brand design.',
    expertise: ['Machine Learning', 'Brand Strategy', 'Motion Design'],
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Parnita Bharti',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80',
    bio: 'Over 8 years of experience in UI/UX and brand design.',
    expertise: ['UI/UX Design', 'Brand Strategy', 'Motion Design'],
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
];

export function Team() {
  return (
    <section className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience and passion for creating exceptional digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative perspective"
            >
              <div className="relative transform-style-3d transition-transform duration-500 group-hover:rotate-y-180">
                {/* Front of card */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-purple-400">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    {member.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm rotate-y-180 backface-hidden">
                  <div className="h-full flex flex-col justify-center items-center">
                    <h4 className="text-xl font-bold text-white mb-4">Connect with {member.name}</h4>
                    <div className="flex gap-6">
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Twitter className="w-6 h-6" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                        href={member.social.github}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}