import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone, Palette, Zap } from 'lucide-react';

const technologies = [
  {
    category: 'Frontend Development',
    icon: Globe,
    items: [
      {
        name: 'React',
        description: 'Building interactive UIs with the most popular frontend library',
        level: 90
      },
      {
        name: 'Next.js',
        description: 'Server-side rendering and static site generation for React',
        level: 85
      },
      {
        name: 'TypeScript',
        description: 'Type-safe JavaScript for scalable applications',
        level: 88
      }
    ]
  },
  {
    category: 'Mobile Development',
    icon: Smartphone,
    items: [
      {
        name: 'React Native',
        description: 'Cross-platform mobile apps with React',
        level: 85
      },
      {
        name: 'Flutter',
        description: 'Beautiful native apps in record time',
        level: 82
      }
    ]
  },
  {
    category: 'Design Tools',
    icon: Palette,
    items: [
      {
        name: 'Figma',
        description: 'Collaborative interface design',
        level: 90
      },
      {
        name: 'Adobe XD',
        description: 'Prototyping and design systems',
        level: 85
      }
    ]
  },
  {
    category: 'Backend & CMS',
    icon: Code2,
    items: [
      {
        name: 'Node.js',
        description: 'Scalable server-side applications',
        level: 88
      },
      {
        name: 'WordPress',
        description: 'Content management and custom themes',
        level: 85
      },
      {
        name: 'Shopify',
        description: 'E-commerce solutions and custom development',
        level: 86
      }
    ]
  }
];

export function Technologies() {
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
          <h2 className="text-4xl font-bold text-white mb-6">Our Tech Stack</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We use cutting-edge technologies to deliver exceptional digital solutions that drive results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologies.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <category.icon className="w-8 h-8 text-purple-500" />
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="space-y-6">
                {category.items.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (categoryIndex + techIndex) * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-white font-semibold">{tech.name}</h4>
                      <span className="text-purple-400">{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex + techIndex) * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                    </div>
                    <p className="text-gray-400 text-sm mt-2">{tech.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 rounded-full border border-purple-500/20">
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400">Always learning and adopting new technologies</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}