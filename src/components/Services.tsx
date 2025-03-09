import { motion } from 'framer-motion';
import { Palette, Globe, Smartphone, GraduationCap, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Palette,
    title: 'Graphic Designing',
    description: 'Professional design solutions including banners, posters, and logos that capture your brand essence.',
    services: ['Banner Design', 'Poster Design', 'Logo Design'],
    projects: [
      {
        title: 'Modern Brand Identity',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80',
        link: '#',
        docs: '#'
      },
      {
        title: 'Corporate Branding',
        image: 'https://images.unsplash.com/photo-1634937701827-cc43a549b667?auto=format&fit=crop&w=800&q=80',
        link: '#',
        docs: '#'
      }
    ]
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Custom web solutions using cutting-edge technologies like React, Next.js, and WordPress.',
    services: ['ReactJS', 'WordPress', 'NextJS', 'Shopify'],
    projects: [
      {
        title: 'E-commerce Platform',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
        link: '#',
        docs: '#'
      },
      {
        title: 'Corporate Website',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
        link: '#',
        docs: '#'
      }
    ]
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'Native and cross-platform mobile applications built with Flutter and React Native.',
    services: ['Flutter', 'React Native'],
    projects: [
      {
        title: 'Fitness Tracking App',
        image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80',
        link: '#',
        docs: '#'
      },
      {
        title: 'Food Delivery App',
        image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80',
        link: '#',
        docs: '#'
      }
    ]
  },
  {
    icon: GraduationCap,
    title: 'Student Projects',
    description: 'Comprehensive assistance for college and university projects with documentation support.',
    services: ['Project Development', 'Documentation', 'Technical Guidance'],
    projects: [
      {
        title: 'IoT Dashboard',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
        link: '#',
        docs: '#'
      },
      {
        title: 'ML Project',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        link: '#',
        docs: '#'
      }
    ]
  }
];

export function Services() {
  const [selectedService, setSelectedService] = useState(null);

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
          <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Explore our comprehensive range of digital solutions tailored to meet your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group cursor-pointer rounded-xl p-6 transition-all duration-300 ${
                selectedService === index
                  ? 'bg-purple-600 border-purple-500'
                  : 'bg-gray-800/50 hover:bg-gray-800 border-gray-700'
              } border backdrop-blur-sm`}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              <div className="flex items-center justify-between mb-4">
                <service.icon className={`w-8 h-8 ${
                  selectedService === index ? 'text-white' : 'text-purple-500'
                }`} />
                <ArrowRight className={`w-5 h-5 transition-transform ${
                  selectedService === index ? 'rotate-90 text-white' : 'text-purple-500'
                }`} />
              </div>
              <h3 className={`text-xl font-bold mb-2 ${
                selectedService === index ? 'text-white' : 'text-white'
              }`}>{service.title}</h3>
              <p className={`text-sm mb-4 ${
                selectedService === index ? 'text-white/90' : 'text-gray-400'
              }`}>{service.description}</p>
              
              {selectedService === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-4"
                >
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Services Offered:</h4>
                    <ul className="text-white/90 text-sm space-y-1">
                      {service.services.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-white font-semibold">Featured Projects:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.projects.map((project) => (
                        <div key={project.title} className="space-y-2">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <p className="text-white/90 text-sm">{project.title}</p>
                          <div className="flex gap-2 text-sm">
                            <a
                              href={project.link}
                              className="text-white hover:text-purple-200 transition-colors"
                            >
                              View Live
                            </a>
                            <span className="text-white/50">|</span>
                            <a
                              href={project.docs}
                              className="text-white hover:text-purple-200 transition-colors"
                            >
                              Docs
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
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