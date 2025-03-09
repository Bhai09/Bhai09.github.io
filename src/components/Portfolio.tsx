import { motion } from 'framer-motion';
import { ExternalLink, FileText, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: 'E-commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    description: 'A full-featured e-commerce platform built with Next.js and Shopify.',
    technologies: ['Next.js', 'Shopify', 'TailwindCSS'],
    challenge: 'Creating a seamless shopping experience with real-time inventory management.',
    solution: 'Implemented custom Shopify integrations and optimized performance for large product catalogs.',
    results: ['50% faster page loads', '30% increase in conversions', 'Improved mobile UX'],
    link: '#',
    caseStudy: '#'
  },
  {
    title: 'Health & Fitness App',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800&q=80',
    description: 'Cross-platform mobile app for fitness tracking and meal planning.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    challenge: 'Handling real-time data sync across devices while maintaining offline functionality.',
    solution: 'Implemented robust state management and offline-first architecture.',
    results: ['100k+ downloads', '4.8 star rating', '92% user retention'],
    link: '#',
    caseStudy: '#'
  },
  {
    title: 'Corporate Branding',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
    description: 'Complete brand identity redesign for a tech startup.',
    technologies: ['Adobe Creative Suite', 'Figma', 'Motion Design'],
    challenge: 'Creating a modern identity while preserving brand recognition.',
    solution: 'Developed a flexible design system with comprehensive guidelines.',
    results: ['40% brand recognition increase', 'Consistent cross-platform presence', 'Award-winning design'],
    link: '#',
    caseStudy: '#'
  },
  {
    title: 'IoT Dashboard',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80',
    description: 'Real-time monitoring dashboard for IoT devices.',
    technologies: ['React', 'WebSocket', 'D3.js'],
    challenge: 'Visualizing complex data streams in real-time.',
    solution: 'Custom visualization components with optimized rendering.',
    results: ['Real-time updates < 100ms', 'Handles 1000+ concurrent devices', '99.9% uptime'],
    link: '#',
    caseStudy: '#'
  }
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

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
          <h2 className="text-4xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group cursor-pointer rounded-xl overflow-hidden ${
                selectedProject === index ? 'ring-2 ring-purple-500' : ''
              }`}
              onClick={() => setSelectedProject(selectedProject === index ? null : index)}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-400 text-sm mb-2">{project.category}</p>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                    <ArrowRight className={`w-5 h-5 text-white transition-transform ${
                      selectedProject === index ? 'rotate-90' : ''
                    }`} />
                  </div>
                </div>
              </div>

              {selectedProject === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-800/50 backdrop-blur-sm p-6"
                >
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Challenge & Solution:</h4>
                    <p className="text-gray-300 text-sm mb-2">
                      <span className="text-purple-400">Challenge:</span> {project.challenge}
                    </p>
                    <p className="text-gray-300 text-sm">
                      <span className="text-purple-400">Solution:</span> {project.solution}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Results:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      {project.results.map((result) => (
                        <li key={result} className="flex items-center">
                          <ArrowRight className="w-4 h-4 text-purple-400 mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Project
                    </a>
                    <a
                      href={project.caseStudy}
                      className="flex items-center gap-2 px-4 py-2 border border-purple-500 text-white rounded-lg hover:bg-purple-500/10 transition-colors"
                    >
                      <FileText className="w-4 h-4" />
                      Case Study
                    </a>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}